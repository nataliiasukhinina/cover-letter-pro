import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgIf } from '@angular/common';

@Component({
  selector: 'demo-login-help',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './login-help.component.html',
  styleUrl: './login-help.component.css'
})
export class LoginHelpComponent implements OnInit {

  showChatHistory = false;

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    this.store.select('login-help').subscribe(
      loginHelp => {
        console.log(loginHelp)
        this.showChatHistory = loginHelp.showChatHistory;
      }
    );
  }

  onChatHistoryToggle() {
    this.store.dispatch({
      type: '[Login Help] Toggle chat history'
    });
  }
}
