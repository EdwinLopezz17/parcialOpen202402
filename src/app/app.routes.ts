import { Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {CheckInComponent} from "./check-in/pages/check-in/check-in.component";

export const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'check-in', component:CheckInComponent}



];
