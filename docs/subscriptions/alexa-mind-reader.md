---
title: "Bonus routine: Alexa the mind reader"
date: 2026-11-09 20:00:00
---

# Bonus routine: Alexa the mind reader
## (Magic Mind Reader — an Alexa skill for subscribers)

### The routine

The spectator secretly writes a word on a piece of paper — or searches for it on a (fake) Google page. You never touch anything. You simply ask your Alexa: *"Alexa, read my mind"*... and Alexa says the word the spectator is thinking of! :-)

<div style="max-width: 100%;  margin-bottom: 20px;"><div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"><iframe src="https://www.youtube.com/embed/tnSs9wsLvr0?rel=0" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" allowfullscreen></iframe></div></div>

!!! info "For subscribers"
    The Magic Mind Reader skill is a bonus for **MysterSmith subscribers** (MINI, BASIC and PREMIUM). See the [subscription plans](subscription-plans.md).

---

### How does it work?

Alexa says the **last text of your [Text Buffer](../user-guide/text-buffer.md)** that was saved to the server. So any input method of MysterSmith can be the secret source, for example:

* the spectator writes a word on an **impression board**, and the app recognizes it (see [Text recognition](../user-guide/text-recognition.md))
* the spectator searches for something on a fake Google page with **Inject** (see [Send data to Inject](../integrations/inject-send.md))
* WEB-polling, WEB-input, voice recognition, a word your assistant sends... anything that goes into the Text Buffer

---

### Setting it up

1. **Enable the skill** in the Alexa app: search for **Magic Mind Reader** in the Skills, or open the skill's page: [amazon.com/dp/B0DQKYH768](https://www.amazon.com/dp/B0DQKYH768){:target="_blank"}.
2. **Allow it to use your email address**: the Alexa app asks for it when you enable the skill (later: Alexa app → Skills & Games → Your Skills → Magic Mind Reader → Settings → Manage permissions → Email Address).
3. **The same email** must be on your Amazon account and on your MysterSmith account: the **Google account** you sign in with on Android, or your **Apple ID** email on iPhone. (If you signed in with Apple's *Hide My Email*, the two will not match.)
4. In MysterSmith, be **signed in** with an active **subscription**. In **Settings → Text Buffer → Text types to save**, keep the types switched on that you want Alexa to say.
5. Your Alexa has to speak **English** (English US, UK, Canada, Australia or India). It works in other countries too, if the Alexa device's language is set to English.

Then just say: **"Alexa, read my mind"** (or *"Alexa, open read my mind"*).

---

### What Alexa says

* **"Let me see... I think you are thinking of the word: ..."** — the last text of your Text Buffer. It works! :-)
* **"Please grant permission to access your email..."** — allow the email address for the skill in the Alexa app (step 2).
* **"Sorry, the Magic Mind Reader only works with a MysterSmith subscription."** — your account was found, but there's no active subscription on it.
* **"Sure... you are thinking of the word ..."** (a random word) — no MysterSmith account was found with the email of your Amazon account (step 3).
* **"I'm sorry, I don't know the word you are thinking of..."** — your Text Buffer on the server is empty: send a text first, and check that you are signed in (step 4).

!!! tip "Rehearse it"
    Alexa always says the **newest** text. Before the performance, make sure nothing else arrives after the spectator's word (a time, a clipboard text...) — switch off the types you don't need in **Text types to save**.

<br>
