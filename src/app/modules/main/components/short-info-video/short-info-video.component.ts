import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { YoutubeItem } from '@interfaces/youtube-item';

@Component({
  selector: 'app-short-info-video',
  templateUrl: './short-info-video.component.html',
  styleUrls: ['./short-info-video.component.scss']
})
export class ShortInfoVideoComponent implements OnInit {

  @Input() item: YoutubeItem;
  @Output() setFavorite = new EventEmitter<YoutubeItem>();

  constructor() { }

  ngOnInit() {
  }

  onSetFavorite(item: YoutubeItem) {
    this.setFavorite.emit(item);
  }

}
