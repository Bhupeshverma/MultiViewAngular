import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteLayoutComponent } from './layout-routing/layouts/site-layout/site-layout.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  //Site routes goes here 
  //   { 
  //     path: '', 
  //     component: SiteLayoutComponent,
  //     children: [
  //       { path: '', component: HomeComponent, pathMatch: 'full'},
  //       // { path: 'profile', loadChildren: () => import('./user-profile/user-profile.module').then(profile => profile.UserProfileModule)}
  //     ]
      

  // },

  // // App routes goes here here
  // { 
  //     path: '',
  //     component: AppLayoutComponent, 
  //     children: [
       
  //     ]
  // },

  //no layout routes
  // { path: 'login', component: LoginComponent},
  // { path: 'register', component: RegisterComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
