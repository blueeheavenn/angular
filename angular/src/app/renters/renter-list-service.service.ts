import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { renters as renterList } from './rentersI'
import { RentersModule } from './renters.module'
import { Observable } from 'rxjs';

// import { RentersComponent } from './renters.component';


@Injectable({
  providedIn: 'root' ,
})
export class RenterListServiceService {
  renter: renterList[] = [];
 
  constructor(private httpClient:HttpClient) { }

  getRenterList(): Observable<renterList[]> {
    return this.httpClient.get<renterList[]>('http://localhost:3000/Renters');
  }

}
