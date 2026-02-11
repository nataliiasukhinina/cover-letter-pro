import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {authGuard} from "./guards/auth.guard";
import {AuthService} from "./services/auth.service";
import {CoverLetterComponent} from "./components/cover-letter/cover-letter.component";
import {AppFeaturesComponent} from "./components/app-features/app-features.component";
import {ProfileComponent} from "./components/profile/profile.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }, {
    path: 'home',
    component: HomePageComponent,
    canActivate: [authGuard]
  }, {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [authGuard]
  }, {
    path: 'settings',
    component: ProfileComponent, // Reuse profile component for settings
    canActivate: [authGuard]
  }, {
    path: 'cover-letter',
    component: CoverLetterComponent,
    canActivate: [authGuard]
  }, {
    path: 'app-features',
    component: AppFeaturesComponent,
    canActivate: [authGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthService
  ]
})

export class CoreRoutingModule {
}
