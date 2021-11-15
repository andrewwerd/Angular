import { Point, DragRef } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Room } from './rooms/rooms.component';

@Component({
  selector: 'app-add-edit-floors',
  templateUrl: './add-edit-floors.component.html',
  styleUrls: ['./add-edit-floors.component.scss']
})
export class AddEditFloorsComponent implements OnInit {

  selectedMode: 'floor' | 'room' | 'desk' = 'floor';
  selectedAction: 'move' | 'select' | 'resize' = 'select';
  wallsMode: boolean = false;


  rooms: Room[] = [{
    id: 1,
    width: 100,
    top: 0,
    left: 0,
    height: 150,
    borders: ['top', 'left', 'right']
  }]

  constructor() {
  }

  get isMoveModeSelected() {
    return this.selectedAction === 'move';
  }

  get isFloorMoveActive() {
    return this.selectedMode === 'floor' && this.selectedAction === 'move'
  }

  ngOnInit(): void { }

  computeDragRenderPos(point: Point, dragRef: DragRef) {
    return { x: Math.floor(point.x / 10) * 10, y: Math.floor(point.y / 10) * 10 }; // will render the element every 30 pixels horizontally
  }

  refreshFloorPosition(event: any) {
    this.rooms.forEach(room => {
      room.top += event.distance.y;
      room.left += event.distance.x;
    });
  }

  toggleWallsMode() {
    this.wallsMode = true;
    this.selectedAction = "select";
  }
}
