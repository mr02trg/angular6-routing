import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit: boolean; 

  constructor(private serversService: ServersService,
              private currPath: ActivatedRoute) { }

  ngOnInit() {
    this.server = this.serversService.getServer(+this.currPath.snapshot.params['sId']);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    this.allowEdit = (this.currPath.snapshot.queryParams['allowEdit'] === 'true' ? true : false);
    console.log("QueryParams:", this.currPath.snapshot.queryParams);
    //console.log("Fragment", this.currPath.fragment);

  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
