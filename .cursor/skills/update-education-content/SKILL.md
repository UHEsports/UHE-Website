---
name: update-education-content
description: >-
  Updates the Education page: Courses text/image/link, Internships intro, and
  internship blocks (Gen G, Overwatch League, Vanta) including titles,
  descriptions, background photos, and YouTube videos. Copies images into
  src/assets/images/education/, updates Education.js, opens the local Education
  page for review, then offers share-changes. Use when the user asks to update
  Education, courses, internships, Gen G, Overwatch League, Vanta, course
  graphic, or Education YouTube videos. Audience is non-technical — speak in
  plain language with the user.
---

# Update Education Content

## Audience & how to talk to the user

Users of this skill are **not** software engineers or frontend developers. They may have little or no tech background.

**When talking to the user:**
- Use everyday words: “Courses section,” “internship,” “background photo,” “YouTube video,” “Learn More button,” “preview.”
- Never assume they know React, embeds, imports, or file paths.
- Explain *what changed on the Education page* and *what to check*, not which code files you edited.
- Keep questions short. Offer clear choices (Courses / Internships intro / a specific internship).

**When doing the work:** keep technical paths and commands for yourself. Do not dump them into user-facing messages unless they ask.

**Good summary example:**  
“Updated the Gen G internship description and swapped its background photo. I opened the Education page — please scroll to Gen G and check the text, photo, and video.”

**Avoid:**  
“Patched gengDescription and backgroundURL import; hot-reloaded `/#/education`.”

## Scope (v1)

| Area | What can change |
|------|-----------------|
| **Courses** | Description text, course graphic image, “Learn More” link URL |
| **Internships intro** | Section title (usually “Internships”), intro paragraph |
| **Internship blocks** | Add, remove, edit, or reorder: Gen G, Overwatch League, Vanta (and future ones) — title, description slides, background photo, YouTube video |

Out of scope unless the user also asks: Education page **banner** (use `update-page-banner`), navbar partner logos, Contact Us / Home.

Files (agent-only):
- `src/pages/Education.js` — all content
- `src/pages/Education.css` — only if layout is broken
- `src/assets/images/education/` — course graphic + internship backgrounds (not navbar logos `css-logo-color-1.png` / `isp-colored-1.png` unless user explicitly asks)

Preview URL: `http://localhost:3000/#/education`

## Workflow

```
Education update:
- [ ] 1. Ask what is changing
- [ ] 2. Collect inputs
- [ ] 3. Apply image + code changes
- [ ] 4. Sanity checks
- [ ] 5. Open Education preview
- [ ] 6. Offer share-changes
```

### 1. Ask what is changing

> What would you like to update on the Education page?
> - **Courses** (text, graphic, or Learn More link)
> - **Internships intro** (heading or intro paragraph)
> - **An internship** (Gen G, Overwatch League, Vanta — or add/remove/reorder)

Show the current internship titles from `Education.js` so they can pick by name.

### 2. Collect required inputs

| Change | Ask for |
|--------|---------|
| Courses text | New paragraph(s) |
| Courses graphic | Path to the new image file |
| Learn More link | Full website URL |
| Internships intro | New title and/or paragraph |
| Edit internship title | New title |
| Edit internship text | New paragraph(s) — one or more “slides” of text |
| Edit background photo | Path to the new image |
| Edit YouTube video | YouTube link (watch or share or embed — agent converts) |
| Add internship | Title, description text, background photo, YouTube link, position (or “end”), and layout preference if they care (video on left vs right — default alternate like existing) |
| Remove internship | Which one(s) |
| Reorder | Full desired order by title |

**Image rules:** `.jpg`, `.jpeg`, `.png`, `.webp` only. Prefer wide photos for internship backgrounds (they cover the text panel).

**YouTube rules:** Accept any common YouTube URL. Store as embed form: `https://www.youtube.com/embed/<VIDEO_ID>`. If they paste a non-YouTube link, ask again in plain language.

**Description shape in code:** each internship uses an array of single-string slides:

```js
const gengDescription = [
  ["Paragraph for slide 1..."],
  // optional more slides:
  // ["Paragraph for slide 2..."],
];
```

### 3. Apply changes

#### Courses

In `Courses()` inside `Education.js`:
- Text → `SectionDescription` children
- Button `href` → Learn More URL (`target="_blank"` stays)
- Graphic → copy to `src/assets/images/education/`, prefer stable name like `com369_graphic.<ext>` or keep seasonal name if user wants; update import `courses_graphic`

#### Internships intro

Edit `InternshipHeader` title / `SectionDescription` only.

#### Internship blocks — important Overwatch League quirk

Overwatch League is rendered **twice** (desktop left-video layout + mobile right-video layout). When editing OWL, update **both** `<InternshipGraphicLeft>` and `<InternshipGraphicRight>` calls so title, descriptions, `videoURL`, and `backgroundURL` stay in sync.

Current pattern at bottom of `Education()`:

- Gen G → `InternshipGraphicRight`
- Overwatch League → `InternshipGraphicLeft` (desktop) + `InternshipGraphicRight` (mobile), wrapped in `Box` display breakpoints
- Vanta → `InternshipGraphicRight`

#### Image copy + naming

1. Normalize: lowercase, spaces/punctuation → `_`, ASCII only
   - Backgrounds: `<slug>_background.<ext>` (e.g. `geng_background.png`)
   - Course graphic: `com369_graphic.<ext>` or user-requested seasonal name
2. Destination: `src/assets/images/education/<name>.<ext>`
3. Copy with overwrite; update import; point JSX at the import
4. Do **not** delete `education_opening_image.png`, `css-logo-color-1.png`, or `isp-colored-1.png` as part of this skill

#### Add / remove / reorder

- **Add:** new description const, background import, and one (or two if mirroring OWL responsive pattern) graphic component call. Prefer a single layout (`InternshipGraphicRight`) unless they need the OWL dual pattern.
- **Remove:** drop consts, imports, and both OWL wrappers if removing OWL; delete unused background file only if unused
- **Reorder:** reorder the component calls under `InternshipHeader` (keep OWL’s paired `Box` wrappers together)

Do not invent copy, videos, or images — wait for the user.

### 4. Sanity checks

- Every internship has title, at least one description slide, background, and video URL
- OWL desktop + mobile props match if OWL still exists
- YouTube URLs are embed URLs
- No broken imports; no orphaned education asset imports from this edit

### 5. Local preview (required)

Follow **`start-local-preview`** and open Education (`http://localhost:3000/#/education`).

Tell the user:  
“I opened the Education page. Please check the sections we changed (Courses and/or the internship blocks) — text, photos, and videos.”

### 6. Offer share-changes

After they confirm (or ask to proceed), follow the **`share-changes`** skill: ask whether to save and open a review link; if yes, run that workflow with a short summary of the Education updates and only Education-related files staged.

## Agent constraints

- Speak in plain language (see Audience)
- Do not edit the Education banner unless the user also requests it (then use / combine with `update-page-banner`)
- Do not invent content; stop and ask if a photo or video link is missing
- Keep OWL dual layouts in sync
- Keep changes minimal; do not commit unless `share-changes` (or the user) says to
