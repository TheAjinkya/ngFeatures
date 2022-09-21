import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardDirective } from './directives/dashboard.directive';



@NgModule({
  declarations: [
    DashboardDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardDirective
  ]
})
export class CoreModule { }
