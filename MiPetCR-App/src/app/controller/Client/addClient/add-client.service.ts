import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable, catchError } from 'rxjs';
import { AddClientI } from 'src/app/model/Client/add-client';
import { ResponseTemplateI } from 'src/app/model/responseTemplate';
import { BD_URL } from 'src/app/setValues';

@Injectable({
  providedIn: 'root'
})
export class AddClientService {

  BD_URL = BD_URL;

  constructor(private http: HttpClient) { }

   /**
   * @description Error handler for the addClient method
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
   * @description Sends a POST request to the server to add a client using the link
   * @link BD_ULR + add_client
   */
    addClient(form : AddClientI): Observable<ResponseTemplateI>{
      let direccion = this.BD_URL + 'create_client';
      return this.http.post<ResponseTemplateI>(direccion, form).pipe(
        catchError(this.handleError)
        );
    }

}
