import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramSubcription : Subscription;

  constructor(private currPath : ActivatedRoute) { }

  ngOnInit() {
    // this will not update user info REACTIVELY 
    // since this value is set when this component is initialised 
    // need observable subscription to update this reactively
    this.user = {   
      id: this.currPath.snapshot.params['userId'],
      name: this.currPath.snapshot.params['userName'],      
    }

    // subcribe to params observable to asynchronously update any changes in params
    this.paramSubcription = this.currPath.params.subscribe(
      // call back function 
      (params: Params) => {
        this.user.id = params['userId'];
        this.user.name = params['userName'];
      }
    );
  }

  // angular will perform this in the background 
  // subcription does not get destroyed when component is destroyed by angular 
  // thus this step needs to be done in custom callback 
  ngOnDestroy() {
    this.paramSubcription.unsubscribe();
  }

}
