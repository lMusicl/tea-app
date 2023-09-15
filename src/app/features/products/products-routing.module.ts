import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatalogComponent} from "./catalog/catalog.component";
import {ProductComponent} from "./product/product.component";
import {OrderComponent} from "../order/order/order.component";

const routes: Routes = [
  {path: 'catalog', component: CatalogComponent },
  {path: 'catalog/:id', component: ProductComponent },
  {path: 'order', component: OrderComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
