import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { HomeComponent } from '../home/home.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';

const routes: Routes = [
  { 
    path: '', 
    component: SiteLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'profile', loadChildren: () => import('../user-profile/user-profile.module').then(profile => profile.UserProfileModule)}
    ]
    

  },
  { 
    path: '',
    component: AppLayoutComponent, 
    children: [
       {  path: 'p/edit', loadChildren: () => import('../project-edit/project-edit.module').then(edit => edit.ProjectEditModule)  },
       {  path: 'p/preview', loadChildren: () => import('../project-preview/project-preview.module').then(edit => edit.ProjectPreviewModule)  },
    ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingRoutingModule { }
