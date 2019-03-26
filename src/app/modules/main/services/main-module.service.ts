import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IndexedDbService } from '@services/indexed-db.service';
import { IndexedDbFavorite } from '@interfaces/indexed-db-favorite';
import { YoutubeItem } from '@interfaces/youtube-item';

@Injectable({
  providedIn: 'root'
})
export class MainModuleService {

  constructor(private indexedDb: IndexedDbService, ) { }

  getAllFavorites(): Observable<IndexedDbFavorite> {
    return this.indexedDb.getAll('favorites', 'favorites');
  }

  searchDeleteFavorite(videoId: string): void {
    this.indexedDb.get('favorites', 'favorites', 'videoId', videoId)
      .subscribe(res => {
        if (res) {
          this.indexedDb.delete('favorites', res.id);
        }
      });
  }

  addFavorite(data: YoutubeItem): void {
    this.indexedDb.add('favorites', { videoId: data.videoId, data });
  }
}
