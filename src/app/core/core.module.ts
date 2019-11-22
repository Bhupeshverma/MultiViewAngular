import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from '../layout-routing/layout-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('You shall not run');
    }
  }
 }
