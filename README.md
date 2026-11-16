# HyperData Lab JSM landing page

Vietnamese and English landing page for JSM (Journal System Miner), the Windows desktop application for exploring journal profiles and comparing manuscript writing style.

## Development

Run `npm install`, then `npm run dev`.

## Public Windows download

The download CTA uses the latest published GitHub Release by default. Set `VITE_JSM_WINDOWS_DOWNLOAD_URL` to a version-specific public HTTPS release URL when needed. Draft releases are not public downloads. Do not point the CTA at a local build archive.

## Stack

- Vite, React 19, and TypeScript
- Tailwind CSS v4
- i18next and react-i18next
- Radix UI Accordion and Dialog primitives
- Heroicons React

Run `npm run build` to type-check and build the site. Run `npm run preview` to serve the production build locally.
