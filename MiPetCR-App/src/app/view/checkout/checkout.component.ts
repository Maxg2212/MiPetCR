import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CheckoutService } from 'src/app/controller/Client/checkoutPayment/checkout.service';
import { ProductI, PlanFormsI, PlanI } from 'src/app/model/Client/newPayment';
import { paymentTypes, paymentMethod } from 'src/app/setValues';
import { ClientModelI } from 'src/app/model/Client/client-model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

  paymentTypes = paymentTypes;

  totalPrice = 0;

  paymentMethod = paymentMethod;

  /**
   * @description This is the form we use to store the data the user inputs.
   */
  newPayment = new FormGroup({
    metodoPago: new FormControl('', Validators.required),
    provincia: new FormControl('', Validators.required),
    canton: new FormControl('', Validators.required),
    distrito: new FormControl('', Validators.required),
    domicilio: new FormControl('', Validators.required),
    metodo: new FormControl('', Validators.required)
  });

  /**
   * @description Constructor that injects the API's we are going to use.
   */
  constructor(private api: CheckoutService) { }

  ngOnInit(): void {
    const storedTotalPrice = localStorage.getItem('totalPrice');

    if (storedTotalPrice) {
      this.totalPrice = JSON.parse(storedTotalPrice);
      console.log(this.totalPrice);
    }
  }

  /**
   * @description This method is used to add a new plan
   */
  addPlan(form: PlanFormsI) {
    if (this.newPayment.invalid) {
      alert('Por favor complete todos los campos.');
      return;
    }
  
    // Obtener el objeto ClientModelI del sessionStorage
    const clientString = sessionStorage.getItem('client');
    if (!clientString) {
      alert('No se pudo obtener la información del cliente.');
      return;
    }
  
    const client: ClientModelI = JSON.parse(clientString);
  
    // Verificar que client tenga los campos necesarios y no sean nulos
    if (!client || !client.cedula || !client.telefono) {
      alert('La información del cliente está incompleta.');
      return;
    }
  
    // Obtener el correo del sessionStorage y quitar las comillas adicionales
    const correoUsuario: string = JSON.parse(sessionStorage.getItem('correo') || '""');
  
    // Obtener la lista de códigos de productos del localStorage
    const codeList: string[] = JSON.parse(localStorage.getItem('codelist') || '[]');
  
    // Crear la lista de objetos ProductI usando los códigos obtenidos
    const productos: ProductI[] = codeList.map(codigo => ({ codProducto: codigo }));
  
    // Crear el objeto PlanI combinando los datos del form y del client
    const plan: PlanI = {
      userCed: client.cedula, // Asegúrate de que userCed sea un número
      metodoPago: form.metodoPago,
      correoUsuario: correoUsuario,
      telefonoUsuario: client.telefono, // Asegúrate de que telefonoUsuario sea una cadena
      provincia: form.provincia,
      canton: form.canton,
      distrito: form.distrito,
      domicilio: form.domicilio,
      productos: productos.map(producto => ({ codProducto: producto.codProducto })) // Asegúrate de que codProducto sea una cadena
    };

    if (form.metodo == 'A domicilio') {
      this.totalPrice += 8.52;
    }
  
    console.log('Plan a enviar:', plan); // Verificar el contenido del plan antes de enviarlo
  
    this.api.createPayment(plan).subscribe(
      data => {
        localStorage.removeItem('productPrices');
        localStorage.removeItem('totalPrice');
        localStorage.removeItem('codelist');
        alert('Su pago se ha hecho exitosamente');
      },
      error => {
        console.error('Error al hacer el pago:', error);
        alert('Hubo un error al procesar su pago. Por favor, inténtelo de nuevo más tarde.');
      }
    );
  }
  
  
}
