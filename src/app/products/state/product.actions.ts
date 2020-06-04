import { props, createAction } from '@ngrx/store';

export enum ProductActionTypes {
  ToggleProductCode = '[Product] Toggle Product Code',
}

export const action = createAction(ProductActionTypes.ToggleProductCode, );
export const ToggleProductCode  = createAction(
  ProductActionTypes.ToggleProductCode,
  props<{ showProductCode: boolean }>()
);
