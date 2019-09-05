import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import swal from 'sweetalert';
import { UserService } from '../services/services.index';
import { User } from '../models/users.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor( public _userService: UserService, public router: Router ) { }

  sonIguales(campo1: string, campo2: string){
    return (group: FormGroup) => {

      let pass1 = group.controls[campo1].value
      let pass2 = group.controls[campo2].value

      if(pass1 === pass2){
        return null;
      }

      return {
        sonIguales: true
      }
    }
  }

  ngOnInit() {
    this.forma = new FormGroup({
      username: new FormControl(null, Validators.required),
      userlastname: new FormControl(null, Validators.required),
      usermail: new FormControl(null, [Validators.required, Validators.email]),
      pasword: new FormControl(null, Validators.required),
      pasword2: new FormControl(null, Validators.required),
      condiciones: new FormControl(false)
    }, {validators: this.sonIguales('pasword', 'pasword2')})
    
    this.forma.setValue({
      username: 'test',
      userlastname: 'ts',
      usermail: 'test@test.com',
      pasword: '123456',
      pasword2: '123456',
      condiciones: true
    })
  }



  newUser(){

    if(this.forma.invalid){
      return
    }

    if(!this.forma.value.condiciones){
      swal('Importante', 'Debe aceptar nuestras bases y condiciones', 'warning');
      return;
    }
    
    let user = new User(
      this.forma.value.username,
      this.forma.value.userlastname,
      this.forma.value.usermail,
      this.forma.value.pasword,
      );

      console.log(user);
      console.log(this.forma.value);

      this._userService.newUser(user).subscribe(resp => this.router.navigate(['/login']))
  }

}
