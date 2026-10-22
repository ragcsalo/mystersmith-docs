---
title: "A.I. drawings"
date: 2026-10-22 12:00:00
---

# A.I. drawings

The spectator thinks of a word — and a moment later you have a **drawing** of it: a child-like sketch on your Doodle screen, a picture of their city, a calligram made of their own words. Show it on a peek device, print it, or reveal it on a display.

All A.I. drawings start from the **current text** of the [Text Buffer](text-buffer.md) (normally the last one), and they all end up in the same places:

* on the **Doodle screen** (and inverted, white on black, on the **BLACK screen**),
* in the [Image Buffer](image-buffer.md) — immediately, in original size (*Image types to save → A.I. drawings*, on by default),
* on a connected **Lumen Prism**, if its *Peek drawings* option is on.

While the A.I. is drawing, a connected PeekSmith shows *Drawing...*, and the phone vibrates when the picture is ready.

!!! info "What you need"
    The A.I. drawings need the [A.I. Features add-on](../purchase-add-ons/ai-features.md) (included in every subscription) and an engine: your own **OpenAI** or **Gemini** API key — or, for **PREMIUM** subscribers, the [free Gemini image generations](../subscriptions/free-gemini.md). See [A.I. recognition](ai-recognition.md) for getting a key.

<!-- GALLERY: an OpenAI drawing on the Doodle screen, a Gemini city drawing, a hidden reveal calligram, the A.I. FEATURES drawing settings -->

---

## The drawing actions

In the action picker, the **Text buffer** group has:

| Action | What it draws |
|---|---|
| **text to OpenAI drawing** | the text, as a clumsy child-like marker drawing (OpenAI) |
| **text to Gemini drawing** | the text, as a drawing (Gemini) |
| **City to OpenAI / Gemini color drawing** | an iconic view of the city (in color) |
| **City to OpenAI / Gemini B/W drawing** | the same, black and white |
| **City+title to ... drawing** | the city view with the city's name written on it |
| **hidden reveal - A.I. image** | a calligram: a picture drawn entirely from a repeated word (see below) |
| **text to TrueSketch image** / **text to TrueWrite image** | a sketch / handwriting by TrueSketch / TrueWrite (see below) |
| **text to Quickdraw** | a doodle from the offline *Quick, Draw!* collection (no A.I. key needed for the drawing itself) |

Put them on any trigger — for example **Action after text recognition**: the spectator writes a word, and the drawing appears by itself. See [Triggers and actions](triggers-and-actions.md).

Elsewhere:

* **OpenAI drawing remake** (*Doodle screen* group): the A.I. looks at the drawing on your Doodle screen and draws its own version of it.
* **execute A.I. image prompt** (*Special* group): your own prompt, e.g. *"a child's drawing of #TEXT on a beach"* — see [A.I. image prompts](templates-and-prompts.md#ai-image-prompts).

!!! tip "Send the drawing anywhere"
    Every A.I. drawing is in the Image Buffer at once, so the next step can be *image buffer to printer*, *image buffer to Teleport*, *image buffer to Prism*... — or an [image template](image-templates.md) with `#LAST1`.

---

## OpenAI settings

In **Settings → A.I. FEATURES**, the OpenAI part:

* **OpenAI API key**
* **OpenAI drawing size:** *square (1024x1024)* (default), *portrait (1024x1536)*, *landscape (1536x1024)*
* **Use thicker lines for drawings:** bold marker lines (not for the city drawings)
* **Action after OpenAI drawing** + **Trigger action:** what happens when the drawing is ready (*immediately* is fine: the drawing is already in the Image Buffer)

!!! note "OpenAI verification"
    OpenAI asks some accounts to verify their identity before they can make images. If yours does, MysterSmith shows *"OpenAI identity verification required"* with a **Verify now** button.

---

## Gemini settings

* **Gemini API key**
* **Gemini drawing model:** *Nano Banana 2 Lite*, *Nano Banana 2* (default), *Nano Banana Pro*
* **Gemini drawing size:** *square (1:1)* (default), *portrait (3:4)*, *landscape (4:3)*, *widescreen (16:9)*
* **Use thicker lines for drawings**
* **Action after Gemini drawing** + **Trigger action**

**Free Gemini image generations (PREMIUM subscribers):** 10 a day, at most one per minute, with the *Nano Banana 2 Lite* model. The A.I. FEATURES section shows how many are left. If you also have your own Gemini key, your key is used first, and the free generations are the backup — unless you switch on **Use FREE Gemini calls first**.

---

## Hidden reveal - A.I. image

A **calligram**: the picture of one thing, drawn entirely from the letters of a word, repeated again and again. From far away the spectator sees a picture; up close, their own word is hidden in every line.

Settings in the **Hidden image reveal** card (A.I. FEATURES):

* **How does it work** — a short explanation in the app.
* **A.I. image engine:** *OpenAI* or *Gemini* (default) — uses that engine's size, model and *Action after ... drawing* settings.
* **Image subject:** what is drawn — default `#LAST1` (the last text).
* **Source text:** the word the picture is made of — default `#LAST2` (the text before it).

Both fields accept the [Text Buffer variables](text-buffer.md#variables-using-the-buffer-anywhere) with `!uc`, `!lc`, `!tc`.

*Hidden reveal* is currently available for MysterSmith subscribers.

---

## TrueWrite and TrueSketch

The handwriting and sketch services of **Electricks** — in **Settings → INTEGRATIONS**. They need a linked **Electricks Cloud** account (ACCOUNT SETTINGS → Show details → Electricks Cloud).

* **TrueWrite** writes the last text in realistic handwriting.
* **TrueSketch** draws a sketch of it — a different one every time (a word it can't draw is written in handwriting).

Settings: **Image style** (*marker* — black on white, or *chalk* — white on black), **Image shape** (*square*, *landscape*, *portrait*), **Line thickness** (*thin*, *normal*, *bold*), **Translate (TrueSketch)** (*Performance language* or *off*), **Action after image generated**.

On an **Iarvel Peek Board**, the actions *TrueWrite to Peek Board*, *TrueSketch to Peek Board* and *Quickdraw to Peek Board* draw live, line by line.

---

## LifeLike Sketcher

Realistic drawings by the **LifeLike Sketcher** service (**Settings → INTEGRATIONS → LIFELIKE SKETCHER**, needs a LifeLike API key):

* **Drawing method:** *sharpie* (default), *whiteboard*, *chalk*, *crayons*
* **Number of drawings:** 1–4 (step between them with **display next drawing**)
* **Action after drawing generated** (only with one drawing)

Actions (*LifeLike Sketcher* group): **last text to LifeLike drawing**, **LifeLike drawing remake** (your Doodle drawing, recognized by OpenAI, redrawn by LifeLike), **display next drawing**. Leave at least 10 seconds between two drawings.

---

## Recognizing drawings

The other way round — the A.I. tells you what the spectator drew: *Recognize drawing (A.I.)*, *Analyze drawing (A.I.)* and *Analyze photo (A.I.)* in the *Text/image recognition* group. See [Text recognition](text-recognition.md) and [A.I. recognition](ai-recognition.md).
