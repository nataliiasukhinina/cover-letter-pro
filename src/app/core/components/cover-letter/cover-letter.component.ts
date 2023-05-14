import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OpenAiService} from "../../services/open-ai.service";

@Component({
  selector: 'demo-cover-letter',
  templateUrl: './cover-letter.component.html',
  styleUrls: ['./cover-letter.component.css']
})
export class CoverLetterComponent implements OnInit {

  coverLetterForm!: FormGroup;
  coverLetterText: string = 'test';
  constructor(private formBuilder: FormBuilder,
              private openAiService: OpenAiService) {
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
    if(this.coverLetterForm.valid) {
      const company = this.coverLetterForm.get('company')?.value;
      const position = this.coverLetterForm.get('position')?.value;
      const body = {
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": `Write cover letter for ${position} at ${company}`}],
        "max_tokens": 500,
        "temperature": 0
      }

      this.openAiService.getCompletition(body).subscribe(
        (response) => {
          this.coverLetterText = response.choices[0].message.content
        }
      );
    }

  }

  hasError(control: string, errorCode: string): boolean {
    return !!(this.coverLetterForm.get(control)?.touched && this.coverLetterForm.get(control)?.hasError(errorCode));
  }
}
