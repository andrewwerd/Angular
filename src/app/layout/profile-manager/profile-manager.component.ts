import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SidebarContent } from '@models';
import { StringUtils } from '@utils';

@Component({
  selector: 'app-profile-manager',
  templateUrl: './profile-manager.component.html',
  styleUrls: ['./profile-manager.component.scss']
})
export class ProfileManagerComponent implements OnInit {

  @Input()
  managePage: SidebarContent | undefined;

  @Output()
  closeManager = new EventEmitter<boolean>();
  constructor() { }

  get header(): string {
    return `Manage ${StringUtils.capitalize(this.managePage!)}`;
  }

  ngOnInit(): void {}
}
