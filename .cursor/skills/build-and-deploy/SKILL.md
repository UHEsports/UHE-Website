---
name: build-and-deploy
description: >-
  Builds the UHE website for production and deploys the build folder over SFTP
  to UH ITS webedit (webedit.its.hawaii.edu:22) at remote path /1/esports.
  Reads SFTP_USERNAME and SFTP_PASSWORD from .env; stops and identifies empty
  or missing credentials. Use when the user asks to build, deploy, publish to
  the live UH site, upload via SFTP, or push to webedit / hawaii.edu/esports.
  Audience is non-technical — speak in plain language with the user.
---

# Build and Deploy (UH SFTP)

## Audience & how to talk to the user

Users of this skill are **not** software engineers or frontend developers. They may have little or no tech background.

**When talking to the user:**
- Prefer “build the site,” “publish to the live website,” “login for the UH web server,” “password file.”
- Avoid leading with SFTP/CI jargon. “Upload to the university web server” is enough.
- Never print, repeat, or paste their password into chat or logs.
- Be clear this updates the **live** public site (https://www.hawaii.edu/esports/), not just a preview on their computer.
- Require an explicit yes before uploading.

**Good ask:**  
“I’ll create a fresh copy of the site and upload it to the live UH Esports website. This will replace what’s currently online. Do you want me to continue? (yes/no)”

**Good credential prompt:**  
“Your login file is missing a username and/or password. Open the `.env` file in the project folder, fill in `SFTP_USERNAME` and `SFTP_PASSWORD`, save it, and tell me when you’re ready.”

## Scope

| Does | Does not |
|------|----------|
| Ensure `.env` exists (from `.env.example` if needed) | Commit `.env` or secrets |
| Detect empty/missing `SFTP_USERNAME` / `SFTP_PASSWORD` and stop | Deploy without user confirmation |
| Run production build (`npm run build`) | Change site content (use content skills first) |
| Upload `build/` to SFTP remote `/1/esports` | Install Node for the first time (use `setup-dev-environment`) |
| Confirm success in plain language | Force-push git or open a PR (use `share-changes`) |

**Server defaults (also in `.env.example`):**

| Setting | Value |
|---------|-------|
| Host | `webedit.its.hawaii.edu` |
| Port | `22` |
| Remote folder | `/1/esports` |

## Credentials (`.env`)

Required file at project root: `.env` (gitignored). Template: `.env.example`.

```env
SFTP_HOST=webedit.its.hawaii.edu
SFTP_PORT=22
SFTP_USERNAME=
SFTP_PASSWORD=
SFTP_REMOTE_PATH=/1/esports
```

**Empty-credential rule:** If `.env` is missing, or `SFTP_USERNAME` / `SFTP_PASSWORD` is blank after trim, **stop**. Tell the user **which** fields are empty (`SFTP_USERNAME`, `SFTP_PASSWORD`, or both). Do not attempt upload. Do not invent credentials.

Never commit `.env`. Never stage it in `share-changes`.

## Workflow

```
Build and deploy:
- [ ] 1. Confirm they want to update the live site
- [ ] 2. Ensure project is ready (Node, dependencies)
- [ ] 3. Ensure .env exists; validate username/password
- [ ] 4. Build (npm run build)
- [ ] 5. Deploy (npm run deploy:sftp) — or npm run deploy for build+upload
- [ ] 6. Summarize success + live URL; ask them to spot-check
```

### 1. Confirm live publish

Ask for an explicit yes. If no, stop.

If they only want a build (no upload), run `npm run build` only and explain where `build/` is — do not upload.

### 2. Project readiness

- Work in UHE-Website root (`package.json` name `uhe-website`)
- If Node/npm missing → `setup-dev-environment`
- If `node_modules` missing → `npm install` (or setup skill)

### 3. Credentials check

1. If `.env` is missing, copy `.env.example` → `.env` and tell them to add username/password
2. Read `.env` (agent may use the deploy script’s validation, or inspect keys **without** echoing password values)
3. If username and/or password empty → report which are empty in plain language and wait
4. Host/port/path may stay at defaults; only change if the user asks

### 4. Build

```bash
npm run build
```

Wait for success. If the build fails, explain simply and fix before deploying.

To the user: “I’m preparing the final version of the site for the live server — this can take a minute.”

### 5. Deploy (SFTP upload)

Prefer the project script (reads `.env`, uploads `build/` to the remote path):

```bash
npm run deploy:sftp
```

Or build + deploy in one step (only after credentials are validated and user confirmed):

```bash
npm run deploy
```

Implementation: `scripts/deploy-sftp.js` using `ssh2-sftp-client`. It must:
- Refuse to run when username/password are empty (lists missing keys)
- Never print the password
- Upload local `build/` directory to `SFTP_REMOTE_PATH` (default `/1/esports`)

If upload fails (auth, network, permissions), explain in plain language: wrong login, no network, or no permission to that folder — and what to try next. Do not retry endlessly with the same bad password.

### 6. Done

Tell the user:
- Publish finished
- They should check the live site: https://www.hawaii.edu/esports/
- Hard-refresh / wait a minute if they still see an old version (browser or server cache)

## Relationship to other skills

| Skill | Role |
|-------|------|
| `start-local-preview` | Preview on their computer (not live) |
| `share-changes` | Save work + team review link on GitHub |
| **`build-and-deploy`** | Put the current project on the **live** UH site |
| `setup-dev-environment` | First-time tools + `npm install` |

Typical order after content edits: preview locally → optional `share-changes` → when ready for public, **`build-and-deploy`**.

## Agent constraints

- Speak in plain language (see Audience)
- Require explicit confirmation before uploading to the live server
- Never commit, print, or share `.env` / passwords
- Stop and identify empty `SFTP_USERNAME` and/or `SFTP_PASSWORD`
- Do not change `SFTP_REMOTE_PATH` away from `/1/esports` unless the user explicitly asks
- Keep the deploy script and `.env.example` defaults aligned with webedit.its.hawaii.edu:22
