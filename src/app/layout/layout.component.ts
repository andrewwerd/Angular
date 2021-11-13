import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidebarContent } from '@models';
import { NgOnDestroy } from '@services';
import { ProfileManagerComponent } from './profile-manager/profile-manager.component';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [NgOnDestroy]
})

export class LayoutComponent implements OnInit {

  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav | undefined;
  @ViewChild('manager', { static: true }) manager: ProfileManagerComponent | undefined;

  managePage: SidebarContent | undefined;

  constructor() { }

  ngOnInit(): void { }

  openSidenav(value: SidebarContent) {
    this.managePage = undefined;
    this.manager?.ngOnInit();
    this.managePage = value;
    this.sidenav?.toggle();
  }
}
