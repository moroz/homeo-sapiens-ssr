import type { Route } from "./+types/home";
import { listPlaylists } from "../../lib/api";
import { Link } from "react-router";
import { Card, CardHeader, CardTitle } from "~/components/ui/card";

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
  return (
    <div className="container mx-auto space-y-4">
      {loaderData.playlists.data.map((playlist) => (
        <Link to={`/playlists/${playlist.id}`} key={playlist.id} className="block">
          <Card>
            <CardHeader>
              <CardTitle>{playlist.titleEn}</CardTitle>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
}
