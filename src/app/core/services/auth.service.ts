import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable} from "rxjs";
import { BehaviorSubject } from 'rxjs';
import { fromPromise} from "rxjs/internal/observable/innerFrom";
import { map, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import {Amplify,  Auth } from 'aws-amplify';
import {environment} from "../../../environments/environment";
import {User} from "../models/User";

@Injectable()
export class AuthService {

  loggedIn: BehaviorSubject<boolean>;

  constructor(
    private router: Router
  ) {
    Amplify.configure(environment.amplify);
    this.loggedIn = new BehaviorSubject<boolean>(false);
  }

  /** signup */
  signUp(email: string, password: string): Observable<any> {
    return fromPromise(Auth.signUp(email, password));
  }

  /** confirm code */
  confirmSignUp(email: string, code: string): Observable<any> {
    return fromPromise(Auth.confirmSignUp(email, code));
  }

  /** signin */
  signIn(email: string, password: string): Observable<any> {
    return fromPromise(Auth.signIn(email, password))
      .pipe(
        tap(() => this.loggedIn.next(true))
      );
  }

  /** get authenticated state */
  isAuthenticated(): Observable<boolean> {
    return fromPromise(Auth.currentAuthenticatedUser())
      .pipe(
        map(result => {
          this.loggedIn.next(true);
          return true;
        }),
        catchError(error => {
          console.log(error)
          this.loggedIn.next(false);
          return of(false);
        })
      );
  }

  /** signout */
  signOut() {
    fromPromise(Auth.signOut())
      .subscribe(
        result => {
          this.loggedIn.next(false);
          this.router.navigate(['/login']);
        },
        error => console.log(error)
      );
  }

  getUser(): Observable<User> {
    return fromPromise(Auth.currentUserInfo());
  }
}
