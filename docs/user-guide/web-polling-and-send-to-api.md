---
title: "WEB-polling and Send to API"
date: 2026-10-22 12:00:00
---

# WEB-polling and Send to API

MysterSmith can talk to other magic apps and web services in both directions:

* **WEB-polling** — **receive**: the app checks web addresses again and again (e.g. the spectator's search in Inject), and every new result arrives in the [Text Buffer](text-buffer.md) — and on your PeekSmith.
* **Send to API** — **send**: when a text arrives in MysterSmith, it is sent on to another app or website (e.g. to Inject, Bridge, or any URL).

<!-- GALLERY: the WEB-POLLING settings, the WEB data source sheet, the Send to API URL list -->

---

## WEB-polling

**Settings → Input methods → WEB-POLLING** (no add-on needed):

* **Enable WEB data polling**
* **WEB data sources → Configure** — choose where the data comes from (see below). The red number on the section title shows how many sources are on.
* **Start polling on PS/SBW connect** — starts when your PeekSmith or SB Watch connects.
* **Start polling when app starts**
* **Start / stop polling** — START / STOP right here.

Under **WEB-POLLING & WEB-INPUT**:

* **Show received data on top** (on) — shows each result (or image) on your screen (not over the BLACK screen).
* **Show first/older results as well** (off) — normally the first answer of a source is only remembered, and only **new** results are shown.
* **Action after WEB-data received** + **Trigger action** — what happens when a new result arrives (after its images are saved).

### Data sources

**WEB data sources → Configure** has the **BUILT-IN data sources** — just switch one on and enter your ID / key:

* **MysterSmith API** (texts sent to your own account; *Custom types*: leave empty for all)
* **Bridge A.I.**, **Inject 2.0**, **Elips**, **WikiTest**, **InMind system**, **Topix**, **Goo app**, **Notarized**, **iMagination**, **Hacked by Appmazing**, **iUnlock Elite**, **Passcode Checker**, **Let's Draw PRO**, **Lumen PRO** (for Lumen PRO users)
* **London time (test)** and **Random word (test)** — to try WEB-polling without another app.

and your own **CUSTOM data sources**: tap the **+**, give it a name, switch it on and enter the **URL**.

* **Enable anti-cache** — adds a random number to every request, so you always get a fresh answer.
* **JSON format** → **Display field(s)**: the field(s) of a JSON answer to use, separated by commas. Dotted paths work: `results.word`; from a list, the first item is used unless you give a number: `results.1.word`.
* The URL may contain Text Buffer variables (`#TEXT`, `#TXT1`..`#TXT9`, `#LAST1`..`#LAST9`, with `!uc` / `!lc` / `!tc`); the round is skipped while the buffer doesn't have enough texts.

### What happens with the results

* Every **new** result goes into the Text Buffer and to your PeekSmith. With several JSON fields, each field becomes a separate Text Buffer entry. Playing cards are shortened (e.g. *AS*).
* **Images** in an answer (an image URL, image data, or an image anywhere in the JSON) go into the [Image Buffer](image-buffer.md) — without the Image Buffer add-on, the last one is kept on the phone.
* **Clear buffer on WEB-polling start** — in the Text Buffer settings (on by default) and the Image Buffer settings (off).

The sources are checked one after the other, and a new round starts 2 seconds after the previous one. Each result is shown for 2 seconds (an image for 4).

### Starting and stopping

* The **WEB-POLLING** switch on the performance screen (after START ROUTINE) — it shows the number of sources and spins while polling. While it runs, a banner says *"WEB-polling RUNNING, tap to STOP"*.
* Actions (*General* group): **WEB-polling START**, **WEB-polling STOP**, **WEB-polling START/STOP**, and **perform WEB-polling once** (this one also takes the first answer).
* Secret: **long press the blue color** on the Doodle screen.

More about the integrations: [Bridge A.I.](../integrations/bridge.md), [Inject](../integrations/inject-send.md), [Notarized](../integrations/notarized.md).

---

## Send to API

**Settings → Output / Screens → SEND TO API** — needs the [API Access add-on](../purchase-add-ons/api-access.md).

**Send text to WEB API → Manage** opens your list of URLs: type a new one in the last field, switch them on/off, swipe right to delete. In the URL:

| Write | Meaning |
|---|---|
| `#TEXT` | the text |
| `#NOSPACE` | the text without spaces |
| `#TXT1` .. `#TXT9` | the 1st (oldest) .. 9th text of the buffer |
| `#LAST2` .. `#LAST9` | the 2nd .. 9th text from the end |
| `!uc` / `!lc` / `!tc` | after a variable: UPPERCASE / lowercase / Title Case |
| `#delay=X` | send X seconds later |

**When is it sent?**

* A URL starting with **`!`** is sent **automatically**, every time a text arrives in the Text Buffer. **`!N`** (e.g. `!3`) — only when the buffer has exactly N texts.
* All active URLs are sent with the action **last text to WEB APIs** (*Text buffer* group).

**How is it sent?** Normally a simple GET request in the background. Start the line with:

* **`open `** — opens the URL in the browser, or another app with its URL scheme,
* **`post `** — sends a POST request with the parameters,
* **`json `** — sends POST JSON (use this for Inject).

Shortcuts: just write **`inject`**, **`goo`** or **`bridge`** — MysterSmith fills in the right address from your IDs below.

**Answers:** images in the answer are saved to the Image Buffer (like in WEB-polling); the text of the answer is not stored.

More rows in SEND TO API:

* **Encode SPACE to %20**, **Encode NEW LINE to %0A**
* **MysterSmith API key** and **MysterSmith API URL** (tap to copy) — see [WEB API - reading data](../api/web-api-get.md)
* **Inject ID (username)**, **Inject account number**, **Bridge URL**, **Goo ID**
* **Motherboard API key** — the action **last text to Motherboard** shows the text on a Motherboard.
* **TimeSmith integration** — every time you enter a time, it is sent to the TimeSmith app.

Related actions: **last text to Bridge**, **last text to Inject**, **last text to Motherboard** (*Text buffer* group), and the *App Integrations* group (*send time to TimeSmith*, *show last Inject result*...).

!!! tip "The other direction: your own API"
    Other apps can also **read** MysterSmith's Text Buffer, or **send** texts and commands to it: see [WEB API - reading data](../api/web-api-get.md) and the [HTTP Socket](../api/http-socket.md).
