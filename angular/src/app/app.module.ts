import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RentersComponent } from './renters/renters.component';
import { OwnersComponent } from './owners/owners.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule }  from '@angular/forms'

//import {RenterListServiceService } from './renters/renter-list-service.service'

@NgModule({
  declarations: [
    AppComponent,
    RentersComponent,
    OwnersComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  //  providers: [RenterListServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
