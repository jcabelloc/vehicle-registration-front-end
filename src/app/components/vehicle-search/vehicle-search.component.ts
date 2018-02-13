import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-vehicle-search',
  templateUrl: './vehicle-search.component.html',
  styleUrls: ['./vehicle-search.component.css']
})
export class VehicleSearchComponent implements OnInit {
  @Output() vinObtained = new EventEmitter<string>();
  vin: string;
  constructor(
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmit({value, valid}){
    if(valid){
      this.getVehicleEligibility();
    } else {
      this.flashMessagesService.show('Invalid Submit', {
        cssClass:'alert-danger', timeout: 2000
      });
      console.log('Form is invalid ' + value.vin);
    }
   }
  getVehicleEligibility(){
    this.vinObtained.emit(this.vin);
  }

}
