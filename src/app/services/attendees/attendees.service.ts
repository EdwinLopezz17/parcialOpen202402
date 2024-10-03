import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AttendeesService {

  baseUrl= 'http://localhost:3000/attendees'

  constructor(private _http:HttpClient) {

  }

  geAllAttendees(){
    return this._http.get(this.baseUrl)
  }

  getAttendeessById(id:any){
      return this._http.get(`${this.baseUrl}/${id}`)
  }

  updateById(id:any, data:any){
    return this._http.put(`${this.baseUrl}/${id}`,data);
  }

}
