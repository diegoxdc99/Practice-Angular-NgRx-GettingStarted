import { createAction } from '@ngrx/store';

const enum UserActionTypes {
  MaskUserName = '[User] Mask User Name'
}

export const MaskUserName = createAction(
  UserActionTypes.MaskUserName
);
