import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { telephoneRoutes } from "./tele-phone.route";
import { FormsModule } from '@angular/forms';
import { TelePhoneComponent, PhoneFilterPipe, TelePhoneRowComponent } from './index';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild(telephoneRoutes)
    ],
    declarations:[
        PhoneFilterPipe,
        TelePhoneComponent,
        TelePhoneRowComponent
        
    ]
})

export class TelePhoneModule{}