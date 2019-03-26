import { YoutubeItem } from './youtube-item';

export interface IndexedDbFavorite {
    data: YoutubeItem;
    id: number;
    videoId: string;
}
