import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "../auth.guard";
import { AuthService } from "../auth.service";
import { ToastrService } from "../common/toastr.service";
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
    providers:[ToastrService, AuthService, AuthGuard]
})
export class IpDataModule{}