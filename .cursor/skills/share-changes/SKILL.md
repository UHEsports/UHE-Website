---
name: share-changes
description: >-
  Saves the user’s confirmed website updates and opens a GitHub review link
  (pull request) for the team, using plain language throughout. Use after a
  content skill preview is approved, or when the user asks to save changes,
  share for review, open a pull request, publish a handoff, or get a review
  link. Audience is non-technical — speak in plain language with the user.
---

# Share Changes (Save + Review Link)

## Audience & how to talk to the user

Users of this skill are **not** software engineers or frontend developers. They may have little or no tech background.

**When talking to the user:**
- Prefer “save your updates,” “review link for the team,” “ready for someone to approve before the live site.”
- Avoid leading with Git jargon (branch, commit, PR, push, remote). If you must mention GitHub, call it “the team’s review page.”
- Never dump `git status` or file paths unless they ask for details.
- Be clear this does **not** by itself put changes on the public live website — it packages them for team review/approval.

**Good ask:**  
“Looks good on your side? I can save these updates and open a review link for the team on GitHub. Want me to do that? (yes/no)”

**If they’re unsure:**  
“This packages your updates so someone on the team can approve them before they go on the live website.”

**Good done message:**  
“Saved. Here’s the review link for the team: \<URL\>”

## When to use

- User said **yes** after a content skill offered sharing
- User asks to save / share / open a review link / create a pull request / hand off for publish
- Another skill says “follow **share-changes**”

Do **not** run this automatically without a clear yes (or an explicit “save and open a review link” request).

## Preconditions

1. Preview was shown (or user explicitly skips preview and still wants to share)
2. User confirmed they want to save and share
3. There are real local changes to include

If there is nothing to save, say so plainly and stop.

## Workflow

```
Share changes:
- [ ] 1. Confirm what we’re sharing (plain language)
- [ ] 2. Create a focused branch
- [ ] 3. Stage only the relevant files
- [ ] 4. Commit with a clear conventional message
- [ ] 5. Push and open the review link (gh pr create)
- [ ] 6. Give the user the link + short summary
```

### 1. Confirm scope (plain language)

Briefly restate what will be shared, e.g.  
“I’ll save the Education internship updates we just made and open a review link.”

If multiple unrelated edits exist in the working tree, ask which ones to include so you don’t mix in unrelated work.

### 2. Branch

Create a focused branch from an up-to-date base when practical:

| Kind of change | Branch example |
|----------------|----------------|
| Leadership | `chore/update-leadership-<short-slug>` |
| Education | `chore/update-education-<short-slug>` |
| Sponsors | `chore/update-sponsors-<short-slug>` |
| Banner | `chore/update-banner-<page>-<short-slug>` |
| New page | `feat/add-<slug>-page` |
| Mixed / unclear | `chore/update-site-content-<short-slug>` |

### 3. Stage only relevant files

Stage only files that belong to this handoff (page JS/CSS, images under the right `src/assets/images/...` folder, and skill files only if the user meant to change skills).

Do **not** stage:
- Secrets (`.env`, credentials)
- Unrelated edits
- Accidental `node_modules` changes

### 4. Commit

Follow the repo’s committing rules (conventional commits, HEREDOC message, no amend/force unless explicitly required by those rules).

Message focuses on **why** / what the site change is:

```text
chore: update Education Gen G internship copy

chore: update Home sponsors

chore: update Contact Us banner image

feat: add Women of UH Esports page
```

Only commit when this skill’s workflow (or the user) has clearly approved saving.

### 5. Push and open review link

1. `git push -u origin HEAD` (with network permissions as required)
2. Create the pull request with `gh pr create`
3. Title: plain, specific (same spirit as the commit)
4. Body: short **Summary** bullets in everyday language + a simple **Test plan** (e.g. “Open Education page and check Gen G text, photo, and video”)

### 6. Tell the user

- Give the PR URL
- One-sentence reminder: a teammate still needs to approve/merge for the GitHub side. Publishing to the **live** UH website is a separate step — use **`build-and-deploy`** when they are ready for that.

## Safety

- Never force-push to `main` / `master`
- Never skip hooks unless the user explicitly asks
- Never update git config
- Never commit secrets
- If `gh` or push fails, explain in plain language what blocked you and the simplest next step (sign in, permissions, network)

## How other skills should call this

Content skills should **not** duplicate full PR steps. After preview confirmation they should:

1. Ask the plain-language yes/no question (or point here)
2. If yes → **follow this `share-changes` skill** with a one-line summary of what changed and which files are in scope

## Agent constraints

- Speak in plain language (see Audience)
- Require explicit approval before commit/push/PR
- Keep the PR small and focused
- Return the review URL when done
