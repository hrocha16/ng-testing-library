import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FetchService {
  constructor(public http: HttpClient) {}

  queryData = () => this.http.get('/api');
}
