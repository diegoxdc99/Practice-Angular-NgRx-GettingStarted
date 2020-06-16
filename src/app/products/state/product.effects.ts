import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../product.service';
import * as productActions from './product.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Product } from '../product';
import { of } from 'rxjs';
import { Action } from '@ngrx/store';
@Injectable({ providedIn: 'root' })
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) { }

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(productActions.load),
        mergeMap(() =>
          this.productService.getProducts().pipe(
            map((products: Product[]) => productActions.loadSuccess({payload: products})),
            catchError(error => of(productActions.loadFailure({payload: error}))))
          ),
    );
  });
}
