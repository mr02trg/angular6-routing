import { Component, OnInit, OnDestroy } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';
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
              private currPath : ActivatedRoute) { }

  ngOnInit() {
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
  }

  ngOnDestroy() {
    this.paramSubcription.unsubscribe();
  }

}
