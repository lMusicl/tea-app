import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProductType } from "../../../types/product.type";
import { Observable } from "rxjs";
import {OrderType} from "../../../types/order.type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products: ProductType[] = [];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('https://testologia.site/tea');
  }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(`https://testologia.site/tea?id=${id}`);
  }

  createOrderTea(data: OrderType): Observable<OrderType>{
    return this.http.post<OrderType>('https://testologia.site/order-tea', data);
  }

}
