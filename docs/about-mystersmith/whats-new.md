---
title: "What's new"
date: 2026-10-18 12:00:00
---

# What's new in MysterSmith v2.3.41

Since **v2.3.11**, MysterSmith has learned to make pictures: **hidden-word A.I. images**, hand-drawn **TrueWrite / TrueSketch** images from the Electricks Cloud, **prediction photos** with any date you like, and images arriving straight from your **WEB-polling** and **Send to API** sources. On top of that: better Peripage support, battery savings, and a lot of fixes. Here are the highlights. :-)

---

## New: Hidden image reveal

An A.I. image of one word, built entirely from **another, hidden word** — say, a giraffe made of *ELEPHANT ELEPHANT ELEPHANT...* From a distance everybody sees the picture; up close, every stroke is the hidden word.

* Find it under **Settings → A.I. Features → Hidden image reveal**, for every subscriber.
* **A.I. image engine:** OpenAI or Gemini. Each uses its own drawing settings (size, model, action after drawing).
* **Image subject** and **Source text** can be any text, with Text Buffer variables. By default the subject is the newest Text Buffer entry (**#LAST1**) and the hidden word is the one before it (**#LAST2**).
* Start it with the action **"hidden reveal - A.I. image"**. The image appears on the Doodle screen and the black screen, and goes into the Image Buffer.

*Thanks to Sam Jan for his original idea!*

---

## New: TrueWrite and TrueSketch images (Electricks Cloud)

With a linked **Electricks Cloud** account (Account details → Electricks Cloud), the last Text Buffer entry can become a picture:

* **"text to TrueWrite image"**: the text in realistic handwriting.
* **"text to TrueSketch image"**: a hand-drawn sketch of the word. Ask for a *cat* and you get a drawn cat, and **never the same one twice**. It knows 3,500+ English words and 45,000+ words across 20 languages. A word with no drawing is written in handwriting instead.
* **"TrueSketch to Peek Board"**: a new action that draws the sketch live on the Peek Board, just like *TrueWrite to Peek Board*.

The images appear on the Doodle screen and (inverted) on the black screen, and go into the Image Buffer. A new **TRUEWRITE / TRUESKETCH** block under **Settings → More settings → INTEGRATIONS** sets them up:

* **Image style:** *marker* (black on white) or *chalk* (white on black).
* **Image shape** (square / landscape / portrait) and **line thickness**.
* **Translate:** TrueSketch can take the word in your Performance language.
* **Action after image generated.**

Without a linked account, these actions now say so instead of doing nothing.

---

## New: Prediction photo (for subscribers only in October)

Put an image into the phone's gallery as if it had been taken earlier. The settings are under **Settings → Output / Screens → PREDICTION PHOTO**:

* **Photo date:** *now*, *days ago*, or a *custom date & time*.
* **Time source:** a *fixed time*, or the **last time from the Text Buffer** (a time the spectator named). The date still follows the Photo date setting.
* **Overwrite last photo** (Android, on by default): a new prediction photo replaces the one saved before, so only one stays in the gallery.
* New actions: **"save image to phone gallery"** (saves the current Image Buffer image with that date) and **"delete last saved photo"**.
* The date and time are set with wheel pickers on Android and with the native pickers on iOS.
* On Android the photo gets the right date in every gallery app.

---

## Images from WEB-polling and Send to API

* When the answer of a **WEB-polling** source or a **Send to API** call contains an image (an image URL or base64 data in a JSON field), the image is **saved into the Image Buffer**. The same image is saved only once.
* **WEB-polling** takes the images from the fields you set for the source.
* **Send to API** takes images from every field by default. To pick the fields, add **`#image=fieldname`** to the URL (several fields: `#image=field1,field2`).
* **WEB-polling URLs can use Text Buffer variables:** `#TEXT`, `#TXT1`..`#TXT9`, `#LAST1`..`#LAST9`.
* **"poll once"** now always processes the answer, and the *action after* waits until the images are saved.

**No Image Buffer add-on?** The **last image** is still kept, whether it came from WEB-polling, Send to API, an A.I. drawing, TrueWrite / TrueSketch or Topix. It can be saved to the phone gallery like any other.

---

## Electricks devices and add-ons

* **PeekSmith 3, Bond, SB Watch 2, MrCard and Iarvel Card:** the **External Displays** add-on is enough to use their buttons too (on the PeekSmith 3 also the gyroscope and the magnet). No Advanced Input Methods add-on is needed for them.
* The add-on requirement started on **16 October 2026**. A connect notice tells you when a device needs an add-on you don't have.
* **Account details** shows your **Electricks Cloud migration code** for your PeekSmith add-ons, with a copy button and a link to redeem it.

---

## Peripage printers

* Support for the **PeriPage P21 HD** and the **P21+** (304 dpi).
* A new print speed: **"official Peripage app"**. It sends the job the same way the printer's own app does. It's the default for the P21 family, and it's offered only on the models where it works.
* While one printer is connecting, the app no longer jumps to another paired printer, and a dropped printer reconnects only to itself.
* *Fixed:* a Peripage bug on iOS.

---

## Volume buttons and Voice Recognition

* **Test volume buttons:** a START / STOP test in the volume button settings. It shows each detected press as a short message, without running any action.
* Starting **Voice Recognition** switches the volume button control off, and switches it back on when it stops.
* The volume buttons are released when you **EXIT** the app.
* *Fixed:* some Voice Recognition bugs. A voice command now runs once per sentence, and the predefined text recall works again.

---

## Battery and background

* **Keep app alive in background:** a new switch in **OTHER SETTINGS**, on by default. Turn it off if you don't need MysterSmith working in the background, to save battery.
* No Bluetooth scanning while the app is in the background.
* **Apple Watch:** a new **"Close watch app"** in the APPLE WATCH settings, which works when the watch is in standby too.

---

## Smaller things

* **Choice lists** open scrolled to the selected item, and the **font lists** use bigger letters.
* **Doodle:** finger drawing is smooth again, even on slower iPhones.
* **Camera pens (Penthal, Ultra Sharpie):** a stray dot far from the writing (a camera misread) is left out, so it no longer throws off the drawing.
* New versions with important bug fixes are always shown, even if you hide minor updates.

---

## Fixes & housekeeping

* plus many smaller fixes across the app.

---

Enjoy the update — and as always, thank you for using MysterSmith! :-)

<br>

![](https://mystersmith.info/assets/images/MysterSmith_vertical.png)

<br><br>
