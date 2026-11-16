# JSM landing page

## Product and audience

This is the product landing page for **JSM — Journal System Miner**, not a directory of HyperData Lab tools. It is for researchers who want to explore journal profiles or review how a manuscript's writing style compares with available journal data.

The landing page describes the verified Windows desktop product: searching journals by name or ISSN, reviewing available journal profiles, analyzing TXT/PDF manuscripts up to 15 MB, comparing style profiles, reading available warnings and suggestions, and revisiting evaluation history. Scores and suggestions are references; editorial decisions remain with journals.

## Reader path

1. Hero explains JSM and offers the Windows download, feature jump, and existing Central SSO registration link.
2. Feature list introduces the journal profile and manuscript comparison capabilities.
3. Use cases connect a journal search, submission planning, and draft revision to the relevant inputs and results.
4. Example workflow describes the actions and resulting information within JSM.
5. Getting-started guidance states Windows x64 and Central SSO requirements; FAQ covers supported files, account registration, result limits, and platform.

## Visual direction

- Use white and light neutral surfaces, navy text, and brand blue `#0071bc` for actions and links.
- Keep the header and sections aligned to `max-w-6xl`.
- Use compact sections, clear heading hierarchy, and readable detail. Avoid decorative badges, unsupported metrics, and repeated copy.
- The hero uses a simple workflow illustration, captioned as an illustration rather than a product screenshot. No real JSM screenshot is stored in this repository.
- Keep mobile content in one column, maintain full labels, support keyboard focus, and avoid horizontal scrolling.
- Preserve Vietnamese and English content in `src/i18n.ts`.

## Links and access

- Windows download: latest published release URL in `src/lib/release.ts`; an HTTPS release URL may be supplied through `VITE_JSM_WINDOWS_DOWNLOAD_URL`.
- Registration: `https://auth.hyperdatalab.org/register`.
- JSM authentication uses Central SSO. Do not claim every ecosystem service shares one account.
- Do not promise journal acceptance, imply every analysis has source citations, or make privacy/storage claims without a published policy.
