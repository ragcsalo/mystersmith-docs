---
title: "Image templates"
date: 2026-10-22 12:00:00
---

# Image templates

An **image template** is a picture you design once — a background image, more images and text fields — and fill in during the show with whatever just happened: the spectator's word, a fresh A.I. drawing, a calculated number. Send it to a printer, the Doodle screen or a display device, and it is fitted to that device automatically.

**Example:** a "newspaper front page" template — a background photo of a newspaper, the headline `#TXT1!uc` and today's photo `#LAST1` from the Image Buffer. The spectator names a word, the A.I. draws it, and your printer prints the front page with both.

!!! info "Subscribers or the Image Template Editor add-on"
    Image templates come with every MysterSmith subscription, or with the [Image Template Editor add-on](../purchase-add-ons/image-templates.md).

<!-- GALLERY: the IMAGE TEMPLATES list, the editor with a picked text field, the Format list, a printed template -->

---

## Where you find it

**Settings → Output / Screens → IMAGE TEMPLATES**:

* **Manage templates → Open list** — your templates.
* **Action after image generated** + **Trigger action** — what happens after *generate image from template* (see below).

---

## The list of templates

The **IMAGE TEMPLATES** sheet shows the templates of the **current routine**, each with its number (**#1**, **#2**...) — the number you use in the actions.

* **Add a new template:** type its name in the last field.
* **Edit** opens the editor. The copy icon makes a duplicate.
* **Swipe right** to delete: **Remove from this routine** (the template stays in your account and in your other routines) or **Delete permanently**.
* **Add one of my templates:** puts any of your templates into this routine — the **same** template, so a change shows in every routine that uses it.
* **Add a shared template (share code):** adds a template somebody shared with you (see [Sharing](#sharing)).
* **Save and close.**

!!! note "The numbers belong to the routine"
    A template's number never changes, and the number of a removed template is not given to another one — so the actions of your routine always point to the right template.

---

## The editor

At the top: the template's **Format** and the **preview**. Below the preview the settings of the element you picked are shown.

### Format

Choose the shape of the template:

* **Printer (variable height)** — the printer's paper width, the height follows the picture,
* a ratio: **1:1**, **3:4**, **4:3**, **2:3**, **3:2**, **9:16**, **16:9**,
* the exact size of a display: **Teleport**, **Prism**, **Prism PRO**, **Inversion Board**, **Inversion Board Ultra**, **Iarvel Peek Board**, **RealBoard**, **VHS tape**.

You can send any template to any device — it is fitted to the device's screen. A format that matches your device simply gives the best result.

### Designing with your fingers

* **Tap** an element on the preview to pick it — its frame turns green. Overlapping elements can also be picked from the **Fingers move** list.
* **1 finger** moves it, **2 fingers** zoom and rotate it.
* **Double tap:** back to the center, without rotation.
* **2-finger double tap:** undo the last move.
* **Snap** (the magnet button): **Off**, **Grid** (the edges and the center of the canvas, and the rotation to 0 / 90 / 180 / 270°) or **Elements** (lines up with the edges and centers of the other text fields).

---

## The background image

In **BACKGROUND IMAGE** choose the source:

* **Gallery** — a picture from your phone (saved with the template),
* **Last photo** — the newest photo of your gallery, read again **each time** the template is sent (take a photo of the spectator just before!),
* **Image Buffer** — the last image of the [Image Buffer](image-buffer.md), also read each time,
* **No image**.

Then: **Cover** (fills the canvas) or **Contain** (the whole picture is visible), **White background** or **Black background**, and **Reset position / zoom / rotation**.

---

## Images

**IMAGES → Add image** puts more pictures **over the background** and **under the text fields**. Each image comes from:

| Source | |
|---|---|
| **Phone** | a picture from your phone, saved with the template |
| **URL** | an image address — downloaded **fresh each time** the template is sent (**Reload the preview** downloads it again in the editor) |
| **Image Buffer** | `#IMAGE` (the last image), `#IMG1`..`#IMG9` (from the oldest), `#LAST1`..`#LAST9` (from the newest) |

An image that is not there when the template is sent (e.g. `#LAST2` with only one image in the buffer) is simply left out.

Options for each image:

* **Normal / Inverted** — invert white-on-black drawings.
* **Whole image / Crop to content** — cuts off the empty margins around the picture (great for A.I. drawings).
* **Keep background / Transparent white** (or **black**) — the template's background color becomes transparent in the picture, so a drawing on white paper sits nicely on your background image.
* **Real image / Dummy image** — in the editor, show our test cat drawing in place of a picture that isn't there yet (e.g. `#LAST1` of an empty Image Buffer), so you can design with it.

---

## Text fields

**TEXT FIELDS → Add text field.** A text field holds any text, with [Text Buffer variables](text-buffer.md#variables-using-the-buffer-anywhere):

* `#TEXT` (the last text), `#TXT1`..`#TXT9` (from the oldest), `#LAST1`..`#LAST9` (from the newest), with `!uc`, `!lc` or `!tc` for the letter case,
* fixed text around them, e.g. `Your word: #TEXT!uc`.

A field whose variable has no text yet stays empty.

* **Preview value:** shown in the editor instead of `#TEXT`... It also sets the size of the field's frame, so you can design with a realistic example.
* **Font** and **Size**, **Left / Center / Right** alignment in the frame, **Black text** or **White text**.
* **Create duplicate**, **Reset**, and the trash icon to delete it.

### Formulas

`=(...)` is replaced by its result:

| Formula | Result |
|---|---|
| `=(T1+300)` | text field 1 plus 300 |
| `TOTAL: =(T1..T3)` | the sum of text fields 1–3 |
| `=(#TXT1+#LAST2)` | Text Buffer values added up |

Operators: `+ - * /` and brackets. Anything that is not a number counts as 0.

---

## Using a template

**Show it directly on a device** — the actions *(the picker asks for the template's number)*:

* *image template to* **Doodle screen**, **printer**, **Prism**, **Teleport**, **Inversion Board**, **Inv.Board Ultra**, **Peek Board**, **RealBoard**, **E-ink tag**, **VHS tape**

**Make a picture of it** — *generate image from template* puts the finished picture into the [Image Buffer](image-buffer.md), then runs **Action after image generated** (in the IMAGE TEMPLATES settings). From the buffer you can send it anywhere, or use it in another template.

Every image made from a template is saved to the Image Buffer too (switch it off in *Image types to save*).

**From other apps:** the [HTTP Socket](../api/http-socket.md) and the custom URL scheme accept `imagetemplate=N` (printer), `imagetemplatedoodle=N`, `imagetemplateprism=N`, `imagetemplateteleport=N`, `imagetemplateinversion=N`, `imagetemplateultra=N`, `imagetemplatepeekboard=N`, `imagetemplaterealboard=N`, `imagetemplateeink=N`, `imagetemplatevhs=N` and `imagetemplategenerate=N` — **N** is the template's number in the loaded routine.

!!! tip "Wait for the right moment"
    Combine it with a [Condition](triggers-and-actions.md#condition-run-an-action-only-at-the-right-moment): set **Action after text recognition** to *image template to printer*, only if the Text Buffer has **exactly 3** items — the template is printed when the third word has been recognized, not before.

---

## Saved with your routines and your account

* Templates are saved to your **MysterSmith account** with their pictures, and each **routine** remembers which templates it uses. Load your routine on another phone, and the templates come with it.
* Changes are saved on the phone at once and uploaded a moment later — the templates work offline too.

---

## Sharing

* In the editor, **SHARE → Share template** gives you a short **code** (sharing again shows the same code).
* Anybody who adds it (**Add a shared template (share code)**) gets **their own copy** — only one, even if they add it again.
* If you change your template later, they see a mark next to their copy: **tap it to update** their copy from yours.
* **Shared routines:** when somebody loads your [shared routine](routines.md#sharing-routines), its templates come with it as their own copies — with **the same numbers**, so the routine's actions work right away.

!!! note "Last photo, Image Buffer and URL sources"
    These are shared as sources, not as pictures: the image is read on the phone that sends the template.
