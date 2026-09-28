---
title: "Testing guide — v2.2.71"
date: 2026-09-11 12:00:00
---

# Testing guide — MysterSmith v2.2.71

!!! info "Looking for the latest?"
    This is the archived **v2.2.71** testing guide. For the current build, see [**Testing guide — v2.3.11**](testing-new-features.md).

Thank you for helping test the new build! :-) This page is a step-by-step
checklist covering everything added or fixed since **v2.2.41**. You don't
have to test everything — pick the areas that match your devices and
workflow.

!!! note "Before you start"
    * Note your **platform** (Android / iOS), the **app version**, and (for recognition tests) the **text-recognition engine** you're using.
    * When something doesn't work as described, a **screenshot** and a short note (what you did → what happened) is a huge help.

Each item is a checkbox: **☐ = still to test**, tick it once you've
confirmed it works. Steps are marked **Do**, and what you should see is
marked **Expect**.

---

## 1. DICE SCREEN

- [ ] Open the **DICE SCREEN** with **one** die connected → **Expect:** the die value shows as a single large, centred icon.
- [ ] Connect **several** dice and open the screen → **Expect:** all values show at once, auto-scaled so they fit the screen without overflowing or clipping.
- [ ] **Roll** the dice while the screen is open → **Expect:** the icons update to the new values with no flicker or flashing.
- [ ] Read the **status line** at the bottom → **Expect:** it reflects the routine state (waiting / started / finished).
- [ ] **Long-press** with one finger for ~2 seconds → **Expect:** the DICE SCREEN exits, exactly like the BLACK screen.
- [ ] Try a **phone and a tablet** (and rotate the device) → **Expect:** the dice stay centred and readable at any size.

---

## 2. Routine START modes

Set the mode under **DICE INPUT → Routine START**.

- [ ] Set to `automatic` and arm the routine → **Expect:** the routine starts as before, and your peek displays receive **START**.
- [ ] Set to **all dice show 1**, then roll every die to 1 → **Expect:** the routine starts only then, and the peek text is `*ALL 1*`.
- [ ] Set to **all dice show 6**, then roll every die to 6 → **Expect:** the routine starts only then, and the peek text is `*ALL 6*`.
- [ ] Set to **manually** and fire the manual trigger → **Expect:** the routine starts, peek text is `MANUAL`.
- [ ] Open **Performance Mode (START ROUTINE)** with any non-automatic mode set → **Expect:** the dice routine does **NOT** start on its own — it waits for the chosen trigger.

---

## 3. Show dice values

Set under **DICE INPUT → Show dice values**.

- [ ] Set to `always` and roll → **Expect:** the rolled values appear on your peek display about **1 second** after the roll settles (not mid-roll).
- [ ] Roll several times **quickly** → **Expect:** only the settled value is sent — the 1-second debounce swallows the intermediate values.
- [ ] Set to **only on the DICE SCREEN** → **Expect:** values are sent only while the DICE SCREEN is open, and nowhere else.
- [ ] Set to **only while the dice routine is active** → **Expect:** values are sent only after the routine has started.

---

## 4. Finger actions (DICE SCREEN)

- [ ] Open the **FINGER ACTIONS** sub-section under DICE INPUT and assign an action to each of the **8 gestures** → **Expect:** each choice saves and reloads correctly.
- [ ] On the DICE SCREEN, perform each configured **tap / swipe** → **Expect:** the matching action fires (same behaviour as the BLACK screen gestures).
- [ ] Leave a gesture set to **nothing** and perform it → **Expect:** nothing happens, no error.

---

## 5. Action after screen started

- [ ] Set **Action after screen started** on the **DOODLE**, **BLACK**, **SWIPE**, **FAKE HOMESCREEN**, **DICE** and **FAKE PASSCODE** screens (and **Action after calculator started** on the CALCULATOR) → **Expect:** each setting saves in its own screen's block (first row).
- [ ] Open each screen in turn → **Expect:** the chosen action fires automatically shortly after the screen opens.
- [ ] Leave one screen's action **empty** → **Expect:** opening it fires nothing, no error.

---

## 6. Auto-RESTART routine

- [ ] Open the option → **Expect:** it is labelled **Auto-RESTART** (not the old "Reset routine after").
- [ ] Set the value to `0` → **Expect:** the stepper and the row both display **OFF**.
- [ ] Set a value (e.g. a few seconds), finish a routine → **Expect:** the routine auto-restarts after that delay.

---

## 7. Dice values & separators

!!! tip "What this fixes"
    Previously the `action_dice_to_…` actions only worked when the saved values had **no** separator between them.

- [ ] Save dice values with **no** separator (e.g. `1234`) and run a dice display action → **Expect:** all faces render correctly.
- [ ] Save values **with separators** — commas, spaces or new lines (e.g. `1, 2, 3, 4`) — and run the same action → **Expect:** the numbers are extracted first, then the same faces render correctly.
- [ ] Try this on several **display devices** (e-ink board, keychain, printer, Doodle screen) → **Expect:** consistent, correct output everywhere — no out-of-range or blank faces.

---

## 8. Remote control & connections

- [ ] Open **Remote Control button configuration** and map buttons to actions → **Expect:** pressing each remote button fires the mapped action.
- [ ] Set **Auto-connect devices** to *All nearby devices*, then *My saved devices*, then *Saved for this routine* → **Expect:** each mode connects the expected set of devices.
- [ ] Turn an **Ultra Sharpie Neo** off and on, then let the app connect → **Expect:** it auto-connects despite its changed Bluetooth ID/name.
- [ ] Enable **Reverse swipe directions** and use a swipe remote upside-down → **Expect:** swipe directions are inverted as expected.

---

## 9. Recognition

- [ ] Set the **handwriting orientation** option and recognize a tilted word → **Expect:** orientation is handled per your setting.
- [ ] Run the new **Detect handwriting orientation** action → **Expect:** the rotation is worked out **without** sending the page for recognition.
- [ ] Recognize a **blank** page → **Expect:** it is never sent for recognition — no wasted A.I. call.
- [ ] On a board that previously **double-rotated** upside-down pages, recognize one → **Expect:** a single correct rotation.

---

## 10. Other devices & fixes

- [ ] Pair and print to the **Paperang P3S** (80mm) → **Expect:** it connects and prints correctly at full width.
- [ ] On an Iarvel board, change **Page aspect ratio → Calibrate** → **Expect:** the change takes effect immediately, no restart needed.
- [ ] Run a **special-subject recognition** (e.g. animal / signature / magic-square style actions) → **Expect:** it routes and returns a result correctly.
- [ ] Check **device nicknames** in Settings → **Expect:** they display correctly.
- [ ] Send **original drawing + recognized text** to the **Lumen Prism** → **Expect:** both display correctly together.
- [ ] Open **Settings → DEBUG CONSOLE** (bottom of the page) → **Expect:** it shows critical errors, and stays empty in normal use.
- [ ] **Cold-start** the app on Android → **Expect:** noticeably faster loading than before.

---

## 11. Regression checks

Quick confirmation that the reworked dice/routine logic didn't break the basics.

- [ ] With Routine START on `automatic`, run a full routine start-to-finish → **Expect:** it behaves exactly as in v2.2.61.
- [ ] Use **DICE INPUT** with each supported dice type (Spotted Dice, KMD, Pitata, BLE Dice, GoDice) → **Expect:** values are read correctly.
- [ ] Open and exit the **BLACK, DOODLE, SWIPE, FAKE HOMESCREEN, FAKE PASSCODE and CALCULATOR** screens → **Expect:** each opens, runs its start action (if set), and exits cleanly.
- [ ] Run an **ACTION LIST** that includes a dice display action → **Expect:** the whole chain runs in order.

---

!!! warning "Add-on requirements from 1 October 2026"
    While testing, note that from **1 October 2026** two add-ons become required for certain devices:

    * **External Displays** — for all PeekSmith models, Bond, MrCard, Teleport, Quantum, SB Watch 2
    * **Advanced Input Methods** — for Atom 2, all PeekSmith models, Bond, MrCard, Quantum, SB Watch 2, Ray, GhostMove

    Everything else that's currently free stays free.

---

Thank you again for testing — your feedback shapes the final release! :-)

!!! info "Previous versions"
    Looking for the earlier checklist? See [**Testing guide — v2.2.41**](testing-new-features-v2-2-41.md).

<br>

![](https://mystersmith.info/assets/images/MysterSmith_vertical.png)

<br><br>
