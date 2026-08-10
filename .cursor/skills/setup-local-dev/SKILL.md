---
name: setup-local-dev
description: >-
  Guides contributors through installing required tools (Node.js with npm, Git),
  installing UHE-Website dependencies, and starting the local CRA server for a
  smoke check. Prefer CLI package managers over browser downloads. Use when the
  user asks to set up the project, install prerequisites, download Node/npm/Git,
  run locally, get started, or verify the site works on localhost.
---

# Setup Local Dev (UHE-Website)

## Scope

Get a contributor from zero (or partial) tooling to a running local site.

**Required tools**

| Tool | Download separately? | Why |
|------|----------------------|-----|
| **Node.js** (LTS) | Yes | Runtime for Create React App |
| **npm** | No — ships with Node | `npm install` / `npm start` |
| **Git** | Yes | Clone / branch / PR workflow |

No database, Docker, or other runtimes are required for local preview.

**Success criteria:** `http://localhost:3000` responds and the Home page loads in the browser.

## Workflow

Copy and track:

```
Local setup:
- [ ] 1. Detect OS and shell
- [ ] 2. Check Node, npm, Git
- [ ] 3. Install anything missing (CLI first)
- [ ] 4. Confirm repo is present
- [ ] 5. npm install
- [ ] 6. npm start + open browser
- [ ] 7. Ask user to confirm the site looks OK
```

### 1. Detect OS and shell

Identify the environment (Windows / macOS / Linux) and available package manager before installing.

Prefer, in order:

| OS | Preferred CLI installer |
|----|-------------------------|
| Windows | `winget` (then Chocolatey / Scoop if present) |
| macOS | Homebrew (`brew`) |
| Linux | Distro package manager (`apt`, `dnf`, etc.) |

If none of those exist, fall back to browser download links (step 3).

### 2. Check what is already installed

Run from any shell:

```bash
node -v
npm -v
git --version
```

Interpret:

- All three succeed → skip to step 4
- Missing Node and/or npm → install **Node.js LTS** (npm comes with it)
- Missing Git → install Git
- Command not found after install → open a **new** terminal / refresh PATH and re-check

Record versions for the user in the final summary.

### 3. Install missing tools (CLI first)

Run only the installs that failed in step 2. Prefer non-interactive flags when available.

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

If the distro’s `nodejs` is too old for CRA, use NodeSource / `nvm` / official Node binaries instead of the default package — prefer a current **LTS** release.

#### Browser fallback (only if CLI install is unavailable)

Tell the user to install, then re-run the version checks:

- Node.js LTS: https://nodejs.org/
- Git: https://git-scm.com/downloads

Do **not** ask them to download npm separately.

After any install, verify again with `node -v`, `npm -v`, `git --version` in a fresh shell.

### 4. Confirm the repo is present

This skill assumes work happens inside the **UHE-Website** repo root (directory containing `package.json` with `"name": "uhe-website"`).

- If already in that root → continue
- If the repo is missing and the user wants a fresh clone:

```bash
git clone git@github.com:UHEsports/UHE-Website.git
cd UHE-Website
```

HTTPS alternative if SSH is not set up:

```bash
git clone https://github.com/UHEsports/UHE-Website.git
cd UHE-Website
```

### 5. Install project dependencies

From the repo root:

```bash
npm install
```

Wait for a successful exit. Deprecation warnings from transitive CRA packages are normal; treat a non-zero exit as a failure — diagnose and fix before continuing.

### 6. Start the server and open the site

1. If nothing is already serving `http://localhost:3000`, start the app from the repo root:

```bash
npm start
```

2. Wait until the app responds (HTTP 200 on `http://localhost:3000`). CRA may print ESLint warnings; that is OK if the compile succeeded.
3. Open Home in the default browser:

```bash
# Windows
start http://localhost:3000/

# macOS
open http://localhost:3000/

# Linux
xdg-open http://localhost:3000/
```

HashRouter routes (for optional checks):

- Home: `http://localhost:3000/`
- Education: `http://localhost:3000/#/education`
- Contact Us: `http://localhost:3000/#/contact-us`

### 7. User confirmation

Ask the user to confirm the Home page loaded correctly (layout, images, nav).

Summarize:

- Tool versions (`node`, `npm`, `git`)
- That `npm install` completed
- Local URL: `http://localhost:3000`
- Any skipped steps or fallbacks used

If the page failed to load, stop and troubleshoot (port in use, compile errors, PATH) before claiming success.

## Agent constraints

- Prefer CLI installs; use browser download links only as fallback
- Never tell users to install npm separately from Node
- Do not run `npm run eject`
- Do not commit, push, or open PRs as part of this skill
- Do not modify application source just to complete setup
- If a tool install needs admin elevation the agent cannot perform, give the exact command for the user to run and wait
- Keep the CRA server running after setup unless the user asks to stop it
