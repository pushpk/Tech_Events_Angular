import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared/events.service';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: any

  constructor(private eventService: EventsService, private route : ActivatedRoute) { }

  ngOnInit() {

    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

}
