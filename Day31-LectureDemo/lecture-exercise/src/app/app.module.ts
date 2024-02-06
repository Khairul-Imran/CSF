import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Picture2Component } from './components/picture2.component';
import { HistoryComponent } from './components/history.component';

@NgModule({
  declarations: [
    AppComponent,
    Picture2Component,
    HistoryComponent
  ],
  imports: [
    BrowserModule
  ],
  // Where tf did this come from?????
  // providers: [
  //   provideClientHydration()
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
