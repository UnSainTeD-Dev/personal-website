# personal-website

*A personal portfolio website for practicing and improving front-end development skills. 
Includes version tracking, roadmap visualization, and interactive UI components.*

---

## ✨ Key Features

- 🏠 **Homepage** — About me section with goals and learning path.
- 🖼 **Gallery** — custom JS carousel (3 images visible) with pop-up preview.
- 🗂 **Version List** — structured changelog with sidebar navigation.
- 📅 **Roadmap** — slider that displays planned, current, and completed tasks.
- 🎨 **Unified design** — calm black/white gradient theme, reusable header.

## 📅 Project Timeline

| **_Stage_**  | **_Status_**                                                                         |
| ------------ | ------------------------------------------------------------------------------------ |
| **_Start_**  | ![Start](https://img.shields.io/badge/2025--07--27-808080?style=for-the-badge)       |
| **_End_**    | ![End](https://img.shields.io/badge/****--**--**-808080?style=for-the-badge)         |
| **_Time_**   | ![Time](https://img.shields.io/badge/~_1800_min._/_30h00-FFFFFF?style=for-the-badge) |
| **_Status_** | ![Status](https://img.shields.io/badge/In_Progress-D2691E?style=for-the-badge)       |

---

## 📌 Current Status

| **_Feature_**           | **_Status_**                                                                                                  |
| ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| **_Layout_**            | ![Layout](https://img.shields.io/badge/In_Progress-FF8C00?style=for-the-badge&logo=sparkles&logoColor=white)  |
| **_Style_**             | ![Style](https://img.shields.io/badge/In_Progress-FF8C00?style=for-the-badge&logo=sparkles&logoColor=white)   |
| **_Style Effects_**     | ![Effects](https://img.shields.io/badge/In_Progress-FF8C00?style=for-the-badge&logo=sparkles&logoColor=white) |
| **_Adaptive Design_**   | ![Adaptive](https://img.shields.io/badge/Planned-4169E1?style=for-the-badge&logo=sparkles&logoColor=white)    |
| **_Responsive Design_** | ![Responsive](https://img.shields.io/badge/Planned-4169E1?style=for-the-badge&logo=sparkles&logoColor=white)  |

---

## 🎨 Layout & Resources

| **_Resource_** | **_Link_**             |
| -------------- | ---------------------- |
| 📂 **_Assets_** | Included in `/images/` |

---

## ⚙️ Tech Stack

<!-- 🔹 Languages & Core -->
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)

<!-- 🔹 Tools & Build -->
![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?logo=visualstudiocode&logoColor=white)
![Stylelint](https://img.shields.io/badge/Stylelint-263238?logo=stylelint&logoColor=white)

<!-- 🔹 Version Control & Deployment -->
![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)

---

## 📜 Version List

[🇬🇧 CHANGELOG-EN.md](CHANGELOG-EN.md) | [🇷🇺 CHANGELOG-RU.md](CHANGELOG-RU.md)

  <details>
    <summary>Status Legend</summary>
    <p>🟢 RELEASED — the version has been released.</p>
    <p>🟠 UNRELEASED — work on this version is finished (not released).</p>
    <p>🟡 MOVED TO — the changes from this version were moved to the next one.</p>
    <p>🔴 CANCELED — the release of this version has been permanently canceled.</p>
    <p>🔵 IN PROGRESS — this version is in progress.</p>
  </details>

- [Ver. 0.2.0 | 2025-09-17 D18](CHANGELOG-EN.md#ver-020--2025-09-17---unreleased) — 🟠 UNRELEASED
- [Ver. 0.1.0 | 2025-08-19 D12](CHANGELOG-EN.md#ver-010--2025-08-19---unreleased) — 🟠 UNRELEASED
- [Ver. 0.0.9 | 2025-08-13 D10](CHANGELOG-EN.md#ver-009--2025-08-13---unreleased) — 🟠 UNRELEASED
- [Ver. 0.0.7 | 2025-08-11 D8](CHANGELOG-EN.md#ver-007--2025-08-11---unreleased) — 🟠 UNRELEASED
- [Ver. 0.0.6 | 2025-08-10 D7](CHANGELOG-EN.md#ver-006--2025-08-10---unreleased) — 🟠 UNRELEASED
- [Ver. 0.0.5 | 2025-08-09 D6](CHANGELOG-EN.md#ver-005--2025-08-09---unreleased) — 🟠 UNRELEASED
- [Ver. 0.0.4 | 2025-08-03 D5](CHANGELOG-EN.md#ver-004--2025-08-03---unreleased) — 🟠 UNRELEASED
- [Ver. 0.0.3 | 2025-08-02 D4](CHANGELOG-EN.md#ver-003--2025-08-02---unreleased) — 🟠 UNRELEASED
- [Ver. 0.0.2 | 2025-07-30 D3](CHANGELOG-EN.md#ver-002--2025-07-30---unreleased) — 🟠 UNRELEASED
- [Ver. 0.0.1 | 2025-07-28 D2](CHANGELOG-EN.md#ver-001--2025-07-28---unreleased) — 🟠 UNRELEASED
- [Ver. 0.0.0 | 2025-07-27 D1](CHANGELOG-EN.md#ver-000--2025-07-27---unreleased) — 🟠 UNRELEASED

---

## 🗂 Project Structure

<details open>
  <summary><strong>/personal-website</strong></summary>

  <details>
    <summary><code>header.html</code></summary>
    <p>Reusable partial that contains the website header with logo, navigation links, and external GitHub link.</p>
  </details>
  <details>
    <summary><code>index.html</code></summary>
    <p>Main project page. Contains the basic layout and sections that represent the core idea of the website.</p>
  </details>
  <details>
    <summary><code>version-page.html</code></summary>
    <p>Page with the version list and changelog. Includes sidebar navigation and grouped release notes.</p>
  </details>
  <details>
    <summary><code>roadmap-page.html</code></summary>
    <p>Roadmap page with a slider-like carousel to showcase planned, current, and completed tasks visually.</p>
  </details>

  <details>
    <summary><code>README.md</code></summary>
    <p>Separate README file: structure, timeline, progress, and development notes.</p>
  </details>

  <details>
    <summary><code>css/</code></summary>
    <ul>
      <li><code>default.css</code> — reset styles, base tokens, and typography.</li>
      <li><code>styles.css</code> — main styles: grids, components, and page design.</li>
      <li><code>breakpoints.css</code> — responsive styles for grids, components, and layouts.</li>
      <li><code>fonts.css</code> — font-face declarations, loading different weights and styles of project fonts.</li>
    </ul>
  </details>

  <details>
    <summary><code>js/</code></summary>
    <ul>
        <li><code>include-header.js</code> — dynamically loads the <code>header.html</code> partial and sets the active link.</li>
        <li><code>gallery.js</code> — implements the image gallery: carousel navigation, swipe support, and pop-up preview.</li>
        <li><code>roadmap.js</code> — controls the Roadmap carousel: navigation, keyboard and swipe events, responsive updates.</li>
    </ul>
  </details>

  <details>
    <summary><code>images/</code></summary>
    <ul>
      <li><code>background/</code> — background images for sections.</li>
      <li><code>content/</code> — content images.</li>
      <li><code>decoration/</code> — decorative design elements.</li>
      <li><code>favicons/</code> — website favicons.</li>
      <li><code>icons/</code> — system and UI icons.</li>
      <li><code>logo/</code> — project logo variations.</li>
    </ul>
  </details>

  <details>
    <summary><code>favicon.ico</code></summary>
    <p>Browser icon in <code>.ico</code> format.</p>
  </details>

  <details>
    <summary><code>favicon.webmanifest</code></summary>
    <p>JSON file with alternative icons in <code>.png</code> format.</p>
  </details>

</details>

