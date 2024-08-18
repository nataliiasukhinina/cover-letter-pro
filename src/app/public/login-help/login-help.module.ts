import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { LoginHelpRoutingModule } from './login-help-routing.module';
import { loginHelpReducer } from './state/login-help.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginHelpRoutingModule,
    StoreModule.forFeature('loginHelp', loginHelpReducer)
  ]
})
export class LoginHelpModule { }
