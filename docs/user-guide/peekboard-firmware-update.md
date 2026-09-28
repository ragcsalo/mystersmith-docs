---
title: "PeekBoard firmware update"
date: 2026-08-13 10:00:00
---

# PeekBoard firmware update

This guide is for owners of the **Iarvel PeekBoard** or the **Spirit Echo**. Both are the same hardware &ndash; one is a whiteboard, the other a black chalkboard &ndash; so the update process is identical for both models.

To keep your board working with MysterSmith, **two updates** are required:

1. updating the **board firmware** (using the official Iarvel app)
2. updating the **SD card version** (the `BOOT.bin` file)

!!! note "Latest versions that work with MysterSmith"

    * **Firmware (FW):** v47
    * **SD version (BOOT.bin):** v17

    After finishing both updates, connect the board and check that these version numbers are shown.

For an additional reference you can also read the official Spirit Echo firmware update page: [help.electricks.info/docs/spirit/echo/firmware-update](https://help.electricks.info/docs/spirit/echo/firmware-update){:target="_blank"}

---

 

## 1. Updating the board firmware

The board firmware is updated using the **official Iarvel app**.

* connect the board in the Iarvel app
* switch the app language to **Chinese**
* open the **Settings** page of the board
* select **Firmware Update** (the option at the very top of the settings)
* tap the large **upload icon**
* when the update is finished, go back to language settings and switch back to **English**
* disconnect the board

<br>

<div class="gallery-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; margin: 20px 0;"><a href="/assets/gallery/peekboard_fw/FW_1.jpg" class="glightbox" data-gallery="gallery-peekboard-fw" data-description=""><img src="/assets/gallery/peekboard_fw/FW_1.jpg" alt="" style="width: 100%; height: 120px; object-fit: cover; border-radius: 5px; cursor: zoom-in;"></a><a href="/assets/gallery/peekboard_fw/FW_2.jpg" class="glightbox" data-gallery="gallery-peekboard-fw" data-description=""><img src="/assets/gallery/peekboard_fw/FW_2.jpg" alt="" style="width: 100%; height: 120px; object-fit: cover; border-radius: 5px; cursor: zoom-in;"></a><a href="/assets/gallery/peekboard_fw/FW_3.jpg" class="glightbox" data-gallery="gallery-peekboard-fw" data-description=""><img src="/assets/gallery/peekboard_fw/FW_3.jpg" alt="" style="width: 100%; height: 120px; object-fit: cover; border-radius: 5px; cursor: zoom-in;"></a><a href="/assets/gallery/peekboard_fw/FW_4.jpg" class="glightbox" data-gallery="gallery-peekboard-fw" data-description=""><img src="/assets/gallery/peekboard_fw/FW_4.jpg" alt="" style="width: 100%; height: 120px; object-fit: cover; border-radius: 5px; cursor: zoom-in;"></a><a href="/assets/gallery/peekboard_fw/FW_5.jpg" class="glightbox" data-gallery="gallery-peekboard-fw" data-description=""><img src="/assets/gallery/peekboard_fw/FW_5.jpg" alt="" style="width: 100%; height: 120px; object-fit: cover; border-radius: 5px; cursor: zoom-in;"></a><a href="/assets/gallery/peekboard_fw/FW_6.jpg" class="glightbox" data-gallery="gallery-peekboard-fw" data-description=""><img src="/assets/gallery/peekboard_fw/FW_6.jpg" alt="" style="width: 100%; height: 120px; object-fit: cover; border-radius: 5px; cursor: zoom-in;"></a></div>

---

 

## 2. Updating the SD card version

First, **download the latest `BOOT.bin` file** (SD version v17):

**[⬇ Download BOOT.bin (v17)](/assets/download/BOOT.bin){:download="BOOT.bin"}**

Then follow these steps:

* connect **both cables** on the back of the board: the **black** cable is the power, the **white** cable is the data cable for the SD card
* copy the `BOOT.bin` file to the **root of the SD card**, overwriting the previous `BOOT.bin` file
* disconnect both cables, and **press the button on the back of the board for 10 seconds** to restart the board

!!! warning "Check the white cable orientation!"

    The embossed **IARVEL** label on the head of the **white** (data) cable must face **towards the SD card**. Plugging it in the wrong way can prevent the SD card from being read.

<br>

<div class="gallery-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; margin: 20px 0;"><a href="/assets/gallery/peekboard_fw/SD_1_spirit-echo-back.jpeg" class="glightbox" data-gallery="gallery-peekboard-sd" data-description=""><img src="/assets/gallery/peekboard_fw/SD_1_spirit-echo-back.jpeg" alt="" style="width: 100%; height: 120px; object-fit: cover; border-radius: 5px; cursor: zoom-in;"></a><a href="/assets/gallery/peekboard_fw/SD_2_sdcard-slot-open-scaled.jpg" class="glightbox" data-gallery="gallery-peekboard-sd" data-description=""><img src="/assets/gallery/peekboard_fw/SD_2_sdcard-slot-open-scaled.jpg" alt="" style="width: 100%; height: 120px; object-fit: cover; border-radius: 5px; cursor: zoom-in;"></a><a href="/assets/gallery/peekboard_fw/SD_3_sdcard-mount-plugs.jpg" class="glightbox" data-gallery="gallery-peekboard-sd" data-description=""><img src="/assets/gallery/peekboard_fw/SD_3_sdcard-mount-plugs.jpg" alt="" style="width: 100%; height: 120px; object-fit: cover; border-radius: 5px; cursor: zoom-in;"></a><a href="/assets/gallery/peekboard_fw/SD_4_echo-sd-card-finder.webp" class="glightbox" data-gallery="gallery-peekboard-sd" data-description=""><img src="/assets/gallery/peekboard_fw/SD_4_echo-sd-card-finder.webp" alt="" style="width: 100%; height: 120px; object-fit: cover; border-radius: 5px; cursor: zoom-in;"></a></div>

---

 

## Finishing up

After **both** updates are done, reconnect the board in either the **Iarvel** or the **MysterSmith** app, and check the version numbers &ndash; they should read **FW v47** and **SD v17**.

<br><br>
