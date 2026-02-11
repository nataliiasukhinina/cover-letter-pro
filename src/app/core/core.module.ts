import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './components/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CoverLetterComponent } from './components/cover-letter/cover-letter.component';
import { AppFeaturesComponent } from './components/app-features/app-features.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterModule } from '@angular/router';
import { ProfileService } from './services/profile.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    LoginComponent,
    HomePageComponent,
    CoverLetterComponent,
    AppFeaturesComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    CoreRoutingModule,
    RouterModule
  ],
  providers: [
    ProfileService,
    AuthService
  ]
})
export class CoreModule { }
