import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class IpDataService {
    link = window.location.hostname
    port = 3005
    constructor(private http: HttpClient) { }

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
    // #endregion ipData 

}