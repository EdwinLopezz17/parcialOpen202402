import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  baseUrl = 'http://localhost:3000/events'
  constructor(private _http:HttpClient) {

  }

  getAllEvents(){
    return this._http.get(this.baseUrl);
  }
  getEventById(id:any){
    return this._http.get(`${this.baseUrl}/${id}`)
  }

}
