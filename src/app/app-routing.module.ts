import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispTableComponent } from './disp-table/disp-table.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  {path:'', component:DispTableComponent, pathMatch:'full'},
  {path:'login', component:UserLoginComponent},
  {path:'loginRegister', component:UserRegisterComponent},
  {path:'attend',loadChildren:()=>import('./bio-attend/bio-attend.module').then(m=>m.BioAttendModule)},
  {path:'telephone',loadChildren:()=> import('./tele-phone/tele-phone.module').then(m=>m.TelePhoneModule)},
  {path:'ipdata', loadChildren: ()=> import('./ipData/ipdata.module').then(m=>m.IpDataModule)},
  {path:'assets', loadChildren: ()=> import('./it-assets/it-assets.module').then(m=>m.IpAssetModule)}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
