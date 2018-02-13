import { Component, OnInit, Input } from '@angular/core';
import { EligibilityDataService } from '../../services/eligibility-data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  criminalHistories:any[];
  criminalDetails:any[];
  
  @Input('driverLicense') driverLicense:string;
  constructor(public eligibilityDataService:EligibilityDataService) {
   }

  ngOnInit() {
  }
  showDetail(){
    this.eligibilityDataService.getCriminalDetails(this.driverLicense).subscribe(result => {
      this.criminalDetails = <any>result;
    });
  }
}
