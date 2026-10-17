# Lunaria 🌙

**Your browser, under the moonlight.**

Lunaria is an unofficial moonlit customization for [Zen Browser](https://zen-browser.app/) with a midnight-blue interface, lavender accents, a cozy new-tab page, and simple personalization controls.

## What's included

- `chrome.css` — styling for the browser interface.
- `startpage.html` — standalone Lunaria start page.
- `extension/` — WebExtension that replaces the browser's New Tab page.
- Built-in settings for the page background and accent color.
- Add and remove up to 12 personal shortcut tiles.

## Test the New Tab extension in Zen

1. Download or clone this repository.
2. Open `about:debugging#/runtime/this-firefox`.
3. Select **Load Temporary Add-on…** and choose `extension/manifest.json`.
4. Disable **New Tab Override** while testing so only Lunaria controls the new-tab page.
5. Set `zen.urlbar.replace-newtab` to `false` in `about:config` if Zen intercepts the new-tab action.
6. Press `Ctrl+T` or click the New Tab button.
7. Select **Настроить** at the bottom of the page to choose colors or manage shortcuts.

Temporary add-ons are removed when Zen restarts. To distribute a persistent version, Lunaria must go through a supported signing/distribution process, for example submission to Mozilla Add-ons. Lunaria has not been submitted or signed yet.

## Install the browser theme

1. In Zen, open `about:support` and click **Open Folder** next to **Profile Folder**.
2. Close Zen completely.
3. In the profile directory, open or create the `chrome` folder.
4. Copy this repository's `chrome.css` into that folder as `userChrome.css`. If that file already exists, back it up and merge the rules rather than overwriting it.
5. Start Zen, open `about:config`, set `toolkit.legacyUserProfileCustomizations.stylesheets` to `true`, and restart the browser.

## Privacy and behavior

- HTML, CSS, and JavaScript are bundled locally; Lunaria does not load remote images, fonts, scripts, or analytics.
- Background/accent choices and custom shortcuts are stored locally using the browser's extension storage.
- Custom shortcut URLs are restricted to HTTPS.
- Search queries are sent to Google only when submitted.

## Unofficial project

Lunaria is an independent community customization and is not affiliated with or endorsed by Zen Browser.
