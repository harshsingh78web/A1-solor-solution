const configuredApiUrl = import.meta.env.VITE_API_URL?.trim();
const isLocalUrl = configuredApiUrl
  ? /^https?:\/\/(?:localhost|127\.0\.0\.1)(?::\d+)?(?:\/|$)/i.test(
      configuredApiUrl,
    )
  : false;

export const apiBaseUrl = import.meta.env.DEV
  ? configuredApiUrl || "http://localhost:5000/api/v1"
  : configuredApiUrl && !isLocalUrl
    ? configuredApiUrl
    : "/api/v1";
