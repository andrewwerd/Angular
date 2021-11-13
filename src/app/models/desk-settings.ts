export interface DeskSettings {
  equipmentInfo?: EquipmentInfo
  equipment: Equipment[]
}

export interface EquipmentInfo {
  name: string,
  os: string,
  osVersion: string,
  ram: string
}

export interface Equipment {
  type: EquipmentType
  horizontalPosition: 'left' | 'center' | 'right'
  verticalPosition: 'top' | 'center' | 'bottom'
  className: string
  imageSrc: string
  width: number
}

export enum EquipmentType {
  laptop,
  monitor,
  mouse,
  keyboard
}
