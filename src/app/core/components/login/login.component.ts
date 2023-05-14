import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatchingFieldsValidator} from "../../validators/matching-fields.validator";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService) {
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
    if(this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      this.authService.signIn(username, password).subscribe(
        (response) => {
        },
        (error) => {
          console.log(error)
        },
        () => {
          this.router.navigate(['/home']);
        }
      );
    }

  }

  hasError(control: string, errorCode: string): boolean {
    return !!(this.loginForm.get(control)?.touched && this.loginForm.get(control)?.hasError(errorCode));
  }

}
