import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { bioAttendRoutes } from "./bio-attend.routes";
import { BioAttendComponent } from "./bio-attend.component";
import { AuthService } from "../auth.service";
import { AuthGuard } from "../auth.guard";
import { BrowserModule } from "@angular/platform-browser";


@NgModule({
    imports:[
        CommonModule,       
        FormsModule,
        RouterModule.forChild(bioAttendRoutes)
    ],
    declarations:[
        BioAttendComponent
    ],
   
    providers:[AuthService, AuthGuard]
})



export class BioAttendModule{}