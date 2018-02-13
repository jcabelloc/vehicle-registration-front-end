import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
//
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesModule } from 'angular2-flash-messages'; 
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { EligibilityComponent } from './components/eligibility/eligibility.component';
import { DetailComponent } from './components/detail/detail.component';
import { VehicleMainComponent } from './components/vehicle-main/vehicle-main.component';
import { VehicleDetailComponent } from './components/vehicle-detail/vehicle-detail.component';
import { VehicleSearchComponent } from './components/vehicle-search/vehicle-search.component';
import { LoginComponent } from './components/login/login.component';

import { VehicleEligibilityService } from './services/vehicle-eligibility.service';
import { EligibilityDataService } from './services/eligibility-data.service';
import { AuthService } from './services/auth.service';

import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { VehicleMapComponent } from './components/vehicle-map/vehicle-map.component';

const appRoutes: Routes = [
  {path:'', component:LoginComponent },
  {path:'home', component:HomeComponent, canActivate:[AuthGuard] },
  {path:'owner', component:EligibilityComponent, canActivate:[AuthGuard] },
  {path:'vehicle', component:VehicleMainComponent, canActivate:[AuthGuard] },
  {path:'login', component:LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchFormComponent,
    EligibilityComponent,
    DetailComponent,
    VehicleMainComponent,
    VehicleDetailComponent,
    VehicleSearchComponent,
    LoginComponent,
    HomeComponent,
    VehicleMapComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    AngularFireModule.initializeApp(environment.firebase, 'team6'),
    AngularFireAuthModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBeqddbw1nWwzoJVlPLmLgg52stHtqj16g'})
  ],
  providers: [
    EligibilityDataService,
    VehicleEligibilityService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
