# Lunaria New Tab Extension

Lunaria is an unofficial moonlit customization for Zen Browser. Version 1.1.3 adds the crescent-moon extension icon.

## Features

- Replaces the browser's New Tab page using the standard WebExtension override.
- Lets you choose the page background and accent colors.
- Lets you add and remove up to 12 custom shortcuts. Only `https://` sites are accepted.
- Saves preferences locally through the browser's extension storage.
- Bundles its HTML, CSS and JavaScript; it does not load remote images, fonts, or analytics.
- Search queries are sent to Google only when submitted.

## Test in Zen Browser

1. Download or clone the repository.
2. Open `about:debugging#/runtime/this-firefox`.
3. Click **Load Temporary Add-on…** and select `extension/manifest.json`.
4. Disable **New Tab Override** while testing; only one extension should own the New Tab page at a time.
5. Open a new tab using `Ctrl+T` or the New Tab button.
6. Click **Настроить** at the bottom of the page to choose colors and manage custom shortcuts.

Temporary add-ons are removed when Zen restarts. For permanent use by other people, the extension needs to be signed through a supported add-on distribution process, for example by submitting it to Mozilla Add-ons. The extension version with the Lunaria icon has not yet been submitted or signed.

This is an unofficial customization and is not affiliated with the Zen Browser project.
