import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-newyork',
  templateUrl: './newyork.component.html',
  styleUrls: ['./newyork.component.scss']
})
export class NewyorkComponent implements OnInit {


  brews: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() 
  
  {
    this._http.getBeerny().subscribe(data => {
      this.brews = data
      console.log(this.brews);
    }
  );
  }

}
