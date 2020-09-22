import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentersComponent } from './renters.component';
import { HttpClientModule } from '@angular/common/http'
import {RenterListServiceService } from './renter-list-service.service'

@NgModule({
  declarations: [RentersComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[ RentersComponent],
  providers:[ RenterListServiceService ]

})
export class RentersModule { 
  
}
