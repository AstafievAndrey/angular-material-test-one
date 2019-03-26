import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { YoutubeResult } from '@interfaces/youtube-result';
import { HttpService } from './http.service';

const KEY = 'AIzaSyB0r_Wh0YgfJbIHkzqueLEri17jzvqPZQU';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private url: string = `https://www.googleapis.com/youtube/v3/search?key=${KEY}`
    + `&order=viewCount&relevanceLanguage=RU&regionCode=RU&part=snippet&type=video`;

  constructor(private http: HttpService) { }

  search(q: string, pageToken: string = null, results: number = 50): Observable<YoutubeResult> {
    const url = `${this.url}&q=${q}&maxResults=${results}`
                  + `${pageToken ? '&pageToken=' + pageToken : ''}`;
    return this.http.get(url);
  }

}
