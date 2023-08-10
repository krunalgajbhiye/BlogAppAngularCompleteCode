import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Service/services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private service : ServicesService,private navigate : Router){}

  // loginForm(data:any){
  //   console.log(this.loginForm.value);
  // }
  registerForm = new FormGroup({
    "name" : new FormControl('',Validators.required),
    "userName": new FormControl('',Validators.required),
    "password" : new FormControl('',Validators.required),
    "email": new FormControl('',Validators.required),
    
  });

  OnSumbit(){
    console.log(this.registerForm.value);
    this.service.registerlogin(this.registerForm.value);
    ;
  }

}
