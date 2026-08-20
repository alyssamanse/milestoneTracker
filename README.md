# Starting Solids — Deploy to GitHub Pages

This folder is a complete, ready-to-host website. It's **responsive** — it
automatically shows the desktop layout (sidebar navigation) on a computer
and the mobile layout (bottom tabs) on a phone, from the same single URL.

If you deployed an earlier version of this site: this update fixes a real
bug — the old version only ever bundled the mobile layout, so it looked
like a phone app even when opened on a desktop browser. This version
bundles both and picks the right one automatically based on screen width.

No coding required for the steps below — just uploading files through
GitHub's website.

## What's in this folder
- `index.html` — the page that loads first. It checks your screen width and
  loads either `desktop.bundle.js` or `mobile.bundle.js` accordingly.
- `desktop.bundle.js` — the full sidebar-navigation version (12-week plan,
  tracker, reports, everything), for screens wider than 820px.
- `mobile.bundle.js` — the phone-optimized version with bottom tab
  navigation, for screens 820px and narrower.
- `manifest.json` — tells iOS this is an installable app, with its icon and
  colors.
- `service-worker.js` — lets the app open even with no signal, once loaded
  once.
- `icon-192.png` / `icon-512.png` — the app icon used on your home screen.

## Step 1 — Create a GitHub account (skip if you have one)
Go to [github.com](https://github.com) and sign up. It's free.

## Step 2 — Create a new repository
1. Click the **+** in the top right → **New repository**
2. Name it something like `starting-solids`
3. Set it to **Public** (GitHub Pages requires this on the free plan)
4. Don't add a README or .gitignore — leave everything else default
5. Click **Create repository**

## Step 3 — Upload these files
1. On your repository page, click **"uploading an existing file"**
2. Drag in every file from this folder — `index.html`, `desktop.bundle.js`,
   `mobile.bundle.js`, `manifest.json`, `service-worker.js`,
   `icon-192.png`, `icon-512.png` (this README doesn't need to go up)
3. Scroll down, click **Commit changes**

**If you're updating an existing site:** upload these files to the *same*
repository the same way — GitHub will ask if you want to replace the old
versions. Say yes. Your tracked data is untouched by this (see the note at
the bottom).

## Step 4 — Turn on GitHub Pages
(Skip this step if you already did it before — it stays on.)
1. In your repository, click **Settings**
2. In the left sidebar, click **Pages**
3. Under **Source**, choose **Deploy from a branch**
4. Under **Branch**, choose `main` and folder `/ (root)` → **Save**
5. Wait 1–2 minutes, then refresh — you'll get a live URL like
   `https://yourusername.github.io/starting-solids/`

## Step 5 — Try it on both a computer and your phone
- On a computer: open the URL in any browser — you should see the full
  sidebar version.
- On your iPhone: open the URL in **Safari** — you should see the bottom
  tab-bar version.
- To install on your home screen: tap the **Share** icon in Safari →
  **Add to Home Screen** → **Add**.

## Bringing over your existing data
If you already tracked foods in an earlier version of this app (whether in
Claude or a previous GitHub Pages upload), do this once:
1. Open the **old** version → **Data & Backup** (desktop: sidebar; mobile:
   More → Data & Backup) → Copy to Clipboard (or Download .json)
2. Open the **new** version at your live URL → Data & Backup → paste into
   the Import box → **Import & Replace**

## Making changes later
Come back to Claude, ask for the update, and it'll hand you refreshed
bundle file(s) — re-upload just the changed file(s) to the same GitHub
repository and Pages updates automatically within a minute or two. Your
tracked data isn't affected by re-uploading code files (see below).

## A note on your data and this update specifically
Your tracked data lives in your browser's storage, tied to the site's URL
— not to which bundle file loaded. Since this update keeps the exact same
storage keys as before, upgrading from the old (mobile-only) version to
this responsive version **will not erase anything you've already logged**.

## A note on privacy
The site itself is public (anyone with the link could open it), but your
tracked data is not — it's stored only in your browser, never sent to
GitHub or anywhere else. Don't share the link publicly if you'd rather
keep it private between the two of you.
