import { createReducer, Action, on } from '@ngrx/store';
import { ToggleProductCode, ProductActionTypes } from './product.actions';
import { Product } from '../product';
import * as fromRoot from 'src/app/state/app.state';

export interface State extends fromRoot.State {
  products: ProductState;
}

export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}

const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: []
};


const featureReducer = createReducer(
  initialState,
  on(ToggleProductCode, (state, { showProductCode } ): ProductState => ({ ...state, showProductCode })),
);

export function reducer(state: ProductState, action: Action) {
  return featureReducer(state, action);
}
