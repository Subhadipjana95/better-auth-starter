# Groot Auth

A Next.js 16 starter focused on authentication with [Better Auth](https://www.better-auth.com/), Drizzle, and a small set of polished UI primitives. The app includes a landing page, login and signup flows, a protected dashboard, and server-side auth handlers wired to a PostgreSQL database.

## What This Project Does

- Public landing page at `/` with a hero section.
- Login page at `/login` with Google, GitHub, and email/password sign-in.
- Signup page at `/signup` with Google, GitHub, and email/password sign-up.
- Protected dashboard at `/dashboard` with logout.
- Better Auth route handler at `/api/auth/[...all]`.
- Route protection for `/dashboard` through `proxy.ts`.
- Toast feedback for auth success and failure states.

## Tech Stack

- Next.js App Router
- React 19
- TypeScript
- Better Auth
- Drizzle ORM
- Neon serverless PostgreSQL driver
- Tailwind CSS v4
- shadcn/ui-style components
- Sonner for toasts

## Project Structure

```text
app/
  page.tsx               Landing page
  login/page.tsx          Login screen
  signup/page.tsx         Signup screen
  dashboard/page.tsx      Protected dashboard
  api/auth/[...all]/      Better Auth route handler
components/
  login-form.tsx         Email/social login form
  signup-form.tsx        Email/social signup form
  logout.tsx             Sign out button
  ui/                    Shared UI primitives
db/
  drizzle.ts             Drizzle database connection
  schema.ts              Auth-related tables
  relations.ts           Relation helpers
lib/
  auth.ts                Server auth configuration
  auth-client.ts         Client auth configuration
server/
  users.ts               Server actions for sign in/up/out
proxy.ts                 Dashboard access guard
```

## Authentication Flow

The app uses Better Auth on both the server and client.

- `lib/auth.ts` configures Better Auth with email/password and Google/GitHub providers.
- `lib/auth-client.ts` creates the browser client used by the forms and logout button.
- `server/users.ts` wraps email/password sign-in and sign-up in server actions.
- `app/api/auth/[...all]/route.ts` exposes the Better Auth handler to Next.js.
- `proxy.ts` redirects unauthenticated users away from `/dashboard` and to `/login`.

## Database

The database layer uses Drizzle and PostgreSQL tables for the auth domain:

- `user`
- `session`
- `account`
- `verification`

`db/drizzle.ts` reads `DATABASE_URL` and initializes the Drizzle client. `db/schema.ts` defines the auth tables used by Better Auth.

## Getting Started

1. Install dependencies.

```bash
pnpm install
```

2. Create a `.env.local` file and add the required environment variables.

```bash
DATABASE_URL=
BETTER_AUTH_URL=
BASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

3. Run the development server.

```bash
pnpm dev
```

4. Open `http://localhost:3000`.

## Scripts

- `pnpm dev` - start the development server.
- `pnpm build` - create a production build.
- `pnpm start` - run the production server.
- `pnpm lint` - run ESLint.

## Notes

- The app uses `sonner` for notifications and a shared toaster mounted in the root layout.
- Login and signup forms currently support email/password and Google/GitHub social auth.
- Dashboard access is guarded at the route level, so unauthenticated users are redirected before the page renders.

## Deployment

Before deploying, make sure the environment variables above are configured in your hosting provider and that the database schema has been applied.
