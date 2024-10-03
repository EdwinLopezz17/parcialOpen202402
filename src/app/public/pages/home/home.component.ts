import {Component, OnInit} from '@angular/core';
import {EventCardComponent} from "../../components/event-card/event-card.component";
import {EventService} from "../../../services/event/event.service";
import {AttendeesService} from "../../../services/attendees/attendees.service";
import {EventSummary} from "../../../models/Event";
import {Attendee} from "../../../models/Attendee";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    EventCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{


  events:EventSummary  []=[]

  constructor(private _eventService:EventService,
              private _attendeeService:AttendeesService) {
  }
  ngOnInit(): void {
    this.getAllEvents();

  }
  getAllEvents(){

    this._eventService.getAllEvents().subscribe((response:any)=>{
      this.events = response
      console.log(this.events)
    })

  }

}
