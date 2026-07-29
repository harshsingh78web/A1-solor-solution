const configuredApiUrl = import.meta.env.VITE_API_URL?.trim();

if (import.meta.env.PROD && !configuredApiUrl) {
  throw new Error("VITE_API_URL is missing in production");
}

if (
  import.meta.env.PROD &&
  configuredApiUrl &&
  /^http:\/\/(?:localhost|127\.0\.0\.1)(?::\d+)?(?:\/|$)/i.test(
    configuredApiUrl,
  )
) {
  throw new Error("VITE_API_URL cannot point to localhost in production");
}

const apiOrigin = (configuredApiUrl || "http://localhost:5000").replace(
  /\/+$/,
  "",
);

export const apiBaseUrl = apiOrigin.endsWith("/api/v1")
  ? apiOrigin
  : `${apiOrigin}/api/v1`;
