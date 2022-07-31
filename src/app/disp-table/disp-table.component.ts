import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-disp-table',
  templateUrl: './disp-table.component.html',
  styleUrls: ['./disp-table.component.css']
})
export class DispTableComponent implements OnInit {
  link = window.location.hostname;
  dataList:any;
  datarow:any;

  constructor(private ds:DataService) { }

  getdata(){
    const url = `http://${this.link}:3005/api-excel/attDutyChart`;
    this.ds.getdataLink(url).subscribe((res)=>{
      this.dataList = res;
     
      
      this.datarow = this.dataList['duty'][2];
    })
  }

  objectKeys(obj) {
    return Object.keys(obj);
  }

  ngOnInit(): void {
    // this.getdata()
  }

}
