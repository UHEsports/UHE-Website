---
name: update-leadership
description: >-
  Updates the Contact Us Leadership section (add, remove, reorder, or edit
  names, roles, and headshot photos). Copies user-provided photos into
  src/assets/images/contact-us/, updates ContactUs.js, opens the local
  Contact Us page for review, then offers the share-changes skill for saving
  and a team review link. Use when the user asks to update leadership, change
  a headshot, add or remove a leader, reorder leaders, or edit Contact Us
  leadership. Audience is non-technical — speak in plain language with the user.
---

# Update Leadership (Contact Us)

## Audience & how to talk to the user

Users of this skill are **not** software engineers or frontend developers. They may have little or no tech background.

**When talking to the user** (questions, confirmations, progress updates, summaries):
- Use everyday words. Prefer “photo” over “headshot asset,” “web page” over “route,” “preview” over “localhost,” “save and share for review” over “open a PR.”
- Never assume they know Git, GitHub, npm, React, imports, arrays, or file paths.
- Explain *what changed on the site* and *what they should look at*, not which code files you edited.
- Keep questions short and concrete. Offer simple choices (edit / add / remove / reorder).
- If something fails, say what went wrong in plain terms and what they can try next (e.g. “I couldn’t find that photo — can you share the file again?”).

**When doing the work** (agent-only steps below): keep using the technical file paths, commands, and code patterns. Do not dump those details into user-facing messages unless they ask.

**Good summary example:**  
“Updated the Leadership section on Contact Us: swapped Sky’s photo and moved Jordan after Alex. I opened the Contact Us page in your browser — please check that the names, roles, order, and photos look right.”

**Avoid:**  
“Refactored the leaders array, normalized assets under contact-us/, and hot-reloaded HashRouter at `/#/contact-us`.”

## Scope (v1)

Supports **add**, **remove**, **reorder**, and **edit** for leaders on the Contact Us page.

Files involved (agent-only):
- `src/pages/ContactUs.js` — imports, leader data, render order
- `src/components/LeadershipSection.js` — presentational only (do not change unless layout is broken)
- `src/assets/images/contact-us/` — headshot assets only (not `contact_us_opening_image.png` or `group_3.jpg`)

Live preview URL: `http://localhost:3000/#/contact-us`

## Workflow

Copy and track:

```
Leadership update:
- [ ] 1. Ask what is changing
- [ ] 2. Collect required inputs
- [ ] 3. Apply image + code changes
- [ ] 4. Normalize roles / clean unused assets
- [ ] 5. Follow start-local-preview; open Contact Us
- [ ] 6. Offer share-changes
```

### 1. Ask what is changing

Ask in plain language. For example:

> What would you like to change on the Leadership section?
> - **Edit** someone (name, role, and/or photo)
> - **Add** a new person
> - **Remove** someone
> - **Reorder** the people shown

Then ask which people are affected. Show the current roster from `ContactUs.js` as a simple name list so they can pick by name.

For **Edit**, also ask which fields change: name / role / photo (any combo). Leave unchanged fields alone.

### 2. Collect required inputs

| Operation | Ask the user for |
|-----------|------------------|
| Edit name | The new name |
| Edit role | The new role / title |
| Edit photo | Where the new photo file is (they can paste a path or point you to the file) |
| Add | Name, role, photo, and where to place them (or “at the end”) |
| Remove | Which person or people to remove |
| Reorder | The full order they want, listed by name |

**Photo rules**
- Allowed types only: `.jpg`, `.jpeg`, `.png`, `.webp`
- If they send something else, politely ask for a photo in one of those formats
- Prefer a portrait photo with the face centered (cards use `cover` at ~250×300)

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

If the user’s path is pasted into chat, treat it as a filesystem path and copy from there. Confirm the file exists before copying. If it doesn’t, ask again in plain language — don’t dump error stacks.

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

Follow **`start-local-preview`** and open Contact Us (`http://localhost:3000/#/contact-us`).

Tell the user in plain language, for example:  
“I opened the Contact Us page in your browser. Please check that the names, roles, order, and photos look correct.”

### 6. Offer share-changes

After the user confirms the preview (or if they ask to proceed), follow the **`share-changes`** skill:

1. Ask the plain-language yes/no about saving and opening a review link
2. If **no**, stop after summarizing what changed on the page (names, roles, photos, order)
3. If **yes**, run `share-changes` with scope limited to leadership files (`ContactUs.js`, headshot assets under `contact-us/`) and a message like `chore: update Contact Us leadership`

## Agent constraints

- Speak to the user in plain, non-technical language (see Audience section)
- Do not edit Giving / Donation sections unless the user asks
- Do not rename or delete non-headshot contact-us images
- Do not invent names, roles, or images — wait for user input
- If an image path is missing or invalid, stop and ask again in plain language
- Keep changes minimal and reviewable
- Commit / review link only via `share-changes` or an explicit user request
