import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyC4frNr25k4yB0Zix_pi7zr5oestrF0MMw",
      authDomain: "jmd-udemy-recipe-book.firebaseapp.com"
    })
  }
}
