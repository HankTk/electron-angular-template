import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';
import { FileExplorerComponent } from './components/file-explorer/file-explorer.component';
import { NavlistComponent } from './components/navlist/navlist.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppComponent,
    Component1Component,
    Component2Component,
    FileExplorerComponent,
    NavlistComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
