import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppNavComponent } from './app-nav/app-nav.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrService } from './common/toastr.service';
import { DispTableComponent } from './disp-table/disp-table.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormsModule } from '@angular/forms';
import { Error404Component } from './errors/404.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { BioAttendComponent } from './bio-attend/bio-attend.component';
import { DispEmpComponent } from './bio-attend/dispEmp.component';
import { changepwdComponent } from './user-login/changepwd.component';
import { PcinfoComponent } from './pcinfo/pcinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    Error404Component,
    BioAttendComponent, DispEmpComponent,
    DispTableComponent, UserRegisterComponent, UserLoginComponent, changepwdComponent, PcinfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule   
  ],
  providers: [ToastrService, AuthService, AuthGuard],
  bootstrap: [AppComponent]  
})

export class AppModule { }
