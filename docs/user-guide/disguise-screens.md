---
title: "Disguise screens"
date: 2026-10-22 12:00:00
---

# Disguise screens

During the show your phone shouldn't look like a magic app. The **disguise screens** make it look like something innocent — a dark screen, your home screen, the lock screen, a calculator — while MysterSmith keeps working: it collects the spectator's input, shows you the secret information, and reacts to your secret gestures.

Start them from the performance screen (after **START ROUTINE**): **BLACK SCREEN**, **HOMESCREEN**, **PASSCODE**, **CALCULATOR**, and the input screens **DICE SCREEN**, **SWIPE INPUT**, **MORSE INPUT**, **THUMBWRITER**. On these screens the app's own status icons and messages are hidden.

| Screen | Add-on |
|---|---|
| BLACK SCREEN, FAKE HOMESCREEN, THUMBWRITER, MORSE INPUT | none |
| FAKE PASSCODE, CALCULATOR, SWIPE SCREEN, DICE INPUT | [Advanced Input Methods](../purchase-add-ons/advanced-inputs.md) |

Every screen has an **Action after screen started** — it runs right after the screen opens (e.g. *WEB-polling START*, or *motion control START*).

<!-- GALLERY: the black screen with a peeked drawing, the fake lockscreen and keypad, the calculator styles -->

---

## BLACK SCREEN

The phone looks switched off — but it's a black canvas that can show you things: drawings from impression boards and the Doodle screen (white on black), Image Buffer images, A.I. drawings, and recognized texts in a dim band at the bottom.

**Settings → Output / Screens → BLACK SCREEN:**

* **Clear screen on ROUTINE START**
* **Crop & ZOOM drawings** (on) — enlarges drawings to fill the screen.
* **Screen visibility (0-10)** — how bright the contents are (default 10).
* **Touch to peek** (off) — the screen stays completely black; **hold one finger** on it to see the contents (at **Peek visibility (1-10)**), lift it and they're gone.
* **Peek duration** (1–5 s) — for the *peek BLACK screen contents* action.
* **Gestures:** *1 finger single tap*, *1 finger DOUBLE tap*, *2 finger single tap*, *2 finger DOUBLE tap*, *1 finger swipe UP / DOWN*, *2 finger swipe UP / DOWN* — each with its own action.

**Actions** (*BLACK SCREEN* group): **show BLACK screen contents**, **hide BLACK screen contents**, **peek BLACK screen contents** (shows them for the *Peek duration*), **quickly peek BLACK screen** (flashes the black screen for a second over any other screen), **BLACK screen opacity +1 / -1**.

**Exit:** hold one finger for 2 seconds (with *Touch to peek*: **two fingers**).

---

## FAKE HOMESCREEN

A full-screen **screenshot of your real home screen**. The spectator sees your phone "doing nothing" — while your gestures trigger actions.

**Settings → Output / Screens → FAKE HOMESCREEN:**

* **Set custom screenshot → Select** — take a screenshot of your home screen and pick it here (or use a blank / black default image).
* **Enable swipe input** — your one-finger swipes on the home screen are read as [SWIPE](swipe.md) input (the 2-finger swipes use the SWIPE SCREEN's actions).
* **Gestures:** the same 8 taps and swipes as on the black screen.

**Exit:** hold one finger for 2 seconds.

---

## FAKE PASSCODE (lock screen)

A realistic **lock screen** (iOS or Android style, with clock and date). The spectator swipes up, and enters "a passcode" — which is really their secret number, card or time. Then the phone "unlocks" to the fake homescreen.

**Settings → Input methods → FAKE PASSCODE:**

* **Set wallpaper** — from your gallery, or a stock image.
* **Input method:** *number*, *card*, *time*, *ACAAN* or *tic-tac-toe*:
    * *number* — the first N digits (**Length of number (digits)**, 1–6), optionally **Pi Revelations (3-4 digits)**,
    * *card* — 1st digit = suit (1–4), next two = value (1–13); **Suit order** (*SHCD* or *CHSD*), **Short card names**,
    * *time* — HHMM,
    * *ACAAN* — two digits for the position, then the card,
    * *tic-tac-toe* — the X positions (1–9).
* **Unlock at attempt** (1–10) — the earlier attempts are "wrong", so the spectator can try several times.
* **Show/save every passcode** — every attempt goes into the Text Buffer and to your PeekSmith.
* **Actions for last digit → Set actions** — an action for each last digit (0–9).
* **24-hour clock format**, **Dark background** (white text for dark wallpapers), **Always-on lockscreen** (a dim always-on display after 10 s; a 2-finger swipe down shows it at once).
* **Enable dynamic island** / **Adjust dynamic island** (iPhones with a dynamic island).
* **Action after passcode unlock** + **Trigger action**.

**Exit:** hold one finger for 2 seconds.

---

## CALCULATOR

A working calculator that looks like the phone's own (**iOS stock**, **Android dark** or **Android light**) — and can **force** a result or **save** the spectator's number secretly.

**Settings → Input methods → CALCULATOR:**

* **Calculator style**, **Haptic feedback (vibrate)** (Android styles), **Hide notifications**, **Show fake iOS home bar**
* **Thousands separator**, **Decimal sign in number**, **Decimal sign on keyboard** — make it look exactly like the spectator expects.
* **Force the result** + **Forced number** + **Force after numbers entered** (2–10) + **Force key** (Android: *=* or *√*) — after the spectator entered enough numbers, the result is your forced number.
* **TextBuffer save method:** *= (equals)*, *long = (equals long press)* (default), *phone face down*
* **Save result as:** *number*, *playing card* or *time*; **Pi Revelations**, **Suit order**, **Short card names**
* **Action after result saved** + **Trigger action**
* **Long press numbers → Set actions** (Android styles) — an action for each digit key, on a long press.

**Secret controls:**

* hold **+** for 2 s — the number on the display becomes the forced number, and forcing is ON (the display blinks),
* hold **−** for 2 s — forcing OFF,
* hold **=** — saves the result (with *long =*).

Actions: **calculator value to Text Buffer**, **display forced number**.

**Exit:** hold **0** or **C / AC** for 2 seconds.

---

## The input screens (in short)

* **DICE SCREEN** — the connected smart dice, large, on a black screen (settings in **DICE INPUT**: *Routine START*, *Show dice values*, *Show peek screen*, gestures). The values go into the Text Buffer with *finalize dice values*, *dice total / ascending / descending to Text Buffer*.
* **SWIPE INPUT** — the clock-swipe screen: see [The SWIPE method](swipe.md).
* **MORSE INPUT** — tap = dot, swipe = dash; the finished text goes into the Text Buffer (*Auto-complete when idle*, *Display on screen*, *Enable vibrations*, *Action after text finalized*; 2-finger tap / swipe / long press). Exit: hold one finger for 2 s.
* **THUMBWRITER** — you write letters secretly with your thumb on a black screen, and the app recognizes them (*Swami / thumbwriter* settings: drawing color and stroke, screen visibility, *Finalize entry after*, *Recognize text after*, gestures). Exit: two 2-finger swipes up or down.

!!! tip "Pocket and table"
    * **Phone motion control** can start listening when one of these screens opens — e.g. turn the phone face down on the table after the calculator. See [Remotes, volume buttons and phone motion](remotes-and-volume-buttons.md#phone-motion-control).
    * **Screen OFF when covered** (OTHER SETTINGS) turns the screen off in your pocket, while the app keeps running.
