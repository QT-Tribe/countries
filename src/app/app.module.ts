import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CountryListComponent } from './country-list/country-list.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  providers: [],
})
export class AppModule {}
