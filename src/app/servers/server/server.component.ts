import { Component, OnInit, OnDestroy } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnDestroy {
  server: {id: number, name: string, status: string};
  paramSubcription : Subscription;

  constructor(private serversService: ServersService,
              private currPath : ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    /*
    // GETTING DATA USING ROUTE PARAM / QUERY PARAM
    // Activated Route will return a string --> need to convert to number 
    this.server = this.serversService.getServer(+this.currPath.snapshot.params['sId']);

    // component reactively update according to changes in router param
    // refer to user component for more detail explaination
    this.paramSubcription = this.currPath.params
      .subscribe(
        (params: Params) => {
          this.server = this.serversService.getServer(+params['sId']);
        }
      )
    */ 

    // GETTING DATA USING ROUTE RESOLVE
    // Just another way of retrieving data from route using resolver 
    // data will be loaded before angular load the component from the route path 
    this.currPath.data.subscribe( (data: Data) => {
      this.server = data['server'];
    });
  }

  ngOnDestroy() {
    this.paramSubcription.unsubscribe();
  }

  onEdit() {
    this.router.navigate(['/servers', this.server.id, 'edit'], {queryParamsHandling: 'preserve'});
  }

}
