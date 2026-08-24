---
name: start-local-preview
description: >-
  Starts the UHE-Website local development server (npm start) and opens the
  site preview in the browser. Use when the user asks to start the server,
  start local development, run the site locally, open a preview, start
  localhost, or show the site on their computer. Assumes tools and
  dependencies are already installed — if not, hand off to
  setup-dev-environment. Audience is non-technical — speak in plain language
  with the user.
---

# Start Local Preview (Dev Server)

## Audience & how to talk to the user

Users of this skill are **not** software engineers or frontend developers. They may have little or no tech background.

**When talking to the user:**
- Prefer “preview on your computer,” “open the site in your browser,” “start the local preview.”
- Avoid leading with “CRA,” “webpack,” or “dev server” unless helpful; “local preview” is enough.
- If something is already running, say so simply (“It’s already open — I’ll bring it up in your browser”).
- On failure, explain the likely issue in plain terms and the next step.

**Good summary example:**  
“The site preview is running. I opened the Home page in your browser.”

**Avoid:**  
“CRA compiled with ESLint warnings; listening on 0.0.0.0:3000.”

## Scope

| Does | Does not |
|------|----------|
| Start `npm start` from the project root if needed | Install Node/Git or run first-time `npm install` (use `setup-dev-environment`) |
| Wait until `http://localhost:3000` responds | Edit website content |
| Open Home (or a page the user named) in the browser | Commit / share-changes |
| Keep the preview running unless asked to stop | Run `npm run eject` or production build unless asked |

**Success criteria:** Preview responds at `http://localhost:3000` and the requested page is open in the browser.

## Workflow

```
Start local preview:
- [ ] 1. Confirm project folder
- [ ] 2. Quick check: Node/npm available; node_modules present
- [ ] 3. Start server if not already running
- [ ] 4. Open the page in the browser
- [ ] 5. Confirm with the user
```

### 1. Confirm project folder

Work in **UHE-Website** root (`package.json` with `"name": "uhe-website"`).  
If the folder is missing or you’re unsure, stop and guide them — or run **`setup-dev-environment`** if they still need first-time setup.

### 2. Quick readiness check

```bash
node -v
npm -v
```

If Node/npm are missing → tell them setup isn’t finished and follow **`setup-dev-environment`**.

If `node_modules` is missing (or `npm start` fails with missing packages) → run `npm install` once (or hand off to `setup-dev-environment` if broader setup is needed), then continue.

### 3. Start the preview if needed

1. Check whether something already responds at `http://localhost:3000`.
2. If **yes** → skip starting; go to step 4.
3. If **no** → from the repo root:

```bash
npm start
```

4. Wait until the app responds (HTTP 200). Compile warnings from CRA/ESLint are OK if the app loaded.
5. If the port is in use by a broken process, explain simply and help free/restart it — don’t claim success until the preview loads.

Tell the user while waiting: “Starting the site preview — this can take a minute the first time.”

### 4. Open the browser

Default to **Home** unless the user asked for a specific page.

| Page | URL |
|------|-----|
| Home | `http://localhost:3000/` |
| Education | `http://localhost:3000/#/education` |
| Contact Us | `http://localhost:3000/#/contact-us` |
| Other | `http://localhost:3000/#/<slug>` |

```bash
# Windows
start http://localhost:3000/

# macOS
open http://localhost:3000/

# Linux
xdg-open http://localhost:3000/
```

Replace the URL when they named another page.

### 5. Confirm

> The site preview should be open in your browser. Does the page look okay?

Keep the preview running unless they ask to stop it.

If they ask to stop:

- End the `npm start` process cleanly
- Confirm in plain language: “Stopped the preview on your computer.”

## How other skills should use this

Content skills (leadership, education, sponsors, banners, create-page, etc.) should **follow this skill** when they need a local preview and nothing is already running — instead of re-documenting full `npm start` troubleshooting.

## Agent constraints

- Speak in plain language (see Audience)
- Do not reinstall the whole toolchain here — defer to `setup-dev-environment`
- Do not commit, push, or open review links
- Do not modify application source just to start the preview
- Leave the preview running after success unless the user asks to stop
