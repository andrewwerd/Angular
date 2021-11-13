import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-floor-tile',
  templateUrl: './floor-tile.component.html',
  styleUrls: ['./floor-tile.component.scss']
})
export class FloorTileComponent implements OnInit {
  @Input()
  floor: Floor | undefined;

  constructor() { }

  ngOnInit(): void { }
}

export interface Floor {
  id: number;
  number: string;
  freePlaces: number;
}
