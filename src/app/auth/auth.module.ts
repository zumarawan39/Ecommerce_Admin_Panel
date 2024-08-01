import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    FooterComponent,
    HeaderComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
   ReactiveFormsModule
  ]
})
export class AuthModule { }
