import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppDataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class TelephoneDataService {
  link = window.location.hostname;
 
  constructor(private http: HttpClient, private ds: AppDataService) { }



  getExcelData(){
    const url = `http://${this.link}:${this.ds.port}/api-excel/`;
    return this.http.get(url + 'telephone');
  }

}
