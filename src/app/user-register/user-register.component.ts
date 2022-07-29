import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
userData = {
  erpno:'',
  name:'',
  pwd:''
}
  constructor() { }

  register(){
    console.log(this.userData);
    
  }

  ngOnInit(): void {

  }

}
