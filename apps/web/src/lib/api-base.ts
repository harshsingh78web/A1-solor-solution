const productionApiUrl = "https://a1-solor-solution-2.onrender.com";
const configuredApiUrl = import.meta.env.VITE_API_URL?.trim();

const selectedApiUrl = import.meta.env.PROD
  ? productionApiUrl
  : configuredApiUrl || "http://localhost:5000";

const apiOrigin = selectedApiUrl.replace(/\/+$/, "");

export const apiBaseUrl = apiOrigin.endsWith("/api/v1")
  ? apiOrigin
  : `${apiOrigin}/api/v1`;
