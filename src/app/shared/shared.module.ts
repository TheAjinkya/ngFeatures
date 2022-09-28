import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgxSplideModule } from 'ngx-splide';
import { RegistrationComponent } from './registration/registration.component';
import { GithubUsersComponent } from './components/github-users/github-users.component';


@NgModule({
  declarations: [
    ConfirmationComponent,
    LoginComponent,
    LogoutComponent,
    NavbarComponent,
    CarouselComponent,
    RegistrationComponent,
    GithubUsersComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgxSplideModule,
  ],
  exports: [
    ConfirmationComponent,
    LoginComponent,
    LogoutComponent,
    NavbarComponent,
    CarouselComponent,
    RegistrationComponent,
    GithubUsersComponent
  ]
})
export class SharedModule { }
