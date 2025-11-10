# FleetCo Demo (Next.js SaaS for Transport/Fleet Management)

A SAP-style, Next.js + Tailwind starter for a transport company's SaaS platform. It includes a responsive shell with sidebar/topbar and stub pages for the main submodules:

- Dashboard
- Fleet Assets
- Trips (planning/dispatch/settlement)
- Tyres
- Fuel
- Maintenance
- Safety
- Fleet HR
- User Management / Access
- Settings

## Tech
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- React Query + Zustand-ready (for future data/state)

## Getting Started

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Branding
Theme uses SAP-inspired blues and neutrals. Replace the logo in the sidebar (`FC`) with your brand and add images under `public/` as needed.

## Next Steps
- Wire modules to your API (REST/GraphQL).
- Add auth (NextAuth, Cognito, Auth0, etc.).
- Connect database and real data models.
- Implement maps, telemetry, planning optimizers, and reporting.


