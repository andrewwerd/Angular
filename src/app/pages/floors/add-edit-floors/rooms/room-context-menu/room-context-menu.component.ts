import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-room-context-menu',
  templateUrl: './room-context-menu.component.html',
  styleUrls: ['./room-context-menu.component.scss']
})
export class RoomContextMenuComponent implements OnInit {
  @Input()
  borders: ('left' | 'bottom' | 'top' | 'right')[] = [];
  @Output()
  bordersChanged = new EventEmitter <('left' | 'bottom' | 'top' | 'right')[]>();
  constructor() { }

  ngOnInit(): void { }

  onBorderSelected(event: any) {this.bordersChanged.emit(event)}
}
