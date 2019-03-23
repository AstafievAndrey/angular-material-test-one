import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { YoutubeService } from '@services/youtube.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  totalResults = 0;
  pageSize = 50;
  pageEvent: PageEvent;

  constructor(private youtube: YoutubeService) { }

  ngOnInit() {
  }

  onSearch(search: string) {
    this.youtube.search(search).subscribe(data => {
      this.totalResults = data.pageInfo.totalResults;
    })
  }

}
