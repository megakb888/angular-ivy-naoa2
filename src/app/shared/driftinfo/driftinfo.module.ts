import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriftinfoComponent } from "./driftinfo.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [DriftinfoComponent],
  imports: [
    CommonModule,
    NgbModule
  ]
})
export class DriftinfoModule { }
