import { Component } from '@angular/core';
import { ServicesService } from '../Service/services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {

  constructor(private service : ServicesService,private navigate : Router, private route :ActivatedRoute){

  }
   blog!:any;
   editBlog!:any;
   id:any = this.route.snapshot.paramMap.get('id');
  
//   OnSumbit(){
//     console.log('value' + 
//     this.blog.title);
//     this.service.updateData(this.id,this.blog.value).subscribe((data)=>{
//       console.log(data);
//       console.log("blog edited Successfully");
//     },(err)=>{
//       console.log("blog edited error occurd");
//     }
//     );
//     this.navigate.navigateByUrl('/');
// }
// ngOnInit():void{
//   this.service.getDataById(this.id).subscribe((data)=>{
//     this.blog=data;
//     console.log("check" + this.blog.title);
//     this.editBlog = new FormGroup({
//       id: new FormControl(this.id,Validators.required),
//       title: new FormControl(this.blog.title,Validators.required),
//       author: new FormControl(this.blog.author,Validators.required),
//       content: new FormControl(this.blog.content,Validators.required),
//     });

//     },
//     (error)=>{
//       console.log("some error occurd")
//       return null;
//     }
//     ); 
// }
};
