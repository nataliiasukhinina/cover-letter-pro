import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable} from "rxjs";
import { BehaviorSubject } from 'rxjs';
import { of } from 'rxjs';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

@Injectable()
export class AuthService {

  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  auth = getAuth();

  constructor(
    private router: Router
  ) {}

  /** signup */
  signUp(email: string, password: string): void {

    createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // ..
      });
  }

  /** confirm code */
  // confirmSignUp(email: string, code: string): Observable<any> {
  //   return fromPromise(Auth.confirmSignUp(email, code));
  // }

  /** signin */
  signIn(email: string, password: string): void {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Signed in
        this.loggedIn.next(true);
        this.router.navigate(['/home']);
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    // onAuthStateChanged(this.auth, (user) => {
    //   if (user) {
    //     this.loggedIn.next(true);
    //     // User is signed in, see docs for a list of available properties
    //     // https://firebase.google.com/docs/reference/js/firebase.User
    //     const uid = user.uid;
    //   } else {
    //     this.loggedIn.next(false);
    //   }
    // });

  }

  /** get authenticated state */
  isAuthenticated(): Observable<boolean> {
    return of(!!this.getUser);
  }

  /** signout */
  signOut() {
    signOut(this.auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  getUser(): any  {
    return this.auth.currentUser;
  }
}
