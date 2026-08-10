---
name: update-leadership
description: >-
  Updates the Contact Us Leadership section (add, remove, reorder, or edit
  names, roles, and headshot images). Copies user-provided image paths into
  src/assets/images/contact-us/, updates ContactUs.js, opens the local
  contact-us page for review, and optionally opens a GitHub PR. Use when the
  user asks to update leadership, change a headshot, add or remove a leader,
  reorder leaders, or edit Contact Us leadership.
---

# Update Leadership (Contact Us)

## Scope (v1)

Supports **add**, **remove**, **reorder**, and **edit** for leaders on the Contact Us page.

Files involved:
- `src/pages/ContactUs.js` — imports, leader data, render order
- `src/components/LeadershipSection.js` — presentational only (do not change unless layout is broken)
- `src/assets/images/contact-us/` — headshot assets only (not `contact_us_opening_image.png` or `group_3.jpg`)

Live route (HashRouter): `http://localhost:3000/#/contact-us`

## Workflow

Copy and track:

```
Leadership update:
- [ ] 1. Ask what is changing
- [ ] 2. Collect required inputs
- [ ] 3. Apply image + code changes
- [ ] 4. Normalize roles / clean unused assets
- [ ] 5. Run locally and open Contact Us
- [ ] 6. Offer optional GitHub PR
```

### 1. Ask what is changing

Ask the user to choose one or more:

| Option | Meaning |
|--------|---------|
| **Edit** | Change name, role, and/or image for existing leader(s) |
| **Add** | Insert a new leader |
| **Remove** | Delete a leader |
| **Reorder** | Change display order |

Then ask which people are affected. Show the current roster from `ContactUs.js` so they can pick by name.

For **Edit**, also ask which fields change: name / role / image (any combo). Leave unchanged fields alone.

### 2. Collect required inputs

| Operation | Required from user |
|-----------|-------------------|
| Edit name | New name |
| Edit role | New role |
| Edit image | Absolute or relative path to the new image file |
| Add | Name, role, image path, and insert position (or “end”) |
| Remove | Which leader(s) |
| Reorder | Full desired order (list of names) |

**Image rules**
- Allowed extensions only: `.jpg`, `.jpeg`, `.png`, `.webp`
- Reject other types and ask for a replacement
- Prefer a portrait headshot with the face centered (cards use `cover` at ~250×300)

**Role text**
- Trim leading/trailing whitespace
- Collapse internal runs of spaces to a single space
- Example: `" Content Director"` → `"Content Director"`

### 3. Apply changes

#### Prefer a data-driven roster

If leaders are still hardcoded as separate `<LeadershipSection />` calls, refactor once to a `leaders` array inside `Leadership` (or module scope in `ContactUs.js`), then map to `<LeadershipSection />`.

Keep display order = array order. Target shape:

```js
const leaders = [
  { name: "Sky Kauweloa", role: "Director", headshot: skyHeadshot },
  // ...
];
```

Layout: render with `justifyContent="center"` in rows of up to **3** per row (MUI `lg={3}` / `md={3}` / `sm={5.5}` / `xs={12}` as in `LeadershipSection`). Do not keep the old hardcoded side spacer `Grid`s unless needed for visual parity; centered rows of ≤3 is the v1 rule.

#### Image copy + naming

1. Normalize filename: `firstname_lastname` + original extension, lowercase, ASCII letters/numbers only; spaces and punctuation → `_`; collapse multiple `_`.
   - `Nyle-Sky-Kauweloa2-jpg.webp` from person "Sky Kauweloa" → `sky_kauweloa.webp` when replacing that person’s headshot
   - Use the **person’s name** (after any rename in this update) for the basename, not the source filename
2. Destination: `src/assets/images/contact-us/<normalized>.<ext>`
3. Copy with overwrite if the destination exists (`cp` / `copy` as appropriate for the OS)
4. Update or add the `import ... from '../assets/images/contact-us/...'` in `ContactUs.js`
5. Point that leader’s `headshot` at the import

If the user’s path is pasted into chat, treat it as a filesystem path and copy from there. Confirm the file exists before copying.

#### Remove / swap cleanup

After code updates, delete any headshot file under `src/assets/images/contact-us/` that:
- is no longer imported by `ContactUs.js`, and
- is not `contact_us_opening_image.png` or `group_3.jpg`

When swapping an image to a new normalized name, delete the previous file for that leader if it is unused.

#### Add / remove / reorder

- **Add**: append or insert into `leaders`; add import + asset
- **Remove**: drop from `leaders`; remove import; delete unused asset
- **Reorder**: rewrite `leaders` to match the requested name order (no asset changes)

### 4. Sanity checks before preview

- Every leader has `name`, `role`, and `headshot`
- No duplicate names in the roster unless the user explicitly wants that
- Roles are whitespace-normalized
- No broken imports; no orphaned headshot imports

### 5. Local preview (required)

1. If the CRA server is not already running, run `npm start` from the repo root
2. Wait until the app responds at `http://localhost:3000`
3. Open the Contact Us page in the default browser:

```bash
# Windows
start http://localhost:3000/#/contact-us

# macOS
open http://localhost:3000/#/contact-us

# Linux
xdg-open http://localhost:3000/#/contact-us
```

4. Tell the user to confirm names, roles, order, and headshots on that page

### 6. Optional GitHub PR

After the user confirms the preview (or if they ask to proceed), **ask**:

> Open a GitHub pull request for these leadership changes? (yes/no)

If **no**, stop after summarizing what changed.

If **yes**:
1. Create a focused branch, e.g. `chore/update-leadership-<short-slug>`
2. Stage only leadership-related files (ContactUs.js, new/changed/deleted assets under `contact-us/`, and this skill only if intentionally edited)
3. Commit with a conventional message, e.g. `chore: update Contact Us leadership`
4. Push with `-u` and create a PR via `gh pr create`
5. Return the PR URL

Do **not** force-push, amend shared history, or commit secrets. Only commit when this workflow (or the user) has approved creating the PR/commit.

## Agent constraints

- Do not edit Giving / Donation sections unless the user asks
- Do not rename or delete non-headshot contact-us images
- Do not invent names, roles, or images — wait for user input
- If an image path is missing or invalid, stop and ask again
- Keep changes minimal and reviewable
