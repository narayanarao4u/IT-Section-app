import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

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
    mn:"8_2022"
  }
  dataList:Array<any>
  tcaption:any
  inTime = '11:01';
  outTime = '17:29';

  allemp = false

  days = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
   
  constructor(private ds:DataService, private http:HttpClient) { }

  getempdata(){
    const url = `http://${this.link}:3005/api-attend/empdata`;
    this.ds.getdataLink(url).subscribe((res)=>{
      this.empdata = res;      
    })
  }

  getAttendence(){
    // console.log('datarow', this.datarow);
    
    const url = `http://${this.link}:3005/api-attend/memdata`;

    this.allemp = this.datarow.emp === '100'? true : false

     

    this.http.post(url, this.datarow).subscribe((res:Array<any>)=>{
      this.dataList = res
      //console.log(res);

      if (this.allemp) {
        // console.log( this.allemp);
        let a = []
        a = this.dataList
        // console.log(typeof a[0].logDate);      
        let pv = a.reduce((a, b) => {
          a[b.UserID] = a[b.UserID] || [];
          a[b.UserID].push({ [b.logDate.slice(-2)]: [b.inTime.substring(0, 5), b.outTime.substring(0, 5)] });
          return a;
        }, {});

        var pvs = Object.keys(pv).map(function (k) {
          return { UserID: k, dt: Object.assign.apply({}, pv[k]) };
        });
        this.dataList = pvs
        // console.log(this.dataList);
        
      }

      
    
    // console.log("pvs", pvs);
      
    this.tcaption = `Name : ${this.datarow.emp}, Month :  ${this.datarow.mn}`        
    
  })
  }


  dispIntime(t){
    let r = []
   if(!!t){
      
      let intm = new Date('1970-01-01 ' + t[0]);
      let inTime =  new Date(`1970-01-01 ${this.inTime}:00`)
      let indiff = inTime.getTime() - intm.getTime()  ;
      let inresult = Math.round(indiff / 60000);      
          

     if (inresult < 0) {
       r = [inresult, true]      
     }
     else {
       r = [inresult, false]      
     }
    }
    else {
      r = ['', false]      
    }
    // console.log(r);    
    return r
    
  }

  dispOuttime(t) {
    let r = []

    if (!!t) {
      let otm = new Date('1970-01-01 ' + t[1]);
      let oTime = new Date(`1970-01-01 ${this.outTime}:00`)
      let odiff = (otm.getTime() - oTime.getTime());
      let oresult = Math.round(odiff / 60000);
      if (oresult < 0) {
        r = [oresult, true]
      }
      else {
        r = [oresult, false]
      }
    }
    else {
      r = ['', false]
    }
 

    return r

  }

  dispEmp(x){
   let emp = this.empdata.find(o => o.EmployeeCode === x);
  
   
   return(emp.EmployeeName)
  //   AadhaarNumber: "201900071"
  // Designation: "JAO"
  // EmployeeCode: "49"
  // EmployeeName: "PAKA SUPRIYA"
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
