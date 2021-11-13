import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-safe-avatar',
  templateUrl: './safe-avatar.component.html',
  styleUrls: ['./safe-avatar.component.scss']
})
export class SafeAvatarComponent {

  @Input()
  size: number = 30;

  @Input()
  name: string = '';

  image = 'url(https://omiliya.org/sites/default/files/img_articles/5_2.jpeg)';

  get initials(): string {
    return this.name.split(' ').reduce((initials, name) => initials += name[0], '').toLocaleUpperCase();
  }
}
