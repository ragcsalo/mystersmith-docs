---
title: "Display devices"
date: 2026-10-22 12:00:00
---

# Display devices

A **display device** is where the secret information appears: a PeekSmith on your wrist or in your pocket, a Teleport card, a Lumen Prism, an Inversion Board that reveals a drawing, an e-ink tag on a keychain... MysterSmith sends texts, drawings and images to all of them.

The full list: [Supported devices](supported-devices.md). Most display devices need the [External Displays add-on](../purchase-add-ons/external-displays.md) (included in every subscription); their test buttons work without it.

<!-- GALLERY: MY DEVICES with connected displays, a device's settings panel, a text on PeekSmith / Teleport -->

---

## MY DEVICES

All devices are managed in **Settings → MY DEVICES**:

* **Enable/disable BT devices → Manage** opens **AVAILABLE DEVICES**, in groups: *Display devices*, *Impression devices*, *Printers*, *Remote controls*, *Bluetooth dice*, *Other devices*. Switch on the ones you own. **Long press** a device to make it a favorite, and use **☆ Show only favorites** to keep the list short. **Refresh device list** if a device doesn't show up.
* Each enabled device has a row in MY DEVICES: **Connect** opens a list of the devices found nearby — tap yours. When it is connected, **Settings** opens its own panel (it closes by itself if the device disconnects).
* **Auto-connect devices** — what connects by itself:
    * *All nearby devices* (default),
    * *My saved devices* — the devices you connected before,
    * *Saved for this routine* — with **Save connected devices → Save**, each [routine](routines.md) remembers its own devices,
    * *Custom (per device setting)*.
    
    A device's own **Auto-connect device** switch (in its panel) always wins. **Disable auto-connect for saved devices** (in AVAILABLE DEVICES) switches them all off.

---

## What appears on the displays

**Texts — automatically.** Every new text that arrives in the [Text Buffer](text-buffer.md) (a recognized word, a WEB-polling result, a card you sent...) is sent at once to:

* **PeekSmith / Bond**, **SB Watch 2**, **Quantum**, **Notifier**,
* **MrCard**, **Iarvel Card**, **Iarvel Peek Board**, the **Lumen** displays — if their **Peek text** setting is on,
* your **watch** (Apple Watch / WearOS), **local notifications**, **WEB screen**, **BT Screen**, the **clipboard** (see External Displays settings below).

The *Text buffer* actions **show last text**, **show previous text**, **show next text** and **auto cycle text** send them again.

**Drawings and images — with actions.** The boards, keychains, e-ink tags and photo displays get their content from their own actions: each device has a group in the action picker (and a chip at the top of it) with actions like *handwriting to ...*, *signature to ...*, *playing card to ...*, *doodle drawing to ...*, *last photo to ...*, *image buffer to ...*, *image template to ...* and *clear ...*. Put them on a trigger — e.g. *Action after text recognition* — see [Triggers and actions](triggers-and-actions.md).

---

## The device's settings panel

Most panels are built the same way:

* **DEVICE INFO** — name, battery, firmware.
* **BASIC SETTINGS** — e.g. **Transfer speed**, **Peek text**, **Peek drawings**, **Invert B/W image**, **Playing card type**, **Clear screen**, **Show connection indicator**, **Auto-connect device**.
* **Action after transfer finished** + **Trigger action** — what happens when the picture is on the device.
* **TESTING** — test buttons (they work without the add-on).
* **CUSTOMIZE DISPLAY** — the look of each content type (handwriting, signature, playing cards, clock, dice...): font, size, position.
* **BUTTON ACTIONS** — for devices with buttons.

### Some devices in detail

* **PeekSmith / Bond** — brightness, auto standby, upside down, mirror, smart text, multi-language text, text wrap / scroll, font; button actions (left / right / long / secret; PeekSmith 3: tap, movement, magnet); vibrations. Actions (*PeekSmith 3 / Bond* group): *vibration*, *scrolling*, *upside down*, *mirror*, *smart text* ON/OFF.
* **Teleport** — playing card type, display cards from memory, clear screen. Actions: *last text to Teleport paper*, *last text to Teleport yellow card*, *handwriting / doodle / signature / playing card / ESP / dice / emoji to Teleport*, *image buffer to Teleport*, *clear Teleport (black)*.
* **Lumen Prism** — screen type, transfer speed, peek text, peek drawings (A.I. drawings too), show text below drawing, invert.
* **Inversion Board / Ultra** — whiteboard mode, fake dust effect, extra stroke effect, break very long words, auto CAPITALIZE, zoom/crop text, max line thickness, clear board on app start. Actions include *erase Inversion Board* and *Inversion Board fake wipe*.
* **Iarvel Peek / Spirit Echo** — full refresh when erase, display after connecting, peek text / drawings, numeric clock mode, drawing thickness and strength. Actions include *text to Peek Board* and the live *TrueWrite / TrueSketch / Quickdraw to Peek Board*.
* **RealBoard** — connects over Wi-Fi: **IP address**, **Port**, or **Discover automatically**.
* **E-ink tag** — playing card type, clock face type, invert, dithering, zoom/crop text, auto CAPITALIZE.
* **Pitata / Iarvel Keychain** — clock face type, invert, white border; actions like *BOLD text/number to keychain*, *Pi numbers to keychain*, *clear keychain screen*.
* **SB Watch 2** — vibrate for peek, move hands away, peek duration and delay; crown and button actions.
* **MrCard / Iarvel Card** — peek text, peek drawings, invert; button actions (A / B / X / Y / O).

### Lumen PRO

The Lumen Eye, Lumen Prism (PRO) and Lumen Spectra, and the Lumen boards, work for **Lumen PRO** users. On **iPhone**, MysterSmith checks your PRO status with the **Impra app** (before, it was the Lumen app):

1. Install the **Impra app**, or update it to the latest version.
2. In MysterSmith open **Account details → CREDENTIALS** and tap **Verify Lumen PRO**.
3. The Impra app opens for a moment and sends you back — the row changes to **Lumen PRO verified**.

If you see *"Make sure the Impra app is installed..."*, install or update the Impra app and try again.

---

## EXTERNAL DISPLAYS settings

**Settings → Output / Screens → EXTERNAL DISPLAYS** — outputs without a Bluetooth device:

* **Copy to clipboard** — every new text is copied, so you can paste it in any app.
* **Use WearOS watch** (Android) — see [The WearOS watch app](wearos.md). Apple Watch has its own section (iOS).
* **Reinkstone NFC case** (iOS) and **The Missing Tape** — their settings.
* **Enable WEBscreen** — the texts appear on a web page; open [bsmagic.app/webscreen](https://bsmagic.app/webscreen/?app=mystersmith){:target="_blank"} in any browser and log in with your username and PIN.
* **Use BT Screen** — the BT Screen app on another phone or tablet.
* **Local notifications** — every text arrives as a notification (any smartwatch or smartband that shows notifications becomes a peek display). **Linebreaks**: off = line breaks become spaces.

!!! info "Add-ons since October 16, 2026"
    PeekSmith 3, Bond, Teleport, MrCard, SB Watch 2 and Quantum need the **External Displays** add-on to display texts; for PeekSmith 3, Bond, SB Watch 2, MrCard and Iarvel Card, it also covers their buttons. See [Supported devices → Add-ons needed](supported-devices.md#add-ons-needed).
