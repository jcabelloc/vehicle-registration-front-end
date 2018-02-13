import { Component, OnInit, Input } from '@angular/core';
import { VehicleEligibilityService } from '../../services/vehicle-eligibility.service';
import { VehicleRecord } from '../../models/VehicleRecord';
import { VehicleEligibility } from '../../models/VehicleEligibility';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {
  vehicleRecords: VehicleRecord[];
  vehicleEligibility: VehicleEligibility;
  lat:number;
  lng:number;
  @Input('vin') vin:string;
  constructor(public vehicleEligibilityService: VehicleEligibilityService) { 

  }
  
  ngOnInit() {
  }
  showDetail(){
    this.vehicleEligibilityService.getVehicleEligibility(this.vin).subscribe(result => {
      this.vehicleEligibility = result;
      this.vehicleRecords =this.vehicleEligibility.vehicleRecords;
      this.lat = this.vehicleRecords[0].lat;
      this.lng = this.vehicleRecords[0].lng;
    });
  }


}
