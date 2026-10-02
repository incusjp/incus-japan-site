# Incus Japan public site

Default locale: `ja`; alternate locale: `en`.
The default routes are unprefixed and the alternate routes use `/en`.

The site provides English and Japanese overview, onboarding, and safety documentation. Published content is reviewed separately from registration data and credentials.

## Local verification

```bash
pnpm install --offline --frozen-lockfile
pnpm validate:content
pnpm typecheck
pnpm test
pnpm build
```

Run `pnpm dev` only as a foreground loopback preview and stop it with Ctrl+C.
