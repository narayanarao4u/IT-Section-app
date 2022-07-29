import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class DataService {
    link = window.location.hostname;

    constructor(private http: HttpClient){}

    getdataLink(url){
        return this.http.get(url);
    }


}