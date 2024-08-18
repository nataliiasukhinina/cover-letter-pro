import { createAction, createReducer, on } from '@ngrx/store';
import { LoginHelpState } from './login-help.model';
import * as LoginHelpActions from './login-help.actions';

const initialState: LoginHelpState = {
  showChatHistory: true
};

export const loginHelpReducer = createReducer<LoginHelpState>(
  initialState,
  on(LoginHelpActions.toggleShowChatHistory, state => {
    return {
      ...state,
      showChatHistory: !state.showChatHistory
    };
  })
);
