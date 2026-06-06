import type { ISOTimestamp } from "./common";
import type { UUID } from "node:crypto";

export interface Playlist {
  id: UUID;
  titlePl: string;
  titleEn: string;
  slug: string;
  createdAt: ISOTimestamp;
  updatedAt: ISOTimestamp;
}

export interface PlaylistIndexDto extends Playlist {
  videoCount: number;
  totalDuration: number;
}

export interface PlaylistShowDto extends Playlist {
  videos: Video[];
}

export interface Video {
  id: UUID;
  titlePl: string;
  titleEn: string;
  durationSeconds: number;
  slug: string;
  thumbnailEnId: UUID | null;
  thumbnailPlId: UUID | null;
  createdAt: ISOTimestamp;
  updatedAt: ISOTimestamp;
}
