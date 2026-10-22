---
title: "The Doodle screen"
date: 2026-10-22 12:00:00
---

# The Doodle screen

The **Doodle screen** is a white drawing pad on your phone. The spectator (or you) writes or draws on it with a finger — and MysterSmith can recognize the writing, send the drawing to your peek devices, save it, print it, or replace it with an A.I. drawing. It is also the canvas where the app shows texts, cards, drawings and images during a routine.

<!-- GALLERY: the Doodle screen with its buttons, a drawing peeked on PeekSmith, the DOODLE SCREEN settings -->

---

## Starting and leaving it

* **Start:** tap **DOODLE** on the performance screen (after **START ROUTINE**), or use the action **start Doodle screen**.
* **Leave:** **hold the UNDO button** (top left) for about 2 seconds.

The pen is black, with the thickness set in the settings (*Drawing thickness*).

---

## What is on the screen

* **Top left:** **Undo** (removes the last stroke; with nothing left, it clears the screen), **Clear**, and the brush / fill tools.
* **Top right:** the **text recognition** on/off icon, **Load** (steps through your saved drawings 1–3, then some samples) and **Save** (*Save as image #1 / #2 / #3*, saved to your account).
* **Bottom:** 7 colors — black, red, yellow, green, blue, orange, white.

When a finger is lifted:

* the drawing is sent to your **peek devices** (PeekSmith, Bond, smartwatch...) a second later,
* if **text recognition** is on, it runs after the *Automatic recognition* delay (see [Text recognition](text-recognition.md)),
* the **Action when Doodle idle** timer starts.

With **Clear canvas for next drawing** (TEXT RECOGNITION settings, on by default) the screen clears itself when the spectator starts the next word after a recognition — no need to clear it by hand.

!!! tip "Secret shortcuts: long press a color"
    * **blue** (1 s): starts WEB-polling
    * **yellow** (1 s): the InMind word box
    * **orange** (1 s): the recognition method list, **white** (1 s): the recognition engine list (when text recognition is on)
    * **black** (2 s): your custom recognition prompt (with the *custom prompt* method)

---

## DOODLE SCREEN settings

**Settings → Output / Screens → DOODLE SCREEN**:

* **Action after screen started** — runs when the Doodle screen opens.
* **Clear screen on ROUTINE START** — starts every routine with an empty canvas.
* **Drawing thickness (1-10)** — default 4.
* **Action when Doodle idle** — runs an action when nobody has drawn for the time you set (*immediately* .. 120 sec), e.g. *text recognition*, or *doodle drawing to printer*.
* **Peek on PeekSmith/Bond** (on) — sends the drawing to your PeekSmith / Bond. With it: **Auto rotate peek image** (on) and **Peek color Doodle image (slow)** (off).
* **Peek on smartwatch** (on).
* **CUSTOMIZE DISPLAY** — the fonts the Doodle screen uses for *Basic text*, *Handwriting / text*, *Signature*, *Playing cards*, *ESP symbol*, *Magic square*, *Clock (time)*, *Emoji* and *Dice*.

---

## Doodle screen actions

In the action picker, the **Doodle screen** group:

**Screens:** **start Doodle screen**, **start BLACK screen**, **start WEB-doodle**, **clear doodle** (clears the Doodle and BLACK screens, the PeekSmith and the watch).

**Show the current Text Buffer text on the canvas**, in different styles:

| Action | Shows |
|---|---|
| **text to Doodle** | the text |
| **handwriting to Doodle** | the text in handwriting |
| **signature to Doodle** | the text as a signature (e.g. a celebrity's name) |
| **playing card to Doodle** | a playing card (otherwise handwriting) |
| **clock to Doodle** | a clock face with the time |
| **magic square to Doodle** | a magic square for the number (22–117) |
| **ESP symbol to Doodle** | an ESP symbol |
| **emoji to Doodle** | an emoji |
| **dice to Doodle** | dice |

**Images:** **last photo to Doodle**, **image template to Doodle screen** (see [Image templates](image-templates.md)), **copy image to Doodle canvas** (from the [Image Buffer](image-buffer.md)), **OpenAI drawing remake** (see [A.I. drawings](ai-drawings.md)).

**Saved drawings:** **load next saved doodle** (same as the Load button).

**Smart pens:** **clear all pages (smart pens)**, **show next Ultra Sharpie page**, **show next Penthal page**.

---

## The drawing everywhere else

* **Image Buffer:** **save doodle drawing to Image Buffer** — or let it happen automatically with *Image types to save*: *drawing at recognition* (on) and *drawing before erasing* (off).
* **Devices:** the *doodle drawing to ...* actions send it to printers, Teleport, Prism, Peek Board and other displays.
* **A.I. drawings, TrueWrite / TrueSketch and Quickdraw** all appear on the Doodle screen — see [A.I. drawings](ai-drawings.md).

---

## WEB-doodle

With **WEB-doodle** (its own add-on) the spectator draws on **their own phone**, in a browser, and the drawing appears on your Doodle screen. Settings in the **WEB-DOODLE** section:

* **Enable WEB-doodle**
* **WEB-doodle color sequence → Set now** — opens the Doodle screen: tap 5 colors one after the other (within about 2 seconds) to set your secret sequence.
* **Autostart peek screen** — *nothing*, *Doodle screen*, *BLACK screen* or *always ask* (default).
* **Disable finger drawing**, **Peek selected color**

More: [WEB-doodle add-on](../purchase-add-ons/web-doodle.md).
