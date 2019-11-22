import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingRoutingModule } from './layout-routing-routing.module';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { Ng8MaterialModule } from '../material.module';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    SiteLayoutComponent,
    AppLayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingRoutingModule,
    CoreModule,
    Ng8MaterialModule
  ]
})
export class LayoutRoutingModule { }
