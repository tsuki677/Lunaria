# Lunaria New Tab Extension

This folder contains the WebExtension version of Lunaria.

## What it does

- Replaces the browser's New Tab page with Lunaria.
- Uses the browser's regular new-tab flow, including the keyboard shortcut and New Tab button.
- Uses bundled HTML and CSS. It does not load remote images, fonts, scripts, or analytics.
- Search uses Google when you submit a query.

## Test in Zen Browser

1. Open `about:debugging#/runtime/this-firefox`.
2. Find the local-browser section and click **Load Temporary Add-on…**.
3. Select `manifest.json` from this folder.
4. Disable **New Tab Override** while testing Lunaria, because two extensions cannot reliably own the same new-tab page at once.
5. Keep `zen.urlbar.replace-newtab` set to `false` so the browser opens an actual tab when using its New Tab button.

Temporary add-ons are removed when the browser restarts. For a persistent install, the extension needs to be signed and distributed through Mozilla Add-ons or another supported signed-install method.

This is an unofficial customization for Zen Browser and is not affiliated with the Zen Browser project.
