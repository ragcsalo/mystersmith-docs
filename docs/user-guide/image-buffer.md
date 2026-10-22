---
title: "The Image Buffer"
date: 2026-10-22 12:00:00
---

# The Image Buffer

The **Image Buffer** keeps the last **9 images** of the app: drawings from the Doodle screen and impression boards, A.I. drawings, images made from templates, images arriving from WEB-polling, Send to API or the HTTP socket. You can browse them, send them to your display devices and printers, and use them in image templates.

The full Image Buffer needs the **[Image Buffer add-on](../purchase-add-ons/image-buffer.md)** (included in every subscription).

!!! info "Without the add-on"
    A.I. images and the images found in WEB-polling / Send to API answers are still kept — but only **one** image (the newest replaces it), on this phone only. That is enough for actions like *save image to phone gallery*.

<!-- GALLERY: the IMAGE BUFFER card (VIEW / CLEAR / SETTINGS), the thumbnail gallery, the image browser -->

---

## Where you see it

On the **Settings** page the **IMAGE BUFFER** card shows how many images are stored, with **VIEW**, **CLEAR** and **SETTINGS**.

* **Thumbnail gallery** (action *open/close thumbnail gallery*): a 3×3 grid of the 9 places. **Tap** an image to open it, **long tap** to delete it (with a confirmation, if you switched that on).
* **Image browser** (action *open/close image browser*): the images full screen — swipe left/right between them, swipe **up or down** to close.
* **show last / previous / next image**: steps through the images (wrapping around). On the Doodle screen or the black screen the image appears there too, and every image you step to is also sent to a connected PeekSmith 3 / Apple Watch.

When a 10th image arrives, the oldest one is dropped. The images are also saved to your account on the server.

---

## What goes into the buffer: Image types to save

**SETTINGS → Image types to save → Manage** decides which pictures are saved:

| Type | Default |
|---|---|
| drawing before erasing (the Doodle screen, when you clear it) | off |
| drawing at recognition (a handwriting sent for text recognition) | **on** |
| A.I. drawings (OpenAI, Gemini, Lifelike, city drawings, hidden reveal) | **on** |
| A.I. image prompt results | **on** |
| images from template | **on** |
| WEB-polling results | **on** |
| Send to API responses | **on** |
| images from HTTP socket | **on** |
| TrueWrite / TrueSketch images | **on** |

You can always save the Doodle drawing yourself with the action **save doodle drawing to Image Buffer**.

!!! tip "Images in WEB-polling and Send to API answers"
    When an answer contains an image (a picture URL, or image data anywhere in a JSON answer), it is saved automatically — made smaller (max. 1280 px), without duplicates, at most 9 per answer.

---

## Settings

* **Sync images from server — Sync now:** downloads the images saved to your account.
* **Image types to save — Manage:** see above.
* **Confirmation before delete image**
* **Stored image quality:** 30–80 % (default 30 %). Higher quality = bigger images and slower syncing.
* **Clear buffer on app start** (on by default). If you switch it off, the buffer is synced from the server when the app starts.
* **Clear buffer on ROUTINE START:** empties the buffer when you tap **START ROUTINE**.
* **Clear buffer on WEB-polling start**

---

## Image Buffer actions

**In the Image buffer group:**

* **open/close thumbnail gallery**, **open/close image browser**
* **show last image**, **show previous image**, **show next image**
* **save doodle drawing to Image Buffer**
* **clear Image Buffer**, **delete last image from buffer**
* **copy image to Doodle canvas**
* **generate image from template** (see [Image templates](../about-mystersmith/whats-new.md#new-image-templates-for-subscribers-only-in-october))

**Send the current image to a device** (the one you are looking at, otherwise the newest — fitted to the device's screen):

* image buffer to **printer**, **Prism**, **Teleport**, **Inversion Board**, **Inv.Board Ultra**, **Peek Board**, **RealBoard**, **E-ink tag**, **VHS tape**, **Reinkstone**

**In the Prediction photo group:** **save image to phone gallery**.

!!! note "Run an action only at the right moment"
    Any action can wait for the buffer: *"Only if Image Buffer has exactly 2 images"*. See [Triggers and actions → Condition](triggers-and-actions.md#condition-run-an-action-only-at-the-right-moment).

---

## Images in image templates

An image template can place Image Buffer images anywhere on its canvas:

| Variable | Meaning |
|---|---|
| `#IMAGE` | the newest image |
| `#IMG1` .. `#IMG9` | counted from the **oldest** |
| `#LAST1` .. `#LAST9` | counted from the **newest** |

An image that is not there (yet) is simply left out. More: [Image templates](../about-mystersmith/whats-new.md#new-image-templates-for-subscribers-only-in-october).
