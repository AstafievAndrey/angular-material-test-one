import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PageEvent, MatSnackBar } from '@angular/material';
import { YoutubeService } from '@services/youtube.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IndexedDbService } from '@services/indexed-db.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  public search: string;
  public data: any;
  public data$: Observable<any>;
  public pageIndex = 0;

  constructor(
    private youtube: YoutubeService,
    private indexedDb: IndexedDbService,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
  }

  private getData(search: string, pageToken: string = null): Observable<any> {
    return this.youtube.search(search, pageToken).pipe(
      map(data => this.data = data),
      catchError(err => {
        if (err.status) {
          this.snackBar.open('Превышен лимит запросов.');
        } else {
          this.snackBar.open(err.error.error.message);
        }
        return of();
      })
    );
  }

  public setFavorite(id: any): void {
    this.indexedDb.add('favorites', { videoId: id.videoId });
  }

  public checkFavorite(videoId: string): void {
    this.indexedDb.get('favorites', 'favorites', 'videoId', videoId)
    .subscribe(data => console.log(data));
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
