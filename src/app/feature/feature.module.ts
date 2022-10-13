import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { MaterialModule } from '../material/material.module';
import { TimelineComponent } from './timeline/timeline.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AirlineComponent } from './airline/airline.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatComponent } from './mat/mat.component';


@NgModule({
  declarations: [
    FeatureComponent,
    TimelineComponent,
    AirlineComponent,
    MatComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
  ],
  exports: [
    MaterialModule,
    AirlineComponent,
    NgxPaginationModule,
    NgxSpinnerModule,
    MatComponent
  ]
})
export class FeatureModule { }
