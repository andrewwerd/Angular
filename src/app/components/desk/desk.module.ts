import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeskComponent } from './desk.component';

@NgModule({
  declarations: [DeskComponent],
  imports: [
    CommonModule
  ],
  exports: [DeskComponent],
  providers: [],
})
export class DeskModule { }
