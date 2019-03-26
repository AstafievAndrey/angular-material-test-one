import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-short-info-video',
  templateUrl: './short-info-video.component.html',
  styleUrls: ['./short-info-video.component.scss']
})
export class ShortInfoVideoComponent implements OnInit {

  @Input() item: any;
  @Output() setFavorite = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onSetFavorite(item: any) {
    this.setFavorite.emit(item);
  }

}
