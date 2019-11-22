import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditLayoutComponent } from './edit-layout/edit-layout.component';

const routes: Routes = [
  {
    path: '',
    component: EditLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectEditRoutingModule { }
