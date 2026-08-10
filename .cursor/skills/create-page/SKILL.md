---
name: create-page
description: >-
  Scaffolds a new UHE-Website page from the shared Home / Education / Contact Us
  template (OpeningPageImage, section title/description, scroll animations,
  ReactGA, HashRouter route, Navbar links). Use when the user asks to create a
  new page, add a route, scaffold a template page, or generate a dummy page.
---

# Create Page (Template)

## Scope (v1 — dummy scaffold)

Creates a **placeholder page** that matches the structure of the three live pages:

| Existing page | File | Route |
|---------------|------|-------|
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
- [ ] 5. Run locally and open the new route
- [ ] 6. Ask user to confirm scaffold
```

### 1. Collect page inputs

Ask for:

| Input | Required | Example |
|-------|----------|---------|
| **Display name** | Yes | `Women of UH Esports` |
| **Route slug** | Yes | `wouhe` → `/#/wouhe` |
| **Hero header** | Yes (default = display name) | `Women of UH Esports` |
| **Component name** | Yes (PascalCase) | `Wouhe` |
| **Opening image path** | No | path to image, or reuse a placeholder |
| **Add to Navbar** | Yes (default yes) | yes / no |
| **Placeholder section title** | No | `About` |
| **Placeholder body text** | No | short lorem / TODO copy |

**Slug rules**
- Lowercase, hyphens only: `my-page`
- No leading slash
- Must not collide with `/`, `education`, `contact-us`, or `ilab`

**Component name rules**
- PascalCase matching the file: `Wouhe.js` → `function Wouhe()`
- File path: `src/pages/<ComponentName>.js`

If the user only gives a display name, derive slug and component name and confirm before writing files.

### 2. Create the page file

#### Assets (optional)

If the user provides an opening image:

1. Create `src/assets/images/<slug>/` if needed
2. Copy the image there as `<slug>_opening_image.<ext>`
3. Import it in the page file

If no image is provided, reuse an existing opening image temporarily (e.g. `home_opening_image`) and leave a `TODO` comment to replace it.

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
          This page is a scaffold. Replace this copy and add real sections.
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
- Body: `This page is a scaffold. Replace this copy and add real sections.`

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

### 4. Add Navbar links

In `src/components/Navbar.js`, if the user wants nav visibility:

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

1. Ensure CRA is running (`npm start` from repo root if needed)
2. Wait for `http://localhost:3000` to respond
3. Open the new HashRouter URL:

```bash
# Windows
start http://localhost:3000/#/<slug>

# macOS
open http://localhost:3000/#/<slug>

# Linux
xdg-open http://localhost:3000/#/<slug>
```

4. Tell the user to confirm: hero loads, section animates on scroll, nav link works (desktop + mobile if added)

### 6. Done

Summarize files touched and the preview URL. Do **not** open a PR unless the user asks.

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

- Scaffold only — do not invent full marketing copy or complex carousels unless asked
- Match existing patterns; do not introduce new UI libraries
- Always wire `App.js` route; wire Navbar only when requested (default yes)
- Never overwrite Home, Education, or Contact Us
- Ask before replacing the `ilab` stub page
- Keep changes minimal and reviewable
- Do not commit or open a PR unless the user asks
