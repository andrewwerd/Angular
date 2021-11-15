import { Component } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { DeskSettings, EquipmentType } from 'app/models/desk-settings';

@Component({
  selector: 'app-add-edit-workplace',
  templateUrl: './add-edit-workplace.component.html',
  styleUrls: ['./add-edit-workplace.component.scss']
})
export class AddEditWorkplaceComponent {
  size = 475
  desktopSettings: DeskSettings = {
    equipmentInfo: {
      name: 'desktop',
      os: 'Windows',
      osVersion: '10',
      ram: '15GB',
    },
    equipment: [
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
        type: EquipmentType.monitor,
        horizontalPosition: 'center',
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
      }]
  };
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

  selectedSettings: DeskSettings = this.laptopSettings;

  constructor() { }

  ngOnInit(): void { }

  onToggle(toggle: MatButtonToggleChange) {
    switch (toggle.value) {
      case 'desktop': {
        this.selectedSettings = this.desktopSettings;
        break;
      }
      case 'laptop': {
        this.selectedSettings = this.laptopSettings;
        break;
      }
      case 'nothing': {
        this.selectedSettings = {
          equipment: []
        }
        break;
      }
    }
  }

}
