---
title: "Printers"
date: 2026-10-22 12:00:00
---

# Printers

A small Bluetooth thermal printer turns MysterSmith's information into a **physical prediction**: the spectator's word in handwriting, their signature, the playing card they named, their drawing, an A.I. drawing, a whole designed page — printed in a few seconds, in your pocket or on the table.

Printing needs the [Printers add-on](../purchase-add-ons/printers.md) (included in every subscription). **Test prints are free**, so you can try your printer before you buy.

<!-- GALLERY: a printer in MY DEVICES, the printer's settings panel, printed handwriting / card / drawing -->

---

## Supported printers

| In the app | Models |
|---|---|
| **Glyphs/Peripage** | A6, P21, P21 HD, P21+, PeriPage+, A9 MAX, A2, A9s MAX, A40, A40+, P81 (A4, Android only), A3X |
| **Cosmos/L2** | Cosmos, L2, LuckJingle D1 |
| **Pitata Printer** | Pitata Printer, Pitata Printer Mini (57mm) |
| **Cat printer** | GB03, MX10, MXW01, X6, X18 |
| **Temu printer** | YHK printers (X6, X10) |
| **Paperang printer** | Paperang, P3S (80mm) |

---

## Connecting

1. **MY DEVICES → Enable/disable BT devices → Manage**: switch on your printer type (in the *Printers* group).
2. Turn on the printer, and tap **Connect** next to it in MY DEVICES. Pick your printer from the list.
3. When it's connected, its name and **Settings** appear. **Tap the printer's name** to feed 5 mm of paper — a quick check that it's alive.

!!! tip "Peripage on Android"
    Under the Peripage row there is **Peripage paired mode** (Android only): it connects through classic Bluetooth instead of BLE. On Android this is the recommended way for Peripage printers. It is one setting for all your Peripage printers.

---

## The printer's settings panel

Tap **Settings** next to the connected printer. (Tap the printer's name at the top for the **DEVICE INFO**: battery level, firmware, dpi.)

**SETTINGS** (Glyphs/Peripage has the most; the others have the margins, the paper feed and the action):

* **Printing speed** (Peripage: *automatic*, *official Peripage app*, *Glyphs (experimental)*, *safe*, *basic*; Cosmos: *safe* / *basic*)
* **Print density** (Peripage: *model default*, *light*, *medium*, *dark*) and **Print mode** (*text (sharp)* or *photo (dithered)* — photo is gentler on the print head)
* **Canvas width**, **Paper width**
* **Top margin**, **Bottom margin** (0–50 mm), **Bottom paper feed (mm)** (default 10)
* **Dotted margins when testing**, **Extra paper feed after printing**
* **Action after printing finished** + **Trigger action** — runs when the printing is done (e.g. *vibrate short* — so you know you can take the paper out).

**TESTING** — test prints (free, also without the add-on): *page size*, *handwriting*, *signature*, *doodle drawing*, *playing card*, *clock prediction*, *dice*, *magic square*, and **Feed paper (10mm)**, **Cancel printing**.

**CUSTOMIZE PRINTING** — the look of each print type: *Handwriting / text*, *Signature*, *Doodle (drawings)*, *Playing cards*, *Magic square*, *Clock (time)*, *Dice*. Each has a **live preview**, and the settings for the **font** (family, size, line height, thickness), the **position** (print area height, orientation, alignment, padding, rotation) and a **background image**.

!!! note "Peripage A6 on new iPhones"
    On iPhone 17 and newer an A6 may freeze while printing. Set **Print density** to *light* and **Print mode** to *photo*.

---

## What you can print

The **Printer** group of the action picker (the **Printer** chip jumps there):

| Action | Prints |
|---|---|
| **handwriting to printer** | the current Text Buffer text, in handwriting |
| **signature to printer** | the text as a signature |
| **playing card to printer** | a playing card |
| **clock to printer** | a clock face with the time |
| **magic square to printer** | a magic square for the number |
| **doodle drawing to printer** | the drawing on the Doodle screen |
| **last photo to printer** | the newest photo of your gallery |
| **image buffer to printer** | the current [Image Buffer](image-buffer.md) image (an A.I. drawing, for example) |
| **image template to printer** | an [image template](image-templates.md), filled in |
| **feed paper 5mm** / **25mm** | blank paper |

These go to the connected printer. While a printer is connected, its own group appears too (e.g. *Glyphs/Peripage printer*), with the same prints — plus **dice**.

Photos and images are printed dithered (in fine dots), so they look good on thermal paper.

!!! tip "Typical routines"
    * **Action after text recognition → handwriting to printer** — the spectator writes a word, and your "prediction" prints in your handwriting style.
    * **Action after OpenAI drawing → image buffer to printer** — the A.I. drawing of their word is printed.
    * Wait for the third word with a [Condition](triggers-and-actions.md#condition-run-an-action-only-at-the-right-moment).

From other apps: `imagetemplate=N` prints an image template (see [HTTP Socket](../api/http-socket.md)).
