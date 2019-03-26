import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PageEvent, MatSnackBar } from '@angular/material';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { YoutubeService } from '@services/youtube.service';
import { YoutubeResult } from '@interfaces/youtube-result';
import { YoutubeItem } from '@interfaces/youtube-item';
import { MainModuleService } from '../../services/main-module.service';
import { IndexedDbFavorite } from '@interfaces/indexed-db-favorite';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  public search: string;
  public pageToken: {next: string, previous: string};
  public data$: Observable<YoutubeResult>;
  public pageIndex = 0;
  public favorites: string[] = [];

  constructor(
    private youtube: YoutubeService,
    private mainModuleService: MainModuleService,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.mainModuleService.getAllFavorites()
    .subscribe(
      (data: IndexedDbFavorite) => {
        this.favorites.push(data.videoId);
      }
    );
  }

  private getData(search: string, pageToken: string = null): Observable<YoutubeResult> {
    return this.youtube.search(search, pageToken).pipe(
      map((data: YoutubeResult): any  => {
        for (const item of data.items) {
          item.favorite = this.favorites.indexOf(item.id.videoId) !== -1 ? true : false;
        }
        this.pageToken = {
          previous: data.previousPageToken,
          next: data.nextPageToken
        };
        return data;
      }),
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

  public setFavorite(data: YoutubeItem = null): void {
    const { videoId } = data.id;
    if (data.favorite) {
      data.favorite = false;
      this.mainModuleService.searchDeleteFavorite(videoId);
    } else {
      data.favorite = true;
      this.mainModuleService.addFavorite({ videoId: data.id.videoId, ...data });
    }
  }

  public changePage(pageEvent: PageEvent): void {
    this.pageIndex = pageEvent.pageIndex;
    const pageToken = (this.pageIndex > pageEvent.previousPageIndex) ?
      this.pageToken.next : this.pageToken.previous;
    this.data$ = this.youtube.search(this.search, pageToken);
  }

  public onSearch(search: string): void {
    if (search) {
      this.search = search;
      this.data$ = this.getData(this.search);
    }
  }

}
