import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { ServicesService } from 'src/app/Service/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   constructor(private getBlogService : ServicesService){}

   items!: any;
  
   ngOnInit(){
    //  this.getBlogService.getData().subscribe(
    //   (data)=>{
    //   this.items = data
    //  },
    //  (error)=>{
    //   console.log('Some Error Occurd');
    //  }
    //  );

    this.getBlogService.homeRedirect().subscribe(
      (data)=>{
       this.items = data
      },
       (error)=>{
        console.log('Some Error Occurd');
     }
      );;
   }
}
