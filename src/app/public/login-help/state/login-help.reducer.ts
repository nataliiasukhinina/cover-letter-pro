import { createAction, createReducer, on } from '@ngrx/store';

export const loginHelpReducer = createReducer(
  { showChatHistory: true },
  on(createAction('[Login Help] Toggle chat history'), state => {
    console.log('original state: ' + JSON.stringify(state));
    return {
      ...state,
      showChatHistory: !state.showChatHistory
    };
  })
);
