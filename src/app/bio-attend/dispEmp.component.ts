import { Component, Input } from "@angular/core";

@Component({
    selector:'disp-Emp',
    template:`
    <div>
       {{emp.AadhaarNumber}}  <br>  
      <b>{{emp.EmployeeName}}</b>, <i>{{emp.Designation}}</i>
    </div>
    `,
    styles:[`
    div{ 
        cursor: pointer;   
        padding-left: 5px;           
    }    
    `]
})
export class DispEmpComponent{
    @Input() emp:any
}