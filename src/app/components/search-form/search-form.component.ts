import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Output() driverLicenseObtained = new EventEmitter<string>();
  driverLicense:string;
  constructor(
    private flashMessagesService: FlashMessagesService
  ) {}

  ngOnInit() {
  }

  onSubmit({value, valid}){
    if (!Number(value.driverLicense)){
      valid = false;
    }
    if(valid){
      this.getEligibility();
    } else {
      this.flashMessagesService.show('Invalid Submit', {
        cssClass:'alert-danger', timeout: 2000
      });
      console.log('Form is invalid ' + value.driverLicense);
    }
   }
  getEligibility(){
    this.driverLicenseObtained.emit(this.driverLicense);
  }
}
