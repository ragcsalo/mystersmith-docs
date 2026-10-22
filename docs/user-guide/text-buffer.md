---
title: "The Text Buffer"
date: 2026-10-22 12:00:00
---

# The Text Buffer

The **Text Buffer** is the memory of MysterSmith. Every text that arrives in the app — a recognized handwriting, a word from WEB-polling, a playing card you sent, a calculator result, a voice recognition result, an NFC tag... — is stored here, newest last. Almost every other feature can read it: templates, A.I. prompts, image templates, display devices, printers and actions all work with the texts in the buffer.

<!-- GALLERY: the TEXT BUFFER card on the Settings page (VIEW / CLEAR / SETTINGS) and the contents sheet -->

---

## Where you see it

On the **Settings** page the **TEXT BUFFER** card shows how many texts are stored, and has three icons:

* **VIEW** opens the buffer's contents.
* **CLEAR** empties it (at once, without asking).
* **SETTINGS** opens the Text Buffer settings (see below).

In the contents sheet the texts are listed **newest first**, numbered (#1, #2...), and the current one is highlighted.

* **Tap** a text to send it again to your display devices. If you selected an **Action when tapped** at the bottom of the sheet, that action runs too.
* **Long tap** a text to delete it from the buffer (with a confirmation, if you switched that on).
* **Clear text buffer** at the bottom empties the whole buffer.

You can also open it during a performance with the action **show/hide text buffer contents**.

---

## Variables: using the buffer anywhere

Wherever you can type a text in MysterSmith — **templates, A.I. prompts, [image templates](image-templates.md), Send to API URLs, WEB-polling URLs** — you can insert texts from the buffer with these variables:

| Variable | Meaning |
|---|---|
| `#TEXT` | the current text (the newest one, unless you stepped back with *show previous text*) |
| `#TXT1` .. `#TXT9` | counted from the **oldest**: `#TXT1` is the first text in the buffer, `#TXT2` the second... |
| `#LAST1` .. `#LAST9` | counted from the **newest**: `#LAST1` is the newest, `#LAST2` the one before... |

**Letter case:** add `!uc` (UPPERCASE), `!lc` (lowercase) or `!tc` (Title Case) to any variable, e.g. `#TEXT!uc` or `#LAST2!tc`.

!!! tip "Only when there is enough in the buffer"
    A template, prompt or URL that uses `#TXT3` or `#LAST3` runs **only if the buffer already has at least 3 texts**. With an empty buffer, nothing that uses a variable runs. This way a routine never shows a half-filled text.

**Example:** a spectator names a card (`#TXT1`), another one a celebrity (`#TXT2`). The template *"In my dream I saw the #TXT1 in the hands of #TXT2."* is generated only after both texts arrived.

!!! note "Run an action only at the right moment"
    You can also give **any action** a condition: *"Only if Text Buffer has exactly 3 items"*. See [Triggers and actions → Condition](triggers-and-actions.md#condition-run-an-action-only-at-the-right-moment).

---

## Settings

Open them with **SETTINGS** on the TEXT BUFFER card.

* **Sync contents from server — Sync now:** downloads the buffer saved on the server (needs the **API Access** add-on). Useful after a reinstall, or to see texts other apps sent to your account.
* **Text types to save — Manage:** choose which kinds of text go into the buffer. All are on by default; switch off what you don't need, e.g. *text from clipboard* or *time (HH:mm)*. The list: acronym word list, A.I. prompt response, text received by Atom, text from clipboard, color from SEND COLOR, text from SEND TEXT/NUMBERS, date calculation result, Dictionary API result, calculator result, dice values, InMind word, text entered in Morse code, NFC reader value, number from clockswipe/passcode, fake passcode entered, Pi Max result, Pi Revelations result, playing card, word from Scrabble, template result, text recognition result, time (HH:mm), text from custom URL scheme, voice recognition result, WEB-polling result, text from HTTP socket, text from WEB-input.
* **Transform Chinese/Hebrew text:** texts in other alphabets (Chinese, Hebrew, Cyrillic...) are converted to Latin letters **before** they are stored, so devices that can't show those characters still get a readable text. Off by default. Note: it affects **every** text in the buffer — leave it off if you don't need it.
* **Confirmation before delete text:** asks before a long tap deletes a text.
* **Clear buffer on app start** (on by default): you start every session with an empty buffer. If you switch it off, the buffer is synced from the server when the app starts.
* **Clear buffer on ROUTINE START:** empties the buffer when you tap **START ROUTINE**.
* **Clear buffer on WEB-polling start** (on by default).

---

## Text Buffer actions

In the action picker, the **Text buffer** group has:

* **show/hide text buffer contents**
* **show last text**, **show previous text**, **show next text** — sends that text to your display devices (previous/next wrap around); **auto cycle text** steps through the buffer every 2 seconds (run it again to stop)
* **clear text buffer**, **delete last text**, **copy last text to clipboard**, **translate last text**
* **last text to WEB APIs / Bridge / Inject / Motherboard**
* A.I. drawings from the last text: **text to OpenAI drawing**, **text to Gemini drawing**, the **City** drawings, **hidden reveal - A.I. image**, **text to TrueSketch / TrueWrite image**, **text to Quickdraw**, **display on maps**

Elsewhere: **Switch between drawing/text** jumps between a recognized text and the handwriting it came from.

---

## The buffer on the server (API)

Every text is also saved to your account on the server (the newest 9 are kept), so other apps can read it:

* Your personal URL is in **ACCOUNT SETTINGS → Show details → MysterSmith API URL**: `https://bsmagic.app/api/get/YOUR-API-KEY` returns the last text (field name: `text`).
* `get-TYPE/YOUR-API-KEY` returns the last text of one type.

More: [WEB API - reading data](../api/web-api-get.md) and [HTTP Socket](../api/http-socket.md).
