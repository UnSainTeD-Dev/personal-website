# CHANGELOG | personal-website

## Ver. 0.2.1 | 2025-**-** — 🔵 IN PROGRESS

## Ver. 0.2.0 | 2025-09-17 — 🟠 UNRELEASED

***Day 18***

### Added

- **files:** adds favicon variations (`.ico`, `.svg`, `.png`).
- **core:** adds *favicon.webmanifest* to support PWA and various devices.

### Changed

- **core:** changes the structure of the main page.
- **docs:** updates *README.md* — bringing documentation to a single standard, adding new data and information.
- **html:** updates the `<head>` structure and meta information.
- **html:** splits the contents of `<main>` into separate sections.
- **html:** makes minor edits and optimizations of markup.
- **styles:** formats and results in a uniform CSS code style.
- **styles:** updates reset (*default.css*): makes minor edits and disables the scrollbar via `::-webkit-scrollbar`.
- **styles:** implements *header.css* into the common *styles.css*.
- **styles:** combines *version-page.css* and *roadmap-page.css* into *styles.css*.
- **feature:** reinterprets the roadmap section, turning it into a slider.
- **scripts:** updates and simplifies logic *gallery.js*.

### Deleted

- **html:** removes the media link to "Steam" from the `header`.
- **html:** removes links to "Steam" and "DTF" from the `main__about` block.
- **styles:** deletes the outdated *styles-mobile.css* file.

## Ver. 0.1.0 | 2025-08-19 — 🟠 UNRELEASED

***Day 12***

### Internal changes

- Combines the **main** branch with **experiment/layout**.

### Added

- Adds three media links in the About block.

### Changes

- Rethinks the structure of the content *version-page.html*.
- Sets a typographic standard for the size of the text.

### Assembly

- Prepares the content *version-page.html* to the new version.

## Ver. 0.0.10 | 2025-08-18 — 🟡 MOVED TO Ver. 0.1.0

***Day 11***

### Added

- Adds a version *changelog.md* in English.

### Changes

- Updates *changelog.md*, *readme.md*.
- ~~Updates the content *version-page.html*, a slight change in structure.~~
- Reduces the code in *roadmap-page.css*, changes the colors for completed items.

## Ver. 0.0.9 | 2025-08-13 — 🟠 UNRELEASED

*Also contains changes Ver: 0.0.8*

***Day 10***

### Added

- Creates a new file *changelog.md*.
- Introduces new rules and structure for maintaining a "Changelog"/"Version List".
- Adds pop-up `titles` for items in the `header`.

### Changes

- Updates the contents of the file "readme.md".

---

## Ver. 0.0.8 | 2025-08-12 — 🟡 MOVED TO Ver. 0.0.9

***Day 9***

### Internal changes

- Combines the **experiment/header** branch with **experiment/layout**.

### Changes

- Rename the *null-setup file.css* in *default.css*.
- Optimizes and reduces code in *styles.css*, *version-page.css*, *roadmap-page.css*, *header.css*, *default.css*.
- Changes the font family to "Georgia".

### Deleted

- Removes the "ITC Century Std" font family.

### Assembly

- Introduces new rules and structure for maintaining the "Version List".
- Prepares *fonts.css* for new font families.

---

## Ver. 0.0.7 | 2025-08-11 — 🟠 UNRELEASED

***Day 8***

### Internal changes

- Creates a branch **experiment/header** for innovations in the `header`.

### Security

- Adds `rel="noopener noreferrer"` to all external links with `target="_blank"`.

### Added

- Connects *partial* *header.html* on all pages.

### Changes

- Optimizes the logic of the `gallery-popup`.
- Replaces the `flex` part with `grid` where appropriate.

### Fixed

- Corrects the use of the "ITC" font in the `header`.
- Corrects file paths.
- Prevents the "header" from jumping during the initial page loading.

---

## Ver. 0.0.6 | 2025-08-10 — 🟠 UNRELEASED

***Day 7***

### Added

- Adds a page *version-page.html*.
- Adds a page *roadmap-page.html* with primary content and styles.
- Adds `<meta name="description">` for pages.

### Changes

- Updates content *version-page.html* up to the current version.
- Separates and re-forms the `aside` relative to the main content.
- Refactoring *fonts.css*: 
	- Adds a `font-stretch`; 
	- Removes duplicate families;
	- Leaves only "woff2/woff".

---

## Ver. 0.0.5 | 2025-08-09 — 🟠 UNRELEASED

***Day 6***

### Added

- Adds a `popup` to the `gallery` with dimming, close button and smooth appearance.
- Adds a custom logo (16×16, 24×24, 55×55, 240×240; multiple color options).

### Changes

- Makes gallery previews black and white with coloring of images when hovering over them.
- Adjusts the preview styles for mobile devices.

---

## Ver. 0.0.4 | 2025-08-03 — 🟠 UNRELEASED

***Day 5***

### Changes

- Updates the `footer` content template to the `copyrighted` version.

---

## Ver. 0.0.3 | 2025-08-02 — 🟠 UNRELEASED

***Day 4***

### Added

- Defines two main font families: "ITC Century Std", "Courier New".
- Adds new images to the `gallery`.

### Changes

- Changes the structure of the content.
- Organizes the code in *styles.css*.

### Fixed

- Fixes minor interface issues.
- Corrects the layout of the `gallery` elements.

---

## Ver. 0.0.2 | 2025-07-30 — 🟠 UNRELEASED

***Day 3***

### Added

- Adds a small `gallery` template.

### Changes

- Performs small code optimizations in *styles.css*.

### Fixed

- Fixes the background rendering issue.

---

## Ver. 0.0.1 | 2025-07-28 — 🟠 UNRELEASED

***Day 2***

### Added

- Adds a `footer`.
- Adds the separator `hr`.
- Adds delicate `hover` animations for icons.
- Adds three `About` blocks to `main`.

### Changes

- Recycles the theme into a calm black and white gradient.
- Reduces media links from four to two.

---

## Ver. 0.0.0 | 2025-07-27 — 🟠 UNRELEASED

***Day 1***

### Internal changes

- Creates a branch **experiment/layout**.

### Added

- Adds *index.html * and *styles.css*.
- Implements *null-setup.css*.
- Introduces the primary layout framework.
- Adds *fonts.css* with "ITC Century Std".
- Updates the `header` and `logo`.
- Adds four icons for media links.