---
title: "Recognized text API"
date: 2022-08-29 14:14:31
---

# Recognized text API

### What can you do with the API?

You can use the "**Recognized text API**" in 3rd party apps to retrieve the last recognized text by the PeekSmith app. The API can also return the last recognized time by the TimeSmith app.  
  
  
<div class="gallery-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; margin: 20px 0;"><a href="https://mystersmith.info/admin/gallery/17/18.jpg" class="glightbox" data-gallery="gallery-17" data-description=""><img src="https://mystersmith.info/admin/gallery/17/18.jpg" alt="" style="width: 100%; height: 120px; object-fit: cover; border-radius: 5px; cursor: zoom-in;"></a><a href="https://mystersmith.info/admin/gallery/17/16.jpg" class="glightbox" data-gallery="gallery-17" data-description=""><img src="https://mystersmith.info/admin/gallery/17/16.jpg" alt="" style="width: 100%; height: 120px; object-fit: cover; border-radius: 5px; cursor: zoom-in;"></a><a href="https://mystersmith.info/admin/gallery/17/17.jpg" class="glightbox" data-gallery="gallery-17" data-description=""><img src="https://mystersmith.info/admin/gallery/17/17.jpg" alt="" style="width: 100%; height: 120px; object-fit: cover; border-radius: 5px; cursor: zoom-in;"></a></div>  
  

### The prerequisites of using the API

To use the API for retrieving the **last recognized text by the PeekSmith app**, you have to purchase the **API access add-on** ([click here for more info](https://mystersmith.info/site/api-access)). To retrieve the **last recognized time by the TimeSmith app**, you don't need to buy additional add-ons.  
  
**IMPORTANT:** If you already purchased the **Multi-Display add-on** earlier, then you already have the API access feature, no need to buy it again!  
  
  

### The secret token

You will need a secret token from either the PeekSmith or the TimeSmith app, which you can find **under your Username and PIN** (in USER SETTINGS). You can re-generate (refresh) your token at any time, in case you want to share it only temporarily.  
  
  

### The API URL

To get the last recognized text from the PeekSmith app (or the last recognized time from the TimeSmith app) in simple text format, you'll have to use the following API URL (enter your own secret token from the PeekSmith or TimeSmith app instead of ABC1234DEF):  
  
https://bsmagic.app/api/get\_rectext.php?token=ABC1234DEF  
  
  

### Advanced API URL

To get the result in a JSON format, add this to the end of the above URLs (after your secret token):  
  
&json=1  
  
The response will have this format:  
  
{"found":1,"id":"23","text":"Testing 123"}  
  
**found:** 1 if a recognized text was found, 0 if not found  
**id:** the ID of the database record (it will increase with every new text reconition)  
**text:** the recognized text (or time)  
  
  
  
  
