import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { AppDataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class ItAssetDataService {
  // url = "http://localhost:3000/api/assest/"
   

  constructor(private http:HttpClient, private ds:AppDataService) { }

  url(){
    var r = window.location.hostname;
    var port = this.ds.port;
    return `http://${r}:${port}/api/assest/`;    
  }
  
  getData(){ 
    return this.http.get(this.url())
  }

  saveData(newData){
    var returndata;

    if(newData._id){
      returndata = this.http.put(this.url(), newData);
    }else{
      returndata = this.http.post(this.url(), newData);
    }

    return returndata;
  }

  delData(id){
    return this.http.delete(this.url() + id)
  }
}

