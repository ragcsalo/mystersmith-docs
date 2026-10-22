---
title: "Templates and A.I. prompts"
date: 2026-10-22 12:00:00
---

# Templates and A.I. prompts

A spectator gives you one piece of information — a word, a card, a name, a date. **Templates** and **A.I. prompts** turn it into something else: a whole sentence, a zodiac sign, a famous quote, a drawing. The result goes to your display devices, the printer, or the next step of your routine.

All three work the same way: you write texts in advance (with variables from the [Text Buffer](text-buffer.md)), each gets a number (**#1**, **#2**...), and an action runs the one you need.

| Feature | What it makes | Action |
|---|---|---|
| **TEMPLATES** | a text, from your own sentence | *text from template* |
| **A.I. TEXT PROMPTS** | a text, written by the A.I. | *execute A.I. text prompt* |
| **A.I. IMAGE PROMPTS** | a picture, drawn by the A.I. | *execute A.I. image prompt* |

They are in **Settings → Transform / process**, and need the [Transformer add-on](../purchase-add-ons/transformer.md). The A.I. prompts also need the [A.I. Features add-on](../purchase-add-ons/ai-features.md) and an A.I. engine (your own API key, or the [free Gemini calls](../subscriptions/free-gemini.md) of the subscribers). All add-ons are included in every subscription.

<!-- GALLERY: the TEMPLATES and A.I. PROMPTS settings, the MANAGE TEMPLATES list, a result on a device -->

---

## The variables

Templates and prompts use the same variables:

| Variable | Meaning |
|---|---|
| `#TEXT` | the last text in the Text Buffer |
| `#TXT1` .. `#TXT9` | counted from the **oldest**: `#TXT1` is the first text |
| `#LAST1` .. `#LAST9` | counted from the **newest**: `#LAST2` is the one before the last |

Add `!uc` (UPPERCASE), `!lc` (lowercase) or `!tc` (Title Case): `#TEXT!uc`, `#TXT2!tc`.

!!! tip "Only when everything is there"
    A template or prompt runs **only if the Text Buffer has enough texts** for its variables: one with `#TXT3` waits for the third text — until then, the action does nothing. So you can put it on *Action after text recognition*, and it will work only after the third word. More: [Text Buffer variables](text-buffer.md#variables-using-the-buffer-anywhere).

---

## Managing the lists

Each feature has its own list (**Manage templates → Open list**, **Text prompts → Open list**, **Image prompts → Open list**):

* **Add** a new one by typing it into the last field.
* **Edit** one by simply overwriting its text.
* **Swipe right** on one to delete it.
* The number in front of each (**#1**, **#2**...) is what the actions use. Deleting one doesn't change the numbers of the others.
* **Save and close.**

The lists are saved with your [routine](routines.md).

---

## Templates

Your own sentence, with the spectator's information inserted.

**Example:** *"In my dream I saw the #TXT1 in the hands of #TXT2."*

A spectator picks any card and places it under the card box... another spectator writes the name of their favorite celebrity on a small notepad. Then you show them your handwritten prediction on a chalkboard: *"In my dream I saw the 7♠ in the hands of Natalie Portman."*

* The action **text from template** (*Special* group) asks for the **Template #ID**.
* The result goes into the Text Buffer (as a *template result*), so it is also the new `#TEXT` — send it to a device with *show last text*, print it, or use it in a prompt.
* **Action after template generated** + **Trigger action:** what happens next (e.g. *handwriting to printer*), with a delay you choose. The phone vibrates (long) when it runs.

---

## A.I. text prompts

The same idea, but the A.I. writes the answer.

**Example:** *"What is the zodiac sign of #TEXT? Please only reply the name of the zodiac, with all uppercase letters."*

A spectator writes the name of their favorite celebrity on a small notepad (for example Brad Pitt). Then you show them your handwritten prediction on small, crumbled paper: *"SAGITTARIUS"*

More ideas: *"Name a famous painting with the color #TEXT"*, *"Write a two-line poem about #TXT1 and #TXT2"*, *"In which year was #TEXT born? Reply only the year."*

Settings in **A.I. TEXT PROMPTS**:

* **A.I. text engine:** *OpenAI GPT*, *Google Gemini* or *Claude*. The model itself is chosen in **A.I. FEATURES**.
* **Show response (pop-up):** shows the answer (and how long it took) on your screen.
* **Action after response received** + **Trigger action**.

The action is **execute A.I. text prompt** (*Special* group, asks for the **Prompt #ID**). The answer goes into the Text Buffer (*A.I. prompt response*).

!!! tip "Short answers"
    MysterSmith asks the A.I. to answer as short as possible, only the result, in the language of your prompt. Still, say exactly what you want: *"Reply only one word"*, *"only the number"*, *"all uppercase letters"*.

---

## A.I. image prompts

Describe a picture, and the A.I. draws it.

**Example:** *"A simple black and white child's drawing of #TEXT, on white paper, no text."*

Settings in **A.I. IMAGE PROMPTS**:

* **A.I. image engine:** *OpenAI GPT* or *Google Gemini* (their drawing settings — size, model, thicker lines — are in **A.I. FEATURES**).
* **Action after image generated** + **Trigger action** — runs when the picture is ready and already in the Image Buffer, so *immediately* is fine.

The action is **execute A.I. image prompt** (*Special* group, asks for the **Image prompt #ID**). While the A.I. is drawing, a connected PeekSmith shows *Drawing...*. The picture appears on the **black screen** and the **Doodle screen**, and is saved to the [Image Buffer](image-buffer.md) — from there you can send it to a printer or a display, or put it into an [image template](image-templates.md).

---

## From other apps

The [HTTP Socket](../api/http-socket.md) and the custom URL scheme can run them too: `template=N`, `aiprompt=N`, `aiimageprompt=N` (**N** is the number in the list).

See also: [Acronym word list](acronym.md) — another Transformer feature that makes a word list from the spectator's word.
