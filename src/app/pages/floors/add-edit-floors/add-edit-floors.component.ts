import { Point, DragRef } from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Room } from './rooms/rooms.component';

@Component({
  selector: 'app-add-edit-floors',
  templateUrl: './add-edit-floors.component.html',
  styleUrls: ['./add-edit-floors.component.scss']
})
export class AddEditFloorsComponent implements OnInit {

  selectedMode: 'move' | 'select' = 'select';
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
    return this.selectedMode === 'move';
  }

  ngOnInit(): void { }

  computeDragRenderPos(point: Point, dragRef: DragRef) {
    return { x: Math.floor(point.x / 10) * 10, y: Math.floor(point.y / 10) * 10 }; // will render the element every 30 pixels horizontally
  }

  toggleWallsMode() {
    this.wallsMode = true;
    this.selectedMode = "select";
  }
}
