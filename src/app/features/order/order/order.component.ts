import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {ProductService} from "../../../shared/services/product.service";
import {OrderType} from "../../../../types/order.type";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  checkoutForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('^[a-zа-яA-ZА-Я]+$')]],
    last_name: ['', [Validators.required, Validators.pattern('^[a-zа-яA-ZА-Я]+$')]],
    phone: ['', [Validators.required, Validators.pattern('^\\+?\\d{11}$')]],
    country: ['', [Validators.required, Validators.pattern('^[a-zа-яA-ZА-Я]+$')]],
    zip: ['', Validators.required],
    product: ['', Validators.required],
    address: ['', [Validators.required, Validators.minLength(10)]],
  })

  orderFormShow: boolean = true;
  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) =>{
      if (params['product']){
         this.checkoutForm.get('product')?.setValue(params['product']);
         this.checkoutForm.get('product')?.disable();
      }
    });
  }
  ngAfterViewInit(): void {
    this.scrollToTop();
  }

  private scrollToTop(): void {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
  createOrderTea() {
    if (this.checkoutForm.valid) {
      const orderData: OrderType = {
        name: this.checkoutForm.get('name')?.value ?? '',
        last_name: this.checkoutForm.get('last_name')?.value ?? '',
        phone: this.checkoutForm.get('phone')?.value ?? '',
        country: this.checkoutForm.get('country')?.value ?? '',
        zip: this.checkoutForm.get('zip')?.value ?? '',
        product: this.checkoutForm.get('product')?.value ?? '',
        address: this.checkoutForm.get('address')?.value ?? '',
        comment: this.checkoutForm.get('comment')?.value ?? ''
      };

      this.productService.createOrderTea(orderData).subscribe(
        {
          next: (response: OrderType) => {
            this.orderFormShow = false;
          },
          error: (error: HttpErrorResponse) => {
            console.log(error);
          }
        }
      );
    }
  }

}
