import React from "react";
import type { Route } from "./+types/show";
import { getPlaylist } from "../../../lib/api";

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
  return <pre>{JSON.stringify(loaderData, null, 2)}</pre>;
}
