import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppDataService } from '../data.service';

@Component({
  selector: 'app-disp-table',
  templateUrl: './disp-table.component.html',
  styleUrls: ['./disp-table.component.css']
})
export class DispTableComponent implements OnInit {
  link = window.location.hostname;
  dataList:any;
  datarow:any;

  constructor(private ds:AppDataService, public auth:AuthService) { }

  getdata(){
    const url = `http://${this.link}:${this.ds.port}/api-pcinfo`;
    console.log(url);
    
    this.ds.getdataLink(url).subscribe((res)=>{
      this.dataList = res['data'];
           
      this.datarow = this.objectKeys(this.dataList[0]);
    })
  }

  objectKeys(obj) {
    return Object.keys(obj);
  }

  ngOnInit(): void {
    //this.dataList['duty'] = ""
    //console.log(this.auth.getCurrentUser());
     this.getdata()
  }

}
