import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IconName } from '@fortawesome/fontawesome-common-types';
import { StringUtils } from '@utils';

@Component({
  selector: 'app-editor-toolbar',
  templateUrl: './editor-toolbar.component.html',
  styleUrls: ['./editor-toolbar.component.scss']
})
export class EditorToolbarComponent implements OnInit {
  @Output()
  actionSelected = new EventEmitter<'select' | 'move' | 'resize'>();
  @Output()
  modeSelected = new EventEmitter<'floor' | 'room' | 'desk'>();
  constructor() { }
  selectedEntity: 'floor' | 'room' | 'desk' = 'floor';
  options: { entity: string; actions: { type: string; icon: IconName }[] }[] = [
    {
      entity: 'floor',
      actions: [
        { type: 'select', icon: 'mouse-pointer' },
        { type: 'move', icon: 'arrows-alt' },
      ]
    },
    {
      entity: 'room',
      actions: [
        { type: 'select', icon: 'mouse-pointer' },
        { type: 'move', icon: 'arrows-alt' },
        { type: 'resize', icon: 'expand-arrows-alt' },
      ]
    },
    {
      entity: 'desk',
      actions: [
        { type: 'select', icon: 'mouse-pointer' },
        { type: 'move', icon: 'arrows-alt' },
      ]
    },
  ]

  get entityHeader() {
    return StringUtils.capitalize(this.selectedEntity);
  }
  get selectedOptionActions() {
    return this.options.find(option => option.entity === this.selectedEntity)?.actions;
  }
  ngOnInit(): void { }

  setEntity(entity: 'floor' | 'room' | 'desk') {
    this.selectedEntity = entity;
    this.modeSelected.emit(entity);
  }
}
