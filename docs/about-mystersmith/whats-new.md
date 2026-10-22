---
title: "What's new"
date: 2026-10-22 12:00:00
---

# What's new in MysterSmith v2.3.61

Since **v2.3.51**, MysterSmith has a brand-new tool: the **Image Template Editor**. Design a picture once — a background, images and text fields — and send it to your printer, Doodle screen or any display device, filled with whatever just happened in your routine: the spectator's word, a fresh A.I. drawing, a calculated number. Around it: a smarter **Image Buffer**, better **A.I. drawings**, new actions and a few important fixes. Here are the highlights. :-)

---

## New: Image templates (for subscribers only in October)

Find it under **Settings → Output / Screens → IMAGE TEMPLATES → Manage templates**. A template is made of:

* a **background image**: from your gallery, your last photo or the last Image Buffer image (cover / contain, white or black background),
* any number of **images**: a picture from your phone, an image **URL** (downloaded fresh each time the template is used) or an **Image Buffer** image: **#IMAGE** (the last one), **#IMG1**..**#IMG9** (from the oldest), **#LAST1**..**#LAST9** (from the newest),
* any number of **text fields**: fixed text and/or Text Buffer variables (**#TEXT**, **#TXT1**..**#TXT9**, **#LAST1**..**#LAST9**), with any font, size, alignment and black or white color.

You choose a **format** for each template (a ratio like 3:4, the printer's variable height, or the exact size of a display: Prism, Teleport, Inversion Board, Peek Board, RealBoard, VHS tape...), and the template is fitted to whatever device you send it to.

### Designing with your fingers

* **Tap** an element on the preview to pick it (its frame turns green). Overlapping elements can also be picked from the **"Fingers move"** list.
* **One finger** moves it, **two fingers** zoom and rotate it.
* **Double tap:** back to the center, without rotation.
* **Two-finger double tap:** undo the last move.
* **Snap:** *Grid* (edges and center of the canvas) or *Elements* (lines up with the other elements' edges and centers).
* Only the picked element's settings are shown below the preview, so even a big template stays tidy.

### Text fields

* A **preview value** shows instead of #TEXT in the editor, and sets the size of the field's frame, so you can design with a realistic example.
* **Formulas:** **=(...)** is replaced by its result, e.g. `=(T1+300)` (text field 1 plus 300), `TOTAL: =(T1..T3)` (the sum of fields 1–3) or `=(#TXT1+#LAST2)`.

### Images

* **Crop to content:** cuts off the empty margins around a picture (great for A.I. drawings).
* **Transparent white / black:** the template's background color in the picture becomes transparent, so a drawing on white paper sits nicely on your background image.
* **Inverted:** for white-on-black drawings.
* **Dummy image:** the editor can show our test cat drawing in place of a picture that isn't there yet (e.g. **#LAST1** of an empty Image Buffer).

### Saved with your routines and your account

* Your templates are stored with your **MysterSmith account**, and each **routine** remembers which templates it uses. Load your routine on another phone and the templates come with it, pictures included.
* **#1, #2, #3...:** every template has its own number **in the routine**, shown next to its name. Use it in the actions and URLs. The numbers never change: a removed template's number is not given to another one.
* **Add one of my templates:** puts any of your templates into the current routine (the same template — a change shows in every routine that uses it).
* **Share template:** gives you a short code. Anybody who adds it (**Add a shared template**) gets **their own copy** — only one, even if they add it again or load a routine that uses it. If you change your template later, they can update their copy from yours with one tap.
* **Share the routine too:** when somebody loads your shared routine, its templates come with it as their own copies, and they keep **the same numbers**, so the routine's actions work right away.
* Deleting a template asks: **remove it from this routine only**, or **delete it permanently**.

### Using a template

* **"image template to ..."**: shows the template directly on the **Doodle screen, printer, Prism, Teleport, Inversion Board, Inv.Board Ultra, Peek Board, RealBoard, E-ink tag** or **VHS tape**.
* **"generate image from template"**: puts the finished picture into the Image Buffer, with its own **Action after image generated** (in the IMAGE TEMPLATES settings).
* Every image made from a template is saved to the Image Buffer too.
* From the HTTP Socket or a URL: `imagetemplate={N}` (printer), `imagetemplatedoodle={N}`, `imagetemplateprism={N}`, ... and `imagetemplategenerate={N}` — **N** is the template's number in the loaded routine. See the [HTTP Socket](../api/http-socket.md) page for the full list.

---

## Image Buffer

* **Image types to save:** a new list (like *Text types to save* in the Text Buffer) where you choose which pictures go into the buffer: drawings before erasing, drawings at recognition, A.I. drawings, A.I. image prompt results, images from templates, WEB-polling results, Send to API responses, images from the HTTP socket, TrueWrite / TrueSketch images. It replaces the old "Save drawing..." switches (the rarely used *Save drawing when idle* is gone).
* **Clear buffer on WEB-polling start:** a new switch, like the Text Buffer's.
* **New actions:** *image buffer to* **Prism, Teleport, E-ink tag, VHS tape, Reinkstone** and **printer**.
* **Peek Board:** the *last photo* and *image buffer* actions are back.

---

## A.I. drawings

* A.I. drawings go into the Image Buffer **immediately** and in their **original size** (before, a smaller copy from the Doodle screen was saved after a few seconds).
* The **"Action after ... drawing"** and **"Action after image generated"** triggers can be set to *immediately* again — they always wait until the drawing is in the buffer.
* **Use thicker lines for drawings:** a new option for OpenAI and for Gemini (bold Sharpie lines).
* **OpenAI drawings** look much more like a real child's drawing now.

---

## More new things

* **Condition for any action:** in the action picker, the new **Condition** chip shows two settings: **Only if Text Buffer has** and **Image Buffer has** *exactly* N items. The action runs only then, otherwise nothing happens. It works with every trigger (volume buttons, remotes, "Action after ...", action lists...), and the Settings page shows it next to the action, e.g. *text to printer (3)*.
* **New actions:** *vibrate short*, *vibrate long* and *vibrate double*.
* **ACRONYM WORD LIST:** the *Input letter position (1-6)* switch became a **Letter position** list: *flexible (by input)* or *fixed (1)* .. *fixed (6)*. With a fixed position, the readable letters are in that position of each word.
* **Voice Recorder:** load audio files from your phone or from a URL, save the last A.I. voice, and a new **stop audio playback** action.

---

## Fixes & housekeeping

* **Romanized text:** with the PeekSmith 3 *Roboto* text size, some texts (like a playing card) were saved into the Text Buffer as numbers. Fixed. The **"Transform Chinese/Hebrew text"** switch has moved to the **Text Buffer** settings, because it affects every Text Buffer entry.
* Fixed some Voice Recorder file syncing bugs.
* plus many smaller fixes across the app.

---

Enjoy the update — and as always, thank you for using MysterSmith! :-)

<br>

![](https://mystersmith.info/assets/images/MysterSmith_vertical.png)

<br><br>
