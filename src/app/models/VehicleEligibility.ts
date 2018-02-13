import { VehicleRecord } from "./VehicleRecord";


export interface VehicleEligibility{
    vin:string;
    resultCode:number;
    message: string;
    vehicleRecords:VehicleRecord[];
}