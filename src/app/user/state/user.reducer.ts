import { MaskUserName } from './user.action';
import { on, Action, createReducer } from '@ngrx/store';

export interface UserState {
  maskUserName: boolean;
}

const initialState: UserState = {
  maskUserName: true
};


const featureReducer = createReducer(
  initialState,
  on(MaskUserName, (state: UserState) => ({ ...state, maskUserName: !state.maskUserName })),
);

export function reducer(state: UserState, action: Action) {
  return featureReducer(state, action);
}
