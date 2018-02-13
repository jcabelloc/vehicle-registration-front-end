import { Component, OnInit } from '@angular/core';
import { Eligibility } from '../../models/Eligibility';
import { EligibilityDataService } from '../../services/eligibility-data.service'


@Component({
  selector: 'app-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.css']
})
export class EligibilityComponent implements OnInit {
  hideDetail:boolean;
  isEmpty:boolean;
  showAccessDetail:boolean;
  showEmail:boolean;
  showPhone: boolean;
  hidePicture:boolean;

  eligibility:Eligibility = {
    name:'',
    driverLicense:'',
    resultCode:0,
    message:'Default',
    email:"",
    phone:"",
    picture:""
  
  };
  constructor(public eligibilityDataService:EligibilityDataService) { 
    this.isEmpty = true;
    this.hideDetail = true;
    this.hidePicture = true;
    this.eligibility = {
      name:'',
      driverLicense:'Default',
      resultCode:0,
      message:'Default',
      email:"",
      phone:"",
      picture:""
    };
  }

  ngOnInit() {
  }
  showEligibility(driverLicense:string){
    this.eligibilityDataService.getEligibility(driverLicense).then((eligibility) => {
    this.eligibility = <Eligibility>eligibility;
    this.isEmpty = false;
    this.hideDetail = true;
    this.hidePicture = true;
    this.showEmail = false;
    this.showPhone = false;        
    this.showAccessDetail = true;
    if (this.eligibility.resultCode == 101) {
      this.showAccessDetail = false;
      }
    if (this.eligibility.email != null && this.eligibility.email.length > 0) this.showEmail = true;  
    if (this.eligibility.phone != null && this.eligibility.phone.length > 0) this.showPhone = true;  
    });
  }

  showDetail(){
    this.hideDetail = false;
  }
}
