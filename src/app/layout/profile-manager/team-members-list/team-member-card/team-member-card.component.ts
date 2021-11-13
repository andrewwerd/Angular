import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-member-card',
  templateUrl: './team-member-card.component.html',
  styleUrls: ['./team-member-card.component.scss']
})
export class TeamMemberCardComponent implements OnInit {
  @Input()
  teamMember: { email: string } | undefined

  constructor() {

  }
  ngOnInit(): void { }
}
