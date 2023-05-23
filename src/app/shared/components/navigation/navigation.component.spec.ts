import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import {AuthService} from "../../../core/services/auth.service";

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let authServiceMock!: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationComponent],
      providers: [
        {provide: AuthService, useValue: authServiceMock}
      ]
    });
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
