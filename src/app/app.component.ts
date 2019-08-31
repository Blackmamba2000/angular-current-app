import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment 2: Practicing Databinding';
  username = '';
  isWalmartBetter = true;
  username_save = '';

  saveUserInfo($event) {
    this.username_save = this.username;
    console.log('User Name is ', this.username_save);
  }
}
