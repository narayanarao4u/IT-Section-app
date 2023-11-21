import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from '../common/toastr.service';
import { AppDataService } from '../data.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  link = window.location.hostname;

  emp:any;

  btnLogin:any;

  isDisables = true;
  PlaceHolder = "";

  userData = {
    AadhaarNumber:'', //HRMSNO
    EmployeeName:'',
    pwd:''
  }


  constructor(private ds:AppDataService, 
    private _router: Router, private toastr:ToastrService, 
    private auth:AuthService) { }

  login(){
    // console.log(this.userData);
    // console.log(this.userData.pwd === 'bsnl@admin');

    let hrmsno = this.userData.AadhaarNumber;

    let url = `http://${this.link}:${this.ds.port}/api-attend/checkpwd/${hrmsno}?pwd=${this.userData.pwd}`;
    this.ds.getdataLink(url).subscribe((res)=>{
      console.log(res);
      
      if (res['login']) {           
        sessionStorage.setItem('loggedIn','bsnl@123') 
        sessionStorage.setItem('role',this.emp['LoginName']) 
        this._router.navigate(['/attend'])
        this.toastr.success("Login Success")                  
        this.auth.updateCurrentUser(this.userData.AadhaarNumber,  this.userData.EmployeeName)  
        
        }
      else{        
        sessionStorage.removeItem('loggedIn')
        this.toastr.error("Invalid password or user name")  
      }
      
    })

    // if(this.userData.pwd === 'bsnl@123'){
    
    //   sessionStorage.setItem('loggedIn','bsnl@123') 
    //   sessionStorage.setItem('role',this.emp['LoginName']) 
    //   this._router.navigate(['/attend'])
    //   this.toastr.success("Login Success")    
            
    //   this.auth.updateCurrentUser(this.userData.AadhaarNumber,  this.userData.EmployeeName)

    //   }
    // else{
    //   sessionStorage.removeItem('loggedIn')
    // }

  }

  onKeyup(e) {
    
    let hrmsno = e.target.value;
    let url = `http://${this.link}:${this.ds.port}/api-attend/empdata/${hrmsno}`;
    // console.log(url);
    
    if((hrmsno.length==9 && (+hrmsno[0]==1 || +hrmsno[0]==2) )||(hrmsno.length==8 && !(+hrmsno[0]==1 || +hrmsno[0]==2) )){
      this.ds.getdataLink(url).subscribe((res)=>{
        this.emp = res[0]
        //console.log(!!this.emp, this.emp);
        //console.log(!!data);        
        
        if(this.emp) {
          this.userData.EmployeeName = this.emp['EmployeeName'];
          this.userData.AadhaarNumber = this.emp['AadhaarNumber'];
          // console.log(this.emp['LoginPassword']);
       
          
          if(this.emp['LoginName'] != null){
            this.PlaceHolder = "Enter Password "
            this.isDisables = false
          } else {
            this.PlaceHolder = "You are not authorized to access "
            this.isDisables = true
          }         
        }
      })

    } else {
      this.isDisables = true
      this.userData.EmployeeName = ""
      this.PlaceHolder = ""
    }

  }

  ngOnInit(): void {
  
  }

}
