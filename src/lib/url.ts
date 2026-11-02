const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix an internal path with the site's base path (e.g. `/me`), so links work on GitHub Pages. */
export function url(path: string) {
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
