# APM-Demo0

Starter files with no NgRx added.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Notas:

- Ngrx-store-freeze: Obliga a que no se pueda modificar el estado desde cualquier parte del codigo.
- Los reducers modifican el estado y deben ser inmutables por lo tanto deben devolver una nueva copia.
- Las acciones reportan al store que se debe cambiar algo, tienen un tipo y pueden tener una carga variable para guardar en el store.
- Es buena practica implementar el tipado del código para evitar problemas al escribir una variable mal o crear una variable no deseada.
- Los selectores se puede componer de otros selectores, esto se hace con el fin de abstraer el funcionamiento: por ejemplo si se tiene una lista de productos y un id, se pueden usar esos dos selectors, así si en algún momento cambia la estructura dónde se encuentra el id del producto seleccionado no habría que cambiar la lógica en ninguna otra parte
- Los selector sirven para abstraer la estructura de los datos, si en algún momento cambia la estructura del store solo se necesita cambiar ese selector.

Retos:
  1. Implementar el funcionamiento del MaskUsername en el store
  **Completado**

  2. Implementar tipado en el state de los usarios.
  **Completado**