import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable, catchError } from 'rxjs';
import { UpdateClienteI } from 'src/app/model/Client/get-client';
import { ResponseTemplateI } from 'src/app/model/responseTemplate';
import { BD_URL } from 'src/app/setValues';

@Injectable({
  providedIn: 'root'
})
export class EditClientService {

  BD_URL = BD_URL;

  constructor(private http: HttpClient) { }

  /**
   * @description Error handler for the loginClient method
   */
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      
      alert('A client-side or network error occurred.') ;
      console.error('An error occurred:', error.error);
    
    }

    else if (error.status === 400) {
      
      alert('Sorry, the email or password is incorrect.') ;
      console.error('Bad Request', error.error);
    
    }
     
    else {

      alert('The server returned an unsuccessful response code.') ;
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

    /**
   * @description Sends a POST request to the server to login a client using the link
   * @link BD_ULR + auth_client
   */
    updateClient(form : UpdateClienteI): Observable<ResponseTemplateI>{
      let direccion = this.BD_URL + 'update_personal_info';
      
      console.log(form);
      return this.http.put<ResponseTemplateI>(direccion, form).pipe(
        catchError(this.handleError)
        );
    }


}
