---
name: update-sponsors
description: >-
  Updates the Home page Our Sponsors section (add, remove, reorder, or replace
  sponsor logos). Copies logos into src/assets/images/logos/, updates Home.js,
  opens the local Home page for review, then offers share-changes. Use when the
  user asks to update sponsors, sponsor logos, APCU, ACM, add a sponsor, or
  change Our Sponsors on the Home page. Audience is non-technical — speak in
  plain language with the user.
---

# Update Sponsors (Home)

## Audience & how to talk to the user

Users of this skill are **not** software engineers or frontend developers. They may have little or no tech background.

**When talking to the user:**
- Use everyday words: “sponsor,” “logo,” “Home page,” “Our Sponsors,” “preview.”
- Never assume they know imports, Grid layout, or file paths.
- Explain *which logos changed on Home* and ask them to scroll to **Our Sponsors**.
- Keep questions short (add / remove / replace / reorder).

**Good summary example:**  
“Replaced the ACM logo and added a new sponsor at the end. I opened the Home page — please scroll to Our Sponsors and check the logos.”

**Avoid:**  
“Refactored Sponsors() Grid items and normalized assets under logos/.”

## Scope (v1)

Supports **add**, **remove**, **reorder**, and **replace** logos in the Home **Our Sponsors** section.

Out of scope unless asked separately:
- Navbar partner logos (UHE / APCU white / College of Social Sciences / ISP) — different area
- Page banner (`update-page-banner`)
- Footer

Files (agent-only):
- `src/pages/Home.js` — `Sponsors()` and logo imports near top (`acm_logo`, `apcu_logo`, …)
- `src/assets/images/logos/` — sponsor logo files

Preview: `http://localhost:3000/` (scroll to Our Sponsors)

Current sponsors (as of skill authoring): APCU (`APCU_vert_2016_black.png`), ACM (`ACMlogo_stacked.png`). Prefer the **black** APCU asset for this section (white variant is for the navbar).

## Workflow

```
Sponsors update:
- [ ] 1. Ask what is changing
- [ ] 2. Collect inputs
- [ ] 3. Prefer data-driven list; apply logo + code changes
- [ ] 4. Sanity checks
- [ ] 5. Open Home preview
- [ ] 6. Offer share-changes
```

### 1. Ask what is changing

> What would you like to change under **Our Sponsors** on the Home page?
> - **Replace** a logo
> - **Add** a sponsor
> - **Remove** a sponsor
> - **Reorder** the logos

List current sponsors by plain name (from imports / `Sponsors()`).

### 2. Collect required inputs

| Change | Ask for |
|--------|---------|
| Replace | Which sponsor + path to the new logo file |
| Add | Sponsor name (for filename), logo file path, position (or “end”) |
| Remove | Which sponsor(s) |
| Reorder | Full desired order by name |

**Logo rules**
- Allowed: `.jpg`, `.jpeg`, `.png`, `.webp`, `.svg`
- Prefer a clear logo on a transparent or simple background; section caps width ~175px (`SponsorLogos`)
- Reject unusable files and ask again in plain language

### 3. Apply changes

#### Prefer a data-driven list

If logos are still hardcoded as separate `Grid` items + spacer columns, refactor once inside `Sponsors()` to a small array, then map — similar to leadership. Example shape:

```js
const sponsors = [
  { name: "APCU", logo: apcu_logo },
  { name: "ACM", logo: acm_logo },
];
```

Render centered row(s) of logos with the existing `SponsorLogos` styled image. Drop ad-hoc empty spacer `Grid`s unless needed for visual parity; even spacing via flex/gap or equal `Grid` items is fine for v1.

Keep section title **Our Sponsors** unless the user asks to rename it.

#### Image copy + naming

1. Normalize filename from sponsor name: `apcu.png`, `acm_logo.png`, etc. (lowercase, `_` for spaces)
2. Destination: `src/assets/images/logos/<normalized>.<ext>`
3. Copy with overwrite; add/update import in `Home.js`; point the sponsor entry at the import
4. Do **not** delete navbar-only assets the Home Sponsors section does not use (e.g. `APCU_vert_2016_white.png`, `uhe_logo.png`) unless the user explicitly wants that file removed and nothing else references it

#### Add / remove / reorder

- **Add:** import + array entry (+ asset)
- **Remove:** drop entry + import; delete file only if unused elsewhere
- **Reorder:** rewrite array order only

### 4. Sanity checks

- Every sponsor has a name and logo import
- No broken imports; Sponsors section still animates with `useInView` classes
- Unused sponsor logo files from this edit are cleaned up when safe

### 5. Local preview (required)

Follow **`start-local-preview`** and open Home (`http://localhost:3000/`).

Tell the user:  
“I opened the Home page. Please scroll down to **Our Sponsors** and check that the logos look right.”

### 6. Offer share-changes

After confirmation, follow **`share-changes`**: plain-language ask → if yes, stage only sponsor-related files (`Home.js`, logo assets under `logos/`) and use a message like `chore: update Home sponsors`.

## Agent constraints

- Speak in plain language (see Audience)
- Do not change navbar logos or footer as part of this skill
- Do not invent sponsors or logos — wait for files from the user
- Keep changes minimal; commit only via `share-changes` / explicit user request
