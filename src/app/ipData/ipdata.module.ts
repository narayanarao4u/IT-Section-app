import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IpdataComponent } from "./ipdata.component";
import { ipdataRoutes } from "./ipdata.routes";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild(ipdataRoutes)
    ],
    declarations:[
        IpdataComponent
    ],
    providers:[]
})
export class IpDataModule{}