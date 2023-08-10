import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Service/services.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent{
  constructor(private service : ServicesService,private navigate : Router){}
  items!: any;
  addBlog = new FormGroup({

    "id" : new FormControl(),
    "title" : new FormControl('',Validators.required),
    "comment": new FormControl('',Validators.required),
  });
    OnSumbit(){
    console.log(this.addBlog.value);
   // this.service.sendData(this.addBlog.value)

    this.service.sendData(this.addBlog.value);
  }

}
