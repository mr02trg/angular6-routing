import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { ServersService } from "../servers.service";

interface Server {
    id : number; 
    name: string;
    status: string; 
    allowEdit: boolean; 
}

@Injectable()
export class ServerResolverService implements Resolve<Server>{
    /**
     *
     */
    constructor(private serverService : ServersService) {
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) 
    : Observable<Server> | Promise<Server> | Server {
        return this.serverService.getServer(+route.params['sId']);
    }
}