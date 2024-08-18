import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginHelpState } from './login-help.model';

const getShowChatHistoryState = createFeatureSelector<LoginHelpState>('loginHelp');

export const getShowChatHistory = createSelector(
  getShowChatHistoryState,
  state => state.showChatHistory
);

