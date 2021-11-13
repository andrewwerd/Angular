import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-desk-tile',
  templateUrl: './desk-tile.component.html',
  styleUrls: ['./desk-tile.component.scss']
})
export class DeskTileComponent implements OnInit {
  @Input()
  header: string | undefined;

  @Input()
  startDate: Date | undefined = new Date();

  @Input()
  endDate: Date | undefined = new Date();

  @Input()
  blankDesk: boolean = false;
  constructor() { }

  ngOnInit(): void { }
}
