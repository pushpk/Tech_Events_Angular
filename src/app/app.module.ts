import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import {EventsService} from './events/shared/events.service';
import {ToastrService} from './common/toastr.service';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { EventRouteActivator } from './guards/event-route-activator.service'
import {appRoutes} from './routes';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { NotFound } from './errors/404';



@NgModule({
  declarations: [
    EventsAppComponent,
    NavbarComponent,
    NotFound,    
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailComponent,
    CreateEventComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ EventsService, ToastrService, EventRouteActivator,{ provide : 'canDeactivateCreateEvent', useValue : checkDirtyState } ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { 

}

export function checkDirtyState(component : CreateEventComponent){
  if(component.isDirty)
  {
    return window.confirm("you sure");
    
  }
  return true;
}
