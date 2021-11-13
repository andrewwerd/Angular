import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TimeUtils } from '@utils';
import { Floor } from './floor-tile/floor-tile.component';

@Component({
  selector: 'app-floors-grid',
  templateUrl: './floors-grid.component.html',
  styleUrls: ['./floors-grid.component.scss']
})
export class FloorsGridComponent implements OnInit {

  bookingForm: FormGroup | undefined;
  floors: Floor[] = [{
    id: 0,
    number: '6',
    freePlaces: 10
  },
  {
    id: 0,
    number: '7',
    freePlaces: 10
  },
  {
    id: 0,
    number: '8',
    freePlaces: 10
  },
  {
    id: 0,
    number: '9',
    freePlaces: 10
  },
  {
    id: 0,
    number: '10',
    freePlaces: 10
  },
  {
    id: 0,
    number: '11',
    freePlaces: 11
  },
  {
    id: 0,
    number: '12',
    freePlaces: 12
  }];

  minDate: Date = new Date()
  constructor() {
    TimeUtils.oneDayBefore(this.minDate);
    this.bookingForm = new FormGroup({
      start: new FormControl(),
      end: new FormControl(),
    });
  }

  ngOnInit(): void { }
}
