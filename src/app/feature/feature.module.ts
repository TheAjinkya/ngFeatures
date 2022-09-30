import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { MaterialModule } from '../material/material.module';
import { TimelineComponent } from './timeline/timeline.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FeatureComponent,
    TimelineComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule
  ]
})
export class FeatureModule { }
