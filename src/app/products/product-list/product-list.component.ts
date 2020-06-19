import { Component, OnInit, OnDestroy } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { Store, select } from '@ngrx/store';
import * as fromProduct from '../state';
import * as productActions from '../state/product.actions';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  displayCode: boolean;
  products: Product[];

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;
  componentActive = true;
  products$: Observable<Product[]>;
  errorMessage$: Observable<string>;

  constructor(private productService: ProductService,
              private store: Store<any>) { }

  ngOnInit(): void {
    this.store.pipe(
      select(fromProduct.getCurrentProduct),
      takeWhile(() => this.componentActive)
    ).subscribe(
      currentProduct => this.selectedProduct = currentProduct
    );

    this.errorMessage$ = this.store.pipe(select(fromProduct.getError));
    this.store.dispatch(productActions.load());
    this.products$ = this.store.pipe(select(fromProduct.getProducts));

    // this.productService.getProducts().subscribe({
    //   next: (products: Product[]) => this.products = products,
    //   error: (err: any) => this.errorMessage = err.error
    // });

    this.store.pipe(
      select(fromProduct.getShowProductCode),
      takeWhile(() => this.componentActive),
    ).subscribe(
      showProductCode => this.displayCode = showProductCode
    );
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  checkChanged(value: boolean): void {
    this.store.dispatch(productActions.ToggleProductCode({showProductCode: value}));
  }

  newProduct(): void {
    this.store.dispatch(productActions.InitializeCurrentProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(productActions.SetCurrentProduct(product));
  }

}
