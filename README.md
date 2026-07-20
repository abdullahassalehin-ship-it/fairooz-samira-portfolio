# Fairooz Samira — Portfolio Website

A static website built from your portfolio PDF. Every page from each of
your 5 projects is included as its own image, shown full-size and in the
original order — nothing summarized.

## What's inside

```
index.html              → Home page: your intro + the 5 project cards
project.html             → One template that displays whichever project you click into
assets/
  css/style.css          → All styling (colors, type, layout — one file)
  js/data.js             → ALL your content: names, blurbs, locations, sheet counts
  js/main.js             → The code that builds the pages from data.js (rarely needs editing)
  images/
    covers/              → The small preview image used on each home page card
    project-1/            → Every page of Project 1 (Edelweiss Cove), in order
    project-2/            → Every page of Project 2 (Urban Oasis)
    project-3/            → Every page of Project 3 (Safe Haven Center)
    project-4/            → Every page of Project 4 (Dong Son Restaurant)
    project-5/            → Every page of Project 5 (Dynex Center)
```

Each `project-N` folder is one of the "5 individual folders" you asked
for — open it and every sheet from that project's PDF pages is right
there, named `sheet-01.jpg`, `sheet-02.jpg`, and so on in reading order.

## How to view it

**Just double-click `index.html`** — it opens in your browser and works
immediately, no installation needed. Click any project card to see every
page of that project; click any sheet to zoom in full-screen (use the
arrow keys or the on-screen arrows to move between sheets, Esc to close).

## How to edit it

You will almost never need to touch the HTML or CSS. Everything you're
likely to want to change lives in **`assets/js/data.js`**:

- Change a project's title, description, tags, location, or year → edit
  the matching object in that file and save. Refresh your browser.
- Add a project → duplicate one of the five blocks in `data.js`, put its
  images in a new `assets/images/project-6` folder (named `sheet-01.jpg`,
  `sheet-02.jpg`, ...), add a cover image to `assets/images/covers/`, and
  update `sheetCount`. Full instructions are written as comments at the
  top of `data.js`.
- Reorder or remove a project → cut/paste or delete its block in the
  `PROJECTS` array in `data.js`.
- Add, remove, or reorder pages within a project → add/remove the image
  files in that project's folder (keep them numbered with no gaps) and
  update that project's `sheetCount`.
- Change your name, bio, email, or phone → edit the `PROFILE` object at
  the bottom of `data.js`.

`data.js` is a plain text file — open it in any text editor (Notepad,
TextEdit, VS Code, Cursor, etc.).

If you want to change the look (colors, fonts, spacing), open
`assets/css/style.css` — the color palette and fonts are defined once at
the top of the file under `:root`, so changing one line there updates
the whole site.

## Putting it online

This is a plain static site, so any of these will host it for free:

- **Netlify / Vercel** — drag the whole `site` folder onto their
  dashboard and you're live in seconds.
- **GitHub Pages** — push this folder to a GitHub repository and enable
  Pages in the repo settings.
- Any regular web host — upload the whole folder via FTP; `index.html`
  is the homepage.

No build step, no server, no database required.
