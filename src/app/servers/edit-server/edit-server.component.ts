import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EditServerDeactivate } from './edit-server-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, EditServerDeactivate  {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit: boolean; 
  changeSaved: boolean = false; 

  constructor(private serversService: ServersService,
              private currPath: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.server = this.serversService.getServer(+this.currPath.snapshot.params['sId']);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    this.allowEdit = (this.currPath.snapshot.queryParams['allowEdit'] === 'true' ? true : false);
    // console.log("QueryParams:", this.currPath.snapshot.queryParams);
    //console.log("Fragment", this.currPath.fragment);

  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changeSaved = true; 
    this.router.navigate(['../'], {relativeTo: this.currPath})
  }

  canDeactivate () {
    if (!this.allowEdit) {
      return true; 
    }

    if((this.serverName != this.server.name || this.serverStatus != this.server.status) && !this.changeSaved) {
      return confirm("Are you sure you want to leave page?"); 
    } 

    return true;
  }

}
