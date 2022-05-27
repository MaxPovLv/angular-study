import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {UserResolveService, UserService} from "./services";
import {UsersComponent} from "./components/users/users.component";
import {UserComponent} from "./components/user/user.component";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    UserResolveService
  ]
})
export class UserModule {
}
