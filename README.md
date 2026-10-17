# Lunaria 🌙

**Your browser, under the moonlight.**

Lunaria is an unofficial moonlit customization for [Zen Browser](https://zen-browser.app/) with a midnight-blue interface, lavender accents, and a cozy custom new-tab page.

## What's included

- `chrome.css` — CSS styling for the browser interface.
- `startpage.html` — standalone Lunaria start page.
- `extension/` — a WebExtension that replaces the browser's New Tab page with Lunaria.

## Install the browser theme

1. In Zen, open `about:support` and click **Open Folder** next to **Profile Folder**.
2. Close Zen completely.
3. In the profile directory, open or create the `chrome` folder.
4. Copy this repository's `chrome.css` into that folder as `userChrome.css`.
   If you already have a `userChrome.css`, back it up and merge the rules instead of overwriting it.
5. Start Zen, open `about:config`, and set `toolkit.legacyUserProfileCustomizations.stylesheets` to `true`.
6. Restart Zen.

## Use Lunaria as the New Tab page

### Option A: Test the Lunaria extension

The extension source is in `extension/`.

1. Download or clone this repository.
2. In Zen, open `about:debugging#/runtime/this-firefox`.
3. Find the local browser section, select **Load Temporary Add-on…**, and choose `extension/manifest.json`.
4. Disable any other new-tab override extension while testing, because only one extension can control the New Tab page at a time.
5. Open a new tab with `Ctrl+T` or the New Tab button.

**Temporary install note:** this developer installation is removed when Zen restarts. A persistent distributable extension must be signed through a supported add-on distribution process. Lunaria has not been published to an add-on store yet.

### Option B: Use New Tab Override

If you already have the **New Tab Override** extension installed, select **Local file** in its settings and choose `startpage.html`. Keep only one new-tab override active at a time.

## Local preview

Open `startpage.html` directly in Zen to preview the page without installing the extension.

## Privacy and behavior

- The new-tab page bundles its CSS locally and does not load remote images, fonts, or analytics.
- Search queries are sent to Google only when you submit the search form.
- Shortcut tiles link to their respective websites.

## Unofficial project

Lunaria is an independent community customization and is not affiliated with or endorsed by Zen Browser.
