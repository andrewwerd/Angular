import { Component, Input, OnInit } from '@angular/core';
import { DeskSettings } from '@models';
import { EquipmentType } from 'app/models/desk-settings';

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
  laptopSettings: DeskSettings = {
    equipmentInfo: {
      name: 'desktop',
      os: 'Windows',
      osVersion: '10',
      ram: '15GB',
    },
    equipment: [
      {
        type: EquipmentType.laptop,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        className: 'laptop',
        imageSrc: '../../../assets/desk-icons/laptop.png'
      },
      {
        type: EquipmentType.monitor,
        horizontalPosition: 'left',
        verticalPosition: 'top',
        className: 'monitor',
        imageSrc: '../../../assets/desk-icons/monitor.png'
      },
      {
        type: EquipmentType.monitor,
        horizontalPosition: 'right',
        verticalPosition: 'top',
        className: 'monitor',
        imageSrc: '../../../assets/desk-icons/monitor.png'
      },
      {
        type: EquipmentType.keyboard,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        className: 'keyboard',
        imageSrc: '../../../assets/desk-icons/keyboard.png'
      },
      {
        type: EquipmentType.mouse,
        horizontalPosition: 'left',
        verticalPosition: 'middle',
        className: 'mouse',
        imageSrc: '../../../assets/desk-icons/mouse.png'
      }
    ]
  }
  ngOnInit(): void { }
}
