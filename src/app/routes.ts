
import {EventsListComponent} from './events/events-list.component'
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Routes, RouterModule } from '@angular/router';
import { EventRouteActivator } from './guards/event-route-activator.service';
import { NotFound } from './errors/404';


export const appRoutes = [
    {path : 'events', component: EventsListComponent},
    {path : 'events/new', component: CreateEventComponent, canDeactivate : ['canDeactivateCreateEvent']},
    {path : 'events/:id', component: EventDetailComponent, canActivate : [EventRouteActivator], pathMatch : 'full'},
    {path : '404', component: NotFound},
    { path : '', redirectTo:'/events' , pathMatch : 'full'},
    { path: 'user', loadChildren: './users/user.module#UserModule'}

]