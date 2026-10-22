---
title: "Acronym word list"
date: 2026-10-22 12:00:00
---

# Acronym word list

The **Acronym word list** turns the spectator's word into a list of innocent-looking words — with the spectator's word hidden in them: the **first letters** (or the 2nd, 3rd... letters) of the words spell it.

**Example:** the spectator thinks of **MOON**. MysterSmith makes the list:

> **M**ARKET, **O**RANGE, **O**CEAN, **N**OTEBOOK

Print it, show it on a display, or read it out as a "random word list" — and later reveal that the first letters of the list spelled the spectator's word all along.

With the letter position set to **2**, the same word could become *sMILE, bOTTLE, gOLD, sNAKE* — much harder to notice.

You find it in **Settings → Transform / process → ACRONYM WORD LIST**. It needs the [Transformer add-on](../purchase-add-ons/transformer.md) (included in every subscription).

<!-- GALLERY: the ACRONYM WORD LIST settings, a generated list in the pop-up, a printed list -->

---

## How it works

1. The spectator's word arrives in the [Text Buffer](text-buffer.md) — from text recognition, WEB-polling, voice recognition, a swipe input, an NFC tag... any input method.
2. The action **generate Acronym word list** (*Special* group) takes the **last text** of the Text Buffer, and makes one word for each of its letters. Anything that is not a letter (spaces, numbers, punctuation) is left out.
3. The list goes into the Text Buffer (as *acronym word list*), so it is the new `#TEXT`: send it to a device with *show last text*, print it with *handwriting to printer*, or use it in a [template or prompt](templates-and-prompts.md).

Put the action on **Action after text recognition** (or any other trigger), and the list is ready a moment after the spectator wrote the word. See [Triggers and actions](triggers-and-actions.md).

---

## Settings

**Acronym engine:**

* **Built-in (English)** — MysterSmith's own English word list. Fast, works offline, needs no A.I.
* **OpenAI GPT**, **Google Gemini** or **Claude** — the A.I. makes the list, in your **performance language** (MY ROUTINES → Performance language). Needs the [A.I. Features add-on](../purchase-add-ons/ai-features.md) and an A.I. engine (your own key, or the free Gemini calls of the subscribers).

**Letter position:**

* **fixed (1)** .. **fixed (6)** — the readable letters are always in that position of each word (1 = the first letters).
* **flexible (by input)** — the position comes with the word: a number from **1 to 6** in the Text Buffer, right before or after the word (e.g. the spectator writes the word, and then names a number). Without a number, the first letters are used.

**Words letter case:** *lowercase*, *UPPERCASE* or *Title case*.

**Word separator:** *new line*, *comma*, *space* or *comma + space*. Use *new line* for a printed list.

**Show response (pop-up):** shows the list on your screen when it is ready (or a message, if it could not be made).

**Action after acronym generated** + **Trigger action:** what happens next — e.g. *handwriting to printer* — with a delay you choose.

**Clear text buffer after 10sec:** empties the Text Buffer 10 seconds after that action (so it works together with an *Action after acronym generated*), so the next spectator starts from zero.

---

## Good to know

* The list never contains the spectator's word itself, and no word is used twice.
* **Built-in engine:** if no English word has that letter in that position (e.g. a rare letter in position 5), the list can't be made — you get *"Word list could not be generated..."*. Use a lower letter position, or an A.I. engine.
* **A.I. engines:** they take a few seconds, and the result depends on the model — check it before the show. Longer words with a higher letter position need longer words in the list.
* The list is made from the **last** text in the buffer. If you also collect other texts, make sure the word is the last one when the action runs — or use a [Condition](triggers-and-actions.md#condition-run-an-action-only-at-the-right-moment).
