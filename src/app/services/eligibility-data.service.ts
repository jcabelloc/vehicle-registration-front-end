import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import {URLSearchParams} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { AuthService } from './auth.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class EligibilityDataService {
  token: string;
  constructor(
    private http: HttpClient,
    //public http:Http,
    private authService: AuthService
    
  ) {}

  getEligibility(driverLicense:string){
    return new Promise((resolve, reject) => {
        this.http.get('http://localhost:8080/eligibility?driverLicense='+driverLicense)
        .toPromise()
        .then(res => resolve(res));
      })
  }
  getCriminalHistories(driverLicense:string){
    return this.http.get('http://localhost:8080/criminalHistories?driverLicense='+driverLicense);
    //.map(res => res.json());
  }

  getCriminalDetails(driverLicense:string){
    return this.http.get('http://localhost:8080/criminalDetail?driverLicense='+driverLicense);
    //.map(res => res.json());
  }

  


  
}
