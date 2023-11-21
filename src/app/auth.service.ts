import { Injectable } from "@angular/core";
import { Iuser } from "./data.model";

@Injectable()
export class AuthService {
    currentUser:Iuser;

    
   
    loggedIn(){
        // console.log(localStorage.getItem('loggedIn'));        
        return !!sessionStorage.getItem('loggedIn')
    }

    updateCurrentUser(hrno,  name){     
        this.currentUser   = {
            hrno:hrno,
            name:name
        }       
    }

    getCurrentUser(){
        return this.currentUser
    }
}