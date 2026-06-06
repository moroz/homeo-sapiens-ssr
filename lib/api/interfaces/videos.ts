import type { ISOTimestamp } from "./common";
import type { UUID } from "node:crypto";

export interface VideoGroup {
  id: UUID;
  titlePl: string;
  titleEn: string;
  slug: string;
  createdAt: ISOTimestamp;
  updatedAt: ISOTimestamp;
}

export interface Video {
  id: UUID;
  titlePl: string;
  titleEn: string;
  durationSeconds: number;
  slug: string;
  createdAt: ISOTimestamp;
  updatedAt: ISOTimestamp;
}
