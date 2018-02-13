import { Component, OnInit } from '@angular/core';
import { VehicleEligibility } from '../../models/VehicleEligibility';
import { VehicleEligibilityService} from '../../services/vehicle-eligibility.service';

@Component({
  selector: 'app-vehicle-main',
  templateUrl: './vehicle-main.component.html',
  styleUrls: ['./vehicle-main.component.css']
})
export class VehicleMainComponent implements OnInit {
  hideDetail:boolean;
  isEmpty:boolean;
  showDetailButton: boolean;
  vehicleEligibility:VehicleEligibility;
  constructor(public vehicleEligibilityService: VehicleEligibilityService) { 
    this.isEmpty = true;
    this.hideDetail = true;
    this.showDetailButton = false;
    this.vehicleEligibility = {
      vin:'',
      resultCode:0,
      message:'',
      vehicleRecords:[]
    };
  }

  ngOnInit() {
  }
  showVehicleEligibility(vin:string){
    this.vehicleEligibilityService.getVehicleEligibility(vin).subscribe(vehicleEligibility => {
      this.showDetailButton = false;
      this.vehicleEligibility = vehicleEligibility;
      this.isEmpty = false;
      this.hideDetail = true;
      if (this.vehicleEligibility.vehicleRecords.length > 0) this.showDetailButton = true;
    });
  }
  showDetail(){
    this.hideDetail = false;
  }

}
