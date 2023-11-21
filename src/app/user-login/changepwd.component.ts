import { Component, OnInit } from "@angular/core";

@Component({
    selector:'app-change-pwd',
    templateUrl:'changepwd.component.html',
    styleUrls:['./changepwd.component.css']
})

export class changepwdComponent implements OnInit {
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

    login(){
        return null
    }

    ngOnInit(): void {
        
    }
}