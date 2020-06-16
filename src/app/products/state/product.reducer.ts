import { createReducer, Action, on } from '@ngrx/store';
import * as fromActions from './product.actions';
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
  on(fromActions.ToggleProductCode, (state, { showProductCode }) => ({ ...state, showProductCode })),
  on(fromActions.SetCurrentProduct, (state, product) => ({ ...state, currentProduct: { ...product } })),
  on(fromActions.ClearCurrentProduct, (state): ProductState => ({ ...state, currentProduct: null })),
  on(fromActions.InitializeCurrentProduct, (state): ProductState => ({
    ...state,
    currentProduct: {
      id: 0,
      productName: '',
      productCode: 'New',
      description: '',
      starRating: 0
    }
  })),
  on(fromActions.loadSuccess, (state, { payload }) => ({ ...state, products: payload }))
);

export function reducer(state: ProductState, action: Action) {
  return featureReducer(state, action);
}
