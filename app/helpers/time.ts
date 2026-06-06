export function formatDuration(duration: number) {
  const hours = Math.floor(duration / 3600);
  const minutes = String(Math.floor((duration % 3600) / 60)).padStart(2, "0");
  const seconds = String(Math.floor(duration % 60)).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}
