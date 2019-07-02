import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ListCollapseComponent } from './list-collapse/list-collapse.component';

@NgModule({
  declarations: [
    AppComponent,
    ZippyComponent,
    ListCollapseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
