import { API_BASE_URL } from "../client.server";
import type {
  ApiListResponse,
  ApiShowResponse,
  PlaylistIndexDto,
  PlaylistShowDto,
  UUID,
} from "../interfaces";

export async function listPlaylists() {
  const url = new URL("/api/v1/playlists", API_BASE_URL);
  const res = await fetch(url);
  return (await res.json()) as ApiListResponse<PlaylistIndexDto>;
}

export async function getPlaylist(id: UUID) {
  const url = new URL(`/api/v1/playlists/${id}`, API_BASE_URL);
  const res = await fetch(url);
  return (await res.json()) as ApiShowResponse<PlaylistShowDto>;
}
