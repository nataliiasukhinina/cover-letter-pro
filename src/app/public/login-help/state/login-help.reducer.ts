import { createAction, createReducer, on } from '@ngrx/store';
import * as AppState from '../../../state/app.state';

export interface State extends AppState.State {
  loginHelp: LoginHelpState;
}

export interface LoginHelpState {
  showChatHistory: boolean;
}

export const loginHelpReducer = createReducer<LoginHelpState>(
  { showChatHistory: true },
  on(createAction('[Login Help] Toggle chat history'), state => {
    return {
      ...state,
      showChatHistory: !state.showChatHistory
    };
  })
);
