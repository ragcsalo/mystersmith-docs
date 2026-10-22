---
title: "Remotes, volume buttons and phone motion"
date: 2026-10-22 12:00:00
---

# Remotes, volume buttons and phone motion

During a performance you can't tap around in the app — but you can secretly press a button in your pocket, click a remote, or tilt the phone. Each of these is a **trigger**: you choose an action for it, and the app runs it. (The actions and the action picker: [Triggers and actions](triggers-and-actions.md).)

| | Add-on | Where |
|---|---|---|
| **Volume buttons** | none | Settings → Input methods → **Volume buttons** |
| **Remote controls** (any Bluetooth remote / keyboard) | [Advanced Input Methods](../purchase-add-ons/advanced-inputs.md) | Settings → Input methods → **REMOTE CONTROLS** |
| **Phone motion control** | [Advanced Input Methods](../purchase-add-ons/advanced-inputs.md) | Settings → Input methods → **PHONE MOTION CONTROL** |

<!-- GALLERY: the Volume buttons settings, the REMOTE CONTROL MAPPINGS editor, the PHONE MOTION CONTROL settings -->

---

## Volume buttons

Switch on **Control app with volume buttons**, then give actions to:

* **Volume UP**, **Volume DOWN** — a single press
* **Volume DOUBLE UP**, **Volume DOUBLE DOWN** — two quick presses
* **Volume LONG UP**, **Volume LONG DOWN** — hold the button

More settings:

* **Test volume buttons → START:** press the buttons and the app tells you what it detected (*single press*, *double press*, *long press*) — the actions don't run while testing. Great for practicing the timing.
* **Default volume:** after every press the app sets the volume back to this level (default 15%), so the volume never runs away. Below 10 or above 90 it leaves the *system volume* alone.
* **In-app mode** / **Background mode:** *button actions* (default) or *change volume*. With *change volume* the buttons work as normal volume buttons there. With *Background mode = button actions* the buttons work while MysterSmith runs in the background too.

!!! tip "Timing"
    The app waits 0.4 seconds after the last press to decide between a single and a double press — so a single press runs a little later. A double press is two presses within about 0.3 s. Three or more presses do nothing.

The voice recognition START / STOP / CANCEL actions can't be put on the volume buttons (the microphone and the buttons would interfere).

On iOS, the volume buttons keep the app awake in the background with a silent audio loop — it uses a little more battery.

---

## Remote controls

Almost every Bluetooth remote, presenter clicker or mini keyboard works like a keyboard. MysterSmith lets you give **every button its own actions** — in a **mapping**.

### Creating a mapping

1. **Mapping templates → Manage** opens **REMOTE CONTROL MAPPINGS**.
2. Type a name in the last field and tap **+**. (The first mapping becomes the active one. Only the **active** mapping works — tap the circle in front of a mapping to make it active.)
3. Tap **Edit**, then **Register a button** and press a button on your remote. Repeat for every button.
4. Give each button a **Single click** and a **Double click** action, and a label if you like.
5. **Save and close.**

Settings of the mapping:

* **Use mapping for every routine** — the same buttons and actions in every routine (and on your other phones). Switch it off to use the mapping in this routine only.
* **Save as new mapping** — a copy of it, in the current routine.
* **CONFIG SWIPES** (Up / Down / Left / Right) — buttons that act as swipes on the Swipe screen (and on the Fake homescreen with *Enable swipe input*).
* **MORSE KEYS** (Dot / Dash / Space / Delete / Send) — buttons for the Morse input.
* **Timing test** — shows how fast your remote sends its presses, and whether a press counted as SINGLE or DOUBLE.

In the REMOTE CONTROLS section: **Active mapping** and **Double click max. delay** (default 250 ms).

!!! note "No long press"
    Most remotes don't tell the phone when a button is released, so the mapping has **single** and **double** clicks, but no long press. If a button has no double-click action, its single click runs at once, without waiting.

### Remote modes

The *Remote Control* group of the action picker can switch your remote into a different **mode** — for entering information without looking:

* **remote mode: default**, **text/numbers**, **cards**, **swipe**, **morse code**
* **enter number (0-9)**, **delete last digit/character**, **send text/number to buffer**
* **send swipe UP / DOWN / LEFT / RIGHT**

The current mode shows as a small icon in the top-right corner.

### Remotes with their own driver

These remotes are connected in **MY DEVICES** and have their own button settings in their device panel: **Atom 2** (*Atom button actions*), **Pitata Palm Remote**, **Wilson Nexus Remote**, **Thumper v2** (*Short press actions*, *Long press actions*), **Matt+** (short / long presses, up to three, and combinations) and **A.T.C.** (short, x2, x3, long press). See [Supported devices](supported-devices.md#remote-controls).

---

## Phone motion control

Trigger actions by **moving the phone** — e.g. turning it face down on the table, or tilting it in your hand.

* **Motion control:** *none (OFF)*, *orientation*, *rotation (flat)* or *tilt (4 sides)*.
* **Activation method:** when the motion control starts listening: *manually* (with an action), *phone face down*, or when a screen opens — *fake homescreen*, *fake lockscreen*, *Doodle screen*, *BLACK screen*, *swipe screen*, *Calculator screen*.
* **Activation delay** (2–60 s): how long after the activation it starts.
* **Repeat delay** (0–30 s, default 5): after a trigger, how long until it listens again (0 = no repeat).
* **Vibration feedback** and **Voice feedback** (it says e.g. *"Motion active"*, *"rotate left"*) — for practice, or for secret confirmation.

The triggers (each with its own delay and action):

| Method | Triggers |
|---|---|
| **orientation** | *Phone face up*, *Phone face down*, *Phone standing*, *Phone upside down* |
| **rotation (flat)** | *Rotate left*, *Rotate right* — the phone lies flat and still for 2 s first |
| **tilt (4 sides)** | *Lift top side*, *Lift right side*, *Lift bottom side*, *Lift left side* — from face up or face down |

Actions in the *Phone Motion Control* group: **motion control START**, **STOP**, **START/STOP**, and **orientation control**, **rotation control (flat)**, **tilt control (4 sides)** (switch to that method and start it).

The motion is only watched on the performance screens (not while you are in Settings). A small icon shows while it is active.
