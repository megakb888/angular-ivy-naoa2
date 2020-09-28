import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeleComponent } from "./tele.component";

@NgModule({
  declarations: [TeleComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TeleComponent
  ]
})
export class TeleModule { }
