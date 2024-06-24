import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatTooltipModule} from "@angular/material/tooltip";
import { HomePageComponent } from './components/home-page/home-page.component';
import {CoreRoutingModule} from "./core-routing.module";
import {SharedModule} from "../shared/shared.module";
import { CoverLetterComponent } from './components/cover-letter/cover-letter.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import {OpenAiInterceptor} from "./interceptors/open-ai.interceptor";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { AppFeaturesComponent } from './components/app-features/app-features.component';



@NgModule({ declarations: [
        LoginComponent,
        HomePageComponent,
        CoverLetterComponent,
        AppFeaturesComponent
    ], imports: [CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatDividerModule,
        MatButtonModule,
        MatListModule,
        MatTooltipModule,
        CoreRoutingModule,
        SharedModule,
        MatProgressSpinnerModule], providers: [
        { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
        { provide: HTTP_INTERCEPTORS, useClass: OpenAiInterceptor, multi: true },
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class CoreModule { }
