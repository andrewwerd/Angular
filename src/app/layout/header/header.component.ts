import {  Component,  EventEmitter,  OnInit, Output} from '@angular/core';
import { SidebarContent } from '@models';
import { NgOnDestroy } from '@services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [NgOnDestroy]
})
export class HeaderComponent implements OnInit {
  @Output()
  openSidebar = new EventEmitter<SidebarContent>();

  constructor(
  ) { }

  ngOnInit(): void {
  }
}
