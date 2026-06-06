import React from "react";
import type { Playlist, Video } from "~/api";
import { ASSET_CDN_BASE_URL } from "~/config";
import { ThumbnailCard } from "~/components/thumbnail-card";
import { Link } from "react-router";
import { Badge } from "~/components/ui/badge";
import { formatDuration } from "~/helpers/time";

interface Props {
  video: Video;
  playlist: Playlist;
  locale?: "pl" | "en";
  duration?: number;
}

export const VideoThumbnail: React.FC<Props> = ({
  video,
  playlist,
  locale = "en",
  duration = 0,
}) => {
  const thumbnailId =
    locale === "pl" && video.thumbnailPlId ? video.thumbnailPlId : video.thumbnailEnId;

  if (!thumbnailId) {
    return <div className="aspect-video bg-slate-100" />;
  }

  const url = `/playlists/${playlist.slug}/videos/${video.slug}`;

  return (
    <Link to={url} className="relative">
      <ThumbnailCard
        title={video.titleEn}
        pp="https://d3n1g0yg3ja4p3.cloudfront.net/019beef9-ad4c-736f-9bb0-965b59ca21ae.png"
        locale={locale}
        host=""
        date="2025-05-05"
      />
      {duration ? (
        <Badge className="absolute bottom-5 right-4">{formatDuration(duration)}</Badge>
      ) : null}
    </Link>
  );
};
