import { Link, NavLink, useLocation } from "react-router";
import { cn } from "~/lib/utils";

const navigation = [
  {
    to: "/",
    label: "Playlists",
    isActive: (pathname: string) => pathname === "/" || pathname.startsWith("/playlists"),
  },
];

export function Header() {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-18 items-center justify-between px-4">
        <Link
          to="/"
          className="font-heading text-lg font-semibold hover:text-primary transition-colors"
        >
          <svg viewBox="0 0 1538 361" className="fill-current h-13">
            <use href="/logo.svg#logo" />
          </svg>
        </Link>
        <nav className="flex items-center gap-6">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "text-sm transition-colors hover:text-foreground",
                  isActive || item.isActive?.(pathname)
                    ? "font-medium text-foreground"
                    : "text-muted-foreground",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
