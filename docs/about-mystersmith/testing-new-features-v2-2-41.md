---
title: "Testing guide — v2.2.41"
date: 2026-09-04 12:00:00
---

# Testing guide — MysterSmith v2.2.41

!!! info "Looking for the latest?"
    This is the archived **v2.2.41** testing guide. For the current build, see [**Testing guide — v2.2.71**](testing-new-features.md).

Thank you for helping test the new build! :-) This page is a step-by-step
checklist covering everything new in **v2.2.41**. You don't have to test
everything — pick the areas that match your devices and workflow.

!!! note "Before you start"
    * Note your **platform** (Android / iOS), the **app version**, and (for recognition tests) the **text-recognition engine** you're using.
    * When something doesn't work as described, a **screenshot** and a short note (what you did → what happened) is a huge help.
    * A few of the new tools show a **debug toast** on screen for a few seconds — that's intentional for this test build and will be removed later.

Each item is a checkbox: **☐ = still to test**, tick it once you've
confirmed it works. Steps are marked **Do**, and what you should see is
marked **Expect**.

---

## 1. Smarter handwriting recognition

### Automatic page orientation

The headline feature: write at *any* angle and the app straightens the
image before recognizing it.

**Do:** go to **Settings → Text recognition → Page orientation** and choose **automatic**.

- [ ] Write a short word **straight**, recognize it → **Expect:** normal result, no rotation (or a tiny angle inside the dead-zone is ignored).
- [ ] Write a word **tilted ~30–45°**, recognize it → **Expect:** the saved image is straightened, the toast shows the detected angle, and the text is recognized correctly.
- [ ] Write a word **diagonally / steeply tilted**, recognize it → **Expect:** still straightened and recognized.
- [ ] Write a word **upside down**, recognize it → **Expect:** flipped back the right way up and recognized.
- [ ] Write a **longer, multi-line** sentence at an angle → **Expect:** still straightened (only the first strokes are analyzed, so it stays fast) and recognized.
- [ ] Check the **Image Buffer** after each test → **Expect:** the *straightened* image is stored, not the tilted original.
- [ ] Repeat with a **camera pen** (Penthal / Ultra Sharpie / Nova Sharpie) and with a **board** → **Expect:** works the same for all impression devices.

!!! tip "Low-confidence guard"
    If the strokes are too few or too ambiguous to be sure of the angle, the app **leaves the image as-is** rather than guessing. That's expected behaviour — a very short or messy scribble may not be rotated.

### Combined display (BLACK screen)

- [ ] Turn on the **BLACK screen**. Navigate the **Text Buffer** (last / previous / next) to an item that has a **paired image** → **Expect:** the BLACK screen shows **both** the text and the paired drawing.
- [ ] Do the same navigating the **Image Buffer** to an item with **paired text** → **Expect:** both are shown.
- [ ] Repeat with the **BLACK screen off** → **Expect:** the combined view does **not** affect your other displays; it's a BLACK-screen-only behaviour.

### Combined display (Lumen Prism)

- [ ] On the **Lumen Prism**, enable **peek text**, **peek images** and the **"text under image"** merge mode.
- [ ] Send / navigate to a paired text+image → **Expect:** the Prism shows the image with the text merged **underneath** — and this works **anywhere**, not only when the BLACK screen is active.

### Auto-fitted BLACK screen text

- [ ] Recognize a **short** phrase with the BLACK screen on → **Expect:** it appears large and centered on the lower canvas.
- [ ] Recognize a **long** phrase → **Expect:** the text is **auto-wrapped and shrunk to fit** the frame (nothing cut off), rendered in Helvetica at ~60% opacity.

### Switch between drawing / text

- [ ] After a recognition, trigger the **Switch between drawing/text** action → **Expect:** the display toggles between the **original handwriting** and the **recognized text** for that same item.

### Camera-pen ink coordinates

- [ ] Write with the **Ultra Sharpie** (and **Nova Sharpie** / **Penthal**) → **Expect:** coordinate-based (ML Kit Digital Ink) recognition works — the pen strokes feed the ink buffer just like the Penthal, including after resetting or switching the page.

### Page orientation value (fix)

- [ ] Open **Settings → Text recognition** and look at the **Page orientation** row → **Expect:** the current value is always shown (never blank), even if an older value was saved.

---

## 2. New input methods

### Dice Input

- [ ] Enable **Dice Input** and pair a supported dice type: **Spotted Dice**, **KMD** (by Marc-Antoine), **Pitata Dice**, **BLE Dice**, **GoDice**.
- [ ] Roll and confirm the value is read correctly.
- [ ] Configure the **dice display** for your output (e-ink board, keychain, printer, Doodle screen…) → **Expect:** the rolled value is shown on the chosen device as configured.

### SWIPE method extras

- [ ] Turn on **Short card names** for SWIPE → **Expect:** cards show as `2H`, `KC`, `10D`, `AS`…
- [ ] Turn on **save the full playing card name** when sending a card → **Expect:** the full name (e.g. "King of Clubs") is stored / sent.

---

## 3. Actions & automation

### ACTION LIST

- [ ] Build an **ACTION LIST** of several actions and run it from a single trigger → **Expect:** the actions run one after another in order.

### Other action options

- [ ] Set an **action after sending a color** → **Expect:** the chosen action fires right after the color is sent.
- [ ] Use the **Switch between drawing/text** action (see §1) inside a list → **Expect:** it toggles as part of the chain.
- [ ] Save the **connected devices for a routine**, then leave and return (even from the background) → **Expect:** the devices reconnect automatically.

---

## 4. Displays & devices

### Custom backgrounds

- [ ] When sending text to **Teleport / Prism / E-ink tags**, set a **custom background** → **Expect:** the text is composited over your chosen background.
- [ ] Choose **"use the last photo from your gallery"** as the background → **Expect:** your latest photo is used.

### New customization + Doodle orientation (Lumen Duo, Lumen Eye, Iarvel Card, MrCard, Lumen Spectra)

- [ ] Open **CUSTOMIZE Display** for each device and change the **Doodle / drawing orientation** (landscape left, landscape right, upside down) → **Expect:** the orientation actually takes effect on the sent drawing.
- [ ] Compare **landscape left vs right** with the **Lumen Prism** → **Expect:** the direction matches the Prism (not reversed).
- [ ] From the **device details sheet**, run each **test option** (handwriting + drawing) → **Expect:** a test image/text is sent.
- [ ] Run the **same test from the CUSTOMIZE Display sheet** → **Expect:** the test can be launched there too.

### Other display options

- [ ] Add support for **Lumen Spectra** — pair and send text/drawing → **Expect:** displays correctly.
- [ ] Try the **"display details" test image** for Teleport / Prism / e-ink tags → **Expect:** a preview/test image is sent.
- [ ] Set an **"action after transfer finished"** for Teleport / Prism / Reinkstone NFC cases → **Expect:** the action fires once the transfer completes.
- [ ] Test the **Motherboard-X API** device → **Expect:** data is sent/received as expected.

---

## 5. Buffers

- [ ] Navigate **last / previous / next text** in the Text Buffer → **Expect:** the correct item is shown each time.
- [ ] Navigate **last / previous / next image** in the Image Buffer → **Expect:** the correct image is shown each time.

---

## 6. A.I. features

### A.I. text-to-voice (ElevenLabs)

- [ ] Add your **ElevenLabs API key**, then use the **text-to-voice** feature on some recognized/entered text → **Expect:** the text is spoken back using ElevenLabs.

---

## 7. Settings & personalization

- [ ] Explore the **redesigned Settings page** and use the **search bar** → **Expect:** you can find settings by typing.
- [ ] Mark a few features/devices as **favorites** and hide the rest → **Expect:** only your favorites remain visible.
- [ ] Change a device's **custom settings**, then set up a **second device** of a different kind → **Expect:** settings are saved **per device**, independently.
- [ ] **Save your devices cross-platform** — set up on one platform, then check the other (Android ↔ iOS) → **Expect:** your devices carry over.
- [ ] Open a **Guided Tour** (in the **User Guide**) → **Expect:** a step-by-step walkthrough runs. (More tours are coming soon.)
- [ ] Toggle **Auto-switch Wi-Fi / cellular** (in **OTHER SETTINGS**) → **Expect:** the option is respected (it used to be automatic).

---

## 8. Regression checks (fixes)

- [ ] Connect a **Labco Scrabble** → **Expect:** no connection bug.
- [ ] Open the **text-recognition method selector with no A.I. engine selected** → **Expect:** it behaves correctly.

---

!!! warning "Add-on requirements from 1 October 2026"
    While testing, note that from **1 October 2026** two add-ons become required for certain devices:

    * **External Displays** — for all PeekSmith models, Bond, MrCard, Teleport, Quantum, SB Watch 2
    * **Advanced Input Methods** — for Atom 2, all PeekSmith models, Bond, MrCard, Quantum, SB Watch 2, Ray, GhostMove

    Everything else that's currently free stays free.

---

Thank you again for testing — your feedback shapes the final release! :-)

<br>

![](https://mystersmith.info/assets/images/MysterSmith_vertical.png)

<br><br>
