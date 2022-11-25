import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-card-nps',
  templateUrl: './card-nps.component.html',
  styleUrls: ['./card-nps.component.scss',
    '../../mine/margin_padding.scss',
    '../../mine/color.scss',
    '../../mine/general.scss',
    '../../mine/mine.scss',
    '../../mine/font.scss']
})
export class CardNpsComponent implements OnInit {

  @Output() clickEvent = new EventEmitter();
  @Input() item: any | undefined;

  constructor() { }

  ngOnInit() {

  }

  delete(id: any) {
    this.clickEvent.emit({ type: 'delete', value: id });
  }

  copy(data: any) {
    this.clickEvent.emit({ type: 'copy', value: data });
  }

  changeValue(data: any, id: any) {
    this.clickEvent.emit({ type: 'change-data', value: data, template_id: id });
  }


}