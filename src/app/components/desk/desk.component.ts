import { Component, Input, OnInit } from '@angular/core';
import { DeskSettings } from '@models';
import { Equipment } from 'app/models/desk-settings';

@Component({
  selector: 'app-desk',
  templateUrl: './desk.component.html',
  styleUrls: ['./desk.component.scss']
})
export class DeskComponent implements OnInit {

  @Input() size: number | undefined;

  @Input() selectedSettings: DeskSettings | undefined;


  constructor() { }

  ngOnInit(): void { }

  getTopOffset(equipment: Equipment): string {
    let value = '';
    switch (equipment.verticalPosition) {
      case 'top': {
        value = `calc(30% - ${equipment.width / 2}px)`;
        break;
      }
      case 'center': {
        value = `calc(50% - ${equipment.width / 2}px)`;
        break;
      }
      case 'bottom': {
        value = `calc(70% - ${equipment.width / 2}px)`;
        break;
      }
    }

    return value;
  }

  getLeftOffset(equipment: Equipment): string {
    let value = '';
    switch (equipment.horizontalPosition) {
      case 'left': {
        value = `calc(80% - ${equipment.width / 2}px)`;
        break;
      }
      case 'center': {
        value = `calc(50% - ${equipment.width / 2}px)`;
        break;
      }
      case 'right': {
        value = `calc(20% - ${equipment.width / 2}px)`;
        break;
      }
    }

    return value;
  }
}
