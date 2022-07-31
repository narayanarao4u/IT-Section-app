import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userData = {
    erpno:'',
    name:'',
    pwd:''
  }
  constructor() { }

  login(){
    console.log(this.userData);
    console.log(this.userData.pwd === 'bsnl@admin');

    if(this.userData.pwd === 'bsnl@admin')
      localStorage.setItem('loggedIn','bsnl@admin') 
    else
      localStorage.removeItem('loggedIn')

  }

  ngOnInit(): void {
  }

}
