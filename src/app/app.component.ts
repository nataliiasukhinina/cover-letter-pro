import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {AuthService} from "./core/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'demo-app';
  subscription!: Subscription;
  isLoggedIn: boolean = false;
  user: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.loggedIn.subscribe(
      (value: boolean) => {
        this.isLoggedIn = value;
        if(this.isLoggedIn) {
          this.authService.getUser().subscribe(
            (response) => {
              this.user = response.username;
            }
          );
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClickLogout() {
    this.authService.signOut();
  }
}
