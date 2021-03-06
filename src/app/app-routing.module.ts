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
import { AuthGuardService } from "./auth-guard.service";
import { EditServerDeactivateGuardService } from "./servers/edit-server/edit-server-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolverService } from "./servers/server/serverResolver.service";

/*
    Routing module 
*/

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'users', component: UsersComponent, children: [
      {path: ':userId/:userName', component: UserComponent},
    ]},
    
    {   path: 'servers', 
        //canActivate: [AuthGuardService] ,
        canActivateChild: [AuthGuardService],
        component: ServersComponent, 
        children: [
            {path: ':sId', component: ServerComponent, resolve: {server: ServerResolverService}},
            {path: ':sId/edit', component: EditServerComponent, canDeactivate: [EditServerDeactivateGuardService]},
        ]
    }, 

    // { path: 'not-found', component: NotFoundComponent},
    { path: 'error-page', component: ErrorPageComponent, data: {err: 'Page Not Found'}},

    { path: '**', redirectTo: '/error-page'}
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
