import { props, createAction } from '@ngrx/store';
import { Product } from '../product';

export enum ProductActionTypes {
  ToggleProductCode = '[Product] Toggle Product Code',
  SetCurrentProduct = '[Product] Set Current Product',
  ClearCurrentProduct = '[Product] Clear Current Product',
  InitializeCurrentProduct = '[Product] Initialize Current Product',
  load = '[Product] Load',
  loadSuccess = '[Product] Load Success',
  loadFail = '[Product] Load Fail'
}

export const ToggleProductCode = createAction(
  ProductActionTypes.ToggleProductCode,
  props<{ showProductCode: boolean }>()
);

export const SetCurrentProduct = createAction(
  ProductActionTypes.SetCurrentProduct,
  props<Product>()
);

export const ClearCurrentProduct = createAction(
  ProductActionTypes.ClearCurrentProduct
);

export const InitializeCurrentProduct = createAction(
  ProductActionTypes.InitializeCurrentProduct
);

export const load = createAction(
  ProductActionTypes.load
);

export const loadSuccess = createAction(
  ProductActionTypes.loadSuccess,
  props<{payload: Product[]}>()
);

export const loadFailure = createAction(
  ProductActionTypes.load,
  props<{payload: string}>()
);
