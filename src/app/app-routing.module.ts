import { NgModule } from "@angular/core";
import { RouterModule, Routes, Router } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'users', component: UsersComponent, children: [
      {path: ':userId/:userName', component: UserComponent},
    ]},
    
    {path: 'servers', component: ServersComponent, children: [
      {path: ':sId', component: ServerComponent},
      {path: ':sId/edit', component: EditServerComponent},
    ]}, 
    { path: 'not-found', component: NotFoundComponent},
    { path: '**', redirectTo: 'not-found'}
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}