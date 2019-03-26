import { YoutubeItem } from './youtube-item';
import { YoutubePageInfo } from './youtube-page-info';

export interface YoutubeResult {
    items: YoutubeItem[];
    pageInfo: YoutubePageInfo;
    etag: string;
    kind: string;
    nextPageToken: string;
    previousPageToken: string;
    regionCode: string;
}
