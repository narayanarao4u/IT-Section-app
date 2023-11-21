import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppDataService } from "../data.service";

@Injectable({
    providedIn: 'root'
})
export class IpDataService {
    link = window.location.hostname
    
    constructor(private http: HttpClient, private ds: AppDataService) { }

    port = this.ds.port

    // #region ipData
    getipData() {
        let url = `http://${this.link}:${this.port}/api/ipData/`;
        return this.http.get(url);
    }

    saveipData(newData) {
        let returndata;
        let url = `http://${this.link}:${this.port}/api/ipData/`;

        if (newData._id) {
            returndata = this.http.put(url, newData);
        } else {
            returndata = this.http.post(url, newData);
        }
        return returndata;
    }

    delipData(id) {
        let url = `http://${this.link}:${this.port}/api/ipData/`;
        return this.http.delete(url + id)
    }

    checkIPStatus(ipAddress){
        let url = `http://${this.link}:${this.port}/api/checkPing?ip=${ipAddress}`;
        return this.http.get(url)
    }
    // #endregion ipData 

}