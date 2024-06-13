import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { FooterComponent } from './view/footer/footer.component';
import { LoginClientComponent } from './view/login-client/login-client.component';
import { NavbarComponent } from './view/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreComponent } from './view/store/store.component';
import { RegisterClientComponent } from './view/register-client/register-client.component';
import { LoginVeterinarioComponent } from './view/login-veterinario/login-veterinario.component';
import { LoginAdminComponent } from './view/login-admin/login-admin.component';
import { ProductDetailComponent } from './view/product-detail/product-detail.component';
import { ClientHubComponent } from './view/client-hub/client-hub.component';
import { SidebarClienteComponent } from './view/sidebar-cliente/sidebar-cliente.component';
import { ClientStoreComponent } from './view/client-store/client-store.component';
import { VeterinarioMenuComponent } from './view/veterinario-menu/veterinario-menu.component';
import { VeterinarioRegistrarVisitaComponent } from './view/veterinario-registrar-visita/veterinario-registrar-visita.component';
import { VeterinarioCobrarComponent } from './view/veterinario-cobrar/veterinario-cobrar.component';
import { VeterinarioCrearCitaComponent } from './view/veterinario-crear-cita/veterinario-crear-cita.component';
import { ViewCartComponent } from './view/view-cart/view-cart.component';
import { VeterinarioCrearExpedienteComponent } from './view/veterinario-crear-expediente/veterinario-crear-expediente.component';
import { VeterinarioBusquedaDuenoComponent } from './view/veterinario-busqueda-dueno/veterinario-busqueda-dueno.component';
import { VeterinarioEditarExpendienteComponent } from './view/veterinario-editar-expendiente/veterinario-editar-expendiente.component';
import { VeterinarioVerHistorialCompraComponent } from './view/veterinario-ver-historial-compra/veterinario-ver-historial-compra.component';
import { VeterinarioConsultarExpedienteMedicoComponent } from './view/veterinario-consultar-expediente-medico/veterinario-consultar-expediente-medico.component';
import { EditProfileComponent } from './view/edit-profile/edit-profile.component';
import { ViewPetsComponent } from './view/view-pets/view-pets.component';
import { CheckoutComponent } from './view/checkout/checkout.component';
import { PetHistoryComponent } from './view/pet-history/pet-history.component';
import { PurchaseHistoryComponent } from './view/purchase-history/purchase-history.component';
import { ViewBranchesComponent } from './view/view-branches/view-branches.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    LoginClientComponent,
    NavbarComponent,
    StoreComponent,
    RegisterClientComponent,
    LoginVeterinarioComponent,
    LoginAdminComponent,
    ProductDetailComponent,
    ClientHubComponent,
    SidebarClienteComponent,
    ClientStoreComponent,
    VeterinarioMenuComponent,
    VeterinarioRegistrarVisitaComponent,
    VeterinarioCobrarComponent,
    VeterinarioCrearCitaComponent,
    ViewCartComponent,
    VeterinarioCrearExpedienteComponent,
    VeterinarioBusquedaDuenoComponent,
    VeterinarioEditarExpendienteComponent,
    VeterinarioVerHistorialCompraComponent,
    VeterinarioConsultarExpedienteMedicoComponent,
    EditProfileComponent,
    ViewPetsComponent,
    CheckoutComponent,
    PetHistoryComponent,
    PurchaseHistoryComponent,
    ViewBranchesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { 
        path: '', 
        component: HomeComponent 
      },
      { 
        path: 'login-client', 
        component: LoginClientComponent 
      },
      { 
        path: 'register-client', 
        component: RegisterClientComponent 
      },
      { 
        path: 'login-veterinario', 
        component: LoginVeterinarioComponent 
      },
      { 
        path: 'login-admin', 
        component: LoginAdminComponent 
      },
      {
        path: 'veterinario-menu',
        component: VeterinarioMenuComponent
      },
      {
        path: 'veterinario-registrar-visita',
        component: VeterinarioRegistrarVisitaComponent
      },
      {
        path: 'veterinario-cobrar',
        component: VeterinarioCobrarComponent
      },
      {
        path: 'veterinario-crear-cita',
        component: VeterinarioCrearCitaComponent
      },
      {
        path: 'veterinario-crear-expediente',
        component: VeterinarioCrearExpedienteComponent
      },
      {
        path: 'veterinario-busqueda-dueno',
        component: VeterinarioBusquedaDuenoComponent
      },
      {
        path: 'veterinario-editar-expediente',
        component: VeterinarioEditarExpendienteComponent
      },
      {
        path: 'veterinario-ver-historial-compra',
        component: VeterinarioVerHistorialCompraComponent
      },
      {
        path: 'veterinario-consultar-expediente-medico',
        component: VeterinarioConsultarExpedienteMedicoComponent
      },
      { 
        path: 'store', 
        component: StoreComponent 
      },
      { 
        path: 'product/:id', 
        component: ProductDetailComponent 
      },
      { 
        path: 'client-hub', 
        component: ClientHubComponent 
      },
      { 
        path: 'client-store', 
        component: ClientStoreComponent 
      },
      { 
        path: 'view-cart', 
        component: ViewCartComponent 
      },
      { 
        path: 'edit-profile', 
        component: EditProfileComponent 
      },
      { 
        path: 'view-pets', 
        component: ViewPetsComponent 
      },
      { 
        path: 'pet-history/:id', 
        component: PetHistoryComponent 
      },
      { 
        path: 'client-history', 
        component: PurchaseHistoryComponent 
      },
      { 
        path: 'view-branches', 
        component: ViewBranchesComponent 
      },
      { 
        path: 'checkout', 
        component: CheckoutComponent 
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
