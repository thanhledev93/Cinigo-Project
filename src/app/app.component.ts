import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Cinigo-Angular-Project';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDfJnp_WgdqKPt6Y8cIOyQb8IcFromfS7c',
      authDomain: 'cinigo-c4638.firebaseapp.com'
      }
    );
  }
}
