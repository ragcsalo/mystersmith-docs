---
title: "What's new — v2.2.71"
date: 2026-09-11 12:00:00
---

# What's new in MysterSmith v2.2.71

!!! info "Looking for the latest?"
    This is the archived **v2.2.71** release page. For the newest features, see [**What's new in v2.3.11**](whats-new.md).

Since the big **v2.2.41** update, a series of releases has grown the dice tools into a full performance system, added per-screen automation, smarter connections and a lot of polish. Here are the highlights. :-)

!!! note "Testing the new build?"
    If you're helping test **v2.2.71**, here's a full step-by-step [**testing guide**](testing-new-features-v2-2-71.md) — a checklist covering every new feature below.

---

## Dice, reimagined

**v2.2.41** introduced DICE INPUT. Since then the dice tools have grown into a complete, hands-off performance system.

!!! tip "New: the DICE SCREEN"
    A dedicated performance screen that shows the values of your connected smart dice as **large, auto-scaling icons**. The layout resizes itself for one die or a whole handful, a **status line** at the bottom tells you what the routine is doing, and a **long-press** (just like the BLACK screen) exits.

* **Routine START** — you decide exactly when the dice routine arms: **automatic**, when **all dice show 1**, when **all dice show 6**, or **manually**. The routine no longer starts on its own just because you opened Performance Mode — it starts when *you* want it to.
* **Show dice values** — push the rolled values straight to your peek displays, either **always**, only on the **DICE SCREEN**, or only while the **dice routine is active**. A 1-second delay lets the dice settle so you never send a mid-roll value.
* **Finger actions on the DICE SCREEN** — assign your own action to **8 different taps and swipes**, exactly like the BLACK screen.
* **fix:** dice display actions now read your saved dice values correctly even when **separators** (comma, space, new line) are stored between them — the numbers are extracted first, then displayed.

---

## Screens & automation

* **Action after screen started** — fire any action automatically the moment a screen opens. Available on the **DOODLE, BLACK, SWIPE, FAKE HOMESCREEN, DICE and FAKE PASSCODE** screens (and **Action after calculator started** on the CALCULATOR).
* **Auto-RESTART routine** — the old "Reset routine after" option, renamed and clearer. Set it to `0` and it simply shows **OFF**.

---

## Remote control & connections

* **Remote Control button configuration** — map the buttons on your remote to the actions you actually use.
* reworked **Auto-connect devices** — choose **All nearby devices**, **My saved devices**, or **Saved for this routine**.
* the **Ultra Sharpie Neo** now always auto-connects (it broadcasts a new Bluetooth ID and name every time it's switched on).
* new **Reverse swipe directions** option — for swipe remotes used upside-down.

---

## Recognition

* a dedicated **handwriting orientation** option, plus a new action: **Detect handwriting orientation** (works out the rotation without sending the page for recognition).
* blank pages are **never sent** for recognition — no wasted A.I. calls.
* added missing **dice actions** for some devices.

---

## Devices & displays

* added support for the **Paperang P3S** 80mm printer.
* the Iarvel board's **Page aspect ratio → Calibrate** now takes effect immediately.
* improved routing for **special-subject recognition**, and several device action functions were restored and fixed.

---

## Interface & under the hood

* the **action selector** page was redesigned — a new search bar, scrolling chips and accordion blocks make finding an action much faster.
* noticeably **faster app loading** on Android.
* new **DEBUG CONSOLE** at the bottom of the Settings page, showing any critical errors — handy when reporting an issue.

---

## Fixes & housekeeping

* fixed double rotation for upside-down orientation on some boards.
* fixed displaying device nicknames in Settings.
* fixed the Lumen Prism showing original drawings together with recognized text.
* plus many smaller bug fixes across the app.

---

!!! warning "Add-on requirements from 1 October 2026"
    To keep things sustainable, two add-ons become required for certain devices from **1 October 2026**:

    * **External Displays** — for all PeekSmith models, Bond, MrCard, Teleport, Quantum, SB Watch 2
    * **Advanced Input Methods** — for Atom 2, all PeekSmith models, Bond, MrCard, Quantum, SB Watch 2, Ray, GhostMove

    Everything else that's currently free stays free.

---

Enjoy the update — and as always, thank you for using MysterSmith! :-)

<br>

![](https://mystersmith.info/assets/images/MysterSmith_vertical.png)

<br><br>
