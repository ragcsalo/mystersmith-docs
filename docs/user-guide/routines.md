---
title: "Routines"
date: 2026-10-22 12:00:00
---

# Routines

A **routine** is a complete set of MysterSmith settings saved under a name: which input methods you use, what your volume buttons and remotes do, your templates and prompts, your display devices and their settings. Make one routine for each effect you perform, and switch between them with one tap — on stage you load the routine and tap **START ROUTINE**.

Routines are saved to your **MysterSmith account**, so they are with you on every phone you sign in on, and you can share them with other magicians.

<!-- GALLERY: the MY ROUTINES card, the "Restore settings from:" sheet, MANAGE ROUTINES -->

---

## The MY ROUTINES card

Find it near the top of the **Settings** page (or tap the **Routines** chip).

| Button | What it does |
|---|---|
| **SAVE** | Saves the current settings into the **active** routine (after *"Overwrite settings for routine ...?"*). If no routine is active yet, it works as SAVE AS NEW. |
| **SAVE AS NEW** | Opens **"Save settings to:"** — type a new routine name, or tap an existing routine to overwrite it. |
| **LOAD** | Opens **"Restore settings from:"** (see below). |

Below the buttons:

* **Manage routines → Open list:** rename, delete and share your routines (see below).
* **Enable/disable features → Manage:** hide the features you don't use (see [Getting started](getting-started.md#5-hide-what-you-dont-need)).
* **Performance language**
* **Confirm loading routine:** asks before a routine is loaded.
* **Display active routine name:** shows the name of the loaded routine on the home screen, under START ROUTINE.

---

## Loading a routine

**LOAD** opens the **"Restore settings from:"** sheet:

* **Create new routine (using default settings):** starts a fresh routine with the app's default settings (your personal settings are kept, see below). You can give it a name right away; the app restarts with the new routine.
* **Last automatic save:** the settings saved automatically at your last START ROUTINE (see below).
* **Your routines**, newest first. Tap one to load it.
* **Shared routine:** the yellow field — type the **#ID** of a routine somebody shared with you.

When a routine is loaded, the app restarts quickly with the new settings. Connected Bluetooth devices are disconnected, then reconnected according to the **Auto-connect devices** setting.

!!! tip "Devices per routine"
    In **MY DEVICES**, set **Auto-connect devices** to **Saved for this routine**, connect the devices you need for this effect and tap **Save connected devices → Save**. From then on, loading the routine connects exactly those devices.

---

## What is saved in a routine — and what is not

A routine stores (almost) **every setting** of the app: input methods, triggers and actions, templates, A.I. prompts, image templates, action lists, device settings, screens...

These are **personal** and are **not** replaced when you load a routine (also not when you load somebody else's shared routine):

* your account and sign-in data, purchased add-ons,
* your personal account IDs and API keys (OpenAI, Gemini, Claude, ElevenLabs, Inject, Electricks Cloud...),
* your favorite devices and features, the app language, wallpapers.

A few settings are the same in **every** routine: *Confirm loading routine*, *Display active routine name*, the background music, and the remote control mapping templates marked **Use mapping for every routine**.

---

## Automatic save

Every time you tap **START ROUTINE**, your current settings are saved automatically to the **Last automatic save** slot. If something went wrong (e.g. you changed a setting by mistake and loaded another routine), load it back with **LOAD → Last automatic save**.

!!! note "Remember to SAVE"
    The automatic save does not change your named routine. When you have finished setting up an effect, tap **SAVE** (or **SAVE AS NEW**), so the routine remembers it.

---

## Managing routines

**Manage routines → Open list** shows **MANAGE ROUTINES**:

* every routine with its **#ID**, the date it was last saved and its **SHARED** state,
* **rename** a routine by typing over its name, **add** an empty one by typing a new name in the last field,
* **swipe left** on a routine to **share / unshare** it,
* **swipe right** to **delete** it (there is no confirmation!).

Tap **Save and close** when you are done.

---

## Sharing routines

1. In **MANAGE ROUTINES**, swipe left on the routine and share it. It becomes **SHARED**, and its **#ID** is what you give to the other magician.
2. They tap **LOAD**, type the #ID into the yellow **Shared routine** field and load it.

The routine is loaded with all its settings — their personal settings and API keys stay their own. The **image templates** of the routine come with it as their own copies, with the same numbers, so the routine's actions work right away. When they tap **SAVE**, a loaded shared routine is saved as a **new routine** of their own; your original never changes.

---

## Routine settings worth knowing

* **Clear buffer on ROUTINE START** — in the [Text Buffer](text-buffer.md) and [Image Buffer](image-buffer.md) settings.
* **Clear screen on ROUTINE START** — in the Doodle screen and Black screen settings.
* **MY ACTIONS → Action after app/routine loaded** — runs an action (after a delay you choose) whenever the app starts or a routine is loaded. See [Triggers and actions](triggers-and-actions.md).

---

## Switching routines during a show

* The action **load routine (settings)** (in the *Special* group) loads a routine by its **#ID** — without asking, so you can put it on a volume button, a remote button or into an action list.
* From another app or a shortcut: the URL `mystersmith://?routine=N` loads routine **N** (the HTTP socket accepts `routine=N` too). See [HTTP Socket](../api/http-socket.md).
