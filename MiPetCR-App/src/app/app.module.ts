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
import { ViewCartComponent } from './view/view-cart/view-cart.component';


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
    ViewCartComponent,
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
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
