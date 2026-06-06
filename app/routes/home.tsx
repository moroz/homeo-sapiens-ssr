import type { Route } from "./+types/home";
import { listPlaylists } from "../api";
import { Link } from "react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { formatDuration } from "~/helpers/time";
import React from "react";
import { VideoThumbnail } from "~/components/video-thumbnail";
import { PlaylistThumbnailCard } from "~/components/playlist-thumbnail-card";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const playlists = await listPlaylists();
  return { playlists };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  if (!loaderData.playlists.data.length) return null;

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold leading-loose">Playlists</h2>
      <div className="grid grid-cols-3 gap-6">
        {loaderData.playlists.data.map((playlist) => {
          const url = `/playlists/${playlist.slug}`;

          return (
            <Card className="pt-0" key={playlist.id}>
              <Link to={url} className="block">
                <PlaylistThumbnailCard
                  title={playlist.titleEn}
                  locale="en"
                  videoCount={playlist.videoCount}
                  totalDuration={playlist.totalDuration}
                />
              </Link>
              <CardContent>
                <div className="flex justify-between">
                  <CardTitle>{playlist.titleEn}</CardTitle>
                  <Badge variant="secondary">{formatDuration(playlist.totalDuration)}</Badge>
                </div>
                <CardDescription>{playlist.videoCount} videos</CardDescription>
              </CardContent>
              <CardFooter>
                <Link to={`/playlists/${playlist.slug}`} className="w-full">
                  <Button className="w-full cursor-pointer">Watch</Button>
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
