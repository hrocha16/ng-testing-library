import { Component, OnInit } from '@angular/core';

import { FetchService } from './fetch.service';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {
  constructor(public fetchService: FetchService) {}

  ngOnInit() {}

  fetchData = () => this.fetchService.queryData();
}
