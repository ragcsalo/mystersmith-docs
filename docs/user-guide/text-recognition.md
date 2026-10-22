---
title: "Text recognition"
date: 2024-02-02 17:33:50
---

# Text recognition

### What does text recognition do?

You can send handwritings from the **Doodle screen**, from the **WEB-doodle** or from supported **impression boards**, and you will receive the recognized text. The text goes into the [Text Buffer](text-buffer.md), and can be displayed on your PeekSmith device, supported smartwatches and all other displays (you'll need the [External Displays add-on](../purchase-add-ons/external-displays.md) for this to work), printed, or processed further by templates and A.I. prompts.

By default the app uses the handwriting recognition service by **Google Vision**.

<!-- GALLERY: the TEXT RECOGNITION section, the Recognition method list, a recognized text on the Doodle screen -->

---

### A better alternative to Google Vision: A.I. recognition

You can also use A.I. based text recognition with **OpenAI GPT**, **Google Gemini** or **Claude**. With the A.I. engines **you don't need to buy any text recognition credits from me**, and they can recognize much more than text: playing cards, celebrity names, cities, animals, ESP symbols, drawings, photos...

* With your **own API key** (OpenAI, Gemini or Claude) — Gemini can be used free of charge up to a certain limit.
* **Subscribers** don't even need a key: they get [free Gemini A.I. calls](../subscriptions/free-gemini.md) every day.

The A.I. engines need the [A.I. Features add-on](../purchase-add-ons/ai-features.md) (included in every subscription). For more information please visit this page: [A.I. text and drawing recognition](ai-recognition.md)

---

### The prerequisites of using text recognition

To use the text recognition feature, you must have your **Username and PIN** set up first. Find them under **ACCOUNT SETTINGS → Show details → CREDENTIALS**.

You will also have to turn ON the "**Enable text recognition**" option in the **TEXT RECOGNITION** section (Settings → Input methods).

---

### Recognition credits (for Google Vision engine only)

If you use Google as the recognition engine, the recognition of **one page** (no matter how many text it contains) **uses 1 recognition credit**. Every user gets **250 credits for free** when they create their user account. If you're running out of credits, you can buy recognition credits from me. You can check your credit balance in the TEXT RECOGNITION section ("Recognition credits left").

**[Click here to buy text recognition credits](https://bsmagic.app/payment/?item=ocr_credits_1000)**

---

### Offline recognition

With the [Offline text recognition add-on](../purchase-add-ons/offline-recognition.md) the phone recognizes the handwriting itself (iOS 13+ / Android 9+), without internet. You can also use it only as a backup: **Always use when no internet** and **Always use when no response**.

---

### Triggering text recognition

The recognition should be triggered, either automatically or by invoking an action.

To use the automatic recognition, go to the TEXT RECOGNITION section and set "**Automatic recognition**" to 3 seconds or more (depending on your routine). After writing something, recognition will trigger when you don't write anything for X seconds.

There are also text recognition actions (*do text recognition*, *FORCE text recognition*, *Recognize playing card (A.I.)*, *Analyze drawing (A.I.)*...) which can be assigned to triggers like PeekSmith buttons, Atom remote buttons, Apple Watch screen taps or swipes, WearOS watch screen taps, volume button presses etc. See [Triggers and actions](triggers-and-actions.md).

---

### Text recognition settings explained

**Enable text recognition:** switches the feature on.

**Page orientation:** how you hold the paper / board: *portrait*, *landscape (left)*, *landscape (right)*, *upside down* or *automatic*.

**Handwriting direction** (only with automatic orientation): *by selected language*, *horizontal left-to-right / right-to-left*, *vertical left-to-right / right-to-left*.

**Recognition engine:** *Google Vision*, *Digital Ink*, *OpenAI GPT (A.I.)*, *Google Gemini (A.I.)*, *Claude (A.I.)* or *offline*. The A.I. model itself is selected in the **A.I. FEATURES** section.

**Recognition method** (A.I. engines only): what the A.I. should look for — *text/numbers*, *playing card*, *celebrity name*, *city*, *animal*, *time (HH:mm)*, *date*, *ESP sign*, *drawing keywords*, *analyze in detail*, *photo subject* or *custom prompt*.

**Custom A.I. prompt:** your own instruction for the *custom prompt* method.

**Result date order / Result date format:** how a recognized date is written (33 formats).

**Change letter case:** *original*, *lowercase*, *UPPERCASE*, *Title Case* or *Sentence case*.

**Display progress message:** enable this to receive a notification when text recognition is in progress.

**Correct spelling/names** (A.I. only): if you enable this, the A.I. will try to correct misspellings and typos automatically.

**Short card names** (A.I. only): recognized playing cards will be converted to a format like AH, 5D, 10C, KS etc.

**Recognition credits left** (Google Vision only): your credit balance.

**Automatic recognition:** you can set a timer that will trigger recognition automatically X seconds after the user stopped writing on the Doodle screen or impression board. For example if you set this to 5 seconds, and the user writes a word, text recognition will automatically happen 5 seconds after they stop writing.

**Show recognized text (pop-up):** enable this to see the recognized text either in a pop-up message, or as a large text on the BLACK SCREEN.

**Clear canvas for next drawing:** if you enable this, then you can perform multiple text recognitions using the same impression board (or Doodle screen), without the need to manually clear the previous writing. If you write a new word after a successful text recognition, the doodle screen will be cleared automatically as soon as you start writing.

**Action after recognition:** if you want something to happen automatically after a successful text recognition, set this option to *immediately* or 1 or more seconds.

**Trigger action:** select what should happen automatically after a text recognition.

**Rubik's cube colors:** enable this option if you want to recognize colors on a drawing of a Rubik's cube face.

**CubeSmith integration:** enable this option if you want to automatically switch to CubeSmith after recognizing the colors on a cube face drawing.

**Numbers only:** turn this option ON if you only want to recognize numbers (like for a LOTTO routine or Pi Revelations).

**Pi Revelations (4 digits):** if you enable this option, the app will show you the Pi Revelations numbers after recognizing a 4 digit number.

**LOTTO routine:** enable this if you want to recognize LOTTO numbers.

**Numbers in ascending order:** if you enable this, the LOTTO numbers will be arranged in ascending order.

**Last number as JOKER:** enable this if the last number written should be a JOKER / EXTRA number (won't be included in the ascending order).

**1-digit numbers with zeros:** turn 1 digit numbers to 01, 05, 07 etc. format.

**Remove commas between numbers:** return the recognized LOTTO numbers separated by SPACES instead of commas.

!!! note "Chinese, Hebrew and other alphabets"
    The **Transform Chinese/Hebrew text** switch has moved to the [Text Buffer settings](text-buffer.md#settings), because it affects every text in the buffer.

<br><br>
