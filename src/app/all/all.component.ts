import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from "@angular/router";
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  brews: Object;
  column: string;
  term: string;
  searchText: string;

  constructor(private _http: HttpService,  public route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe((params) => {
      if (params['column']) {
        this.column = params['column'];
        console.log(this.column);
      }
      if (params['term']) {
        this.term = params['term'];
        console.log(this.term);
      }
      this._http.getBeer().subscribe(data => {
        this.brews = data
        console.log(this.brews);
      }
      );
    });

  }

  /*
{
  this.query = this.apollo.watchQuery({
    query: gql`
  query filter {
    filter(all:${this.all}, filter:"${this.filter}", term:"${this.term}") {
      login
      displayname
      title
      department
      extension
      office
      assistant
      assistantextension
      assistantlogin
    }
  }

  */

}







