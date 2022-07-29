import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bio-attend',
  templateUrl: './bio-attend.component.html',
  styleUrls: ['./bio-attend.component.css']
})


export class BioAttendComponent implements OnInit {
  link = window.location.hostname;
  empdata:any;
  datarow = {
    emp:"100",
    mn:"7_2022"
  }
  dataList:any
  tcaption:any
  inTime = '10:31';
  outTime = '17:29';

  
  
  

  constructor(private ds:DataService, private http:HttpClient) { }

  getempdata(){
    const url = `http://${this.link}:3005/api-attend/empdata`;
    this.ds.getdataLink(url).subscribe((res)=>{
      this.empdata = res;      
    })
  }

  getAttendence(){
    const url = `http://${this.link}:3005/api-attend/memdata`;
    this.http.post(url, this.datarow).subscribe((res)=>{
      this.dataList = res
      this.tcaption = `Name : ${this.datarow.emp}, Month :  ${this.datarow.mn}`   
      
    })

  }

  inTimeClass(x){
       
    let dt = new Date('1970-01-01'+' '+ x['inTime'])
    let inTime =  new Date(`1970-01-01 ${this.inTime}:00`)

    if(dt>inTime) {
      return 'red';
    }    
  }


  outTimeClass(x){
       
    let dt = new Date('1970-01-01'+' '+ x['outTime'])
    let outTime =  new Date(`1970-01-01 ${this.outTime}:00`)


    if(dt<outTime) {
      return 'red';
    }    
  }

  ngOnInit(): void {
    this.getempdata()    
  }

}
