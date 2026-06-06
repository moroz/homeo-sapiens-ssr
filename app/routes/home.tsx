import type { Route } from "./+types/home";
import { listPlaylists } from "../../lib/api";
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

function formatDuration(duration: number) {
  const hours = String(Math.floor(duration / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((duration % 3600) / 60)).padStart(2, "0");
  const seconds = String(Math.floor(duration % 60)).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

export default function Home({ loaderData }: Route.ComponentProps) {
  if (!loaderData.playlists.data.length) return null;

  return (
    <>
      <div className="container mx-auto grid grid-cols-3 gap-6 my-12">
        {loaderData.playlists.data.map((playlist) => {
          const url = `/playlists/${playlist.slug}`;

          return (
            <Card className="pt-0" key={playlist.id}>
              <Link to={url} className="aspect-video bg-slate-100"></Link>
              <CardHeader className="flex justify-between">
                <CardTitle>{playlist.titleEn}</CardTitle>
              </CardHeader>
              <CardFooter>
                <Link to={`/playlists/${playlist.slug}`} className="w-full">
                  <Button className="w-full cursor-pointer">Watch</Button>
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  );
}
