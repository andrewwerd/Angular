import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-editor-toolbar',
  templateUrl: './editor-toolbar.component.html',
  styleUrls: ['./editor-toolbar.component.scss']
})
export class EditorToolbarComponent implements OnInit {
  @Output()
  modeSelected = new EventEmitter<'select' | 'move'>();
  constructor() { }

  ngOnInit(): void { }
}
