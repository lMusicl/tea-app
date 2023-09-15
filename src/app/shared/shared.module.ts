import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {PopupComponent} from "./components/popup/popup.component";
import {TruncateTextPipe} from "./pipes/truncate-text.pipe";
import {RouterModule} from "@angular/router";

const shared = [
  FooterComponent,
  HeaderComponent,
  PopupComponent,
  TruncateTextPipe
]

@NgModule({
  declarations: [
    ...shared,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ...shared,
  ]
})
export class SharedModule { }
