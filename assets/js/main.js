/* ============================================================
   PORTFOLIO BEHAVIOR
   ------------------------------------------------------------
   Reads assets/js/data.js and renders whichever page is
   currently open. You shouldn't need to edit this file to
   change content — see data.js for that.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  renderHeaderFooter();

  if (document.getElementById("project-grid")) {
    renderHome();
  }
  if (document.getElementById("project-header")) {
    renderProjectPage();
  }
});

/* Builds a "drawing title block" strip: a row of label/value pairs,
   styled after the real title blocks used on the original sheets. */
function titleBlockHTML(rows) {
  const cells = rows
    .map(([label, value]) => `<dl><dt>${label}</dt><dd>${value}</dd></dl>`)
    .join("");
  return `<div class="title-block">${cells}</div>`;
}

/* ---------------- shared header / footer ---------------- */

function renderHeaderFooter() {
  const header = document.querySelector(".site-header");
  if (header) {
    header.innerHTML = `
      <a class="mark" href="index.html">${PROFILE.name} <strong>&mdash; Portfolio</strong></a>
      <nav><a href="index.html#work">Selected Work</a></nav>
    `;
  }
  const footer = document.querySelector(".site-footer");
  if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `
      <span>&copy; ${year} ${PROFILE.name}</span>
      <span><a href="mailto:${PROFILE.email}">${PROFILE.email}</a> &nbsp;/&nbsp; ${PROFILE.phone}</span>
    `;
  }
}

/* ---------------- home page ---------------- */

function renderHome() {
  const hero = document.getElementById("hero-content");
  if (hero) {
    hero.innerHTML = `
      <p class="eyebrow">Interior Architecture &amp; Design &mdash; Portfolio</p>
      <h1>${PROFILE.name}</h1>
      <p class="intro">${PROFILE.summary}</p>
      ${titleBlockHTML([
        ["Credential", PROFILE.credential],
        ["School", PROFILE.school],
        ["Email", `<a href="mailto:${PROFILE.email}">${PROFILE.email}</a>`],
        ["Phone", PROFILE.phone],
      ])}
    `;
  }

  const totalSheets = PROJECTS.reduce((sum, p) => sum + p.sheetCount, 0);
  const count = document.getElementById("work-count");
  if (count) {
    count.textContent = `${PROJECTS.length} PROJECTS \u2014 ${totalSheets} SHEETS`;
  }

  const grid = document.getElementById("project-grid");
  grid.innerHTML = PROJECTS.map(
    (p, i) => `
    <a class="project-card" style="--i:${i}" href="project.html?id=${p.slug}">
      <span class="num">${String(p.number).padStart(2, "0")} / ${String(
      PROJECTS.length
    ).padStart(2, "0")}</span>
      <div class="plate">
        <span class="crop tl"></span><span class="crop tr"></span>
        <span class="crop bl"></span><span class="crop br"></span>
        <img src="${p.cover}" alt="Cover sheet for ${p.title}" loading="lazy" />
      </div>
      <h3>${p.title}</h3>
      <p class="subtitle">${p.subtitle}</p>
      <div class="card-meta">
        <span class="loc">${[p.type, p.location].filter(Boolean).join(" \u2014 ")}</span>
        <span class="sheets">${p.sheetCount} sheets</span>
      </div>
    </a>
  `
  ).join("");
}

/* ---------------- project detail page ---------------- */

function getProjectFromURL() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  return PROJECTS.find((p) => p.slug === id) || PROJECTS[0];
}

function renderProjectPage() {
  const project = getProjectFromURL();
  const index = PROJECTS.findIndex((p) => p.slug === project.slug);
  document.title = `${project.title} \u2014 ${PROFILE.name}`;

  document.getElementById("project-header").innerHTML = `
    <a class="back-link" href="index.html">&larr; All Projects</a>
    <p class="num">PROJECT ${String(project.number).padStart(2, "0")} / ${String(
    PROJECTS.length
  ).padStart(2, "0")} &mdash; ${project.sheetCount} SHEETS</p>
    <h1>${project.title}</h1>
    <p class="subtitle">${project.subtitle}</p>
    <p class="blurb">${project.blurb}</p>
    <div class="tags">
      ${project.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
    </div>
    ${titleBlockHTML([
      ["Type", project.type],
      ["Location", project.location || "\u2014"],
      ["Year", project.year],
      ["Sheets", project.sheetCount],
    ])}
  `;

  const sheets = [];
  for (let n = 1; n <= project.sheetCount; n++) {
    sheets.push(`${project.folder}/sheet-${String(n).padStart(2, "0")}.jpg`);
  }

  const gallery = document.getElementById("gallery");
  gallery.innerHTML = sheets
    .map(
      (src, i) => `
    <figure class="sheet">
      <button class="sheet-trigger" data-index="${i}" aria-label="Open sheet ${
        i + 1
      } full screen">
        <img src="${src}" alt="${project.title} \u2014 sheet ${i + 1} of ${
        sheets.length
      }" loading="${i < 2 ? "eager" : "lazy"}" />
      </button>
      <figcaption class="sheet-label">
        <span>${project.title}</span>
        <span class="n">SHEET ${String(i + 1).padStart(2, "0")} / ${String(
        sheets.length
      ).padStart(2, "0")}</span>
      </figcaption>
    </figure>
  `
    )
    .join("");

  setupLightbox(sheets, project.title);

  const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  document.getElementById("project-nav").innerHTML = `
    <a class="prev" href="project.html?id=${prev.slug}">
      <span class="dir">&larr; Previous</span>
      <span class="ptitle">${prev.title}</span>
    </a>
    <a class="next" href="project.html?id=${next.slug}">
      <span class="dir">Next &rarr;</span>
      <span class="ptitle">${next.title}</span>
    </a>
  `;
}

/* ---------------- lightbox ---------------- */

function setupLightbox(sheets, projectTitle) {
  const box = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  const counter = document.getElementById("lightbox-counter");
  let current = 0;

  function show(i) {
    current = (i + sheets.length) % sheets.length;
    img.src = sheets[current];
    img.alt = `${projectTitle} \u2014 sheet ${current + 1} of ${sheets.length}`;
    counter.textContent = `${String(current + 1).padStart(2, "0")} / ${String(
      sheets.length
    ).padStart(2, "0")}`;
  }

  function open(i) {
    show(i);
    box.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function close() {
    box.classList.remove("open");
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".sheet-trigger").forEach((btn) => {
    btn.addEventListener("click", () => open(Number(btn.dataset.index)));
  });

  document.getElementById("lightbox-close").addEventListener("click", close);
  document.getElementById("lightbox-prev").addEventListener("click", () => show(current - 1));
  document.getElementById("lightbox-next").addEventListener("click", () => show(current + 1));
  img.addEventListener("click", close);
  box.addEventListener("click", (e) => {
    if (e.target === box) close();
  });

  document.addEventListener("keydown", (e) => {
    if (!box.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });
}
