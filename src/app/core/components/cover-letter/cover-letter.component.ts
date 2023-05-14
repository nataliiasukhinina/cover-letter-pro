import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'demo-cover-letter',
  templateUrl: './cover-letter.component.html',
  styleUrls: ['./cover-letter.component.css']
})
export class CoverLetterComponent implements OnInit {

  coverLetterForm!: FormGroup;
  coverLetterText: string = 'test';
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initCoverLetterForm();
  }

  initCoverLetterForm(): void {

    this.coverLetterForm = this.formBuilder.group({
      company: ['', Validators.compose([Validators.required, Validators.maxLength(25)])],
      position: ['', Validators.compose([Validators.required, Validators.maxLength(25)])]
    });

  }

  getCoverLetter(): void {

  }

  hasError(control: string, errorCode: string): boolean {
    return !!(this.coverLetterForm.get(control)?.touched && this.coverLetterForm.get(control)?.hasError(errorCode));
  }
}
