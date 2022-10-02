import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { MaterialModule } from '../material/material.module';
import { TimelineComponent } from './timeline/timeline.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AirlineComponent } from './airline/airline.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    FeatureComponent,
    TimelineComponent,
    AirlineComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports: [
    MaterialModule,
    AirlineComponent,
    NgxPaginationModule
  ]
})
export class FeatureModule { }
