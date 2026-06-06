import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Homeo Sapiens</p>
        <Link to="/" className="transition-colors hover:text-foreground">
          Playlists
        </Link>
      </div>
    </footer>
  );
}