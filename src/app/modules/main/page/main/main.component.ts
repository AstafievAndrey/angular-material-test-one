import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PageEvent } from '@angular/material';
import { YoutubeService } from '@services/youtube.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  public data: any;
  public search: string;
  public data$: Observable<any>;
  public pageIndex: number = 0;

  constructor(private youtube: YoutubeService) { }

  ngOnInit() {
  }

  private getData(search: string, pageToken: string = null): Observable<any> {
    return this.youtube.search(search, pageToken).pipe(
      map(data => this.data = data)
    );
  }

  public setFavorite(id: any): void {
    console.log(id);
  }

  public changePage(pageEvent: PageEvent): void {
    this.pageIndex = pageEvent.pageIndex;
    const pageToken = (this.pageIndex > pageEvent.previousPageIndex) ?
      this.data.nextPageToken : this.data.previousPageToken;
    this.data$ = this.youtube.search(this.search, pageToken);
  }

  public onSearch(search: string): void {
    this.search = search;
    this.data$ = this.getData(this.search);
  }

}
