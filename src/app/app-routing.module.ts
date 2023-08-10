import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatagoryComponent } from './pages/catagory/catagory.component';
import { PostComponent } from './pages/post/post.component';
import { HeaderComponent } from './header/header.component';
import { PostCardComponent } from './post-card/post-card.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';


const routes: Routes = [
  
  {path: "", component :LoginComponent},
  {path: "home", component :HomeComponent},
  {path:"category", component:CatagoryComponent},
  {path:"post", component:PostComponent},
  {path:"category", component:CatagoryComponent},
  {path:"home/blogs/:id",component:PostCardComponent},
  {path:"editblog/:id",component:EditPostComponent},
  {path:"register", component:RegisterComponent},
  {path:"addcomment/blogs/:id/", component:CommentFormComponent}
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
