import { Component, OnInit } from '@angular/core';
import { EventsService } from './shared/events.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { ToastrService } from '../common/toastr.service';

declare let toastr 
@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events : any[];

  constructor(private eventService: EventsService, private toastrService: ToastrService) { }

  ngOnInit() {

    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName: string){
    this.toastrService.success(eventName);
  }
 

}
