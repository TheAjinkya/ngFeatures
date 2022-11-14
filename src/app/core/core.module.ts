import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { DashboardDirective } from './directives/dashboard.directive';
import { CustomDateDirective } from './directives/custom-date.directive';
import { PoundsToRupeePipe } from './directives/pounds-to-rupee.pipe';


@NgModule({
  declarations: [
    DashboardDirective,
    CustomDateDirective,
    PoundsToRupeePipe
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    CustomDateDirective
  ]
})
export class CoreModule { }
