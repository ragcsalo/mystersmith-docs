---
title: "Send data to Inject"
date: 2024-04-04 10:12:49
---

# Send data to Inject

### The routine

You open a (fake) Google search page on the spectator's phone, and pretend to search for something (place, object, country, people etc.), then place the phone face down on a table. You give a spectator an impression board, and they write something on it. When they are ready, after a few seconds they can turn over their phone, and they will freak out that you have searched for the same thing they wrote!!! 
<br><br>

 
<div class="gallery-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; margin: 20px 0;"><a href="/assets/gallery/7/9uj.jpg" class="glightbox" data-gallery="gallery-7" data-description="fake Google on spectator's phone"><img src="/assets/gallery/7/9uj.jpg" alt="fake Google on spectator's phone" style="width: 100%; height: 120px; object-fit: cover; border-radius: 5px; cursor: zoom-in;"></a><a href="/assets/gallery/7/18.jpg" class="glightbox" data-gallery="gallery-7" data-description="spectator writes something"><img src="/assets/gallery/7/18.jpg" alt="spectator writes something" style="width: 100%; height: 120px; object-fit: cover; border-radius: 5px; cursor: zoom-in;"></a><a href="/assets/gallery/7/10.jpg" class="glightbox" data-gallery="gallery-7" data-description="text is recognized"><img src="/assets/gallery/7/10.jpg" alt="text is recognized" style="width: 100%; height: 120px; object-fit: cover; border-radius: 5px; cursor: zoom-in;"></a><a href="/assets/gallery/7/11.jpg" class="glightbox" data-gallery="gallery-7" data-description="you can peek the text"><img src="/assets/gallery/7/11.jpg" alt="you can peek the text" style="width: 100%; height: 120px; object-fit: cover; border-radius: 5px; cursor: zoom-in;"></a><a href="/assets/gallery/7/12.jpg" class="glightbox" data-gallery="gallery-7" data-description="send text to Inject"><img src="/assets/gallery/7/12.jpg" alt="send text to Inject" style="width: 100%; height: 120px; object-fit: cover; border-radius: 5px; cursor: zoom-in;"></a></div> 

---

 

### How it works

Basically you have to do a text recognition from an impression board (or the in-app Doodle screen, or using the WEB-doodle on another spectator's phone), and the app will send the recognized text to your Inject account's fake Google search page (use **https://qq1.us/username** ). Alternatively you can use other text input methods, like manual text entry in the MysterSmith app, reading an NFC card, polling a WEB API source or using the WEB-thumper from any browser, and send that text to Inject. 
 
If you go with text recognition, please read all info on this page:  **[Text recognition](https://mystersmith.info/user-guide/text-recognition/)** 
 

---

 

### API Access add-on needed

To be able to send data from the MysterSmith app to 3rd party apps and APIs, you have to buy the **"API Access" add-on**. Alternatively **you can subscribe to MysterSmith**, and get access to all the available add-ons. 
 
More information:  **["API Access" add-on](https://mystersmith.info/purchase-add-ons/api-access/)** 
 

---

 

### Inject account setup

First of all you have to buy **Inject 2.0**  by Greg Rostami, and set up a username. Then in the MysterSmith app go to Settings, and scroll down to the **API ACCESS** settings. There you can enter your **Inject ID / username**. The Inject **account number** should be automatically filled in (in some cases it's not the same as the Inject ID). In case the account number is not properly set automatically, you can manually enter it (ask for help from someone who knows how to get the account number). 
<br><br>
 
 
<div class="gallery-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; margin: 20px 0;"><a href="/assets/gallery/8/Screenshot_20250624_171636_MysterSmith.jpg" class="glightbox" data-gallery="gallery-8" data-description=""><img src="/assets/gallery/8/Screenshot_20250624_171636_MysterSmith.jpg" alt="" style="width: 100%; height: 120px; object-fit: cover; border-radius: 5px; cursor: zoom-in;"></a><a href="/assets/gallery/8/Screenshot_20250624_171720_MysterSmith.jpg" class="glightbox" data-gallery="gallery-8" data-description=""><img src="/assets/gallery/8/Screenshot_20250624_171720_MysterSmith.jpg" alt="" style="width: 100%; height: 120px; object-fit: cover; border-radius: 5px; cursor: zoom-in;"></a><a href="/assets/gallery/8/Screenshot_20250624_171728_MysterSmith.jpg" class="glightbox" data-gallery="gallery-8" data-description=""><img src="/assets/gallery/8/Screenshot_20250624_171728_MysterSmith.jpg" alt="" style="width: 100%; height: 120px; object-fit: cover; border-radius: 5px; cursor: zoom-in;"></a></div> 

---

 

### Send text to Inject (manually)

The easiest and best way to send data to Inject is to manually trigger the " **last text to Inject** " action. You can select a trigger in the **ACTION CONTROL** section of the Settings (or at any other section where you can set actions). A **trigger** can be any of the following actions: 
 

* volume button press
* PeekSmith 3 button press
* PeekSmith 3 magnet sensor
* PeekSmith 3 tap
* Atom remote button short/long press
* Apple watch tap/swipe
* WearOS watch tap/swipe
*...and many-many more (please explore the settings)

 
As soon as you trigger the "last text to Inject" action (in the "Text buffer" section of the actions list), the fake Google page will receive the text and perform the real Google search. 
<br><br>
 
 
<div class="gallery-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; margin: 20px 0;"><a href="/assets/gallery/9/6f86d5bb-1bec-43b3-8118-b5cc6d67f5ef.jpeg" class="glightbox" data-gallery="gallery-9" data-description=""><img src="/assets/gallery/9/6f86d5bb-1bec-43b3-8118-b5cc6d67f5ef.jpeg" alt="" style="width: 100%; height: 120px; object-fit: cover; border-radius: 5px; cursor: zoom-in;"></a><a href="/assets/gallery/9/e253feef-4f0d-4dc2-8e28-cccac88b8046.jpeg" class="glightbox" data-gallery="gallery-9" data-description=""><img src="/assets/gallery/9/e253feef-4f0d-4dc2-8e28-cccac88b8046.jpeg" alt="" style="width: 100%; height: 120px; object-fit: cover; border-radius: 5px; cursor: zoom-in;"></a></div> 

---

 

### Second method: send to active APIs (manually)

With this method you can send the text not only to Inject, but to any other active WEB API URLs as well. To add Inject as an API URL, you have to go to **API ACCESS** and select "Send text to WEB API" - " **Manage** ". In a new empty field enter " **inject** " (see the screenshot below), and make sure the toggle is activated. You can add other URLs as well, and activate them with the toggle. 
 
When you trigger the action "last text to WEB APIs" then all active URLs will receive the text. I recommend using this method only if you need to send the text to other targets as well, and not only to Inject. 
<br><br>
 
 
<div class="gallery-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; margin: 20px 0;"><a href="/assets/gallery/10/32c6306e-4463-4a4d-b8d6-1f9877acb010.jpeg" class="glightbox" data-gallery="gallery-10" data-description=""><img src="/assets/gallery/10/32c6306e-4463-4a4d-b8d6-1f9877acb010.jpeg" alt="" style="width: 100%; height: 120px; object-fit: cover; border-radius: 5px; cursor: zoom-in;"></a><a href="/assets/gallery/10/5c591ab1-f425-45ba-8cf2-c21baa93b8c1.jpeg" class="glightbox" data-gallery="gallery-10" data-description=""><img src="/assets/gallery/10/5c591ab1-f425-45ba-8cf2-c21baa93b8c1.jpeg" alt="" style="width: 100%; height: 120px; object-fit: cover; border-radius: 5px; cursor: zoom-in;"></a><a href="/assets/gallery/10/177cca1e-3e6b-43ec-a8c5-c35ed9946e2b.jpeg" class="glightbox" data-gallery="gallery-10" data-description=""><img src="/assets/gallery/10/177cca1e-3e6b-43ec-a8c5-c35ed9946e2b.jpeg" alt="" style="width: 100%; height: 120px; object-fit: cover; border-radius: 5px; cursor: zoom-in;"></a><a href="/assets/gallery/10/1603c71e-dcfe-4076-b82e-36f0ec809cc6.jpeg" class="glightbox" data-gallery="gallery-10" data-description=""><img src="/assets/gallery/10/1603c71e-dcfe-4076-b82e-36f0ec809cc6.jpeg" alt="" style="width: 100%; height: 120px; object-fit: cover; border-radius: 5px; cursor: zoom-in;"></a></div> 

---

 

### Third method: send to active APIs (automatically)

This method is almost the same as the previous one, except this time you add a **! mark** before "inject" when you enter the API URL. If you enter " **!inject** " then the recognized text (or the data from other sources) will be sent to Inject automatically, without using any action trigger. 
 
This method **can be dangerous**, because you might **accidentally send data** to Inject. I recommend using the previous methods, unless you need to send data to Inject automatically, without any interaction (action trigger). Of course all other active API URLs that start with a ! mark will also receive the data. 
 
 
 
![](https://mystersmith.info/assets/images/PS_Inject.png) 
 
 
