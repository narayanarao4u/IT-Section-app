import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  link = window.location.hostname;

  userData = {
    erpno:'',
    name:'',
    pwd:''
  }
  constructor(private ds:DataService) { }

  login(){
    console.log(this.userData);
    console.log(this.userData.pwd === 'bsnl@admin');

    if(this.userData.pwd === 'bsnl@admin')
      localStorage.setItem('loggedIn','bsnl@admin') 
    else
      localStorage.removeItem('loggedIn')

  }

  onKeyup(e) {
    
    let hrmsno = e.target.value;
    let url = `http://${this.link}:3005/api-attend/empdata/${hrmsno}`;
    console.log(url);
    
    if((hrmsno.length==9 && (+hrmsno[0]==1 || +hrmsno[0]==2) )||(hrmsno.length==8 && !(+hrmsno[0]==1 || +hrmsno[0]==2) )){
      this.ds.getdataLink(url).subscribe((res)=>{
        let data = res['data']
        // console.log(!!data);
        console.log(!!data);
        
        // if(data) {
        //   this.user1 = data['User'];
        //   this.desgn = data['desgn'];
        //   this.hideExchg1(this.desgn)
        // }


      })

    }   

  }

  ngOnInit(): void {
  }

}
