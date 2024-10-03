import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Attendee} from "../../../models/Attendee";
import {EventService} from "../../../services/event/event.service";
import {AttendeesService} from "../../../services/attendees/attendees.service";
import {EventSummary} from "../../../models/Event";

@Component({
  selector: 'app-check-in',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './check-in.component.html',
  styleUrl: './check-in.component.css'
})
export class CheckInComponent implements OnInit{

  isCheckIn = false
  message = ""
  ticketIdentifier = ''

  attendees:Attendee[]=[]
  events:EventSummary  []=[]

  currentAttendee!:Attendee
  currentEvent!:EventSummary

  constructor(private _eventService:EventService,
              private _attendeeService:AttendeesService, ) {
  }

  ngOnInit() {
    this.getAllEvents()
    this.getAllAttendees()

  }

  getAllEvents(){

    this._eventService.getAllEvents().subscribe((response:any)=>{
      this.events = response
      console.log(this.events)
    })

  }
  getAllAttendees(){
    this._attendeeService.geAllAttendees().subscribe((response:any)=>{
      this.attendees = response;
      console.log(this.attendees);
    })
  }

  checkIn(){
    this.isCheckIn = false
    this.message = "Invalid Ticket"

    let isValid = false
      for ( let  attendee of this.attendees){
        if(attendee.ticketIdentifier === this.ticketIdentifier){
          if(!attendee.checkedInAt){
            attendee.checkedInAt = new Date();
            this._attendeeService.updateById(attendee.id, attendee).subscribe((response:any)=>{
              this.message = "Check In Successful"
              this.ticketIdentifier = ''

              this.currentAttendee = response
              this._eventService.getEventById(attendee.eventId).subscribe((response:any)=>{
                this.currentEvent = response
                this.isCheckIn=true
              })
            })
          }else{
            this.message = "Already Checked-In"
          }
        }
      }
      this.ticketIdentifier = ''
  }

}
