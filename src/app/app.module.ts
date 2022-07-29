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

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent, 
    DispTableComponent, UserRegisterComponent, UserLoginComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
   
  ],


  providers: [ToastrService],
  bootstrap: [AppComponent]
})


export class AppModule { }
