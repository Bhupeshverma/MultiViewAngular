import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Ng8MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { LayoutRoutingModule } from './layout-routing/layout-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    LayoutRoutingModule,
    Ng8MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
