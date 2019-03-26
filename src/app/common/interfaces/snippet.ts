import { Thumbnails } from './thumbnails';

export interface Snippet {
    thumbnails: Thumbnails;
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishedAt: string;
    title: string;
}
