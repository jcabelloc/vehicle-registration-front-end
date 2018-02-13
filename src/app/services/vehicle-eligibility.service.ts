import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VehicleEligibilityService {

  constructor(public http:Http) {

  }
  getVehicleEligibility(vin:string){
    return this.http.get('http://localhost:8080/vehicleEligibility?vin='+vin)
    .map(res => res.json());
  }

}
