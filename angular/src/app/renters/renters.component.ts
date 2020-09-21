import { Component, OnInit } from '@angular/core';
import { RenterListServiceService } from './renter-list-service.service'
import { renters } from './rentersI';

@Component({
  selector: 'app-renters',
  template: `<br><br>
  
  <div class='container'>
  <table class="table table-striped">
    <thead>
      <tr>
      <th>ID</th>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>phone </th>
        <th>city</th>
        <th>state</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor='let emp of data; index as i'>
       <td>{{i+1}}</td>
        <td>{{emp.firstName }}</td>
        <td>{{emp.lastname }}</td>
        <td>{{emp.phone}}</td>
        <td>{{emp.city}}</td>
        <td>{{emp.state}}</td>
      </tr> 
      `
  ,
  styleUrls: ['./renters.component.css'],
  providers: [RenterListServiceService]
})
export class RentersComponent implements OnInit {
  data: renters[];

  constructor(private renterlist: RenterListServiceService) { }


  ngOnInit() {

    this.renterlist.getRenterList().subscribe(response => this.data = response);
  }

}
