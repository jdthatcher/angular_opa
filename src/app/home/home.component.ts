import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter: number = 0;
  name: string = '';

  constructor() { }

  ngOnInit() {
  }

  countClick() {
    this.clickCounter += 1;
  }

  setClasses() {
    let myClasses = {
      veryactive: this.clickCounter > 10,
      active: this.clickCounter > 4,
      notactive: this.clickCounter <= 4
    };
    return myClasses;
  }

}
