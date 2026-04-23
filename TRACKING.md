# BoxoMemories — Phase 1 Tracking Implementation

## Files installed
- `src/app/layout.tsx` — Root layout with GTM container, Brevo tracker, JSON-LD schema, OG metadata, and canonical
- `src/app/robots.ts` — Sitemap and host directives for search crawlers
- `src/app/sitemap.ts` — Static XML sitemap (single-page site)

## IDs hardcoded
- **GTM container:** GTM-PJKK489C
- **GA4 stream ID:** G-XBDVD5YESS (configured as a tag inside GTM)
- **Meta Pixel ID:** 1305562371781103 (configured as a tag inside GTM)
- **Brevo client_key:** 9u1hsxe9gvu5e6i2ar4j28q2 (inline in layout.tsx)

## Key details
- JSON-LD @type: ["Organization", "Service"]
- serviceType: "Photo, video, and media digitization"
- areaServed: "United States" (mail-in nationwide service)
- metadataBase: https://www.boxomemories.com (matches Vercel production alias)
- Address: 2 Rock Creek Dr Unit A, Salado, TX 76571 (PRESERVED from existing schema)
- Phone: +1-254-613-6123 (PRESERVED from existing schema)
- OG image placeholder: /og-default.jpg
- Sitemap: single-entry static page (BoxoMemories is a one-page site with contact/CTAs)

## Decision notes: address preservation
The existing BoxoMemories JSON-LD already specified the address "2 Rock Creek Dr Unit A" and phone "254-613-6123." This is correct — BoxoMemories operates from Solas Gallery's shared venue. The handoff doc's spec was overridden in favor of the real operational address already in the live layout.tsx. No address change required.

## How to verify the deploy
1. **GTM Preview:** Open tagmanager.google.com, select container GTM-PJKK489C, click Preview, then browse to the live site. Verify that DataLayer events fire.
2. **Meta Pixel Helper (Chrome ext):** Install the extension, navigate to www.boxomemories.com. Verify Pixel 1305562371781103 shows "Pixel firing."
3. **GA4:** Log in to analytics.google.com, select the SolasGallery GA4 property, check Real-time > Overview. You should see active users within 30 seconds of navigating the site.
4. **Rich Results Test:** Visit search.google.com/test/rich-results, paste https://www.boxomemories.com, and verify the Organization + Service schema is detected and valid.

## How not to break this
- Do NOT remove the `<Script id="gtm">` block — this loads the container that houses GA4, Meta Pixel, and Brevo tracking.
- Do NOT strip the canonical `alternates: { canonical: "/" }` from the metadata — this prevents Google from treating www and non-www variants as separate sites.
- Do NOT remove or modify the JSON-LD `dangerouslySetInnerHTML` block — search engines use this for rich results and NAP consistency.
- Do NOT change the address or phone number in the JSON-LD — these are the canonical NAP details for BoxoMemories.
- Do NOT change the Brevo client_key — it wires this site into Tim's shared Brevo automation account.
- Do NOT remove the noscript iframe — it's a fallback for users with JS disabled.
- Do NOT rename or move the `src/app/robots.ts` or `src/app/sitemap.ts` files — Next.js looks for these by convention.
- Do NOT edit GTM container ID or GA4 stream ID — those are centrally managed at tagmanager.google.com.
- **Do NOT convert `output: 'export'` to SSR** — this is a static export site. All tracking scripts must be compatible with static rendering.

## Notes
- Brevo key is shared across all 4 sites in this rollout (9u1hsxe9gvu5e6i2ar4j28q2) — do not treat it as secret.
- The og-default.jpg image does not yet exist in the repo — that's a separate asset creation step. Until it's added, OG previews will fall back to the site name + description.
- Google Search Console verification token (REPLACE_WITH_GSC_TOKEN) must be updated once the property is confirmed in search.google.com/search-console.
- Three redirect domains (boxomemories.com, myboxo.com, www.myboxo.com) are handled by Vercel redirect rules — no tracking changes needed there.
