import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TelephoneDataService {
  link = window.location.hostname;
  port = 3005;
  constructor(private http: HttpClient) { }



  getExcelData(){
    const url = `http://${this.link}:${this.port}/api-excel/`;
    return this.http.get(url + 'telephone');
  }

}
