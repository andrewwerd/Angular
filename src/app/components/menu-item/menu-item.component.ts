import { Component, Input, OnInit } from '@angular/core';
import { IconName, IconPrefix, IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {

  @Input()
  iconType: 'solid' | 'regular' | 'brand' = 'solid';

  @Input()
  iconName: IconName | undefined;

  @Input()
  label = '';

  @Input()
  description = '';


  get displayIcon(): boolean {
    return Boolean(this.iconName);
  }

  get faIcon(): IconProp {
    return [`fa${this.iconType[0]}` as IconPrefix, this.iconName!]
  }
}
