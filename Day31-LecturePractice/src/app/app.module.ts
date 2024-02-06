import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NumberComponent } from './components/number.component';
import { CalculatedNumberComponent } from './components/calculated-number.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberComponent,
    CalculatedNumberComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
