import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Service/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private service : ServicesService,private navigate : Router){}

  // loginForm(data:any){
  //   console.log(this.loginForm.value);
  // }
  loginForm = new FormGroup({
    "userName" : new FormControl('',Validators.required),
    "password": new FormControl('',Validators.required),
  });

  OnSumbit(){
    console.log(this.loginForm.value);
    this.service.sendlogin(this.loginForm.value);
    
    ;
  }

}
