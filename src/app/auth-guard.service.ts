import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";


// route guarding service based on result of authService ( simulated authentication )
// this logic will get call before the component is loaded by angular given a route 

@Injectable()
export class AuthGuardService implements CanActivate {

    /**
     *
     */
    constructor(private authService : AuthService,
                private router : Router) {
        
    }

    canActivate (
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) : Observable<boolean> | Promise<boolean> | boolean {

        return this.authService.isAuthenticated()
            .then ( (isAuthenticated) => {
                if (isAuthenticated) {
                    console.log("isAuth", isAuthenticated);
                    return true; 
                } else {
                    this.router.navigate(['/']);
                    return false;
                }
            });
    }
}