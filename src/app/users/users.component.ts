import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  /**
   *
   */
  constructor(private currPath : ActivatedRoute,
              private $router: Router) {}

  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];

  onUserSelected(user: {id: number, name: string}) {
    this.$router.navigate(['users',user.id, user.name]);
  }
}
