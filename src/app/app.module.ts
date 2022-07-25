import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeoplePageComponent } from './pages/people-page/people-page.component';
import { PublicationsPageComponent } from './pages/publications-page/publications-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FundingsPageComponent } from './pages/fundings-page/fundings-page.component';
import {MatCardModule} from '@angular/material/card';
import { UranusModule } from './uranus/uranus.module';

@NgModule({
  declarations: [
    AppComponent,
    PeoplePageComponent,
    PublicationsPageComponent,
    HomePageComponent,
    FundingsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UranusModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
