import { Component } from "@angular/core"

@Component({
    selector: 'app-404',
    template:`<h1 class="errorMessage"> 404'd </h1>`,
    styles:[`
        .errorMessage {
            margin-top:150px;
            font-size:170px;
            text-align:center;
            text-shadow: 8px 8px 4px black;
            color: pink;
        }`]
})

export class Error404Component{
    constructor(){ }
}