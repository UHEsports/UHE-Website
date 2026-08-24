---
name: setup-dev-environment
description: >-
  First-time (or repair) setup for UHE-Website development: install required
  programs (Node.js with npm, Git), confirm the project folder, and run
  npm install. Does not focus on day-to-day preview starts — hand off to
  start-local-preview for that. Prefer CLI package managers over browser
  downloads. Use when the user asks to set up the project, install
  prerequisites or dependencies, download Node/npm/Git, get started for the
  first time, or fix a broken install. Audience is non-technical — speak in
  plain language with the user.
---

# Setup Dev Environment (Install Tools + Dependencies)

## Audience & how to talk to the user

Users of this skill are **not** software engineers or frontend developers. They may have little or no tech background.

**When talking to the user:**
- Use everyday words: “needed programs,” “project pieces,” “one-time setup,” “download the pieces the website needs.”
- Never assume they know terminals, PATH, package managers, npm, Node, or Git.
- One clear next step at a time. If they must approve an install, say so simply.
- If something fails, explain in plain terms — don’t lead with raw error dumps.

**Good summary example:**  
“Setup is done. The needed programs are installed and the project pieces are ready. Say the word when you want me to open the site preview on your computer.”

**Avoid:**  
“Node LTS via winget; npm install completed with transitive deprecation warnings.”

## Scope

**This skill installs and prepares** — it does **not** own day-to-day “start the preview.”

| Does | Does not |
|------|----------|
| Install Node.js (LTS), npm (with Node), Git | Replace `start-local-preview` for every session |
| Confirm UHE-Website project folder (clone if needed) | Edit website content |
| Run `npm install` | Commit, push, or open review links |
| Optionally offer to start a preview via `start-local-preview` | Run `npm run eject` |

**Success criteria:** Node, npm, and Git work; project folder is present; `npm install` finished successfully.

## Workflow

```
Dev environment setup:
- [ ] 1. Detect OS and shell
- [ ] 2. Check Node, npm, Git
- [ ] 3. Install anything missing (CLI first)
- [ ] 4. Confirm project folder is present
- [ ] 5. npm install
- [ ] 6. Summarize; offer start-local-preview
```

### 1. Detect OS and shell

Identify Windows / macOS / Linux and available package manager.

Prefer, in order:

| OS | Preferred CLI installer |
|----|-------------------------|
| Windows | `winget` (then Chocolatey / Scoop if present) |
| macOS | Homebrew (`brew`) |
| Linux | Distro package manager (`apt`, `dnf`, etc.) |

If none exist, fall back to browser download links (step 3).

### 2. Check what is already installed

```bash
node -v
npm -v
git --version
```

- All three succeed → skip to step 4
- Missing Node and/or npm → install **Node.js LTS** (npm comes with it)
- Missing Git → install Git
- Command not found after install → ask them to open a **new** terminal / restart Cursor and re-check. Plain explanation: “the computer sometimes needs a fresh window to notice new programs.”

### 3. Install missing tools (CLI first)

Tell the user first:  
“I’m going to install a couple of free programs the website needs. This may ask for permission on your computer.”

#### Windows (`winget`)

```bash
winget install -e --id OpenJS.NodeJS.LTS --accept-package-agreements --accept-source-agreements
winget install -e --id Git.Git --accept-package-agreements --accept-source-agreements
```

#### macOS (Homebrew)

```bash
brew install node git
```

#### Linux (Debian/Ubuntu example)

```bash
sudo apt update
sudo apt install -y nodejs npm git
```

If distro Node is too old for CRA, prefer a current **LTS** via NodeSource / `nvm` / official binaries.

#### Browser fallback

1. Node.js LTS: https://nodejs.org/ (big LTS button; defaults fine)
2. Git: https://git-scm.com/downloads (defaults fine)
3. Close and reopen terminal / Cursor, then re-check

Do **not** ask them to download npm separately. Re-verify with `node -v`, `npm -v`, `git --version`.

### 4. Confirm the project folder is present

Work in the **UHE-Website** folder (`package.json` with `"name": "uhe-website"`).

- Already there → continue
- Missing and they want a fresh copy:

```bash
git clone git@github.com:UHEsports/UHE-Website.git
cd UHE-Website
```

HTTPS if SSH is not set up:

```bash
git clone https://github.com/UHEsports/UHE-Website.git
cd UHE-Website
```

To the user: “I’m making sure we have the UHE website project folder ready.”

### 5. Install project dependencies

From the repo root:

```bash
npm install
```

Wait for success. Deprecation warnings from transitive CRA packages are normal; non-zero exit is a failure — fix before continuing.

To the user: “I’m downloading the pieces the website needs — this can take a few minutes.”

### 6. Done — offer preview start

Summarize in plain language:
- Needed programs are installed
- Project pieces are ready
- Any step they had to do themselves

Then ask:

> Want me to start the site preview on your computer now?

If **yes**, follow **`start-local-preview`** (do not duplicate that skill’s steps here).  
If **no**, stop; remind them they can ask anytime to “start the preview” or “start the local server.”

## Agent constraints

- Speak in plain, non-technical language (see Audience)
- Prefer CLI installs; browser downloads only as fallback
- Never tell users to install npm separately from Node
- Do not run `npm run eject`
- Do not commit, push, or open review links as part of this skill
- Do not modify application source just to complete setup
- If an install needs admin elevation you can’t perform, give the exact command, explain where to run it simply, and wait
- Day-to-day preview starts belong to **`start-local-preview`**
