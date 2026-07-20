/* ============================================================
   PORTFOLIO DATA
   ------------------------------------------------------------
   Everything about your projects lives in this one file.
   To edit your site's content, you almost never need to touch
   the HTML — just change the values below.

   HOW TO ADD A NEW PROJECT
   1. Make a new folder in assets/images/ (e.g. "project-6").
   2. Put your page images in it, named sheet-01.jpg, sheet-02.jpg,
      sheet-03.jpg ... in the order you want them to appear.
   3. Put a wide "cover" image (roughly 1000px wide) in
      assets/images/covers/ (e.g. "project-6.jpg"). This is what
      shows on the home page card — you can just reuse sheet-01.
   4. Copy one of the objects below, paste it at the end of the
      PROJECTS array, and update every field.
   5. Save. That's it — the home page and project page are both
      generated automatically from this list.

   HOW TO REORDER / REMOVE PROJECTS
   - Reorder: cut and paste whole objects to a new position in
     the array. The "number" field controls the "01 / 02 ..."
     label, so update it to match the new order if you reorder.
   - Remove: delete the whole { ... } object for that project.

   HOW TO ADD OR REMOVE SHEETS (PAGES) WITHIN A PROJECT
   - Add/remove the image files in that project's folder, then
     update "sheetCount" to match the number of files you have.
     Files must be named sheet-01.jpg, sheet-02.jpg, etc. with
     no gaps in the numbering.
   ============================================================ */

const PROJECTS = [
  {
    number: 1,
    slug: "project-1",
    title: "Edelweiss Cove",
    subtitle: "A Luxury Hotel",
    type: "Hospitality",
    location: "Zurich, Switzerland",
    year: "2025",
    sheetCount: 30,
    blurb:
      "An extended-stay boutique hotel for Hotels Group International in Zurich's financial district. The interior concept, \u201cMajestic Alps,\u201d threads the serenity of the mountains and local Swiss craft through guestrooms planned like second-home condominiums, a sculptural grand stair, and a universally accessible ADA suite.",
    tags: ["Hospitality", "Universal Design", "Sustainable Design", "FF&E"],
    cover: "assets/images/covers/project-1.jpg",
    folder: "assets/images/project-1",
  },
  {
    number: 2,
    slug: "project-2",
    title: "Urban Oasis",
    subtitle: "Eco Block Design",
    type: "Multi-Use Building",
    location: "Pittsburg, California",
    year: "2025",
    sheetCount: 13,
    blurb:
      "A Smart City–driven, net-zero residential block that folds affordable housing, farming, water reclamation, and community amenities into one walkable site. Renewable energy, greywater and blackwater systems, and biophilic design work together toward a self-sustaining urban neighborhood.",
    tags: ["Net-Zero Design", "Water Systems", "Biophilic Design", "Urban Planning"],
    cover: "assets/images/covers/project-2.jpg",
    folder: "assets/images/project-2",
  },
  {
    number: 3,
    slug: "project-3",
    title: "Safe Haven Center",
    subtitle: "A Refuge for Displaced Community",
    type: "Community Center / Residential Facility",
    location: "Portland, Oregon",
    year: "2025",
    sheetCount: 18,
    blurb:
      "A welcoming, multi-generational community center and residence for refugees and immigrants. Organic geometry, a two-story atrium, and a nature-driven material palette were used to create a calm, culturally neutral sanctuary that offers social services, classrooms, and a home away from home.",
    tags: ["Community Design", "Social Impact", "Wellness", "Universal Design"],
    cover: "assets/images/covers/project-3.jpg",
    folder: "assets/images/project-3",
  },
  {
    number: 4,
    slug: "project-4",
    title: "Dong Son Restaurant",
    subtitle: "A Homespun Vietnamese Cuisine",
    type: "Commercial / Restaurant",
    location: "Fisherman's Wharf, San Francisco, CA",
    year: "2025",
    sheetCount: 13,
    blurb:
      "Named for the sacred Vietnamese bronze drum, Dong Son translates a chef's homeland into a contemporary San Francisco dining room. Layered lighting \u2014 from rain-inspired chandeliers to gallery-style art illumination \u2014 carries guests through a cultural journey across the space.",
    tags: ["Lighting Design", "Restaurant", "Cultural Narrative"],
    cover: "assets/images/covers/project-4.jpg",
    folder: "assets/images/project-4",
  },
  {
    number: 5,
    slug: "project-5",
    title: "Dynex Center",
    subtitle: "A Multi-Functional Recreation Center",
    type: "Commercial",
    location: "",
    year: "2025",
    sheetCount: 9,
    blurb:
      "A recreation center generated entirely from the physics of a single bouncing ball. The unpredictable path of toss, contact, rebound, and divert was traced into a triangulated structural diagram, then sculpted into an angular, cave-like public form.",
    tags: ["Parametric Form", "Concept Development", "Structure"],
    cover: "assets/images/covers/project-5.jpg",
    folder: "assets/images/project-5",
  },
];

/* Site-wide identity — used on the home page hero and the footer. */
const PROFILE = {
  name: "Fairooz Samira",
  role: "Interior Architecture &amp; Design",
  credential: "MA in Interior Architecture and Design, 2025",
  school: "Academy of Art University, San Francisco",
  summary:
    "I graduated from the Academy of Art University with a bachelor's degree in Architectural Engineering and several years' experience working as an architect. This portfolio collects work from my graduate studies, with a particular interest in universal and sustainable design.",
  phone: "510 396 9657",
  email: "fsamira@yahoo.com",
};
