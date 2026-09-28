---
title: "Testing guide — v2.3.11"
date: 2026-09-28 12:00:00
---

# Testing guide — MysterSmith v2.3.11

Thank you for helping test the new build! :-) This page is a step-by-step
checklist covering everything added or fixed since **v2.2.71**. You don't
have to test everything — pick the areas that match your devices and
workflow.

!!! note "Before you start"
    * Note your **platform** (Android / iOS) and the **app version**.
    * The big change this round is the **per-device Settings panels** — if you own more than one board, printer or pad, those are the most valuable things to test.
    * The **InMind Wheel** tests need a valid **InMind Token** and the **API Access** add-on.
    * When something doesn't work as described, a **screenshot** and a short note (what you did → what happened) is a huge help.

Each item is a checkbox: **☐ = still to test**, tick it once you've
confirmed it works. Steps are marked **Do**, and what you should see is
marked **Expect**.

---

## 1. First launch after updating (your settings carry over)

!!! tip "What to expect"
    The board and printer settings that used to be global are now per device. Your old shared values are **copied onto each device** automatically — nothing is lost, and there's nothing you have to set up again.

- [ ] Update from an older build and open a few **boards** → **Expect:** corner actions, corner area size, connection indicator and *Disable finger drawing* match what you had before (now shown per board).
- [ ] Open a few **printers** → **Expect:** *Dotted margins*, *Extra paper feed* and *Action after printing finished* match your old values.
- [ ] **Load a routine saved before the update** → **Expect:** it loads correctly, with the old shared values mapped onto the per-device settings.
- [ ] On Iarvel / Pitata, connect a pad you never configured individually → **Expect:** it follows the board type's settings.

---

## 2. Every device has its own Settings panel

- [ ] In **MY DEVICES**, tap **Settings** on a connected device → **Expect:** its **own panel slides in from the right** (dark background), not the old shared section or the light details sheet.
- [ ] Read the top of the panel → **Expect:** the device **type** as a title, then the device **name** with a **Details** link, any device options, and a red **Disconnect** at the bottom.
- [ ] Tap **Details** → **Expect:** a simplified sheet with **Original name**, **Device ID (BLE)**, **Battery** and the **MANAGE DEVICE** card; the header reads **Close panel**.
- [ ] Tap the red **Disconnect** → **Expect:** the device disconnects **and** the panel closes.
- [ ] Disconnect a device **another way** (out of range / power off) while its panel is open → **Expect:** the panel closes on its own.
- [ ] **Rename** a device → **Expect:** the new name shows **everywhere** on the Settings page at once.
- [ ] Have **nothing enabled**, then connect a device → **Expect:** MY DEVICES opens itself; it also opens whenever a device connects.

---

## 3. Impression boards (per board)

- [ ] Open a board's panel and find the **CORNER ACTIONS** block → **Expect:** corner actions, **corner area size**, the **connection indicator** and **Disable finger drawing** are all set **here, per board**.
- [ ] Connect **two** boards and set **different** corner actions on each → **Expect:** each keeps its own; changing one doesn't touch the other.
- [ ] Open the panel of a **camera pen (Ultra Sharpie, Nova, Penthal)** → **Expect:** **no corner settings**.
- [ ] Connect a board → **Expect:** it does **not** start a peek screen on its own (*"Autostart on connect"* is gone). Use *Action after screen started* or a trigger action instead.

---

## 4. Multi-unit boards (Iarvel, Pitata)

- [ ] Connect one pad, then **connect a second** → **Expect:** the second does **not** replace the first — **each pad gets its own row** and panel; the **Connect row stays visible** so you can add more.
- [ ] Change a setting on **pad 2** → **Expect:** **pad 1 is unaffected** (every setting is per pad now, not just calibration).
- [ ] **Calibrate** one pad → **Expect:** the other pad's saved calibration is **not** overwritten.

---

## 5. Printers (per printer)

- [ ] Open a printer's panel → **Expect:** its own **dotted margins**, **extra paper feed**, **action after printing** and **CUSTOMIZE PRINTING**.
- [ ] Look for **"Selected printer"** → **Expect:** it's **gone**.
- [ ] On a **Peripage**, open the panel → **Expect:** **Peripage printing status** appears **only** here, saved per printer.
- [ ] Change **Peripage paired mode** → **Expect:** it's **one setting for all** your Peripage printers, and the printer **disconnects and reconnects** in the new mode.
- [ ] On **Android**, look in **MY DEVICES** right under the Glyphs / Peripage row **before connecting** → **Expect:** you can switch the paired mode there too (useful for a printer that connects in normal mode and drops immediately).
- [ ] Set **"Action after printing finished"**, restart the app → **Expect:** the value is **loaded back**.

---

## 6. Peripage print quality

- [ ] Set **Print density** on a Peripage lighter and then darker → **Expect:** the print visibly lightens / darkens from the model default.
- [ ] Switch **Print mode** between **text** (sharp) and **photo** (dithered) → **Expect:** text is crisp in text mode; images look smoother in photo mode.
- [ ] If you had the old experimental **gentle** speed set → **Expect:** it's gone and the printer is back on **automatic**.
- [ ] On a classic **Peripage A6 with an iPhone 17 or newer** → **Expect:** DEVICE INFO shows the known-issue note about mid-print freezes.
- [ ] Start a **long print**, then trigger a paper feed → **Expect:** the feed does **not** interrupt the job mid-print.

---

## 7. Panel fixes (everywhere)

- [ ] Tap **Details** on a **printer** and on the **PeekSmith** panel → **Expect:** it opens the details sheet (previously did nothing).
- [ ] Open the **sync sheet** and find **"Add as new device"** → **Expect:** the button is **visible** (it used to be white on white).
- [ ] Open a **choice sheet that has a single option** → **Expect:** its **top corners are rounded**.

---

## 8. NEW DEVICE: Pitata Dice

- [ ] Pair **Pitata dice** → **Expect:** they appear as their **own device type**, separate from the older **BLE Dice** entry.
- [ ] Check the **Connect list** → **Expect:** each die is named by colour, e.g. **"Pitata Dice red"**.
- [ ] Look at the dice **images**, the **DICE SCREEN** and the **panel** → **Expect:** each die shows in its **real colour** (red / blue / white).
- [ ] Connect several in a random order → **Expect:** they're always listed in **colour order** (red, blue, white); a routine set to *connected order* uses that order.
- [ ] Set **DICE INPUT → PITATA DICE → Connected mode = Off** → **Expect:** the dice are only **listened to** (nothing connected).
- [ ] Set **Connected mode = On** → **Expect:** the dice are **connected** and keep being read while the app is in the **background**.
- [ ] If you also own older **BLE dice** → **Expect:** they keep working under their own **"BLE Dice"** entry.

---

## 9. Dice (all types)

- [ ] **Tap a connected die** → **Expect:** its Settings panel opens; **Auto-connect is per die**.
- [ ] Open a die's **Details** → **Expect:** name, ID, **battery**, and a **large image** of its current value.
- [ ] Check **battery** on a BLE and a Pitata die → **Expect:** a value is shown (likely **100%** for a long time — treat it as a rough indicator).
- [ ] Look at the **bottom of MY DEVICES** → **Expect:** connected dice shown as images.
- [ ] Connect **GoDice** → **Expect:** shown by their **friendly name** (colour + firmware).
- [ ] Open the **KMD** panel → **Expect:** the standard panel with **Enable WHITE / BLACK / RED die**; the badge counts **enabled** dice.
- [ ] Try **"Number by digit"** and **"Grand total"** → **Expect:** each behaves as named.
- [ ] Leave a die **unrolled** → **Expect:** unrolled dice are **faded out**.

---

## 10. NEW: Morse code input — the MORSE INPUT screen

- [ ] Open the **MORSE INPUT** screen. **Tap** = dot, **swipe** (any direction) = dash → **Expect:** dots and dashes register with no timing to get right.
- [ ] Enter a letter and **pause** → **Expect:** the letter is finished and sent to the **text buffer** (new type: *morse*).
- [ ] Use **two fingers**: tap and swipe → **Expect:** they do what you assigned (default: **delete last letter** and **space**); a **two-finger long press** is also assignable.
- [ ] **Hold one finger for ~2 seconds** → **Expect:** the screen exits.
- [ ] Touch the **top or bottom 15%** of the screen → **Expect:** nothing fires.
- [ ] Watch the middle of the screen → **Expect:** it shows the **newest text-buffer entry**, large and auto-fitted, and **clears** when you start a new entry.
- [ ] Check on a notched phone / Dynamic Island → **Expect:** the text is **not** hidden under the notch.
- [ ] Toggle **Display on screen** and **Enable vibrations** → **Expect:** they behave as on the swipe screen.

---

## 11. Morse from a remote — on any screen

- [ ] Turn on **"remote mode: morse code"** → **Expect:** Morse input works on **every** screen — fake lockscreen, black screen, a photo, anything.
- [ ] On an **HID remote**, open the button mapping → **Expect:** a **MORSE KEYS** section with five assignable roles — **Dot, Dash, Space, Delete, Send**.
- [ ] On a **hardware remote (Atom, Thumper V2, Wilson Nexus, Pitata Remote)** → **Expect:** **1 = dot, 2 = dash, 0 = space**, **left = delete, right = send** (Pitata Remote: **C = delete, D = send**).
- [ ] Leave a button **without** a Morse role → **Expect:** it keeps its **normal** action while Morse mode is on.
- [ ] Assign **"morse code short (.)"** and **"morse code long (-)"** to any trigger → **Expect:** each enters a dot / dash.
- [ ] Use a Morse action **outside** the MORSE INPUT screen and **outside** "morse code" remote mode → **Expect:** it does **nothing**.

!!! tip "Easy to trip over"
    A remote in an **HID mode** (e.g. a Thumper V2 in HID) follows the **MORSE KEYS** you assigned — **not** the fixed 1/2/0 keypad.

---

## 12. Morse key: MATT+ and ATC

- [ ] In Morse mode, key the **MATT+** (and **ATC**): **50–200 ms = dot**, **201–600 ms = dash**, **hold 1–1.5 s = delete**, **hold 2 s+ = send** → **Expect:** each timing does what it says; a buzz at 1 s and a double buzz at 2 s preview the action.
- [ ] Pause **more than 0.5 s** between letters → **Expect:** the letter ends (no spaces from these remotes — one word per entry).
- [ ] With **Finalize after N sec** set → **Expect:** the text sends on the timer, and any hold of 1 s+ deletes.
- [ ] Key several dots/dashes on the **MATT+** → **Expect:** it no longer buzzes your own input back at you.
- [ ] Toggle the MATT+ **"Use vibrations"** setting → **Expect:** the app only buzzes the MATT+ when it's on.
- [ ] Open the **ATC** panel → **Expect:** it has its own Settings panel (Details, Auto-connect, Disconnect, button actions), like other devices.
- [ ] Leave Morse mode → **Expect:** both remotes go back to their usual button mapping.

---

## 13. Remote-mode indicator

- [ ] Force each remote mode in turn — **text / numbers**, **cards**, **swipe**, **morse code** → **Expect:** the small icon in the **top-right corner** appears and shows the active mode.
- [ ] Arm a mode, then open a **disguise screen** (peek screen, fake lockscreen, fake homescreen, touch-peek black screen) → **Expect:** the indicator is **hidden**.

---

## 14. InMind Wheel (needs InMind Token + API Access)

- [ ] Open **Settings → More settings → INTEGRATIONS** → **Expect:** a new block with **Dictionary API**, **LifeLike Sketcher** and **INMIND WHEEL** sub-blocks.
- [ ] In **INMIND WHEEL**, set your **InMind Token** and pick an **A.I. engine** (OpenAI GPT / Gemini / Claude) → **Expect:** the settings are here (Token moved from SEND TO API), using the model you chose for that engine in A.I. Features.
- [ ] Collect a word (long-press the **yellow rail** on the Doodle screen, type letters), then run **process InMind word (default language)** → **Expect:** the search runs **from the app**, returns the word, and each candidate becomes its own **text-buffer record** (best one current; step back with *show previous text*).
- [ ] Toggle **Display chosen symbol** / **Display chosen card** → **Expect:** with both off, only the word shows; with them on, the symbol/card are revealed with the best result, e.g. *"ABLAK = WINDOW, heart"*.
- [ ] Turn on **Translate word** with a word not in your Performance language → **Expect:** it's shown as **WORD = TRANSLATION**.
- [ ] Set **Action after word received** → **Expect:** it fires once all results are in.
- [ ] Run **process InMind word (any language)** → **Expect:** it tries your Performance language, then English, then widely-spoken languages, and drops a word slipped in from another language.
- [ ] Load an **old routine** that used the retired actions (*get InMind word (A.I.)* etc.) → **Expect:** it's switched to the new actions automatically.
- [ ] **Virtual InMind Wheel:** long-press the **blue rail** to start WEB-polling, then spin the wheel on **mindwheel.in** → **Expect:** letters arrive in the app (and on your peek devices) one by one. (A 1 s polling interval is the safe setting.)

---

## 15. "translate last text" & QuickDraw

- [ ] Set **A.I. Features → Engine for translations**, then run **translate last text** on a non-Performance-language entry → **Expect:** the translation is added to the text buffer using that engine.
- [ ] Trigger a **QuickDraw** match for a word not in the list → **Expect:** the closest drawing is found using the same translation engine (not only OpenAI).

---

## 16. Device info & WEB-polling

- [ ] Open **DEVICE INFO** on any **Iarvel** device (board, Peek Board, Card, Keychain, Key PRO, MrCard) → **Expect:** it shows the **device model number** and the **detected device model**.
- [ ] On **iOS**, look at a long **Device ID (BLE)** → **Expect:** it wraps onto two lines instead of running off the screen.
- [ ] Set up a custom **WEB-polling** source with a dotted path — `results.word`, `results.0.word`, or several like `peek, topResult, results.word` → **Expect:** each nested field is read correctly.

---

## 17. Shared button mappings (v2.3.11)

- [ ] In the **mapping editor**, turn on **"Use mapping for every routine"** → **Expect:** the mapping shows up in **every** routine's mapping list, marked with a **globe**.
- [ ] Save, load and **Create new routine** → **Expect:** the shared mapping is left alone; which mapping is *active* is still chosen per routine.
- [ ] Turn the switch **off** → **Expect:** the app asks first (**Save now** / **Later** / **Cancel**), and the mapping stays in the loaded routine only.
- [ ] **Delete** a shared mapping → **Expect:** it asks first, since it disappears from every routine.
- [ ] Use **"Save as new mapping"** → **Expect:** a copy (buttons, swipes, Morse keys and their actions) is made under a new name for the current routine.

---

## 18. Settings saved to your account (v2.3.11)

- [ ] Change a **shared mapping** and an app preference (e.g. *show the routine name*, *A.I. proxy*), wait a few seconds, then **sign in on another / reinstalled phone** → **Expect:** the shared mappings and those preferences come down after the account syncs.
- [ ] Check the **phone / tablet display mode** across two devices → **Expect:** it stays **per phone** (not synced).
- [ ] **Create new routine** → **Expect:** these account settings are kept.

---

## 19. Connections (v2.3.11)

- [ ] Open the **HTTP Socket** Details with Wi-Fi on → **Expect:** the address shown is your **Wi-Fi / hotspot** address, plus a **localhost** link for this phone and a **Wi-Fi** link for other devices.
- [ ] Turn Wi-Fi off and open Details → **Expect:** it says there's no reachable address, with a **Check again** button (no unusable address shown).
- [ ] Watch the **internet-connection indicator** on a flaky connection → **Expect:** no rapid flip-flopping; the *no internet* icon appears only after **two** failed checks in a row.
- [ ] Cold-start the app → **Expect:** it does **not** get stuck on the internet-connection check.

---

## 20. Routines & smaller things

- [ ] With a routine loaded, use **MY ROUTINES → SAVE** → **Expect:** it saves straight to that routine (after asking). **SAVE AS NEW** → the old save sheet. With nothing loaded, SAVE behaves like SAVE AS NEW.
- [ ] Open **Save / Load / Manage routines** → **Expect:** the newest routine is on top, and Manage routines shows each one's **last-saved date**.
- [ ] Use **Create new routine (using default settings)** at the top of the list, give it a name → **Expect:** the defaults load and it's saved under that name; starting from defaults is noticeably faster.
- [ ] Force an **A.I. error** (e.g. a bad key) → **Expect:** it's retried once after ~5 s, then shown as a short message at the bottom (not a box to tap away).
- [ ] Set **CUSTOMIZE DISPLAY** min/max font size below 5, tapping the **1** button → **Expect:** you can step down to **1**.
- [ ] Use the new **Lumen Duo button actions** → **Expect:** the mapped actions fire.
- [ ] Connect dice, then **Disconnect all** → **Expect:** the dice disconnect too, and the Bluetooth counter counts BLE / Pitata dice correctly.
- [ ] Set *Auto-connect devices* away from *Saved for this routine* → **Expect:** the yellow "saved for this routine" ticks in MY DEVICES are hidden.

---

## 21. Regression checks

- [ ] Run a **firmware check** on the **Iarvel PeekBoard** and **Spirit Echo** → **Expect:** it works (the previous checking bug is fixed).
- [ ] Scroll the **Printing speed** list on a **Cosmos / L2** printer, and open the **Sync saved device** sheet in MY DEVICES → **Expect:** the list scrolls and the sheet isn't cut off.
- [ ] Tap **Update now** in the release notes → **Expect:** the update size is shown (no "of undefined MB", no stuck progress bar).
- [ ] Connect and use each device type you own through the **new panels** → **Expect:** everything that worked in v2.2.71 still works — settings save and reload, disconnect is clean.

---

!!! warning "Add-on requirements from 1 October 2026"
    While testing, note that from **1 October 2026** two add-ons become required for certain devices:

    * **External Displays** — for all PeekSmith models, Bond, MrCard, Teleport, Quantum, SB Watch 2
    * **Advanced Input Methods** — for Atom 2, all PeekSmith models, Bond, MrCard, Quantum, SB Watch 2, Ray, GhostMove

    Everything else that's currently free stays free.

---

Thank you again for testing — your feedback shapes the final release! :-)

!!! info "Previous versions"
    Looking for an earlier checklist? See [**Testing guide — v2.2.71**](testing-new-features-v2-2-71.md) and [**Testing guide — v2.2.41**](testing-new-features-v2-2-41.md).

<br>

![](https://mystersmith.info/assets/images/MysterSmith_vertical.png)

<br><br>
