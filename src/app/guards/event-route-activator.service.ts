

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventsService } from '../events/shared/events.service';

@Injectable()
export class EventRouteActivator implements CanActivate {

    constructor(private router: Router, private eventService: EventsService) {
    }
    canActivate(route: ActivatedRouteSnapshot) {
        const eventExist = !!this.eventService.getEvent(+route.params['id']);

        if (!eventExist) {
            this.router.navigate(['/404']);
        }
        return eventExist;
    }
}

