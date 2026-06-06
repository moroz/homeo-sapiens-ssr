import React from "react";
import { cn } from "~/lib/utils";

interface Props {
  title: string;
  /** Host profile photo URL */
  pp: string;
  locale: "en" | "pl";
  host: string;
  date: string | Temporal.PlainDate;
}

export function splitTitle(baseTitle: string): [string] | [string, string] {
  const [t, s] = baseTitle.split(":").map((part) => part.trim());
  if (s && /\b\d\b/iu.test(s)) return [t, s];
  return [baseTitle];
}

export const ThumbnailCard: React.FC<Props> = ({
  title: baseTitle,
  pp,
  locale,
  host,
  date,
}) => {
  const dateParsed = Temporal.PlainDate.from(date);
  const [title, subtitle] = splitTitle(baseTitle);
  const smallerText = Boolean(subtitle) || baseTitle.length > 33;

  return (
    <div className="aspect-video w-full flex overflow-hidden bg-slate-100">
      {/* Host photo */}
      <div className="relative h-full w-[42.5%] shrink-0 overflow-hidden p-3">
        <img
          src={pp}
          className="w-full h-full object-cover rounded-md outline outline-slate-500"
          alt=""
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between py-4 pr-5 pl-1.5">
        {/* Logo */}
        <svg
          viewBox="0 0 1538 361"
          className={cn(
            "w-36 text-slate-900 fill-current h-auto",
            smallerText && "w-32",
          )}
        >
          <use href="/logo.svg#logo" />
        </svg>

        {/* Title */}
        <h1
          className={cn(
            "text-slate-900 font-bold text-2xl leading-tight",
            smallerText && "text-xl",
          )}
        >
          {title}
          {subtitle && (
            <small className="text-slate-700 mt-1.5 block">{subtitle}</small>
          )}
        </h1>

        {/* Host & Date */}
        <div className="flex flex-col gap-0.5 text-slate-700 font-semibold">
          <p className={cn("text-lg", smallerText && "text-base")}>{host}</p>
          <p className={cn("text-lg", smallerText && "text-base")}>
            {dateParsed.toLocaleString(locale, { dateStyle: "long" })}
          </p>
        </div>
      </div>
    </div>
  );
};
