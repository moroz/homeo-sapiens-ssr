import React from "react";
import { cn } from "~/lib/utils";
import { splitTitle } from "~/components/thumbnail-card";
import { formatDuration } from "~/helpers/time";

interface Props {
  title: string;
  locale: "en" | "pl";
  videoCount: number;
  /** Total duration in seconds */
  totalDuration: number;
}

function formatVideoCount(count: number, locale: "en" | "pl") {
  if (locale === "en") return `${count} ${count === 1 ? "video" : "videos"}`;
  // Polish plural rules: 1 film, 2-4 filmy (except 12-14), 5+ filmów
  const ones = count % 10;
  const teens = count % 100;
  if (count === 1) return "1 film";
  if (ones >= 2 && ones <= 4 && (teens < 12 || teens > 14)) {
    return `${count} filmy`;
  }
  return `${count} filmów`;
}

export const PlaylistThumbnailCard: React.FC<Props> = ({
  title: baseTitle,
  locale,
  videoCount,
  totalDuration,
}) => {
  const [title, subtitle] = splitTitle(baseTitle);
  const smallerText = Boolean(subtitle) || baseTitle.length > 33;

  return (
    <div className="aspect-video w-full flex flex-col justify-between overflow-hidden bg-slate-100 p-5">
      {/* Logo */}
      <svg
        viewBox="0 0 1538 361"
        className={cn("w-36 text-slate-900 fill-current h-auto", smallerText && "w-32")}
      >
        <use href="/logo.svg#logo" />
      </svg>

      {/* Title */}
      <h1
        className={cn("text-slate-900 font-bold text-2xl leading-tight", smallerText && "text-xl")}
      >
        {title}
        {subtitle && <small className="text-slate-700 mt-1.5 block">{subtitle}</small>}
      </h1>

      {/* Video count & total duration */}
      <div className="flex items-baseline gap-3 text-slate-700 font-semibold">
        <p className="text-lg">{formatVideoCount(videoCount, locale)}</p>
        <p className="text-base">{formatDuration(totalDuration)}</p>
      </div>
    </div>
  );
};
