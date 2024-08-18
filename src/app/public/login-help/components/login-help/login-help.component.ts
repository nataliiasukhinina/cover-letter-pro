import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgIf } from '@angular/common';
import { getShowChatHistory } from '../../state/login-help.selectors';
import { State } from '../../state/login-help.model';
import * as LoginHelpActions from  '../../state/login-help.actions';

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
    this.store.select(getShowChatHistory).subscribe(
      showChatHistory => {
        this.showChatHistory = showChatHistory;
      }
    );
  }

  onChatHistoryToggle() {
    this.store.dispatch(LoginHelpActions.toggleShowChatHistory());
  }
}
