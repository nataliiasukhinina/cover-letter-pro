import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatchingFieldsValidator} from "../../validators/matching-fields.validator";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', {
        validators: [Validators.required, Validators.pattern('^[a-zA-Z ]*$')],
        updateOn: 'submit'
      }],
      password: ['', {
        validators: [Validators.required],
        updateOn: 'blur'
      }],
      confirmPassword: ['', {
        validators: [Validators.required],
        updateOn: 'blur'
      }]
    }, {
      validators: [MatchingFieldsValidator()]
    });
  }

  onFormSubmit(): void {
    this.loginForm.markAllAsTouched();
    console.log(this.loginForm.hasError('noMatch'))

  }

  hasError(control: string, errorCode: string): boolean {
    return !!(this.loginForm.get(control)?.touched && this.loginForm.get(control)?.hasError(errorCode));
  }

}
