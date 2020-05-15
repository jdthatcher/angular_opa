import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-tn',
  templateUrl: './tn.component.html',
  styleUrls: ['./tn.component.scss']
})
export class TnComponent implements OnInit {

  brews: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() 
  
  {
    this._http.getBeertn().subscribe(data => {
      this.brews = data
      console.log(this.brews);
    }
  );
  }

}
