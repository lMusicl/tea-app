import { Component, OnInit } from '@angular/core';
import { ProductType } from "../../../../types/product.type";
import { ProductService } from "../../../shared/services/product.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  public products: ProductType[] = [];

  loading: boolean = false;
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.loading = true;
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.loading = false;
        this.products = data;
        console.log(data)
      },
      error: (error) => {
        this.router.navigate(['/']);
      }
    });
  }
}
