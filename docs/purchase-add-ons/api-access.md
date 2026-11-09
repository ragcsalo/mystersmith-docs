---
title: "API Access (add-on)"
date: 2023-07-22 17:09:48
---

# API Access (add-on)

> **IMPORTANT: add-on validity in the PeekSmith app**
>
> This add-on is for the MysterSmith app. However, if you have purchased the add-on before 1st August 2026, you can also use the add-on in the PeekSmith app (which is now owned/developed by Electricks Ltd.). BASIC and PREMIUM subscribers who already had an active subscription on 1st August 2026, can access the add-on in the PeekSmith app until 31st December 2026. For more info please visit the MysterSmith and PeekSmith facebook groups.

The API Access add-on is a premium feature for the MysterSmith app (if you have previously purchased the add-on for the PeekSmith app, you can use it in MysterSmith too, and don't have to buy the add-on again). 

The price of the add-on is currently  **40 EUR**  (one time fee), but of course it's also **included in all subscription plans**  (MINI, BASIC and PREMIUM). 
 
With the API Access add-on activated, **other apps can talk to MysterSmith**: read data from it, and send texts and commands into it.

### The add-on currently covers:

* the **MysterSmith API**: your **MysterSmith API key** and **MysterSmith API URL**, so other apps can read (and write) your Text Buffer — see [WEB API - reading data](../api/web-api-get.md)
* the **MysterSmith API** data source in WEB-polling (texts sent to your own account)
* **Sync contents from server** in the Text Buffer settings
* the **HTTP Socket** server (`localhost:62369`) — without the add-on, the server doesn't start — see [HTTP Socket](../api/http-socket.md)
* incoming **mystersmith://** links (texts, actions, templates, prompts...) — see [Custom URL scheme](../api/custom-url-scheme.md)
* **Notarized** (it sends texts to the MysterSmith API) — see [Notarized](../integrations/notarized.md)

You find these settings in **Settings → MYSTERSMITH API**.

!!! success "Free for everyone (since v2.3.94)"
    Sending data **from** MysterSmith doesn't need the add-on any more:

    * **Send text to WEB API** (your list of URLs) — **Settings → Output / Screens → SEND TO APPS & API**
    * the **app integrations**: Inject, Bridge, Goo, Motherboard, TimeSmith, InMind, Pi Revelations, Prevision... — **Settings → APP INTEGRATIONS**
    * the actions that open other apps: *open app package*, *open custom URL scheme*, *run Shortcut*, the *iOS apps* actions, *last text to Glyphs*, *display on maps*
    * an NFC tag or a WEB-polling result that opens a URL or an app

    Some mystersmith:// links stay free too: loading a routine (`autostart=...`, `routine=...`), a plain `mystersmith://`, and the home screen shortcuts (`reset`, `default`, `clear`).
 

---

 

**How to use it:** see [HTTP Socket](../api/http-socket.md), [Custom URL scheme](../api/custom-url-scheme.md) and [WEB API - reading data](../api/web-api-get.md).

---

### Purchasing the API Access add-on separately

If you don't want to subscribe for MysterSmith (to get all the available add-ons), you can also purchase the API Access add-on separately for  **40 EUR**  by clicking here:

 **[bsmagic.app/order/?buy=api_access](https://bsmagic.app/order/?buy=api_access){:target="_blank"}** 

You can pay using **PayPal** (PayPal account needed) or **Stripe** (credit cards, Apple Pay and Google Pay are accepted).

![](https://mystersmith.info/assets/images/PayPal_pay.png)

![](https://mystersmith.info/assets/images/Stripe_pay.png)


---

### Activating your code

If you are a MysterSmith subscriber, the add-on is already activated for you. 
 
If you have purchased the add-on separately, or received the code as a gift, you can activate the code by entering it in MysterSmith, in the  **ACCOUNT SETTINGS**  section. Just look for the line " **Do you have a code?** ", and " **Tap to enter** ", and the code activation screen will pop up. 
 
After the code is activated, you can check all your activated add-ons on your account details page. Just tap " **Show details** " under ACCOUNT SETTINGS, and scroll down to the  **PURCHASED ADD-ONS**  section. If you have an active MysterSmith subscription, you will have access to all the available add-ons. 
 
<div class="gallery-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; margin: 20px 0;"><a href="/assets/gallery/14/activate-1.jpeg" class="glightbox" data-gallery="gallery-14" data-description=""><img src="/assets/gallery/14/activate-1.jpeg" alt="" style="width: 100%; height: 120px; object-fit: cover; border-radius: 5px; cursor: zoom-in;"></a><a href="/assets/gallery/14/activate-2.jpeg" class="glightbox" data-gallery="gallery-14" data-description=""><img src="/assets/gallery/14/activate-2.jpeg" alt="" style="width: 100%; height: 120px; object-fit: cover; border-radius: 5px; cursor: zoom-in;"></a><a href="/assets/gallery/14/addon1.jpeg" class="glightbox" data-gallery="gallery-14" data-description=""><img src="/assets/gallery/14/addon1.jpeg" alt="" style="width: 100%; height: 120px; object-fit: cover; border-radius: 5px; cursor: zoom-in;"></a><a href="/assets/gallery/14/addon2.jpeg" class="glightbox" data-gallery="gallery-14" data-description=""><img src="/assets/gallery/14/addon2.jpeg" alt="" style="width: 100%; height: 120px; object-fit: cover; border-radius: 5px; cursor: zoom-in;"></a></div>

