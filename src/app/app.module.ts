import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {CoreModule} from "./core/core.module";
import {AmplifyAuthenticatorModule} from "@aws-amplify/ui-angular";
import {Amplify} from "aws-amplify";
// @ts-ignore
import awsconfig from '../aws-exports';
import {SharedModule} from "./shared/shared.module";
import { StoreModule } from '@ngrx/store';
import { LoginHelpModule } from './public/login-help/login-help.module';

Amplify.configure(awsconfig);

const featureModules = [
  LoginHelpModule
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    AmplifyAuthenticatorModule,
    SharedModule,
    StoreModule.forRoot({}, {}),
    ...featureModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
