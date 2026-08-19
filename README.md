# Baby's Firsts — Deploy to GitHub Pages

A keepsake timeline app: log milestones from a curated checklist (70 items
across 7 categories — physical, language, social, feeding, sleep, cognitive,
and special occasions) plus free-form personal "moments" that don't fit any
checklist. Everything shows up together on one scrapbook-style timeline,
oldest to newest.

This is a separate app from your Starting Solids tracker, but shares the
same cloud database (in its own private data space, so the two never mix)
and the same real-time sync between devices.

## What's in this folder
- `index.html` / `app.bundle.js` — the whole app, one responsive build
  that adapts between a sidebar (wide screens) and bottom tabs (phones)
  automatically — no separate mobile version to keep in sync this time.
- `manifest.json`, `service-worker.js`, `icon-192.png`, `icon-512.png` —
  installable "Add to Home Screen" support, same as your other app.

## Step 1 — Create a new GitHub repository
Same as before: [github.com](https://github.com) → **+** → **New
repository** → name it something like `babys-firsts` → **Public** → **Create
repository**. (A fresh repo, separate from `starting-solids` — keeps the two
apps' GitHub Pages URLs distinct.)

## Step 2 — Upload these files
On the new repo page, click **"uploading an existing file"**, drag in
`index.html`, `app.bundle.js`, `manifest.json`, `service-worker.js`,
`icon-192.png`, `icon-512.png` (this README doesn't need to go up), then
**Commit changes**.

## Step 3 — Turn on GitHub Pages
**Settings** → **Pages** → **Source: Deploy from a branch** → **Branch:
main, / (root)** → **Save**. Wait a minute or two, then you'll get a live
URL like `https://yourusername.github.io/babys-firsts/`.

## Step 4 — Add to your home screen
Open the URL in **Safari** on iPhone → **Share** → **Add to Home Screen**.

## Cloud sync
This uses the exact same private Firebase project and household connection
as your food-tracking app — no new setup needed, and no security rules to
add. It's stored under a completely separate path in the database
(`babyfirsts_households` vs. `households`), so nothing from one app can
ever leak into or overwrite the other.

## A note on this being a first build
This is a genuine V1 — the checklist, the timeline, moments, and sync all
work end-to-end and were tested before delivery. A few things I'd flagged
as good next steps but didn't build yet: auto-generated shareable "moment
card" images for texting to family, and a richer version of the milestone
catalog (this one has 70 curated items, but you may find things you want
to add or rename). Both are straightforward to add whenever you want them
— just come back and ask.
