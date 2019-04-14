import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import {EventsService} from './events/shared/events.service';
import {ToastrService} from './common/toastr.service';


@NgModule({
  declarations: [
    EventsAppComponent,
    NavbarComponent,
  
    EventsListComponent,
  
    EventThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ EventsService, ToastrService ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
