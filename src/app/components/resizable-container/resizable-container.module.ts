import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizableContainerComponent } from './resizable-container.component';
import { ResizableModule } from 'angular-resizable-element';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ResizableContainerComponent],
  imports: [
    CommonModule,
    ResizableModule
  ],
  exports: [ResizableContainerComponent],
  providers: [],
})
export class ResizableContainerModule { }
