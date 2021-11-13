import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SidebarContent } from '@models';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  @Output()
  openSettings = new EventEmitter<SidebarContent>();

  email = 'andrei.tirsina@amdaris.com';
  constructor() { }

  ngOnInit(): void { }
}
