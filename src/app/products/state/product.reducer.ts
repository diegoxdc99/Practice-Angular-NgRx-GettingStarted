import { createReducer, Action, on } from '@ngrx/store';
import { ToggleProductCode } from './product.actions';

export interface ProductState {
  showProductCode: boolean;
}

const initialState: ProductState = {
  showProductCode: false
};


const featureReducer = createReducer(
  initialState,
  on(ToggleProductCode, (state, { showProductCode } ) => ({ ...state, showProductCode })),
);

export function reducer(state: ProductState, action: Action) {
  console.log('existing state: ', state);
  console.log('payload :>> ', action);
  return featureReducer(state, action);
}
