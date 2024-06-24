import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { LoginHelpRoutingModule } from './login-help-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginHelpRoutingModule,
    StoreModule.forFeature('login-help', {})
  ]
})
export class LoginHelpModule { }
