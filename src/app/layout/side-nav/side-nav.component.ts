import { Component, OnInit } from '@angular/core';
import { NavItem } from '@models';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  navItems: NavItem[] = [{
    displayName: 'Home',
    icon: 'home',
    link: '/home'
  },
  {
    displayName: 'Floors',
    icon: 'layer-group',
    link: '/floors'
  }];
  constructor() { }

  ngOnInit(): void { }
}
