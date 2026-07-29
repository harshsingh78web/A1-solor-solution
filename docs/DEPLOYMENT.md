# Deployment
Build with `npm ci && npm run build`. Deploy `apps/web/dist` to Vercel/Netlify
and `apps/api/dist` to a Node host. Configure exact CORS origins, health checks
at `/api/v1/health`, HTTPS, Supabase production redirect URLs, and all backend
secrets in the host’s encrypted environment. Apply migrations before traffic.
