import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { LoginHelpComponent } from './components/login-help/login-help.component';

const routes: Routes = [
  {
    path: 'login-help',
    component: LoginHelpComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class LoginHelpRoutingModule {
}
