import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberComponent } from './components/number/number.component';
import { CalculatedNumberComponent } from './components/calculated-number/calculated-number.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberComponent,
    CalculatedNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
