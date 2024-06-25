import * as AppState from '../../../state/app.state';

export interface State extends AppState.State {
  loginHelp: LoginHelpState;
}

export interface LoginHelpState {
  showChatHistory: boolean;
}
