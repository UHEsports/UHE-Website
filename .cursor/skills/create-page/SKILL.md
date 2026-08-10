---
name: create-page
description: >-
  Creates a new placeholder page on the UHE website using the same layout as
  Home, Education, and Contact Us (banner image, section title/description,
  scroll animations, analytics, menu link). Use when the user asks to create a
  new page, add a page to the site, scaffold a template page, or generate a
  dummy page. Audience is non-technical — speak in plain language with the user.
---

# Create Page (Template)

## Audience & how to talk to the user

Users of this skill are **not** software engineers or frontend developers. They may have little or no tech background.

**When talking to the user** (questions, confirmations, progress updates, summaries):
- Use everyday words. Prefer “new page” over “scaffold/route,” “menu” over “Navbar,” “banner image” over “OpeningPageImage,” “preview” over “HashRouter / localhost.”
- Never assume they know React, routes, components, CSS, Git, or file paths.
- Ask for the page **name** and what should appear on it; derive technical details yourself and only confirm choices in plain terms.
- Explain *what they’ll see on the site* and *where to click*, not which source files you created.
- If something fails, say what went wrong simply and what they should do next.

**When doing the work** (agent-only steps below): keep using the technical file paths, commands, and code patterns. Do not dump those details into user-facing messages unless they ask.

**Good summary example:**  
“Created a new ‘Women of UH Esports’ page with a Coming Soon section and added it to the top menu. I opened it in your browser — please check the banner, text, and menu link.”

**Avoid:**  
“Scaffolded Wouhe.js, registered a HashRouter route, and wired desktop/drawer Navbar links.”

## Scope (v1 — placeholder page)

Creates a **placeholder page** that matches the structure of the three live pages:

| Existing page | File | Path on site |
|---------------|------|--------------|
| Home | `src/pages/Home.js` | `/` |
| Education | `src/pages/Education.js` | `/education` |
| Contact Us | `src/pages/ContactUs.js` | `/contact-us` |

Shared patterns to copy (do **not** invent a new layout system):

- `OpeningPageImage` hero
- One or more `Grid` sections with `SectionTitle` + `SectionDescription`
- `useInView` + `slideIn*ms` / `hidden` classes (from `App.css`)
- `ReactGA.send` pageview
- Default export page component
- Route in `src/layouts/App.js` (HashRouter)
- Nav links in `src/components/Navbar.js` (desktop + mobile drawer)

## Workflow

Copy and track:

```
Create page:
- [ ] 1. Collect page inputs
- [ ] 2. Create page file (+ optional CSS / assets folder)
- [ ] 3. Register route in App.js
- [ ] 4. Add Navbar links (desktop + drawer)
- [ ] 5. Follow start-local-preview; open the new page
- [ ] 6. Ask user to confirm
- [ ] 7. Offer share-changes
```

### 1. Collect page inputs

Ask in plain language. You need enough to build the page; translate their answers into the technical fields yourself.

| Ask the user (plain language) | Maps to | Required | Example |
|------------------------------|---------|----------|---------|
| What should the page be called? | Display name | Yes | `Women of UH Esports` |
| (Usually derive; only ask if unclear) Short web address ending | Route slug | Yes | `wouhe` → `/#/wouhe` |
| Banner title text (default = page name) | Hero header | Yes | `Women of UH Esports` |
| (Derive; don’t ask unless needed) | Component name (PascalCase) | Yes | `Wouhe` |
| Do you have a banner image? (optional) | Opening image path | No | path to image, or reuse a placeholder |
| Should it appear in the top menu? (default yes) | Add to Navbar | Yes | yes / no |
| Optional section heading | Placeholder section title | No | `About` |
| Optional section text | Placeholder body text | No | short placeholder copy |

**Slug rules** (agent-only)
- Lowercase, hyphens only: `my-page`
- No leading slash
- Must not collide with `/`, `education`, `contact-us`, or `ilab`

**Component name rules** (agent-only)
- PascalCase matching the file: `Wouhe.js` → `function Wouhe()`
- File path: `src/pages/<ComponentName>.js`

If the user only gives a display name, derive slug and component name. Confirm in plain terms before writing files, e.g.  
“I’ll create a ‘Women of UH Esports’ page and add it to the menu. The preview link will be something like …/#/wouhe — sound good?”

### 2. Create the page file

#### Assets (optional)

If the user provides an opening image:

1. Create `src/assets/images/<slug>/` if needed
2. Copy the image there as `<slug>_opening_image.<ext>`
3. Import it in the page file

If no image is provided, reuse an existing opening image temporarily (e.g. `home_opening_image`) and leave a `TODO` comment to replace it. Tell the user: “I used a temporary banner image for now — we can swap in the real one whenever you have it.”

#### Page template

Create `src/pages/<ComponentName>.js` from this template. Replace placeholders in `<>`:

```jsx
import * as React from "react";
import { useInView } from "react-intersection-observer";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import OpeningPageImage from "../components/OpeningPageImage";
import SectionTitle from "../components/SectionTitle";
import SectionDescription from "../components/SectionDescription";
import ReactGA from "react-ga4";
// TODO: replace with page-specific opening image under src/assets/images/<slug>/
import openingImage from "../assets/images/home/home_opening_image.png";

ReactGA.send({
  hitType: "pageview",
  page: "/<slug>",
  title: "<ComponentName>",
});

function IntroSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  return (
    <Grid
      container
      sx={{ mt: { lg: 3, md: 3, xs: 1 }, p: 3, pb: 5 }}
      justifyContent="center"
      spacing={2}
      ref={ref}
    >
      <Grid item lg={12} md={12} sm={12} xs={11}>
        <SectionTitle className={inView ? "slideIn1300ms" : "hidden"}>
          Coming Soon
        </SectionTitle>
      </Grid>
      <Grid item lg={7} md={10} sm={11} xs={12}>
        <SectionDescription className={inView ? "slideIn1400ms" : "hidden"}>
          This page is a starting draft. Replace this text and add the real sections when you’re ready.
        </SectionDescription>
        {/* Optional CTA — keep or delete */}
        <Button
          className={inView ? "slideIn1500ms" : "hidden"}
          sx={{ mt: { lg: 4, md: 3, sm: 3, xs: 2 }, fontWeight: "bold" }}
          size="large"
          variant="contained"
          color="uhegreen"
          href="#"
        >
          Learn More
        </Button>
      </Grid>
    </Grid>
  );
}

function <ComponentName>() {
  return (
    <>
      <OpeningPageImage header="<HeroHeader>" imageURL={openingImage} />
      <IntroSection />
    </>
  );
}

export default <ComponentName>;
```

Default placeholder copy if the user did not supply text:

- Section title: `Coming Soon`
- Body: `This page is a starting draft. Replace this text and add the real sections when you’re ready.`

#### Optional CSS

Only create `src/pages/<ComponentName>.css` if page-specific styles are needed. Otherwise skip (Education/Contact often keep most layout in MUI `sx`). If created, `import './<ComponentName>.css';` at the top of the page file.

### 3. Register the route

In `src/layouts/App.js`:

1. Add: `import <ComponentName> from "../pages/<ComponentName>";`
2. Inside `<Routes>`, add:

```jsx
<Route path="<slug>" element={<ComponentName />} />
```

Keep existing routes. Do not remove the stub `ilab` route unless the user is replacing it.

### 4. Add menu links (Navbar)

In `src/components/Navbar.js`, if the user wants the page in the menu:

1. **Desktop** `<nav>`: add a `Link` / `RouterLink` like Education / Contact Us:

```jsx
<Link
  component={RouterLink}
  underline="none"
  variant="button"
  color="white"
  to="/<slug>"
  sx={{ mx: 1.5, fontWeight: "bold" }}
>
  <DisplayName>
</Link>
```

2. **Mobile drawer** list: add a matching `ListItem` / `ListItemButton` / `Link` with `to="/<slug>"` and `onClick={toggleDrawer(false)}`, including a `Divider` before it to match existing items.

Do **not** uncomment the Ilab block unless this page is specifically Ilab.

### 5. Local preview (required)

Follow **`start-local-preview`** and open the new page (`http://localhost:3000/#/<slug>`).

Ask the user to confirm in plain language, for example:  
“I opened your new page in the browser. Please check: the banner at the top, the text below it, and (if we added it) the link in the menu on desktop and phone-sized view.”

### 6. Done

Summarize in plain language: page name, that it’s in the menu (or not), and that a preview is open. Mention that it’s a starting draft they can fill in later.  
Do **not** lead with a file list or developer jargon.

After they confirm the preview looks okay, offer **`share-changes`** (save + team review link). Do not commit or open a review link unless they say yes or explicitly ask.

## Reference — live page anatomy

Minimal shared skeleton (all three pages):

```jsx
<>
  <OpeningPageImage header="..." imageURL={...} />
  {/* one or more section components */}
</>
```

Typical section pattern (Education internships header / Contact Giving):

```jsx
<Grid container sx={{ p: 3 }} justifyContent="center" spacing={2} ref={ref}>
  <Grid item ...>
    <SectionTitle className={inView ? "slideIn1300ms" : "hidden"}>...</SectionTitle>
  </Grid>
  <Grid item lg={7} md={10} sm={11} xs={12}>
    <SectionDescription className={inView ? "slideIn1400ms" : "hidden"}>...</SectionDescription>
  </Grid>
</Grid>
```

CTAs use MUI `Button` with `color="uhegreen"` and `variant="contained"`.

## Agent constraints

- Speak to the user in plain, non-technical language (see Audience section)
- Placeholder only — do not invent full marketing copy or complex carousels unless asked
- Match existing patterns; do not introduce new UI libraries
- Always wire `App.js` route; wire Navbar only when requested (default yes)
- Never overwrite Home, Education, or Contact Us
- Ask before replacing the `ilab` stub page
- Keep changes minimal and reviewable
- Commit / review link only via `share-changes` or an explicit user request
