---
title: "What's new"
date: 2026-09-28 12:00:00
---

# What's new in MysterSmith v2.3.11

Since **v2.2.71**, the whole device Settings experience has been rebuilt around a single idea: **every device gets its own panel**, with its own settings. On top of that there's a brand-new **Morse code** input method, the **Pitata Dice** as their own device, a tidied-up **InMind Wheel**, **free Gemini A.I. for subscribers**, **shared button mappings**, and a lot of polish. Here are the highlights. :-)

!!! note "Testing the new build?"
    If you're helping test **v2.3.11**, here's a full step-by-step [**testing guide**](testing-new-features.md) — a checklist covering every new feature below.

---

## Your settings and routines carry over

Board and printer settings used to be **global** — one set shared by every board and every printer. They're now **per device**, and since that shared value is exactly what you had everywhere, the app simply **copies it onto each device** on the first launch after the update. Routines saved before the update load correctly too. Nothing here needs doing by hand — it's just worth a quick look at the devices you use, since these settings can now differ from one to the next for the first time.

---

## Every device now has its own Settings panel

The Settings page used to have one long section per device *family* — IMPRESSION DEVICES, PRINTERS — holding settings that applied to all of them at once. Both sections are gone. Instead:

* **MY DEVICES** lists what you own, and each device opens **its own sliding Settings panel**.
* Every setting in that panel belongs to **that device only**. Two boards, two printers, two pads — each keeps its own.
* The panel has the same shape everywhere: device info, the settings, a **Details** sheet for the name / ID / battery and MANAGE DEVICE, and a red **Disconnect** at the bottom.

**Impression boards**

* Corner actions moved into their own **CORNER ACTIONS** block, per board. The corner area size, the connection indicator and *Disable finger drawing* are per board too.
* The camera pens (**Ultra Sharpie, Nova, Penthal**) have **no corner settings** — they never applied to them.
* *"Autostart on connect"* has been **removed**. Connecting a board no longer starts a peek screen on its own.

**Multi-unit boards (Iarvel, Pitata)**

* Connecting a second pad no longer replaces the first: **each connected pad gets its own row** in MY DEVICES, and its own panel.
* **Every** setting is per pad now, not just the calibration. The Connect row stays visible after the first pad connects, so you can keep adding more.
* *Fixed:* calibrating one pad could overwrite the first pad's saved calibration.

**Printers**

* Each printer has its own panel with its own dotted margins, extra paper feed, action after printing and CUSTOMIZE PRINTING.
* *"Selected printer"* is gone — it isn't needed when every printer carries its own settings.
* **Peripage printing status** only appears on Peripage printers, saved per printer.
* **Peripage paired mode** is now **one setting for all your Peripage printers**, and on Android you can also switch it in **MY DEVICES**, right under the Glyphs / Peripage row, **before connecting** — handy for printers that connect in normal mode and drop immediately, before their panel can be opened. Changing it disconnects the printer so it reconnects in the new mode.

**Everywhere**

* Renaming a device now updates its name **everywhere** on the Settings page at once.
* MY DEVICES opens itself when nothing is enabled yet, and whenever a device connects.

---

## New device: Pitata Dice

The Pitata dice are now their own device type, instead of sharing one entry with the older BLE dice. They can do things the older ones can't.

* **They report their colour**, so the app shows each die in its real colour — red, blue, white.
* **They're always shown in colour order** — red, blue, white — not in whatever order they happened to connect in. In a routine set to *connected order*, that colour order is what you get.
* **New setting — "Connected mode"** (DICE INPUT → PITATA DICE, on by default):
    * **Off** — the dice are only listened to, exactly as before. Nothing is connected, so there's no connection to drop mid-performance (but doesn't work in the background).
    * **ON** — the dice are connected to as well, and keep being read while the app is in the background.
* The app tells the two families apart by their firmware, so **your older BLE dice keep working** under their own "BLE Dice" entry.

---

## Dice

* **Tap a connected die** to open its Settings panel, like any other device. Auto-connect is per die.
* The **Details** sheet shows the die's name, ID, battery and a large image of its current value.
* **Battery is now shown for BLE and Pitata dice.** Fair warning: these cells aren't rechargeable and are rated for 5-10 years, so expect that number to sit at 100% for a very long time — treat it as a rough indicator, not an exact value.
* The connected dice are shown as images at the **bottom of MY DEVICES**, the same way as in DICE INPUT.
* **KMD** gets the standard panel with *Enable WHITE / BLACK / RED die*; the old Configure sheet is gone, and the badge now counts **enabled dice** rather than connected units.
* new dice features: **"Number by digit"** and **"Grand total"**, and **unrolled dice are now faded out**.

---

## New: Morse code input

A new way to get text in without a screen anyone can read over your shoulder.

!!! tip "The MORSE INPUT screen"
    **Tap = dot, swipe in any direction = dash.** A pause finishes a letter, and the final text goes to the **text buffer**.

* **Two fingers** — tap and swipe are yours to assign in Settings (they start as *delete the last letter* and *space*), plus a **two-finger long press**.
* **One finger held for 2 seconds exits** the screen.
* The **top and bottom 15%** of the screen ignore touches, so nothing fires next to the status bar or the navigation bar.
* The middle shows the **newest text buffer entry**, large and auto-fitted — and it clears as soon as you start entering something new.
* *Display on screen* and *Enable vibrations* work as on the swipe screen.

**Morse from a remote — on any screen**

* A new remote mode: **"remote mode: morse code"**. With it on, Morse input works on **every** screen — a fake lockscreen, a black screen... anything.
* **HID remotes** get a **MORSE KEYS** section in the button mapping, with five roles you assign yourself — **Dot, Dash, Space, Delete, Send**.
* **Hardware remotes (Atom, Thumper V2, Wilson Nexus, Pitata Remote)** use a fixed layout — **1 = dot, 2 = dash, 0 = space**, **left = delete, right = send** (on the Pitata Remote: **C = delete, D = send**). Any button you *haven't* given a Morse role keeps its normal action.
* Two new actions for **any** trigger — a volume button, a board corner, anything: **"morse code short (.)"** and **"morse code long (-)"**.

**A one-button Morse key: MATT+ and ATC**

In Morse mode, the **MATT+** and **ATC** remotes work as a classic single-button key (outside Morse mode they keep their usual mapping): **press 50–200 ms = dot**, **201–600 ms = dash**, **hold 1–1.5 s = delete**, **hold 2 s+ = send**, and a pause over 0.5 s ends the letter. The MATT+ no longer buzzes your own dots and dashes back at you (with a new **"Use vibrations"** setting, off by default), and the **ATC** now has its own Settings panel like every other device.

!!! note "The one rule"
    Morse works **on the MORSE INPUT screen, or anywhere at all in "morse code" remote mode — and nowhere else.** Morse actions left on a button do nothing outside those two situations. And remember: a remote switched into an **HID mode** follows the **MORSE KEYS** you assigned, not the fixed 1/2/0 keypad.

---

## Reminder about the remote-mode indicator

The small icon in the top-right corner that shows which remote input mode is forced on — text / numbers, cards, swipe, and now **morse code**.

It stays hidden on the disguise screens (peek screen, fake lockscreen, fake homescreen, touch-peek black screen), so nothing gives you away while morse mode is armed behind a lockscreen.

---

## InMind Wheel — tidied up, with a new home

The InMind Wheel was spread all over the app. It now lives in one place — a new **Settings → More settings → INTEGRATIONS** block (which also gathers **Dictionary API** and **LifeLike Sketcher**). Every part of it needs a valid **InMind Token** plus the **API Access** add-on.

* **Your own A.I. engine** — OpenAI GPT, Google Gemini or Claude, using the model you picked for that engine in A.I. Features. The word search now runs **straight from the app** (through the A.I. proxy if you use it), instead of through our server on a fixed model.
* **Show as much or as little as you like** — *Display chosen symbol* and *Display chosen card* (both off by default), and **Translate word** (shown as *WORD = TRANSLATION*). With everything off, only the word is revealed.
* **Cleaner results** — every possible word becomes its own text-buffer record (no more automatic cycling); the symbol, card and translation are shown just for the best one, e.g. *"ABLAK = WINDOW, heart"*. An **Action after word received** can fire once all results are in.
* **Tidied-up actions** — *process InMind word* (default / English / any language), *delete last InMind letter*, *InMind word reset*. Routines that used the old actions are switched over **automatically**.
* **Virtual InMind Wheel (mindwheel.in)** — a WEB-polling source: the spectator spins the wheel on the website and the letters arrive in the app (and on your peek devices) one by one. Start it with a long press on the **blue rail** of the Doodle screen.

---

## New: "translate last text"

A new action for **any** text: it translates the last text-buffer entry into your Performance language and adds the translation to the buffer. Pick the engine under **A.I. Features → Engine for translations** (OpenAI GPT / Google Gemini / Claude). That same engine now also powers **QuickDraw** word matching — previously OpenAI only.

---

## New: free Gemini A.I. for subscribers

MINI, BASIC and PREMIUM subscribers can now use the Gemini A.I. features **without their own API key**, through a shared key we provide:

* **MINI** — 20 calls a day (one every 30 s)
* **BASIC** — 40 calls a day (one every 15 s)
* **PREMIUM** — 60 calls a day (one every 10 s), plus 10 image generations a day

The day is the UTC day and only successful calls count; what's left today is shown under **A.I. Features**, and a free answer is marked **(FREE)**. The free calls go through the paid Gemini API, so Google doesn't use what you send to improve its products.

**Your own Gemini key still comes first** — the free calls only step in when your key can't do the job (its quota is used up, or it isn't valid). If you'd rather spend the free calls first, turn on **A.I. Features → Use FREE Gemini calls first**. The free calls use fixed models (a fast Gemini Flash-Lite for text, **Nano Banana 2 Lite** for images), so for the best quality with your own key, leave it off. The full terms are on the **User Guide → FREE Gemini A.I.** page.

Also new for your own key: a **Gemini drawing model** choice (Nano Banana 2 Lite / 2 / Pro) and **Gemini 3.8 Flash** in the model lists, plus **City → Gemini colour / B&W drawing** (and City+title variants). The old "(free)" model labels have been removed, to avoid mixing them up with these subscriber free calls.

---

## Peripage printers

* **Print density** (per printer) — lighter or darker than the model's default.
* **Print mode** (per printer): **text** (sharp) or **photo** (dithered — nicer for pictures, and gentler on the printer).
* The experimental *gentle* print speed has been removed (a printer set to it goes back to *automatic*).
* **Known issue:** the classic **Peripage A6** can freeze mid-print with an **iPhone 17 or newer** (the manufacturer's own app too) — the device's DEVICE INFO now says so on those iPhones.

---

## Device info

* **Every Iarvel device** (impression board, Peek Board, Card, Keychain, Key PRO, MrCard) now shows its **device model number** and the **detected device model** in DEVICE INFO.
* On iOS, the long **Device ID (BLE)** wraps onto two lines instead of running off the screen.

---

## WEB-POLLING: nested JSON fields

Custom WEB-polling sources can now read nested JSON fields by path — `results.word`, `results.0.word` (a number picks an item in an array) — and several at once, e.g. `peek, topResult, results.word, results.line`.

---

## Shared button mappings

A remote's button mapping used to belong to a single routine. Now it can be shared:

* **"Use mapping for every routine"** — a switch in the mapping editor. A shared mapping shows up in **every** routine's mapping list (marked with a globe), and saving, loading or creating a routine leaves it alone. Which mapping is *active* is still chosen per routine.
* **Switching it off** keeps the mapping in the loaded routine only — the app asks first (**Save now**, **Later**, or **Cancel**). Deleting a shared mapping asks too, since it disappears from every routine.
* **"Save as new mapping"** — copies the open mapping (buttons, swipes, Morse keys and their actions) under a new name for the current routine, handy for a routine's own variant of a shared one.
* Good to know: a routine saved *before* a mapping was shared still holds its own old copy — save the routine again after sharing.

---

## More of your settings follow you between phones

Some settings belong to **you**, not to a routine — and until now they lived only on the phone, so a reinstall lost them and your other phones never saw them. They're now saved to your **account** too: your **shared button mappings**, and a few app preferences (*confirm before loading a routine*, *show the routine name*, *show minor updates*, *background music* and the *A.I. proxy* switch).

They upload a few seconds after you change them and download whenever the app syncs your account (e.g. at start), so a new or reinstalled phone gets them after signing in. The phone / tablet display mode stays per phone.

---

## HTTP Socket

* The socket's address is now always your **Wi-Fi (or hotspot) address** — the one other devices can actually reach. Without Wi-Fi, the Details dialog says so and offers a **Check again** button instead of showing an address nobody can use.
* **Details** shows two links: a **localhost** link for apps on this phone, and the **Wi-Fi** link for other devices on the same network.

---

## Steadier internet-connection indicator

* No more flip-flopping between online and offline: the checks no longer overlap, and the *no internet* icon only appears after **two** failed checks in a row.
* *Fixed:* the app could get stuck at start while checking the internet connection.

---

## Smaller things

* **CUSTOMIZE DISPLAY: font sizes can go down to 1.** The minimum and maximum font size couldn't be set below 5 before. To step in ones rather than fives, tap the **1** button under the stepper.
* **MY ROUTINES: SAVE / SAVE AS NEW / LOAD.** The new **SAVE** writes straight to the routine you have loaded (after asking); **SAVE AS NEW** is the old save sheet. The newest routine is now on top everywhere, and *Manage routines* shows when each was last saved.
* **Create new routine (using default settings)** sits at the top of the new-routine list — name it and it's saved as a fresh routine once the defaults load. Starting from the default settings is noticeably faster too.
* **A.I. errors** are gentler: a failed request is retried once after 5 seconds, and any error shows as a short message at the bottom instead of a box you have to tap away.
* **Choosing an A.I. engine without its API key** now shows a *Missing API key* message — previously the text-recognition engine silently switched back to Google, so it looked as if the chosen engine was in use.
* added **button actions for the Lumen Duo**.
* *Fixed:* *Disconnect all* left the dice connected and the Bluetooth counter didn't count BLE / Pitata dice; the MORSE INPUT text could hide under the notch / Dynamic Island.
* *Fixed:* the **Printing speed** list on the Cosmos / L2 printers couldn't be scrolled, and the *Sync saved device* sheet in MY DEVICES could be cut off.
* *Fixed:* **Update now** from the release notes showed "of undefined MB" with a stuck progress bar — the update size is shown again.

---

## Fixes & housekeeping

* fixed a firmware-checking bug with the **Iarvel PeekBoard** and **Spirit Echo**.
* plus the per-device Settings fixes listed above, and many smaller fixes across the app.

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
