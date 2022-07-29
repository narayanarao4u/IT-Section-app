import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ItAssetsComponent } from "./it-assets.component";
import { itassetsRoutes } from "./it-assets.router";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild(itassetsRoutes)
    ],
    declarations:[
        ItAssetsComponent
    ]
})
export class IpAssetModule{}