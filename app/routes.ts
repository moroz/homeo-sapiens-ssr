import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/playlists/:id", "routes/playlists/show.tsx"),
] satisfies RouteConfig;
