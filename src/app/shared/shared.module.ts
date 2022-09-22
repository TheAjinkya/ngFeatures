import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    ConfirmationComponent,
    LoginComponent,
    LogoutComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    ConfirmationComponent,
    LoginComponent,
    LogoutComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
