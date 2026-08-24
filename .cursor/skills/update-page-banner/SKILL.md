---
name: update-page-banner
description: >-
  Updates a page’s top banner (OpeningPageImage): headline text, optional
  subtitles, and/or background photo on Home, Education, Contact Us, or other
  pages that use the shared banner. Copies images into the page’s assets folder,
  updates the page file, opens a local preview, then offers share-changes. Use
  when the user asks to update a banner, hero, opening image, page header image,
  or top title on a page. Audience is non-technical — speak in plain language
  with the user.
---

# Update Page Banner

## Audience & how to talk to the user

Users of this skill are **not** software engineers or frontend developers. They may have little or no tech background.

**When talking to the user:**
- Use everyday words: “banner,” “top of the page,” “headline,” “subtitle,” “background photo,” “preview.”
- Avoid “hero,” “OpeningPageImage,” “HashRouter,” unless they use those words first.
- Ask which **page** first, then what to change (photo / headline / subtitles).
- Explain what to look at: the big image and text at the top of that page.

**Good summary example:**  
“Updated the Contact Us banner photo and kept the title ‘Contact Us.’ I opened Contact Us — please check the top of the page.”

**Avoid:**  
“Replaced contact_us_opening_image import and OpeningPageImage props.”

## Scope (v1)

Updates the shared banner component usage on a page:

| Prop (code) | Plain language |
|-------------|----------------|
| `header` | Main headline |
| `subtitle1` / `subtitle2` | Optional lines under the headline (often unused today) |
| `imageURL` | Background photo |

**Known pages**

| Page | File | Default asset |
|------|------|---------------|
| Home | `src/pages/Home.js` | `src/assets/images/home/home_opening_image.png` |
| Education | `src/pages/Education.js` | `src/assets/images/education/education_opening_image.png` |
| Contact Us | `src/pages/ContactUs.js` | `src/assets/images/contact-us/contact_us_opening_image.png` |

Also works for pages created with `create-page` (asset under `src/assets/images/<slug>/`).

Do **not** edit `OpeningPageImage.js` layout/sizing unless the banner is broken and the user asks to fix layout.

Component reference: `src/components/OpeningPageImage.js` — accepts `header`, `subtitle1`, `subtitle2`, `imageURL`.

## Workflow

```
Banner update:
- [ ] 1. Ask which page + what changes
- [ ] 2. Collect text and/or image
- [ ] 3. Copy image if needed; update page JSX/import
- [ ] 4. Open that page’s preview
- [ ] 5. Offer share-changes
```

### 1. Ask which page and what changes

> Which page’s top banner should we update? (Home, Education, Contact Us, or another page name)
>
> What should change?
> - **Background photo**
> - **Headline** (big title)
> - **Subtitles** (optional lines under the title)
> - Any combo

If the page has no banner yet, say so and offer to add one using the same pattern as the other pages (or use `create-page` if the page does not exist).

### 2. Collect inputs

| Change | Ask for |
|--------|---------|
| Photo | Path to the new image file |
| Headline | Exact text to show |
| Subtitles | Exact text for line 1 and/or line 2 (or “remove subtitles”) |

**Image rules:** `.jpg`, `.jpeg`, `.png`, `.webp`. Prefer a wide, high-quality photo — the banner is full-width and tall on desktop.

Leave unchanged fields alone.

### 3. Apply changes

1. If replacing the photo:
   - Keep the conventional filename when possible (`home_opening_image`, `education_opening_image`, `contact_us_opening_image`) + new extension if needed
   - Copy into the correct folder (overwrite)
   - Ensure the page’s `import ... opening_image from '...'` still points at that file (update extension in import if it changed)
2. Update the `<OpeningPageImage ... />` call:
   - `header="..."`
   - `subtitle1` / `subtitle2` only if provided; omit or pass empty/undefined-equivalent if removing (match how other pages omit unused props)
   - `imageURL={...importedImage}`
3. Do not change other sections on the page.

### 4. Local preview (required)

Follow **`start-local-preview`** and open the matching page:

| Page | URL |
|------|-----|
| Home | `http://localhost:3000/` |
| Education | `http://localhost:3000/#/education` |
| Contact Us | `http://localhost:3000/#/contact-us` |
| Other | `http://localhost:3000/#/<slug>` |

Tell the user:  
“I opened [page name]. Please check the big banner at the top — photo and title.”

### 5. Offer share-changes

Follow **`share-changes`**: ask to save and open a review link; stage only the touched page file + banner image asset(s).

## Agent constraints

- Speak in plain language (see Audience)
- One page per run unless the user lists several
- Do not invent headlines or photos — wait for user input
- Do not restyle `OpeningPageImage.js` unless asked to fix a display problem
- Commit only via `share-changes` / explicit user request
