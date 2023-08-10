import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  registerUser(value: Partial<{ name: string | null; userName: string | null; password: string | null; email: string | null; }>) {
    throw new Error('Method not implemented.');
  }

  constructor(private http : HttpClient,private navigate : Router) { }
  items!: any;

  url ='http://localhost:8082/authenticate/login';


  sendlogin(data : any){
   this.http.post<any>("http://localhost:8082/authenticate/login",data).subscribe((result)=>{
     console.warn(result);
     localStorage.setItem("token",result.token);
     localStorage.setItem("user",result.user);
     localStorage.setItem("userId",result.user.id);
     this.navigate.navigateByUrl("/home"); 
   }, err => console.log(err));
 }
   homeRedirect(){
    console.log("entered in headers");
    let headers = new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem('token')}`)
    console.log(headers);
    return this.http.get<any>("http://localhost:8082/blog/user/"+localStorage.getItem("userId"),{headers});
   }

   registerlogin(data : any){
    this.http.post<any>("http://localhost:8082/authenticate/signup",data).subscribe((result)=>{
      console.warn(result);
      this.navigate.navigate([''])
     });
    }

    sendData(data : any){
      let headers = new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem('token')}`)
    //   formData.append("blog", data);
    //   formData.append("Description","Bearer "+ localStorage.getItem('token'));
    //  // formData.append("CreateBy",""+ localStorage.getItem('LoginUserId'));
    //let idlocalStorage.getItem("userId")
     // const body = JSON.stringify({username: data});
     this.http.post("http://localhost:8082/blog/"+localStorage.getItem("userId"),data,{headers}).subscribe(
      (data)=>{
      console.log('Data Sent Successfully');
      this.navigate.navigateByUrl("/home");
    },
    (error)=>{
      console.log('Some error Occurd');
    }
    );;
    
    }
  getData(){
    return this.http.get(this.url);
  }
  getDataById(id:any){
    console.log("entered in headers");
    let headers = new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem('token')}`)
    console.log(headers);
    return this.http.get<any>("http://localhost:8082/blog/"+id,{headers});

  }

  sendComment(data : any,id:any){
    let headers = new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem('token')}`)
    this.http.post("http://localhost:8082/comments/"+id,data,{headers}).subscribe(
      (data)=>{
      console.log('Data Sent Successfully');
      // this.items = data
      // console.log(this.items);
      this.navigate.navigateByUrl("home/blogs/"+id);
    },
    (error)=>{
      console.log('Some error Occurd');
    }
    );;
  }
}
