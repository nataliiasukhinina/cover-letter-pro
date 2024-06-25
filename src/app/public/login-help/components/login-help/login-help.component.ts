import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgIf } from '@angular/common';
import { State } from '../../state/login-help.reducer';

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

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
    this.store.select('loginHelp').subscribe(
      loginHelp => {
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
