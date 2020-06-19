import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';

const getUserFeaturesState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
  getUserFeaturesState,
  state => state.showProductCode
);

export const getCurrentProduct = createSelector(
  getUserFeaturesState,
  state => state.currentProduct
);

export const getProducts = createSelector(
  getUserFeaturesState,
  state => state.products
);

export const getError = createSelector(
  getUserFeaturesState,
  state => state.error
);
