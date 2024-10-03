import {Component, Input, OnInit} from '@angular/core';
import {EventSummary} from "../../../models/Event";
import {Attendee} from "../../../models/Attendee";
import {AttendeesService} from "../../../services/attendees/attendees.service";

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent implements OnInit{

  @Input() event!:EventSummary

  attendees:Attendee[]=[]

  constructor(private _attendeeService:AttendeesService) {
  }

  ngOnInit(): void {
    this._attendeeService.geAllAttendees().subscribe((response:any)=>{
      this.attendees = response
    })
  }

  getRegisteredAttendees(){
    let count = 0;
    for(let attendee of this.attendees){
      if(attendee.eventId == this.event.id){
        count++;
      }
    }
    return count
  }

  getAttendeesPer() {
    let registeredCant = 0;
    let attended = 0;

    for (let attendee of this.attendees) {
      if (attendee.eventId == this.event.id) {
        registeredCant++;
        if (attendee.checkedInAt) {
          attended++;
        }
      }
    }

    if (registeredCant === 0) {
      return 0;
    }

    return parseFloat(((attended / registeredCant)*100).toFixed(2));
  }


}
