import { Snippet } from './snippet';
import { YoutubeItemId } from './youtube-item-id';

export interface YoutubeItem {
    id: YoutubeItemId;
    snippet: Snippet;
    etag: string;
    kind: string;
    favorite?: boolean;
    videoId?: string;
}
