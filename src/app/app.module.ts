import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RawDataComponent } from './Pages/raw-data/raw-data.component';
import { SolusComponent } from './Pages/solus/solus.component';
import { ReviewDataComponent } from './Pages/review-data/review-data.component';
import { StepsComponent } from './Pages/steps/steps.component';

@NgModule({
  declarations: [
    AppComponent,
    RawDataComponent,
    SolusComponent,
    ReviewDataComponent,
    StepsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
