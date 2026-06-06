import type { Route } from "./+types/home";
import { listPlaylists } from "../../lib/api";
import { Link } from "react-router";

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
        <Link to={`/playlists/${playlist.id}`}>
          <article key={playlist.id} className="border border-slate-900 p-8">
            <p>{playlist.titleEn}</p>
          </article>
        </Link>
      ))}
    </div>
  );
}
