import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

const KEY = 'AIzaSyB0r_Wh0YgfJbIHkzqueLEri17jzvqPZQU';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  results: number = 50;
  url: string = `https://www.googleapis.com/youtube/v3/search?key=${KEY}`
    +`&order=viewCount&relevanceLanguage=RU&regionCode=RU&part=snippet&type=video`;
  
  constructor(private http: HttpService) { }

  search(q: string, results: number = 50) {
    const url = `${this.url}&q=${q}&maxResults=${results}`;
    return this.http.get(url)
  }

}
