import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CatalogComponent} from "./catalog/catalog.component";
import {ProductComponent} from "./product/product.component";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {ProductsRoutingModule} from "./products-routing.module";



@NgModule({
  declarations: [
    CatalogComponent,
    ProductComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
