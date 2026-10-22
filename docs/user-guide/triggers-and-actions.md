---
title: "Triggers and actions"
date: 2026-10-22 12:00:00
---

# Triggers and actions

Almost everything in MysterSmith can be started **secretly**: by a volume button, a remote, a tap on a black screen, a button on your PeekSmith — or automatically, a few seconds after something happened (a text was recognized, a drawing was generated, a card was printed...).

* A **trigger** is the moment: *Volume UP*, *2 finger swipe DOWN*, *5 sec after text recognition*...
* An **action** is what happens then: *show last text*, *text to printer*, *execute A.I. image prompt*, *vibrate short*...

Every trigger has one setting: tap it, and pick an action from the list. That's all. With a **Condition** you can make an action wait for the right moment, and with an **action list** one trigger can run many actions.

<!-- GALLERY: MY ACTIONS, the "Select an action" sheet with the chips, the Condition rows, an action list in the editor -->

---

## Where the triggers are

**Buttons and remotes**

* **Volume buttons** (Input methods): *Volume UP*, *Volume DOWN*, *Volume DOUBLE UP*, *Volume DOUBLE DOWN*, *Volume LONG UP*, *Volume LONG DOWN*. Volume UP and DOWN are also in **MY ACTIONS**.
* **REMOTE CONTROLS** (Input methods): register the buttons of any Bluetooth remote / keyboard in a **mapping template**, and give each button a *Single click* and a *Double click* action.
* **Device buttons**: in **MY ACTIONS** (*PeekSmith/Bond actions*, *Atom button actions*, *ATC button actions*) and in each device's own **Settings** panel (*BUTTON ACTIONS*): PeekSmith left / right / long / secret button, PeekSmith 3 tap / movement / magnet, SB Watch 2 crown and buttons, Lumen Duo buttons, A.T.C. short / double / triple / long press, pen cap removed / back...
* **Impression boards**: the four corners (*Top left corner*, ...) of the Mindbuster, Lumen, Imagine Pad, Oracle, Telepathy, Oblivious and Bamboo boards.
* **Watches** (MY ACTIONS): WearOS and Apple Watch taps, swipes and hand positions (*hand UP*, *palm FLAT*, *palm VERTICAL*, *hand DOWN*).
* **App logo**: *Action after app logo clicked* (MY ACTIONS).

**Gestures on full screens**

* **BLACK SCREEN**, **FAKE HOMESCREEN** and **DICE INPUT**: *1 / 2 finger single tap*, *1 / 2 finger DOUBLE tap*, *1 / 2 finger swipe UP / DOWN*, and *Action after screen started*.
* **SWIPE SCREEN** (clock-swipe): swipes in four directions, two-finger swipes, double touch.
* **MORSE INPUT**: long press, 2 finger tap, 2 finger swipe.
* **DOODLE SCREEN**: *Action when Doodle idle* (you stopped drawing).

**After something happened: "Action after ..."**

These triggers run an action **after an event**, with a delay you choose:

* after **text recognition**, **voice recognized**, **NFC tag scanned**, **WEB-polling data received**, **InMind word received**
* after **text generated from template**, **A.I. prompt response received**, **A.I. image prompt image generated**, **image generated from template**, **acronym generated**, **date calculation**, **Dictionary API info**
* after an **OpenAI / Lifelike / TrueWrite / TrueSketch drawing** is generated
* after **dice values finalized**, **calculator result saved**, **clock-swipe finalized**, **fake passcode screen unlocked**
* after **printing finished** (each printer type), after an image is **displayed** on Inversion Board, Inv.Board Ultra, RealBoard, Peek Board, Teleport, e-ink tag, Reinkstone, Lumen Prism, the keychains
* after the **phone is moved**: rotated left / right, tilted, face up / face down, standing, upside down (Phone motion control)
* after the **app/routine loaded**, after the **app logo clicked**, after the **last photo changed**

!!! tip "See everything you set"
    **MY ACTIONS → Automatic action triggers → Show list** lists every "Action after ..." you have set, e.g. *5 sec after NFC tag scanned: text to printer*. **OTHER SETTINGS → Copy action list to clipboard** copies the names of all actions.

---

## The delay of "Action after ..."

Every *Action after ...* setting has a **Trigger delay** (from the stepper):

| Value | Meaning |
|---|---|
| **OFF** | the trigger is off (the *Trigger action* row is hidden) |
| **immediately** | the action runs right after the event |
| **1 – 60 sec** | the action runs that many seconds after the event |

After an image is generated (A.I. drawing, image prompt, image template), the action always waits until the image is saved in the [Image Buffer](image-buffer.md) — so *immediately* is safe there too.

---

## Picking an action

Tap any trigger to open **Select an action**:

* **Search actions** at the top: type a few letters (*print*, *vibr*, *last*) — only the matching actions stay, highlighted.
* **Chips** under the search jump to a group: **Condition** (see below), **Doodle**, **Printer**, **Peek Board**, **Teleport**, **Prism**, **E-ink**, **Special**... (a device's chip shows only if that device is enabled).
* The actions are grouped by feature (*General*, *Voice Recognition*, *Prediction photo*, *Text buffer*, *Image buffer*, *Doodle screen*, *BLACK SCREEN*, *Printer*, the devices..., *Special*). The group of the current action has a yellow title.
* **tap to cancel action** (the first row) clears the trigger.

Some actions need a number — they ask for it right away: *load routine (settings)* → **Routine #ID**, *text from template* → **Template #ID**, *execute A.I. text prompt* → **Prompt #ID**, *image template to ...* → **Image template #ID**, *play audio recording* → **Recording #ID**...

!!! note "The Special group"
    *generate Acronym word list*, *calculate date difference*, *open app package* (Android), *open custom URL scheme*, *run Shortcut* (iOS), *send predefined text*, *text from template*, *execute A.I. text / image prompt*, *play audio recording*, *stop audio playback*, *load routine (settings)*.

---

## Condition: run an action only at the right moment

The **Condition** chip (the first chip in the action picker) opens two rows:

* **Only if Text Buffer has** — *any* or **exactly** 1–20 items
* **and Image Buffer has** — *any* or **exactly** 1–9 images

With a condition, the action runs **only if the buffer has exactly that many items** — otherwise **nothing happens** (silently, no message). *any* means: no check.

**Example — print after the third word:** three spectators write a word, one after the other. Set **Action after text recognition** to *text to printer* with the condition **Only if Text Buffer has exactly 3**. The first two recognitions print nothing — the third one does. (Switch on *Clear buffer on ROUTINE START* in the Text Buffer settings, so every show starts from zero.)

* The condition is shown next to the action's name on the Settings page: *text to printer **(3)***, *image buffer to Prism **(2 img)***, *show last text **(3, 2 img)***.
* It works with **every** trigger: volume buttons, remotes, gestures, device buttons, *Action after ...*, watches.
* It is saved with the routine.
* While a condition is set, the chip stays open (red), so you always see it. Set both rows back to *any* to remove it.

!!! info "Not checked"
    The condition belongs to the trigger, so it is **not** checked for the single steps of an action list (the list as a whole is checked once), and not for actions started from a URL / the HTTP socket (`action=...`).

---

## Action lists: many actions on one trigger

**MY ACTIONS → Multi-action lists → Manage** opens **MANAGE ACTION LISTS**.

1. Type a name in the last field and tap the green **(+)**.
2. Tap **Edit** on the new list.
3. **Add action** adds a step (the same picker as above), **Add pause** adds a *wait 1 sec* step — change it with **−/+**.
4. Move the steps **up/down**, or delete them with the trash icon. Tap the **#N ✎** of a step to change its number (template #, prompt #, routine #...).
5. **Save and close.**

Every list appears in the action picker in its own **ACTION LISTS** block, at the top — choose it for any trigger, like a single action.

* The steps run **in order**: each step waits for the previous one to finish, and the pauses wait as long as you set.
* Swipe right on a list in MANAGE ACTION LISTS to delete it. Triggers that used it then do nothing.

!!! warning "Limits"
    * A list cannot contain another list.
    * *open app package*, *open custom URL scheme* and *run Shortcut* can't be used in lists yet.
    * There is no condition per step — give the condition to the trigger that runs the list.

---

## Actions from other apps

The custom URL scheme and the [HTTP Socket](../api/http-socket.md) can run actions too: `action=peeksmith_show,pause3,vibrate` runs the actions one after the other (1 second apart; `pauseN` waits N seconds). The same interface can load routines, templates, prompts and image templates.
