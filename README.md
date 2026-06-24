# johnosberg.makeacompany.ai

Personal site for John Osberg — Head of Growth & Partnerships. Next.js static export, served by nginx, deployed to the admin cluster via gitops.

## Local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Content

Everything editable lives in `src/data/site.ts` (hero, stats, roles, brands) and `src/data/socials.tsx` (links). The headshot, resume PDF, and OG image are in `public/`.

## CI/CD

Push a git tag `v*` (e.g. `v0.1.0`). `.github/workflows/johnosberg-images.yml` builds `deploy/frontend.Dockerfile` (production stage) and pushes `geeemoney/johnosberg` to Docker Hub, then the reusable `gitops-release` workflow opens a bump PR against `BimRoss/rancher-admin` (`admin/apps/johnosberg/deployment.yaml`).

Manifests live in `rancher-admin` under `admin/apps/johnosberg/`. DNS: `johnosberg.makeacompany.ai` CNAME on the makeacompany.ai Cloudflare zone.
