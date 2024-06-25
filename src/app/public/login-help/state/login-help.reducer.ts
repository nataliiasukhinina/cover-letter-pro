import { createAction, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as AppState from '../../../state/app.state';

export interface State extends AppState.State {
  loginHelp: LoginHelpState;
}

export interface LoginHelpState {
  showChatHistory: boolean;
}

const initialState: LoginHelpState = {
  showChatHistory: true
};

const getShowChatHistoryState = createFeatureSelector<LoginHelpState>('loginHelp');

export const getShowChatHistory = createSelector(
  getShowChatHistoryState,
  state => state.showChatHistory
);

export const loginHelpReducer = createReducer<LoginHelpState>(
  initialState,
  on(createAction('[Login Help] Toggle chat history'), state => {
    return {
      ...state,
      showChatHistory: !state.showChatHistory
    };
  })
);
