# List of available actions

These are the actions you can choose for a **trigger** (button, gesture, recognition, WEB-polling, timer...), put into an **action list**, or run from another app with the [Custom URL scheme](custom-url-scheme.md#actions) / [HTTP Socket](http-socket.md) (`action={CODE}`).

An action shows up in the app's action picker only when you can use it: when the device is switched on in **MY DEVICES**, the feature is enabled in **AVAILABLE FEATURES**, or the add-on / API key it needs is there. The **Needs** column tells you what that is.

!!! tip "Using the code"
    The **Code** is the action's internal name, for `action=` links: `mystersmith://?action=vibrate_short,pause2,blackscreen_show`. Actions marked *asks for a #ID* need a number — use their own URL parameter (`template=`, `predefined=`, `aiprompt=`, `recording=`, `routine=`, `imagetemplate...=`) instead.

*465 actions in 47 groups. This list is updated from time to time - the app may already have a few more.*

---

## General

| Action | Code | Needs / notes |
|---|---|---|
| vibrate short | `vibrate_short` |  |
| vibrate long | `vibrate_long` |  |
| vibrate double | `vibrate_double` |  |
| minimize app (to background) | `minimize_app` | Android only |
| EXIT app (disconnect) | `exit_app` |  |
| EXIT app (instant) | `force_exit_app` |  |
| start fake homescreen | `start_fakehomescreen` | Fake homescreen |
| start fake lockscreen | `start_fakelockscreen` | Passcode input (Advanced Input Methods add-on) |
| start swipe screen | `swipescreen_start` | Swipe screen (Advanced Input Methods add-on) |
| start MORSE INPUT screen | `morsescreen_start` |  |
| morse code short (.) | `morse_dot` |  |
| morse code long (-) | `morse_dash` |  |
| Morse: finalize text | `morse_finalize` |  |
| Morse: delete last letter | `morse_backspace` |  |
| Morse: add a space | `morse_space` |  |
| finalize swipe screen number | `swipe_finalize` | Swipe screen (Advanced Input Methods add-on) |
| reset swipe screen | `reset_swipes` | Swipe screen (Advanced Input Methods add-on) |
| switch to next swipe method | `swipe_next_method` | Swipe screen (Advanced Input Methods add-on) |
| PeekSmith standby | `standby` | PeekSmith / Bond |
| disconnect PeekSmith/Bond | `disconn_ps` | PeekSmith / Bond |
| disconnect SB Watch | `disconn_sb` | SB Watch 2 |
| perform WEB-polling once | `poll_once` | WEB-polling |
| WEB-polling START | `start_webpolling` | WEB-polling |
| WEB-polling STOP | `stop_webpolling` | WEB-polling |
| WEB-polling START/STOP | `startstop_webpolling` | WEB-polling |
| WEB input START/STOP | `startstop_webinput` | WEB-input |
| built-in NFC reader START/STOP | `startstop_nfc` | NFC reader |
| monitor last photo in gallery | `start_monitor_gallery` | Last photo in gallery (Image Buffer add-on) |
| stop monitoring last photo | `stop_monitor_gallery` | Last photo in gallery (Image Buffer add-on) |
| Apple Watch motion ON | `iwatch_motion_on` | Apple Watch (External Displays add-on), iOS only |
| Apple Watch motion OFF | `iwatch_motion_off` | Apple Watch (External Displays add-on), iOS only |
| WearOS Watch motion ON | `iwatch_motion_on` | WearOS watch (External Displays add-on), Android only |
| WearOS Watch motion OFF | `iwatch_motion_off` | WearOS watch (External Displays add-on), Android only |
| increase screen brightness (+) | `increase_brightness` |  |
| decrease screen brightness (-) | `decrease_brightness` |  |
| increase Volume (+) | `increase_volume` |  |
| decrease Volume (-) | `decrease_volume` |  |

---

## Voice Recognition

*Needs: Voice recognition (Advanced Input Methods add-on)*

| Action | Code | Needs / notes |
|---|---|---|
| Voice recognition START | `voicerec_start` |  |
| Voice recognition STOP | `voicerec_stop` |  |
| Voice recognition START/STOP | `voicerec_startstop` |  |
| Voice recognition CANCEL | `voicerec_cancel` |  |

---

## Prediction photo

*Needs: Prediction Photo (subscription or add-on)*

| Action | Code | Needs / notes |
|---|---|---|
| save image to phone gallery | `imagebuffer_to_gallery` |  |
| delete last saved photo | `prediction_photo_delete` |  |

---

## Remote Control

*Needs: Advanced Input Methods add-on*

| Action | Code | Needs / notes |
|---|---|---|
| remote mode: default | `remote_inputmode_default` |  |
| remote mode: text/numbers | `remote_inputmode_textnumbers` |  |
| remote mode: cards | `remote_inputmode_cards` |  |
| remote mode: swipe | `remote_inputmode_swipe` | Swipe screen (Advanced Input Methods add-on) |
| remote mode: morse code | `remote_inputmode_morse` |  |
| enter number (0-9) | `enter_numdigit` |  |
| delete last digit/character | `delete_lastchar` |  |
| send text/number to buffer | `finalize_textnum` |  |
| send swipe UP | `enter_swipe_up` | Swipe screen (Advanced Input Methods add-on) |
| send swipe DOWN | `enter_swipe_down` | Swipe screen (Advanced Input Methods add-on) |
| send swipe LEFT | `enter_swipe_left` | Swipe screen (Advanced Input Methods add-on) |
| send swipe RIGHT | `enter_swipe_right` | Swipe screen (Advanced Input Methods add-on) |

---

## Phone Motion Control

*Needs: Phone motion control (Advanced Input Methods add-on)*

| Action | Code | Needs / notes |
|---|---|---|
| motion control START | `phoneControl_manualStart` |  |
| motion control STOP | `phoneControl_manualStop` |  |
| motion control START/STOP | `phoneControl_manualStartStop` |  |
| orientation control | `phoneControl_setOrientation` |  |
| rotation control (flat) | `phoneControl_setRotate` |  |
| tilt control (4 sides) | `phoneControl_setTilt` |  |

---

## Calculator

*Needs: Calculator input (Advanced Input Methods add-on)*

| Action | Code | Needs / notes |
|---|---|---|
| calculator value to Text Buffer | `calculator_to_textbuffer` |  |
| display forced number | `calculator_display_forcednum` |  |

---

## Iarvel Color Match

*Needs: Iarvel Color Match*

| Action | Code | Needs / notes |
|---|---|---|
| add Color Match to text buffer | `colormatch_to_textbuffer` |  |

---

## Text/image recognition

*Needs: Text recognition*

| Action | Code | Needs / notes |
|---|---|---|
| do text recognition | `recognize_text` |  |
| FORCE text recognition | `force_recognize_text` |  |
| Switch between drawing/text | `switch_textrec_image_text` |  |
| Text recognition ON | `textrecognize_on` |  |
| Text recognition OFF | `textrecognize_off` |  |
| Text recognition ON/OFF | `textrecognize_onoff` |  |
| Recognize text/numbers (A.I.) | `textrec_gpt` |  |
| Recognize playing card (A.I.) | `cardrec_gpt` |  |
| Recognize time (A.I.) | `timerec_gpt` |  |
| Recognize date (A.I.) | `daterec_gpt` |  |
| Recognize celebrity (A.I.) | `celebrec_gpt` |  |
| Recognize animal (A.I.) | `animalrec_gpt` |  |
| Recognize city (A.I.) | `cityrec_gpt` |  |
| Recognize ESP symbol (A.I.) | `esprec_gpt` |  |
| Recognize drawing (A.I.) | `imagerec_gpt` |  |
| Analyze drawing (A.I.) | `analyze_gpt` |  |
| Analyze photo (A.I.) | `photo_subject_gpt` |  |
| Rotate handwriting to portrait | `detect_handwriting_orientation` |  |

---

## Text buffer

| Action | Code | Needs / notes |
|---|---|---|
| show/hide text buffer contents | `showhide_textbuffer` |  |
| show last text | `last_textbuffer_element` |  |
| show previous text | `show_previous_textbuffer` |  |
| show next text | `show_next_textbuffer` |  |
| auto cycle text | `auto_cycle_textbuffer` |  |
| clear text buffer | `clear_recbuffer` |  |
| delete last text | `delete_last_text` |  |
| copy last text to clipboard | `lastext_to_clipboard` |  |
| translate last text | `translate_last_text` | A.I. translation engine |
| last text to WEB APIs | `lastrec_to_webapi` | Send data to apps & APIs (API Access add-on) |
| last text to Bridge | `text_to_bridge` | Send data to apps & APIs (API Access add-on) |
| last text to Inject | `lastrec_to_inject` | Send data to apps & APIs (API Access add-on) |
| last text to Motherboard | `text_to_motherboard` | Send data to apps & APIs (API Access add-on) |
| text to OpenAI drawing | `text_to_openai_drawing` | OpenAI (A.I. Features add-on + your API key) |
| City to OpenAI color drawing | `city_to_openai_drawing` | OpenAI (A.I. Features add-on + your API key) |
| City to OpenAI B/W drawing | `city_to_openai_drawing_BW` | OpenAI (A.I. Features add-on + your API key) |
| City+title to OpenAI color drawing | `cityname_to_openai_drawing` | OpenAI (A.I. Features add-on + your API key) |
| City+title to OpenAI B/W drawing | `cityname_to_openai_drawing_BW` | OpenAI (A.I. Features add-on + your API key) |
| text to Gemini drawing | `text_to_gemini_drawing` | Gemini (A.I. Features add-on + your API key, or free Gemini) |
| City to Gemini color drawing | `city_to_gemini_drawing` | Gemini (A.I. Features add-on + your API key, or free Gemini) |
| City to Gemini B/W drawing | `city_to_gemini_drawing_BW` | Gemini (A.I. Features add-on + your API key, or free Gemini) |
| City+title to Gemini color drawing | `cityname_to_gemini_drawing` | Gemini (A.I. Features add-on + your API key, or free Gemini) |
| City+title to Gemini B/W drawing | `cityname_to_gemini_drawing_BW` | Gemini (A.I. Features add-on + your API key, or free Gemini) |
| hidden reveal - A.I. image | `hidden_reveal_ai_image` | subscription |
| text to TrueSketch image | `last_text_to_truesketch` |  |
| text to TrueWrite image | `last_text_to_truewrite_image` |  |
| text to Quickdraw | `text_to_quickdraw` |  |
| display on maps | `lastext_to_maps` | Send data to apps & APIs (API Access add-on) |

---

## Image buffer

*Needs: Image buffer (Image Buffer add-on)*

| Action | Code | Needs / notes |
|---|---|---|
| open/close thumbnail gallery | `imagebuffer_show_thumbnails` |  |
| open/close image browser | `show_imagebuffer` |  |
| show last image | `imagebuffer_show_last` |  |
| show previous image | `imagebuffer_swipe_prev` |  |
| show next image | `imagebuffer_swipe_next` |  |
| save doodle drawing to Image Buffer | `doodle_to_imagebuffer` |  |
| clear Image Buffer | `clear_image_buffer` |  |
| delete last image from buffer | `delete_last_imagebuffer` |  |
| copy image to Doodle canvas | `imagebuffer_to_doodle_canvas` |  |
| generate image from template | `generate_image_from_template` | Image Template Editor (subscription or add-on), asks for a #ID (Image template) |

---

## Dice input

*Needs: Dice input (Advanced Input Methods add-on)*

| Action | Code | Needs / notes |
|---|---|---|
| START/reset dice routine | `reset_dice_routine` |  |
| finalize dice values | `save_dice_values` |  |
| dice total to Text Buffer | `save_dice_total` |  |
| dice ascending to Text Buffer | `save_dice_ascending` |  |
| dice descending to Text Buffer | `save_dice_descending` |  |

---

## Doodle screen

| Action | Code | Needs / notes |
|---|---|---|
| clear doodle | `doodle_clear` |  |
| clear all pages (smart pens) | `clear_all_pages` |  |
| start Doodle screen | `doodle_start` |  |
| start BLACK screen | `black_start` |  |
| start WEB-doodle | `webdoodle_start` | WEB-doodle |
| save doodle drawing to old API | `save_doodle_to_server` |  |
| load next saved doodle | `load_nextdoodle` |  |
| keep board awake | `board_keepawake` |  |
| OpenAI drawing remake | `analyze_regenerate_gpt` | OpenAI (A.I. Features add-on + your API key) |
| text to Doodle | `basictext_to_doodle` |  |
| handwriting to Doodle | `handwriting_to_doodle` |  |
| signature to Doodle | `signature_to_doodle` |  |
| playing card to Doodle | `playingcard_to_doodle` |  |
| clock to Doodle | `clock_to_doodle` |  |
| magic square to Doodle | `magic_square_to_doodle` |  |
| ESP symbol to Doodle | `esp_to_doodle` |  |
| emoji to Doodle | `emoji_to_doodle` |  |
| dice to Doodle | `dice_to_doodle` |  |
| last photo to Doodle | `lastphoto_to_doodle` | Image buffer (Image Buffer add-on) |
| image template to Doodle screen | `image_template_to_doodle` | Image Template Editor (subscription or add-on), asks for a #ID (Image template) |
| show next Ultra Sharpie page | `ultrapen_show_nextpage` | Ultra Sharpie/Pen |
| show next Penthal page | `penthal_show_nextpage` | Nova/Penthal pen |

---

## iOS apps

*Needs: Send data to apps & APIs (API Access add-on), iOS only*

| Action | Code | Needs / notes |
|---|---|---|
| open Photos | `ios_openapp_photos_redirect` |  |
| open Notes | `ios_openapp_mobilenotes` |  |
| open Maps | `ios_openapp_maps` |  |
| open Calendar | `ios_openapp_calshow` |  |
| open Music | `ios_openapp_music` |  |
| open Apple TV | `ios_openapp_videos` |  |
| open iBooks | `ios_openapp_ibooks` |  |
| open Instagram | `ios_openapp_instagram` |  |
| open Facebook | `ios_openapp_fb` |  |
| open Google Chrome | `ios_openapp_googlechrome` |  |

---

## BLACK SCREEN

| Action | Code | Needs / notes |
|---|---|---|
| BLACK screen text size +1 | `black_fontsize_plus` |  |
| BLACK screen text size -1 | `black_fontsize_minus` |  |
| BLACK screen opacity +1 | `blackscreen_opacity_plus` |  |
| BLACK screen opacity -1 | `blackscreen_opacity_minus` |  |
| show BLACK screen contents | `blackscreen_show` |  |
| peek BLACK screen contents | `blackscreen_peek` |  |
| hide BLACK screen contents | `blackscreen_hide` |  |
| quickly peek BLACK screen | `peek_blackscreen` |  |

---

## Quantum

*Needs: Quantum*

| Action | Code | Needs / notes |
|---|---|---|
| force mode ON | `quantum_force_on` |  |
| force mode OFF | `quantum_force_off` |  |
| set force number | `quantum_setforce` |  |

---

## Audio Assistant

*Needs: Audio Assistant add-on*

| Action | Code | Needs / notes |
|---|---|---|
| last text to voice | `lastext_voice` |  |
| previous text to voice | `previous_text_voice` |  |
| next text to voice | `next_text_voice` |  |
| repeat last voice | `repeat_voice` |  |
| last text to A.I. voice | `text_to_ai_voice` |  |
| repeat last A.I. voice | `repeat_last_ai_voice` |  |
| save last A.I. voice audio | `save_last_ai_voice` |  |

---

## App Integrations

*Needs: Send data to apps & APIs (API Access add-on)*

| Action | Code | Needs / notes |
|---|---|---|
| send time to TimeSmith | `send_to_timesmith` |  |
| show last Inject result | `last_inject_buffer` |  |
| show Pi Revelations numbers | `show_pi_revelations` |  |
| Pi numbers to handwriting | `pi_numbers_to_doodle` |  |
| Pi numbers to WEB APIs | `pinumbers_to_webapi` |  |
| Scrabble to Bridge | `scrabble_to_bridge` |  |
| send doodle drawing to Stranger/Nexus | `doodle_stranger` |  |
| last text to Glyphs | `text2glyphs` | iOS only |
| enable Dictionary API for apps | `dictionary_enable` |  |
| Dictionary API position | `dictionary_getword_info` |  |
| re-display Dictionary info | `dictionary_display_info` |  |
| process InMind word (default language) | `process_inmind_word_default` | InMind Wheel |
| process InMind word (English) | `process_inmind_word_english` | InMind Wheel |
| process InMind word (any language) | `process_inmind_word_anylang` | InMind Wheel |
| process InMind word (English - legacy API) | `process_inmind_fakeword` | InMind Wheel |
| delete last InMind letter | `delete_last_inmind_letter` | InMind Wheel |
| InMind word reset | `inmind_fakeword_reset` | InMind Wheel |
| recite Pi Max numbers | `pimax_recite` |  |
| Pi Max page first numbers | `pimax_pagestart` |  |
| Pi Max date position (MMdd) | `pimax_getdate_MMdd` |  |
| Pi Max date position (ddMM) | `pimax_getdate_ddMM` |  |

---

## PeekSmith 3 / Bond

*Needs: PeekSmith / Bond*

| Action | Code | Needs / notes |
|---|---|---|
| vibration ON/OFF | `vibra_onoff` |  |
| scrolling ON/OFF | `scrolling_onoff` |  |
| upside down ON/OFF | `upside_down_onoff` |  |
| mirror ON/OFF | `screen_mirror_onoff` |  |
| smart text ON/OFF | `smart_text_onoff` |  |

---

## Iarvel Peek / Spirit Echo boards

*Needs: Iarvel Peek / Spirit Echo*

| Action | Code | Needs / notes |
|---|---|---|
| clear Peek Board | `iarvel_peekboard_clear` |  |
| text to Peek Board | `text_to_iarvel_peekboard` |  |
| TrueWrite to Peek Board | `TrueWrite_to_iarvel_peekboard` |  |
| TrueSketch to Peek Board | `TrueSketch_to_iarvel_peekboard` |  |
| doodle drawing to Peek Board | `doodle_to_iarvel_peekboard` |  |
| handwriting to Peek Board | `handwriting_to_iarvel_peekboard` |  |
| signature to Peek Board | `signature_to_iarvel_peekboard` |  |
| ESP symbol to Peek Board | `esp_to_iarvel_peekboard` |  |
| dice to Peek Board | `dice_to_iarvel_peekboard` |  |
| playing card to Peek Board | `playingcard_to_iarvel_peekboard` |  |
| clock to Peek Board | `clock_to_iarvel_peekboard` |  |
| magic square to Peek Board | `magic_square_to_iarvel_peekboard` |  |
| Quickdraw to Peek Board | `quickdraw_to_iarvel_peekboard` |  |
| Peek Board force refresh/clear | `iarvel_peekboard_clear_forceflash` |  |
| Peek Board force reconnect | `iarvel_peekboard_force_reconnect` |  |
| image buffer to Peek Board | `imagebuffer_to_iarvel_peekboard` |  |
| last photo to Peek Board | `lastphoto_to_iarvel_peekboard` |  |
| image template to Peek Board | `image_template_to_iarvel_peekboard` | Image Template Editor (subscription or add-on), asks for a #ID (Image template) |

---

## LifeLike Sketcher

*Needs: Lifelike Sketcher (A.I. Features add-on)*

| Action | Code | Needs / notes |
|---|---|---|
| last text to LifeLike drawing | `text_to_lifelike` |  |
| LifeLike drawing remake | `analyze_regenerate_lifelike` |  |
| display next drawing | `display_next_ai_drawing` |  |

---

## Printer

*Needs: Printers add-on*

| Action | Code | Needs / notes |
|---|---|---|
| doodle drawing to printer | `doodle_to_printer` |  |
| handwriting to printer | `handwriting_to_printer` |  |
| signature to printer | `signature_to_printer` |  |
| playing card to printer | `playingcard_to_printer` |  |
| clock to printer | `clock_to_printer` |  |
| magic square to printer | `magic_square_to_printer` |  |
| last photo to printer | `lastphoto_to_printer` |  |
| image buffer to printer | `imagebuffer_to_printer` | Image buffer (Image Buffer add-on) |
| image template to printer | `image_template_to_printer` | Image Template Editor (subscription or add-on), asks for a #ID (Image template) |
| feed paper 5mm | `printer_feed_5mm` |  |
| feed paper 25mm | `printer_feed_25mm` |  |

---

## Cosmos

*Needs: Cosmos/L2, Printers add-on*

| Action | Code | Needs / notes |
|---|---|---|
| doodle drawing to Cosmos | `doodle_to_cosmos` |  |
| handwriting to Cosmos | `handwriting_to_cosmos` |  |
| signature to Cosmos | `signature_to_cosmos` |  |
| dice to Cosmos | `dice_to_cosmos` |  |
| playing card to Cosmos | `playingcard_to_cosmos` |  |
| clock to Cosmos | `clock_to_cosmos` |  |
| magic square to Cosmos | `magic_square_to_cosmos` |  |
| last photo to Cosmos | `lastphoto_to_cosmos` |  |

---

## Glyphs/Peripage printer

*Needs: Glyphs/Peripage, Printers add-on*

| Action | Code | Needs / notes |
|---|---|---|
| doodle drawing to Glyphs/Peripage | `doodle_to_peripage` |  |
| handwriting to Glyphs/Peripage | `handwriting_to_peripage` |  |
| signature to Glyphs/Peripage | `signature_to_peripage` |  |
| dice to Glyphs/Peripage | `dice_to_peripage` |  |
| playing card to Glyphs/Peripage | `playingcard_to_peripage` |  |
| clock to Glyphs/Peripage | `clock_to_peripage` |  |
| magic square to Glyphs/Peripage | `magic_square_to_peripage` |  |
| last photo to Glyphs/Peripage | `lastphoto_to_peripage` |  |

---

## Pitata printer

*Needs: Pitata Printer, Printers add-on*

| Action | Code | Needs / notes |
|---|---|---|
| doodle drawing to Pitata printer | `doodle_to_pprinter` |  |
| signature to Pitata printer | `pprinter_signature` |  |
| dice to Pitata printer | `dice_to_pprinter` |  |
| playing card to Pitata printer | `playingcard_to_pprinter` |  |
| handwriting to Pitata printer | `handwriting_to_pprinter` |  |
| clock to Pitata printer | `clock_to_pprinter` |  |
| magic square to Pitata printer | `magic_square_to_pprinter` |  |
| last photo to Pitata printer | `lastphoto_to_pprinter` |  |

---

## Cat printer

*Needs: Cat printer, Printers add-on*

| Action | Code | Needs / notes |
|---|---|---|
| doodle drawing to CAT printer | `doodle_to_cat_printer` |  |
| handwriting to CAT printer | `handwriting_to_cat_printer` |  |
| signature to CAT printer | `signature_to_cat_printer` |  |
| dice to CAT printer | `dice_to_cat_printer` |  |
| playing card to CAT printer | `playingcard_to_cat_printer` |  |
| clock to CAT printer | `clock_to_cat_printer` |  |
| magic square to CAT printer | `magic_square_to_cat_printer` |  |
| last photo to CAT printer | `lastphoto_to_cat_printer` |  |

---

## Temu printer

*Needs: Temu printer, Printers add-on*

| Action | Code | Needs / notes |
|---|---|---|
| doodle drawing to Temu printer | `doodle_to_temu_printer` |  |
| handwriting to Temu printer | `handwriting_to_temu_printer` |  |
| signature to Temu printer | `signature_to_temu_printer` |  |
| dice to Temu printer | `dice_to_temu_printer` |  |
| playing card to Temu printer | `playingcard_to_temu_printer` |  |
| clock to Temu printer | `clock_to_temu_printer` |  |
| magic square to Temu printer | `magic_square_to_temu_printer` |  |
| last photo to Temu printer | `lastphoto_to_temu_printer` |  |

---

## Color photo printer

*Needs: Color photo printer, Printers add-on*

| Action | Code | Needs / notes |
|---|---|---|
| image buffer to color photo printer | `imagebuffer_to_opp_photoprinter` | Image buffer (Image Buffer add-on) |
| last photo to color photo printer | `lastphoto_to_opp_photoprinter` |  |
| doodle drawing to color photo printer | `doodle_to_opp_photoprinter` |  |
| image template to color photo printer | `image_template_to_opp_photoprinter` | Image Template Editor (subscription or add-on), asks for a #ID (Image template) |

---

## Paperang printer

*Needs: Paperang printer, Printers add-on*

| Action | Code | Needs / notes |
|---|---|---|
| doodle drawing to Paperang printer | `doodle_to_paperang` |  |
| handwriting to Paperang printer | `handwriting_to_paperang` |  |
| signature to Paperang printer | `signature_to_paperang` |  |
| dice to Paperang printer | `dice_to_paperang` |  |
| playing card to Paperang printer | `playingcard_to_paperang` |  |
| clock to Paperang printer | `clock_to_paperang` |  |
| magic square to Paperang printer | `magic_square_to_paperang` |  |
| last photo to Paperang printer | `lastphoto_to_paperang` |  |

---

## Teleport

*Needs: Teleport*

| Action | Code | Needs / notes |
|---|---|---|
| doodle drawing to Teleport | `doodle_to_teleport` |  |
| handwriting to Teleport | `handwriting_to_teleport` |  |
| signature to Teleport | `signature_to_teleport` |  |
| last text to Teleport paper | `teleport_notepaper` |  |
| last text to Teleport yellow card | `teleport_yellowcard` |  |
| Pi Revelations to Teleport | `pinumbers_to_teleport` |  |
| playing card to Teleport | `playingcard_to_teleport` |  |
| clock drawing to Teleport | `clock_to_teleport` |  |
| magic square to Teleport | `magic_square_to_teleport` |  |
| ESP symbol to Teleport | `esp_to_teleport` |  |
| dice to Teleport | `dice_to_teleport` |  |
| clear Teleport (black) | `teleport_erase` |  |
| last photo to Teleport | `lastphoto_to_teleport` |  |
| image buffer to Teleport | `imagebuffer_to_teleport` | Image buffer (Image Buffer add-on) |
| image template to Teleport | `image_template_to_teleport` | Image Template Editor (subscription or add-on), asks for a #ID (Image template) |
| emoji to Teleport | `emoji_to_teleport` |  |

---

## Lumen Prism

*Needs: Lumen Prism (Lumen PRO)*

| Action | Code | Needs / notes |
|---|---|---|
| handwriting to Prism | `handwriting_to_lumen_prism` |  |
| signature to Prism | `signature_to_lumen_prism` |  |
| doodle drawing to Prism | `doodle_to_lumen_prism` |  |
| ESP symbol to Prism | `esp_to_lumen_prism` |  |
| clock drawing to Prism | `clock_to_lumen_prism` |  |
| dice to Prism | `dice_to_lumen_prism` |  |
| magic square to Prism | `magic_square_to_lumen_prism` |  |
| last photo to Prism | `lastphoto_to_lumen_prism` |  |
| image buffer to Prism | `imagebuffer_to_lumen_prism` | Image buffer (Image Buffer add-on) |
| image template to Prism | `image_template_to_lumen_prism` | Image Template Editor (subscription or add-on), asks for a #ID (Image template) |
| emoji to Prism | `emoji_to_lumen_prism` |  |
| clear Prism (black) | `lumen_prism_erase` |  |

---

## Iarvel Card

*Needs: Iarvel Card*

| Action | Code | Needs / notes |
|---|---|---|
| doodle drawing to Iarvel Card | `doodle_to_iarvel_card` |  |
| clear Iarvel Card | `clear_iarvel_card` |  |

---

## MrCard

*Needs: MrCard*

| Action | Code | Needs / notes |
|---|---|---|
| doodle drawing to MrCard | `doodle_to_mrcard` |  |
| clear MrCard | `clear_mrcard` |  |

---

## Lumen Spectra

*Needs: Lumen Spectra (Lumen PRO)*

| Action | Code | Needs / notes |
|---|---|---|
| doodle drawing to Lumen Spectra | `doodle_to_lumen_spectra` |  |
| clear Lumen Spectra | `clear_lumen_spectra` |  |

---

## Inversion Board

*Needs: Inversion Board*

| Action | Code | Needs / notes |
|---|---|---|
| handwriting to Inversion Board | `handwriting_to_pitata_chalk` |  |
| signature to Inversion Board | `signature_to_pitata_chalk` |  |
| playing card to Inversion Board | `playingcard_to_pitata_chalk` |  |
| doodle drawing to Inversion Board | `doodle_to_pitata_chalk` |  |
| clock to Inversion Board | `clock_to_pitata_chalk` |  |
| image buffer to Inversion Board | `imagebuffer_to_pitata_chalk` |  |
| magic square to Inversion Board | `magic_square_to_pitata_chalk` |  |
| magic square dots to Inv. Board | `magic_square_dots_to_pitata_chalk` |  |
| magic square numbers to Inv. Board | `magic_square_numbers_to_pitata_chalk` |  |
| ESP symbol to Inversion Board | `esp_to_pitata_chalk` |  |
| dice to Inversion Board | `dice_to_pitata_chalk` |  |
| last photo to Inversion Board | `lastphoto_to_pitata_chalk` |  |
| image template to Inversion Board | `image_template_to_pitata_chalk` | Image Template Editor (subscription or add-on), asks for a #ID (Image template) |
| erase Inversion Board | `pitata_chalk_erase` |  |
| Inversion Board fake wipe | `pitata_chalk_wipe_board` |  |

---

## Inversion Board Ultra

*Needs: Inversion Board Ultra*

| Action | Code | Needs / notes |
|---|---|---|
| erase Inv.Board Ultra | `pitata_ultra_erase` |  |
| Inv.Board Ultra fake wipe | `pitata_ultra_wipe_board` |  |
| doodle drawing to Inv.Board Ultra | `doodle_to_pitata_ultra` |  |
| image template to Inv.Board Ultra | `image_template_to_pitata_ultra` | Image Template Editor (subscription or add-on), asks for a #ID (Image template) |
| handwriting to Inv.Board Ultra | `handwriting_to_pitata_ultra` |  |
| signature to Inv.Board Ultra | `signature_to_pitata_ultra` |  |
| playing card to Inv.Board Ultra | `playingcard_to_pitata_ultra` |  |
| clock to Inv.Board Ultra | `clock_to_pitata_ultra` |  |
| image buffer to Inv.Board Ultra | `imagebuffer_to_pitata_ultra` |  |
| magic square to Inv.Board Ultra | `magic_square_to_pitata_ultra` |  |
| magic square dots to Inv.Board Ultra | `magic_square_dots_to_pitata_ultra` |  |
| magic square numbers to Inv.Board Ultra | `magic_square_numbers_to_pitata_ultra` |  |
| ESP symbol to Inv.Board Ultra | `esp_to_pitata_ultra` |  |
| dice to Inv.Board Ultra | `dice_to_pitata_ultra` |  |
| last photo to Inv.Board Ultra | `lastphoto_to_pitata_ultra` |  |

---

## RealBoard

*Needs: RealBoard (by Yao)*

| Action | Code | Needs / notes |
|---|---|---|
| clear RealBoard (black) | `clear_realboard` |  |
| doodle drawing to RealBoard | `doodle_to_realboard` |  |
| handwriting to RealBoard | `handwriting_to_realboard` |  |
| signature to RealBoard | `signature_to_realboard` |  |
| playing card to RealBoard | `playingcard_to_realboard` |  |
| clock to RealBoard | `clock_to_realboard` |  |
| image buffer to RealBoard | `imagebuffer_to_realboard` |  |
| magic square to RealBoard | `magicsquare_to_realboard` |  |
| ESP symbol to RealBoard | `esp_to_realboard` |  |
| dice to RealBoard | `dice_to_realboard` |  |
| last photo to RealBoard | `lastphoto_to_realboard` |  |
| image template to RealBoard | `image_template_to_realboard` | Image Template Editor (subscription or add-on), asks for a #ID (Image template) |

---

## E-ink tag

*Needs: E-ink tags*

| Action | Code | Needs / notes |
|---|---|---|
| doodle drawing to E-ink tag | `doodle_to_eink_tag` |  |
| image buffer to E-ink tag | `imagebuffer_to_eink_tag` | Image buffer (Image Buffer add-on) |
| image template to E-ink tag | `image_template_to_eink_tag` | Image Template Editor (subscription or add-on), asks for a #ID (Image template) |
| handwriting to E-ink tag | `handwriting_to_eink_tag` |  |
| signature to E-ink tag | `signature_to_eink_tag` |  |
| playing card to E-ink tag | `playingcard_to_eink_tag` |  |
| ESP symbol to E-ink tag | `esp_to_eink_tag` |  |
| dice to E-ink tag | `dice_to_eink_tag` |  |
| clock to E-ink tag | `clock_to_eink_tag` |  |
| emoji to E-ink tag | `emoji_to_eink_tag` |  |
| magic square to E-ink tag | `magic_square_to_eink_tag` |  |
| clear E-ink tag (white) | `eink_tag_erase` |  |

---

## Pitata Keychain

*Needs: Pitata Keychain*

| Action | Code | Needs / notes |
|---|---|---|
| clear keychain screen | `pitataKey_erase` |  |
| BOLD text/number to keychain | `boldtext_to_pitataKey` |  |
| handwriting to keychain | `handwriting_to_pitataKey` |  |
| ESP symbol to keychain | `esp_to_pitataKey` |  |
| playing card to keychain | `playingcard_to_pitataKey` |  |
| doodle drawing to keychain | `doodle_to_pitataKey` |  |
| clock to keychain | `clock_to_pitataKey` |  |
| emoji to keychain | `emoji_to_pitataKey` |  |
| magic square to keychain | `magic_square_to_pitataKey` |  |
| dice to keychain | `dice_to_pitataKey` |  |
| Pi numbers to keychain | `pinumbers_to_pitataKey` |  |
| last photo to keychain | `lastphoto_to_pitataKey` |  |

---

## Iarvel Keychain

*Needs: Iarvel Keychain*

| Action | Code | Needs / notes |
|---|---|---|
| clear Iarvel Keychain screen | `iarvelKeychain_erase` |  |
| BOLD text/number to Iarvel Keychain | `boldtext_to_iarvelKeychain` |  |
| handwriting to Iarvel Keychain | `handwriting_to_iarvelKeychain` |  |
| ESP symbol to Iarvel Keychain | `esp_to_iarvelKeychain` |  |
| playing card to Iarvel Keychain | `playingcard_to_iarvelKeychain` |  |
| doodle drawing to Iarvel Keychain | `doodle_to_iarvelKeychain` |  |
| clock to Iarvel Keychain | `clock_to_iarvelKeychain` |  |
| emoji to Iarvel Keychain | `emoji_to_iarvelKeychain` |  |
| magic square to Iarvel Keychain | `magic_square_to_iarvelKeychain` |  |
| dice to Iarvel Keychain | `dice_to_iarvelKeychain` |  |
| Pi numbers to Iarvel Keychain | `pinumbers_to_iarvelKeychain` |  |
| last photo to Iarvel Keychain | `lastphoto_to_iarvelKeychain` |  |

---

## Iarvel KeyPrediction PRO

*Needs: Iarvel Keychain PRO*

| Action | Code | Needs / notes |
|---|---|---|
| clear KeyPrediction PRO screen | `iarvelKeyPro_erase` |  |
| BOLD text/number to KeyPrediction PRO | `boldtext_to_iarvelKeyPro` |  |
| handwriting to KeyPrediction PRO | `handwriting_to_iarvelKeyPro` |  |
| ESP symbol to KeyPrediction PRO | `esp_to_iarvelKeyPro` |  |
| playing card to KeyPrediction PRO | `playingcard_to_iarvelKeyPro` |  |
| doodle drawing to KeyPrediction PRO | `doodle_to_iarvelKeyPro` |  |
| clock to KeyPrediction PRO | `clock_to_iarvelKeyPro` |  |
| emoji to KeyPrediction PRO | `emoji_to_iarvelKeyPro` |  |
| magic square to KeyPrediction PRO | `magic_square_to_iarvelKeyPro` |  |
| dice to KeyPrediction PRO | `dice_to_iarvelKeyPro` |  |
| Pi numbers to KeyPrediction PRO | `pinumbers_to_iarvelKeyPro` |  |
| last photo to KeyPrediction PRO | `lastphoto_to_iarvelKeyPro` |  |

---

## Reinkstone NFC case

*Needs: Reinkstone case, iOS only*

| Action | Code | Needs / notes |
|---|---|---|
| doodle drawing to Reinkstone | `doodle_to_reinkstone` |  |
| handwriting to Reinkstone | `handwriting_to_reinkstone` |  |
| signature to Reinkstone | `signature_to_reinkstone` |  |
| last text to Reinkstone paper | `reinkstone_notepaper` |  |
| last text to Reinkstone yellow card | `reinkstone_yellowcard` |  |
| Pi Revelations to Reinkstone | `pinumbers_to_reinkstone` |  |
| playing card to Reinkstone | `playingcard_to_reinkstone` |  |
| clock drawing to Reinkstone | `clock_to_reinkstone` |  |
| magic square to Reinkstone | `magic_square_to_reinkstone` |  |
| ESP symbol to Reinkstone | `esp_to_reinkstone` |  |
| clear Reinkstone screen | `reinkstone_erase` |  |
| last photo to Reinkstone | `lastphoto_to_reinkstone` |  |
| image buffer to Reinkstone | `imagebuffer_to_reinkstone` | Image buffer (Image Buffer add-on) |
| emoji to Reinkstone | `emoji_to_reinkstone` |  |

---

## The Missing Tape

*Needs: The Missing Tape (by Yao)*

| Action | Code | Needs / notes |
|---|---|---|
| handwriting to VHS tape | `handwriting_to_vhs_tape` |  |
| image buffer to VHS tape | `imagebuffer_to_vhs_tape` | Image buffer (Image Buffer add-on) |
| clear VHS tape (white) | `clear_vhs_tape` |  |
| image template to VHS tape | `image_template_to_vhs_tape` | Image Template Editor (subscription or add-on), asks for a #ID (Image template) |

---

## Pixdance LED case

*Needs: Picdance case*

| Action | Code | Needs / notes |
|---|---|---|
| scrolling text to Pixdance | `text_scrolling_to_pixdance` |  |
| text letters to Pixdance | `text_letters_to_pixdance` |  |
| color to Pixdance | `color_to_pixdance` |  |
| playing card to Pixdance | `playingcard_to_pixdance` |  |

---

## LED Mask

*Needs: LED Mask*

| Action | Code | Needs / notes |
|---|---|---|
| Mask blinking eye | `mask_blinking` |  |
| Mask grin | `mask_grin` |  |
| Mask Halloween | `mask_halloween` |  |
| Mask kiss | `mask_kiss` |  |
| Mask LOVE | `mask_love` |  |
| Mask Santa | `mask_santa` |  |
| Mask panda | `mask_panda` |  |
| Mask thunder | `mask_thunder` |  |
| Mask poop emoji | `mask_kaki` |  |
| Mask face | `mask_arc` |  |
| Mask Scream | `mask_sikoly` |  |
| Mask clown | `mask_bohoc` |  |
| Mask neon clown | `mask_neonclown` |  |

---

## Tic-tac-toe

*Needs: Tic-tac-toe routine*

| Action | Code | Needs / notes |
|---|---|---|
| Tic-tac-toe: X | `add_tic_tac_toe_x` |  |
| Tic-tac-toe: O | `add_tic_tac_toe_o` |  |
| Tic-tac-toe: EMPTY | `reset_tic_tac_toe` |  |
| Tic-tac-toe: random DEMO | `test_tic_tac_toe` |  |
| Tic-tac-toe from drawing (Google Vision) | `tictactoe_rec_google` |  |
| Tic-tac-toe from drawing (Gemini) | `tictactoe_rec_gemini` | Gemini (A.I. Features add-on + your API key, or free Gemini) |
| Tic-tac-toe from last text | `tictactoe_from_text` |  |

---

## TOP 100 movies

*Needs: TOP 100 movies*

| Action | Code | Needs / notes |
|---|---|---|
| get movie title from TOP100 | `getMovieTitleFromList` |  |
| get movie year from TOP100 | `getMovieYearFromList` |  |

---

## Special

| Action | Code | Needs / notes |
|---|---|---|
| generate Acronym word list | `acronym_generate` | Acronym word list (Transformer add-on) |
| calculate date difference | `date_calculate` | Date calculator (Transformer add-on) |
| open app package | `customapp` | Send data to apps & APIs (API Access add-on), Android only, asks for a value - not for action= links |
| open custom URL scheme | `urlscheme` | Send data to apps & APIs (API Access add-on), asks for a value - not for action= links |
| run Shortcut | `shortcut` | Send data to apps & APIs (API Access add-on), iOS only, asks for a value - not for action= links |
| send predefined text | `predefined_text` | asks for a #ID (Predefined text) |
| text from template | `generate_template` | Templates (Transformer add-on), asks for a #ID (Template) |
| execute A.I. text prompt | `execute_ai_prompt` | A.I. Prompts (Transformer + A.I. Features add-on), asks for a #ID (A.I. text prompt) |
| execute A.I. image prompt | `execute_ai_image_prompt` | A.I. Prompts (Transformer + A.I. Features add-on), asks for a #ID (A.I. image prompt) |
| play audio recording | `play_audio_rec` | Voice Recorder add-on, asks for a #ID (Audio recording) |
| stop audio playback | `stop_audio_rec` | Voice Recorder add-on |
| load routine (settings) | `load_routine` | asks for a #ID (Routine) |
