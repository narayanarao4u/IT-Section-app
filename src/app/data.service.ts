import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class AppDataService {
    link = window.location.hostname;
    port = 3005;
     

    constructor(private http: HttpClient){}

    getdataLink(url){
        return this.http.get(url);
    }


}