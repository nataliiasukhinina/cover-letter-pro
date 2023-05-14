import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable} from "rxjs";
import { BehaviorSubject } from 'rxjs';
import { fromPromise} from "rxjs/internal/observable/innerFrom";
import { map, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import {Amplify,  Auth } from 'aws-amplify';
import {environment} from "../../../environments/environment";

@Injectable()
export class AuthService {

  public loggedIn: BehaviorSubject<boolean>;

  constructor(
    private router: Router
  ) {
    Amplify.configure(environment.amplify);
    this.loggedIn = new BehaviorSubject<boolean>(false);
  }

  /** signup */
  public signUp(email: string, password: string): Observable<any> {
    return fromPromise(Auth.signUp(email, password));
  }

  /** confirm code */
  public confirmSignUp(email: string, code: string): Observable<any> {
    return fromPromise(Auth.confirmSignUp(email, code));
  }

  /** signin */
  public signIn(email: string, password: string): Observable<any> {
    return fromPromise(Auth.signIn(email, password))
      .pipe(
        tap(() => this.loggedIn.next(true))
      );
  }

  /** get authenticated state */
  public isAuthenticated(): Observable<boolean> {
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
  public signOut() {
    fromPromise(Auth.signOut())
      .subscribe(
        result => {
          this.loggedIn.next(false);
          this.router.navigate(['/login']);
        },
        error => console.log(error)
      );
  }
}
