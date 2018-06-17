import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  errorMessage = ''; 

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Retrieving data from route .... 
    // This is retrieved before the route is rendered
    this.errorMessage = this.route.snapshot.data['err'];
  }

}
