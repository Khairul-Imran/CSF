import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Step 1
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { CatComponent } from './components/cat/cat.component';
import { NumberComponent } from './components/number/number.component';
import { NumberService } from './number.service';
import { NumberByServiceComponent } from './components/number-by-service/number-by-service.component';

// Step 2
const appRoutes: Routes = [
// Define the 'landing' page
{ path: '', component: MainComponent },
{ path: 'cat', component: CatComponent },
{ path: 'number/:num', component: NumberComponent }, // :num == {num} in SB
{ path: 'number-by-service', component: NumberByServiceComponent },
// Wildcard route
{ path: '**', redirectTo: '/', pathMatch: 'full' }

]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CatComponent,
    NumberComponent,
    NumberByServiceComponent
  ],
  imports: [
    BrowserModule,
    //Step 3
    RouterModule.forRoot(appRoutes)
  ],
  providers: [NumberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
