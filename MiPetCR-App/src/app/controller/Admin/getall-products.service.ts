import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ProductI } from 'src/app/model/Admin/get-products';
import { ResponseTemplateI, ResponseTemplateListProductsI } from 'src/app/model/responseTemplate';
import { BD_URL } from 'src/app/setValues';

@Injectable({
  providedIn: 'root'
})
export class GetallProductsService {

  BD_URL = BD_URL;

  constructor(private http: HttpClient) { }

  /**
   * @description Error handler for the getUnnaprovedProducts and approveProduct methods
   */
  private handleErrorProducts(error: HttpErrorResponse) {
    if (error.status === 0) {
      
      alert('A client-side or network error occurred.') ;
      console.error('An error occurred:', error.error);
    
    }

    else if (error.status === 400) {
      
      alert('No products to approve') ;
      console.error('Bad Request', error.error);
    
    }
     
    else {

      alert('The server returned an unsuccessful response code.') ;
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    
    }

    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  /**
   * @description Error handler for the deleteProduct method
   */
  private handleErrorManage(error: HttpErrorResponse) {
    if (error.status === 0) {
      
      alert('A client-side or network error occurred.') ;
      console.error('An error occurred:', error.error);
    
    }

    else if (error.status === 400) {
      
      alert('No products to approve') ;
      console.error('Bad Request', error.error);
    
    }
     
    else {

      alert('The server returned an unsuccessful response code.') ;
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    
    }

    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

    /**
   * @description This method requests all of the unapproved products from the API using the following link
   * @link BD_ULR + get_unapproved_products
   */
    getAllProducts(): Observable<ResponseTemplateListProductsI>{
      let direccion = this.BD_URL + 'get_all_products';
      return this.http.get<ResponseTemplateListProductsI>(direccion).pipe(
        catchError(this.handleErrorProducts)
        );
    }
}
