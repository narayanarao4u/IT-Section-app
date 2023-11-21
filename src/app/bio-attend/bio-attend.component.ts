import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../data.service';
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
    mn:"10_2022",
    role:'ALL'
  }
  dataList:Array<any>
  dataListALL:Array<any>
  tcaption:any
  inTime = '10:30';
  outTime = '17:30';

  allemp = false

  days = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
   
  constructor(private ds:AppDataService, private http:HttpClient) { }

  
  getempdata(){
    const url = `http://${this.link}:${this.ds.port}/api-attend/empdata`;
    this.ds.getdataLink(url).subscribe((res)=>{
      this.empdata = res;      
    })
  }

  getAttendence(){
    //console.log('datarow', this.datarow);
    
    const url = `http://${this.link}:${this.ds.port}/api-attend/memdata`;

    this.allemp = this.datarow.emp === '100'? true : false    

  

    console.log(this.datarow);

    

    this.http.post(url, this.datarow).subscribe((res:Array<any>)=>{
     
      //console.log(res);

      if (this.allemp) {
        // console.log( this.allemp);
        let a = []
        // a = this.dataList
        a = res
        // console.log(typeof a[0].logDate);      
        let pv = a.reduce((a, b) => {
          a[b.UserID] = a[b.UserID] || [];
          a[b.UserID].push({ [b.logDate.slice(-2)]: [b.inTime.substring(0, 5), b.outTime.substring(0, 5)] });
          return a;
        }, {});

        var pvs = Object.keys(pv).map(function (k) {
          return { UserID: k, dt: Object.assign.apply({}, pv[k]) };
        });
        this.dataListALL = pvs
        this.dataList = null
        // console.log(this.dataList);
        
      } else {
        this.dataList = res
        this.dataListALL = null
        this.tcaption = `Name : ${this.datarow.emp}, Month :  ${this.datarow.mn}`  
      }
         
     //console.log(this.dataList);
      
          
    
  })
  }

  empAtd(id) {
    this.datarow.emp = id;
    this.getAttendence()
  }

  dispWeek(x, n){
    let t =  this.datarow.mn.split("_")
    let t2;
    if(n === 2){
      t2 = new Date(`${t[1]}-${t[0]}-${x}`).toString()
    } else if (n === 3) {
      t2 = new Date(x).toString()
    } 
    
    return t2.substr(0,n)
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
  
   
   return(emp)
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
    this.datarow.role = sessionStorage.getItem('role')  
  }

}
