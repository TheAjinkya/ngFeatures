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
import { NgxSpinnerModule } from 'ngx-spinner';
import { MaterialModule } from '../material/material.module';
import { GmailLoginComponent } from './gmail-login/gmail-login.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StepperComponent } from '../material/stepper/stepper.component';


@NgModule({
  declarations: [
    ConfirmationComponent,
    LoginComponent,
    LogoutComponent,
    NavbarComponent,
    CarouselComponent,
    RegistrationComponent,
    GithubUsersComponent,
    GmailLoginComponent,
    ConfirmationDialogComponent,
    FooterComponent,
    StepperComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgxSplideModule,
    NgxSpinnerModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ConfirmationComponent,
    LoginComponent,
    LogoutComponent,
    NavbarComponent,
    CarouselComponent,
    RegistrationComponent,
    GithubUsersComponent,
    NgxSpinnerModule,
    GmailLoginComponent,
    ConfirmationDialogComponent,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
