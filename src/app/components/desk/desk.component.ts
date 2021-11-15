import { Component, Input, OnInit } from '@angular/core';
import { DeskSettings } from '@models';
import { Equipment } from 'app/models/desk-settings';

@Component({
  selector: 'app-desk',
  templateUrl: './desk.component.html',
  styleUrls: ['./desk.component.scss']
})
export class DeskComponent implements OnInit {
  @Input() selectedSettings: DeskSettings | undefined;

  constructor() { }

  ngOnInit(): void { }
}
