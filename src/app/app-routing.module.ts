import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BioAttendComponent } from './bio-attend/bio-attend.component';
import { DispTableComponent } from './disp-table/disp-table.component';
import { Error404Component } from './errors/404.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  {path:'test', component:DispTableComponent},
  {path:'login', component:UserLoginComponent},
  {path:'loginRegister', component:UserRegisterComponent},  
  {path:'attend',component:BioAttendComponent, canActivate:[AuthGuard]},
  {path:'telephone',loadChildren:()=> import('./tele-phone/tele-phone.module').then(m=>m.TelePhoneModule)},
  {path:'ipdata', loadChildren: ()=> import('./ipData/ipdata.module').then(m=>m.IpDataModule)},
  {path:'assets', loadChildren: ()=> import('./it-assets/it-assets.module').then(m=>m.IpAssetModule)},
  {path:'404',component:Error404Component}, 
  {path:'',redirectTo:'/test', pathMatch:'full'}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
