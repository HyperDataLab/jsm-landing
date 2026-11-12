# HyperData Lab JSM landing page

Landing page React + TypeScript for the Windows desktop release of JSM.

## Development
Run npm install, then npm run dev.

## Public download link
Copy .env.example to .env.local and set VITE_JSM_WINDOWS_DOWNLOAD_URL to the current public HTTPS release URL. The download action remains disabled while that value is empty. Do not point it at a local build archive.

## Stack
- Vite, React and TypeScript
- Tailwind CSS v4
- shadcn-style source components built on Radix UI
- Aceternity Floating Navbar and Spotlight patterns with Motion
- clsx and tailwind-merge in src/lib/utils.ts
## Internationalization and icons
The landing page supports Vietnamese and English with i18next/react-i18next. The default language is Vietnamese; a saved selection in localStorage takes precedence. UI icons use Heroicons React.