import { Injectable } from '@angular/core';
import { IndexedDbService } from '@services/indexed-db.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainModuleService {

  constructor(private indexedDb: IndexedDbService, ) { }

  getAllFavorites(): Observable<any> {
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

  addFavorite(data: any): void {
    this.indexedDb.add('favorites', { videoId: data.videoId, data });
  }
}
