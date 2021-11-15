import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-resizable-container',
  templateUrl: './resizable-container.component.html',
  styleUrls: ['./resizable-container.component.scss']
})
export class ResizableContainerComponent implements OnInit, OnChanges {


  @Input()
  disabled: boolean = false;
  @Input()
  width: number = 0;
  @Input()
  height: number = 0;
  @Input()
  top: number = 0;
  @Input()
  left: number = 0;
  @Input()
  index: number = 0;

  @Input()
  borders: ('top' | 'right' | 'left' | 'bottom')[] | undefined;

  public style: { [klass: string]: any } = {};

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.refreshBorders();
  }
  ngOnInit(): void {
    this.style = {
      width: `${this.width}px`,
      height: `${this.height}px`,
      top: `${this.top}px`,
      left: `${this.left}px`,
    };
    this.refreshBorders();
    if (this.index) this.style[`z-index`] = this.index;
  }


  validate(event: ResizeEvent): boolean {
    return event.rectangle.top >= 0 && event.rectangle.left >= 0;
  }

  refreshBorders() {
    this.style[`border-left-width`] = '0px';
    this.style[`border-right-width`] = '0px';
    this.style[`border-top-width`] = '0px';
    this.style[`border-bottom-width`] = '0px';


    this.borders?.forEach(border => {
      this.style[`border-${border}-width`] = '3px';
    });
  }

  onResizeEnd(event: ResizeEvent): void {
    this.style = {
      ...this.style,
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: event.edges.right || event.edges.left ? `${event.rectangle.width}px` : this.style.width,
      height: event.edges.bottom || event.edges.top ? `${event.rectangle.height}px` : this.style.height
    };
  }
}
