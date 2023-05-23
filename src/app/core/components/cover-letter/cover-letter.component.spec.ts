import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverLetterComponent } from './cover-letter.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('CoverLetterComponent', () => {
  let component: CoverLetterComponent;
  let fixture: ComponentFixture<CoverLetterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoverLetterComponent],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(CoverLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
