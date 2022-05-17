import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {UserDetailsComponent} from './components/UserC/user-details/user-details.component';
import {UsersComponent} from "./components/UserC/users/users.component";
import {UserComponent} from "./components/UserC/user/user.component";
import {PostDetailsComponent} from './components/PostC/post-details/post-details.component';
import {CommentDetailsComponent} from './components/CommentC/comment-details/comment-details.component';
import {PostComponent} from "./components/PostC/post/post.component";
import {PostsComponent} from "./components/PostC/posts/posts.component";
import {CommentsComponent} from "./components/CommentC/comments/comments.component";
import {CommentComponent} from "./components/CommentC/comment/comment.component";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    HomeComponent,
    PostsComponent,
    PostComponent,
    PostDetailsComponent,
    CommentComponent,
    CommentsComponent,
    CommentDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home-page', pathMatch: 'full'},
      {path: 'home-page', component: HomeComponent},
      {
        path: 'users-page',
        component: UsersComponent,
        children: [
          {path: 'user-details/:id', component: UserDetailsComponent}
        ]
      },
      {
        path: 'posts-page',
        component: PostsComponent,
        children: [
          {path: 'post-details/:id', component: PostDetailsComponent}
        ]
      },
      {
        path: 'comments-page',
        component: CommentsComponent,
        children: [
          {path: 'comment-details/:id', component: CommentDetailsComponent}
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
