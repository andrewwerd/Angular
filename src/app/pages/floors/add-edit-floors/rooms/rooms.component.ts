import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  @ViewChild('contextMenu') contextMenu: ElementRef | undefined;

  @Input()
  rooms: Room[] = [];
  @Input()
  disableResize: boolean = false;

  isDisplayContextMenu: boolean = false;
  rightClickMenuPositionX: any | undefined;
  rightClickMenuPositionY: any | undefined;
  selectedRoomId: number | undefined;

  get selectedRoomBorders() {
    if (this.selectedRoomId === undefined) return [];
    const room = this.rooms.find(room => room.id === this.selectedRoomId);
    if (room === undefined) return [];
    return room.borders;
  }

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (this.contextMenu && !this.contextMenu?.nativeElement.contains(e.target)) {
        this.isDisplayContextMenu = false;
      }
    });
  }

  ngOnInit(): void { }

  setBorders(event: any) {
    const room = this.rooms.find(room => room.id === this.selectedRoomId);
    if (room)
      room.borders = event;
  }

  onRightClick(event: any, room: Room) {
    this.isDisplayContextMenu = true;
    this.selectedRoomId = room.id;
    console.log(event)
    this.rightClickMenuPositionX = event.layerX - room.left;
    this.rightClickMenuPositionY = event.layerY - room.top;
  }

  getRightClickMenuStyle() {
    return {
      position: 'fixed',
      left: `${this.rightClickMenuPositionX}px`,
      top: `${this.rightClickMenuPositionY}px`
    }
  }
}

export interface Room {
  id: number;
  top: number;
  left: number;
  width: number;
  height: number;
  borders: ('left' | 'bottom' | 'top' | 'right')[]
}
