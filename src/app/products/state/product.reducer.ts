import { createReducer, Action, on } from '@ngrx/store';
import { ToggleProductCode, SetCurrentProduct, InitializeCurrentProduct, ClearCurrentProduct } from './product.actions';
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
  on(ToggleProductCode, (state, { showProductCode }) => ({ ...state, showProductCode })),
  on(SetCurrentProduct, (state, product) => ({ ...state, currentProduct: { ...product } })),
  on(ClearCurrentProduct, (state): ProductState => ({ ...state, currentProduct: null })),
  on(InitializeCurrentProduct, (state): ProductState => ({
    ...state,
    currentProduct: {
      id: 0,
      productName: '',
      productCode: 'New',
      description: '',
      starRating: 0
    }
  })),
);

export function reducer(state: ProductState, action: Action) {
  return featureReducer(state, action);
}
