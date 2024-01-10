import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppDataService } from '../data.service';
import { IpDataService } from '../ipData/ipdata.service';

@Component({
  selector: 'app-pcinfo',
  templateUrl: './pcinfo.component.html',
  styleUrls: ['./pcinfo.component.css']
})
export class PcinfoComponent implements OnInit {
  link = window.location.hostname;
  dataList:any;
  datarow:any;
  minview = true;

  constructor(private ds:AppDataService, private dsip:IpDataService, public auth:AuthService) { }

  getdata(){
    const url = `http://${this.link}:${this.ds.port}/api-pcinfo/data`;
    console.log(url);
    
    this.ds.getdataLink(url).subscribe((res)=>{
      this.dataList = res['data'];
           
      this.datarow = this.objectKeys(this.dataList[0]);
    })
  }

  objectKeys(obj) {
    return Object.keys(obj);
  }

  Roundup(i){
    return Math.ceil(i)
  }

  checkIP(x){

    return this.dsip.checkIPStatus(x.IPv4Address).subscribe(res => {      
      let a = res['isAlive']
      x.status = a ? 'Online' : 'Offline'
      x.class = a ?'bg-success': 'bg-danger'
    })    
}

  ngOnInit(): void {
    //this.dataList['duty'] = ""
    //console.log(this.auth.getCurrentUser());
     this.getdata()
  }

}
