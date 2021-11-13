import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [MenuItemComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
   ],
  exports: [MenuItemComponent],
  providers: [],
})
export class MenuItemModule {}
