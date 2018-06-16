import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';


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
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    AppRoutingModule
  ],
  providers: [ServersService, AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
