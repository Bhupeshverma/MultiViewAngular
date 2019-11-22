import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectEditRoutingModule } from './project-edit-routing.module';
import { EditLayoutComponent } from './edit-layout/edit-layout.component';
import { Ng8MaterialModule } from '../material.module';

@NgModule({
  declarations: [EditLayoutComponent],
  imports: [
    CommonModule,
    ProjectEditRoutingModule,
    Ng8MaterialModule
  ]
})
export class ProjectEditModule { }
