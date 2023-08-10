import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { CatagoryComponent } from './pages/catagory/catagory.component';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { PostComponent } from './pages/post/post.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostCardComponent } from './post-card/post-card.component';
import { RouterLinkActive } from '@angular/router';
import { EditPostComponent } from './edit-post/edit-post.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterSuccessComponent } from './auth/register-success/register-success.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    CatagoryComponent,
    CommentFormComponent,
    PostComponent,
    CommentListComponent,
    PostCardComponent,
    EditPostComponent,
    RegisterComponent,
    LoginComponent,
    RegisterSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,AppRoutingModule,ReactiveFormsModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
