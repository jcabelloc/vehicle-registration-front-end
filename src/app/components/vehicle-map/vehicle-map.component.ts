import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { AgmMap } from '@agm/core';

@Component({
  selector: 'app-vehicle-map',
  templateUrl: './vehicle-map.component.html',
  styleUrls: ['./vehicle-map.component.css']
})
export class VehicleMapComponent implements OnInit {
  title: string = 'Vehicle Location';
  @Input('lat') lat:number;
  @Input('lng') lng:number;
  

  hideMap:boolean;
  @ViewChild(AgmMap)
  public agmMap: AgmMap
  constructor() {
    
   }

  ngOnInit() {
    this.hideMap = true;
  }
  showMap(){
    this.agmMap.triggerResize();
    this.hideMap = !this.hideMap;
  }
}
