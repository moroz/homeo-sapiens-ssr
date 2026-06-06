import React from "react";
import type { Route } from "./+types/show";
import { getPlaylist } from "../../api";
import { Card, CardContent, CardFooter, CardTitle } from "~/components/ui/card";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { formatDuration } from "~/helpers/time";
import { VideoThumbnail } from "~/components/video-thumbnail";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const playlist = await getPlaylist(params.id);
  return { playlist };
}

export default function ShowPlaylist({ loaderData }: Route.ComponentProps) {
  const playlist = loaderData.playlist?.data;
  if (!playlist) return <h1>Not found</h1>;

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold leading-loose">{playlist.titleEn}</h2>
      <h3 className="text-xl">Playlist</h3>
      <div className="grid gap-6 grid-cols-3 my-6">
        {playlist.videos.map((video) => {
          const url = `/playlists/${playlist.slug}/videos/${video.slug}`;
          return (
            <Card key={video.id} className="pt-0">
              <VideoThumbnail video={video} playlist={playlist} duration={video.durationSeconds} />
              <CardContent>
                <CardTitle>{video.titleEn}</CardTitle>
              </CardContent>
              <CardFooter>
                <Link to={url} className="w-full">
                  <Button className="w-full">Watch</Button>
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
