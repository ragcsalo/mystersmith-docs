---
title: "What's new"
date: 2026-11-09 18:00:00
---

# What's new in MysterSmith v2.3.94

!!! info "Add-ons and subscriptions on iPhone"
    To follow the App Store / TestFlight rules, the **iOS app doesn't show purchase links** for add-ons and subscriptions. You'll find everything here:

    **[➜ Add-ons](../purchase-add-ons/order-page.md)** &nbsp;&nbsp; **[➜ Subscription plans](../subscriptions/subscription-plans.md)**

    Already bought something? Just sign in — everything you own is unlocked automatically, on iPhone too.

**New since v2.3.91:** the clipboard, the WEB-screen, the BT Screen, notifications and sending data to other apps are **free for everyone** now, the **WEB-screen** got a complete makeover, the Settings page has **new sections**, and **auto-connect** became simpler: one switch per device. More below. :-)

Since **v2.3.71**, MysterSmith has a new tool in the Transformer add-on, the **Indexed lists**: memorized decks, numbered lists and your own lookup tables. A lot of **new devices** joined too: the Magnetic Selfie Screen, a round color badge, the Iarvel Photo Album, the Color Match Taskmaster, the Labco UFO5 card reader, two 4-color e-ink tags, an instant photo printer and the Cosmos Connect remote. The **LED Mask** got its own picture editor and A.I. faces. Here are the highlights. :-)

---

## Free for everyone (v2.3.94)

These features needed an add-on so far — now **everybody** can use them:

* **Copy to clipboard**, the **[WEB-screen](../user-guide/webscreen.md)**, the **BT Screen** and **Local notifications** (were: External Displays add-on)
* **Send text to WEB API** and the **app integrations**: Inject, Goo, Motherboard, TimeSmith, Bridge, Elips, the InMind Wheel, Pi Revelations; the *open app*, *open custom URL scheme* and *run Shortcut* actions, and an NFC tag or a WEB-polling result opening a link or an app (were: API Access add-on)

The add-ons cover less, but the important parts:

* **[External Displays](../purchase-add-ons/external-displays.md)** — the real display devices: peek devices, e-ink screens, smartwatches...
* **[API Access](../purchase-add-ons/api-access.md)** — the MysterSmith API, the local HTTP Socket server and the incoming mystersmith:// links (loading a routine with a link stays free). See [Custom URL scheme](../api/custom-url-scheme.md) for the details.

---

## The new WEB-screen

The [WEB-screen](../user-guide/webscreen.md) shows your texts in any browser — and now it is a modern page in dark blue and gold, which can be **installed as a fullscreen app** on iPhone and Android:

* **Fullscreen** or a **small peek screen** (top, middle or bottom)
* text **size**, **color** and **opacity**
* **Touch to peek**, **Vertical phone only** and **Hide peek after X seconds**
* **playing cards** shown as real card faces (or as 4♥)
* the screen stays awake while it is open

It works with my other apps too (PeekSmith, TimeSmith, CubeSmith...). How to set it up and install it: [The WEB-screen](../user-guide/webscreen.md).

---

## Settings: new sections (v2.3.94)

* **MYSTERSMITH API** (below MY ACTIONS) — your MysterSmith API key and URL, and the HTTP Socket server.
* **APP INTEGRATIONS** — Inject, Bridge, Goo, Motherboard, TimeSmith and Elips settings in one place.
* **SEND TO APPS & API** (was SEND TO API) — Send text to WEB API and its two encode switches.
* **OUTPUT OPTIONS** (was EXTERNAL DISPLAYS) — clipboard, WEB-screen, BT Screen, notifications.
* **WEAROS WATCH** — its own section, like the Apple Watch: *Use WearOS watch* and *Motion sensor*.
* **Use proxy for A.I. requests** moved to **A.I. FEATURES**.

---

## Auto-connect: one switch per device (v2.3.93)

The four *Auto-connect devices* options (All nearby, My saved devices, Saved for this routine, Custom) are gone. Now **every device has its own Auto-connect switch** (in its settings panel): what is switched on connects by itself — even when it is not advertising at the moment, the app keeps trying in the background. A new **Auto-connect new devices** switch in MY DEVICES decides what happens with a device you connect for the first time.

The switches are saved with your [routines](../user-guide/routines.md), so every routine can connect its own devices. Your old routines are converted automatically the first time you load them. See [Display devices](../user-guide/display-devices.md).

---

## New: Indexed lists (Transformer add-on)

Your own tables of **index + value** pairs, in **Settings → Transform / process → INDEXED LISTS**. Two new actions look up the last text of the [Text Buffer](../user-guide/text-buffer.md) in a list, and add the other half of the pair to the Text Buffer:

* **convert index to value (from list)** — e.g. the spectator names a number, *7* becomes *A♠*
* **convert value to index (from list)** — e.g. the spectator names a card, *Ace of Spades* becomes *7*

Three kinds of lists:

* **Card stack** — 52 cards, numbered 1–52. Start from a built-in stack (F.R.O.E. by Benke, Si Stebbins, Mnemonica, Nikola, Aronson, Osterlind, DaOrtiz, Crypto, 8 kings) or enter your own. Write the cards as `5C`, `4h`, `QS`, `3 of hearts` or `King of Clubs`, or **paste** a whole list from the clipboard. The list shows them as red and black **4♣**, and marks the duplicates.
* **Numbered list** — your values, numbered automatically: 1, 2, 3...
* **Custom list** — any index and any value, e.g. *aries → March*.

Numbered and custom lists can be **pasted** from the clipboard too (since v2.3.93), one item per line: `apple` or `1,apple` for a numbered list, `index,value` for a custom list (e.g. `red,alert`).

The result is a normal Text Buffer text, so it goes to your display devices, and **Action after conversion** can run the next step. The full guide: [Indexed lists](../user-guide/indexed-lists.md).

---

## New devices

Switch them on in **Settings → MY DEVICES → Enable/disable BT devices**, connect them in MY DEVICES, and tap **Settings** at a connected device for its own settings panel. The full list: [Supported devices](../user-guide/supported-devices.md).

### Selfie Screen (Magnetic Selfie Screen TP02)

A small color screen made for selfies, now a hidden **peek display**:

* **Peek text**, **Peek images** (Image Buffer pictures, A.I. drawings...) and **Peek drawings**: what is drawn on an impression board, a pen or the Doodle screen appears on it live.
* **Picture brightness** and **Blue light filter**, to dim and warm up the pictures.

### LCD badge (DG01 round color badge)

A round color touch-screen badge, with actions for handwriting, Doodle drawing, playing card, ESP symbols, emoji, dice, magic square, last photo and Image Buffer pictures. **CUSTOMIZE DISPLAY** sets the look of each one, with a live preview.

### Iarvel Photo Album (Inner Vision PRO)

The album tells MysterSmith which page the spectator stops at:

* Three photo sets: **Places**, **Celebrities** or your own **Custom** photos (change any picture and name, or reset them to the original).
* The chosen photo's **name** goes into the Text Buffer, and the photo can appear on the BLACK SCREEN and in the Image Buffer (action: *display InnerVision photo*), or even become the background of the fake lockscreen.
* Every photo can have its own action, plus an **Action after photo selected**. (Actions other than the Text Buffer need the [Advanced Input Methods](../purchase-add-ons/advanced-inputs.md) add-on or a subscription.)

### Color Match Taskmaster

The holder of 6 pens: when the spectator **takes out a pen**, its color goes into the Text Buffer (free). You can rename the 6 colors, and choose any other action for it with the Advanced Input Methods add-on or a subscription.

### Labco UFO5 (RFID card reader)

Its cards work like NFC tags: the card's number, or your own **custom card value**, goes into the Text Buffer.

### More devices

* **E-ink tags:** the **XTE** 4-color e-ink badge and the **FindXeink F20** 4-color e-ink display.
* **Color photo printer:** a new instant (polaroid style) color printer.
* **Cosmos Connect** remote (by Umesh): 12 buttons, with the same input modes as the other remotes (Advanced Input Methods add-on). See [Remotes](../user-guide/remotes-and-volume-buttons.md).

---

## LED Mask

The LED Mask (Shining App Mask) got a lot of new features:

* A **settings panel** with brightness, scrolling speed, **Peek text** (as scrolling text) and tests, and **CUSTOMIZE DISPLAY** for the playing card, ESP symbols, emoji, peek text and Image Buffer pictures.
* A **picture editor**, and your own **Local mask gallery**.
* **A.I. faces:** *generate A.I. mask image* draws a face for the Text Buffer's word (Gemini or OpenAI), with its eyes in the mask's eye holes. The faces can be saved to the gallery automatically.
* New actions: built-in picture / animation #, DIY picture #, *save Mask picture to DIY slot #*, and **next / previous** mask from the gallery, the DIY slots or the built-in pictures.

---

## New add-ons

Two features that were only for subscribers can now be bought on their own too:

* **[Prediction Photo](../purchase-add-ons/prediction-photo.md)** — save a picture to your phone's gallery as if it had been taken earlier (now, days ago, or at a time the spectator named).
* **[Image Template Editor](../purchase-add-ons/image-templates.md)** — design pictures with backgrounds, images and texts (see [Image templates](../user-guide/image-templates.md)).

As always, both are included in every [subscription plan](../subscriptions/subscription-plans.md).

---

## More

* **SEND TEXT/NUMBERS:** a new **Auto send after** option — send the text X seconds after the last change, or every character / digit immediately (also when typed with a remote).
* **Keychains:** an **Orientation** setting (portrait / upside down / turn left / turn right) in CUSTOMIZE DISPLAY for every item, on all keychain models.
* **BLACK SCREEN:** a new **Show A.I. drawings in inverse** switch (on by default, as before).
* **Peek displays:** results that don't go into the Text Buffer (calculator results, InMind, dictionary info, the last passcode...) now also appear on the Lumen, Iarvel, MrCard and Selfie Screen peek displays, not only on the PeekSmith.
* **Reinkstone case (iOS):** its own settings panel, with display details and a *dice to Reinkstone* action.
* **Your devices:** using the app on more than 3 phones/tablets at the same time only gives a warning now.
* **Subscriptions:** you can change your plan on your account page — move to a higher plan, or switch to quarterly billing. See *Changing your plan* on your plan's page, e.g. [PREMIUM](../subscriptions/premium-subscription.md#changing-your-plan).
* **Selfie Screen:** found on iPhone also when it was paired before, and a screen that got stuck recovers by itself (v2.3.92–93).
* **Your API keys and IDs:** a key you change on one phone is no longer overwritten by the old one from your other phone at the next sync.
* **Settings:** hidden sections no longer leave empty gaps on the Settings page.
* plus many smaller fixes across the app (voice commands, saved devices of a routine, printers and more).

---

Enjoy the update — and as always, thank you for using MysterSmith! :-)

<br>

![](https://mystersmith.info/assets/images/MysterSmith_vertical.png)

<br><br>
