import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent implements OnInit {

  btnLog ='Login'

  constructor(public auth:AuthService) { }

  logout(){
    console.log(this.auth.currentUser);
    sessionStorage.clear()
  }

  ngOnInit(): void {
    
    return null;

  }

 

}
