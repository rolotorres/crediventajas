import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import swal from 'sweetalert';
import { UserService } from '../services/services.index';
import { User } from '../models/users.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( public router: Router, public _userService: UserService) { }

  ngOnInit() {
  }

  ingresar(forma: NgForm){

    if(forma.invalid){
      return;
    }

    let user = new User(null, null, forma.value.usermail, forma.value.pasword, null,);

    console.log(user);

    this._userService.login(user, forma.value.recuerdame).subscribe((resp) => this.router.navigate(['/dashboard']))

  }

}
