import { Component, OnInit, Output, EventEmitter, Input, Directive } from '@angular/core';


@Component({
  selector: 'app-card-text',
  templateUrl: './card-text.component.html',
  styleUrls: ['./card-text.component.scss',
    '../../mine/margin_padding.scss',
    '../../mine/color.scss',
    '../../mine/general.scss',
    '../../mine/mine.scss',
    '../../mine/font.scss'],
})

export class CardTextComponent implements OnInit {

  @Output() clickEvent = new EventEmitter();
  @Input() item: any | undefined;
  @Input() arrange: any | undefined;
  @Input() close: any | undefined;

  constructor() { }

  ngOnInit() {

  }

  delete(id: any) {
    this.clickEvent.emit({ type: 'delete', value: id });
  }

  copy(data: any, id: any) {
    this.clickEvent.emit({ type: 'copy', value: data, template_id: id });
  }

  changeValue(data: any, id: any) {
    this.clickEvent.emit({ type: 'change-data', value: data, template_id: id });
  }

  mouseOver() {
    this.clickEvent.emit({ type: 'mouse-over' });
  }

}
