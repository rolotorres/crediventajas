import { Injectable } from '@angular/core';
import { User } from 'src/app/models/users.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import swal from 'sweetalert';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( public http: HttpClient ) {
   }

   login(user: User, recordar: boolean = false){

    let url = URL_SERVICIOS + '/users/login';

    return this.http.post(url, user);

   }

   newUser(user: User){

    let url = URL_SERVICIOS + '/users';

    return this.http.post(url, user).pipe(map((resp: any) => {
      swal( 'Usuario creado', user.usermail, 'success' );
      return resp.user;
    }))

   }
}
