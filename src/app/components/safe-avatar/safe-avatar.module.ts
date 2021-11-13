import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeAvatarComponent } from './safe-avatar.component';

@NgModule({
  declarations: [SafeAvatarComponent],
  imports: [CommonModule],
  exports: [SafeAvatarComponent],
  providers: [],
})
export class SafeAvatarModule { }
