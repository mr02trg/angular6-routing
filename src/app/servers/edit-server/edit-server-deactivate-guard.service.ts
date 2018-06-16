import { Observable } from "rxjs/Observable";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

// expose the component to be passed into canDeactivate called by angular when leaving a route 
export interface EditServerDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class EditServerDeactivateGuardService implements CanDeactivate<EditServerDeactivate> {
    canDeactivate ( component: EditServerDeactivate) : Observable<boolean> | Promise<boolean> | boolean {
        return component.canDeactivate();
    }
}