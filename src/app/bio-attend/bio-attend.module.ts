import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { bioAttendRoutes } from "./bio-attend.routes";
import { BioAttendComponent } from "./bio-attend.component";


@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild(bioAttendRoutes)
    ],
    declarations:[
        BioAttendComponent
    ],
    providers:[]
})



export class BioAttendModule{}