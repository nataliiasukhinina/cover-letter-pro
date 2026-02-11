import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';

@NgModule({
  declarations: [
    NavigationComponent,
    ProfileHeaderComponent,
    ClickOutsideDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    NavigationComponent,
    ProfileHeaderComponent,
    ClickOutsideDirective,
    MaterialModule
  ]
})
export class SharedModule { }
