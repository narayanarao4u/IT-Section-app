import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    constructor(){}

    loggedIn(){
        console.log(localStorage.getItem('loggedIn'));
        
        return !!localStorage.getItem('loggedIn')
    }
}