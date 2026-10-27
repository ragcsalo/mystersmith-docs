# Custom URL scheme – mystersmith://

MysterSmith can be opened — and told what to do — with a simple link that starts with **`mystersmith://`**. Any other app, an iOS Shortcut, a Tasker / Automate flow, a link on a web page, a QR code or an NFC tag can use it.

**Format:** `mystersmith://?{PARAMETER}={VALUE}&{PARAMETER}={VALUE}...`

**Example:** `mystersmith://?text=Hello%20World`

The parameters are processed **in the order you write them**.

!!! tip "On the same phone? The HTTP socket does the same"
    Every parameter on this page also works with the [HTTP Socket](http-socket.md) (`http://localhost:62369/data?...`) — without switching apps.

---

## Two situations

* **The app is not running yet:** the link starts MysterSmith. Only the **start options** below are used (what to open, what to start, a text to send). A link that runs actions or numbered items (routine, template, prompt...) does nothing at this point.
* **The app is already running:** the link brings it to the front and the parameter is done at once.

---

## Start options (when the link starts the app)

| Parameter | What it does |
|---|---|
| `autostart=home` | Start on the home page. |
| `autostart=settings` | Start on the Settings page. |
| `autostart=routine` | Start the routine (START ROUTINE). Together with `routine=...` (below) it can also open a screen. |
| `autostart=text` / `card` / `vibration` | Start the routine and open the send text / send card / send vibration screen. |
| `autostart=doodle` | Start the routine and open the Doodle screen. |
| `autostart=black` | Start the routine and open the black screen. |
| `routine=text` / `card` / `vibration` / `doodle` / `black` | With `autostart=routine`: the screen to open. |
| `routine=webinput` / `webdoodle` / `webpolling` / `nfc` | With `autostart=routine`: start WEB-input / WEB-doodle / WEB-polling / NFC polling. |
| `routine={N}` | With `autostart=routine`: load your saved routine **#N**. |
| `webinput=1` | Start WEB-input a few seconds after the app started. |
| `webpolling=1` | Start WEB-polling a few seconds after the app started. |
| `webdoodle=1` | Switch WEB-doodle on and start it a few seconds after the app started. |
| `nfc=1` | Start NFC polling a few seconds after the app started. |
| `text={TEXT}` | Send the text to your peek display and add it to the Text Buffer, once the app has started. |

**Example:** `mystersmith://?autostart=routine&routine=doodle` – starts the routine on the Doodle screen.

---

## While the app is running

| Parameter | What it does |
|---|---|
| `text={TEXT}` | Send the text to your peek display and add it to the Text Buffer (a small notification shows it, except on the black screen and the fake home screen). Then *Action after WEB-polling* runs, if you set one. |
| `routine=text` / `card` / `vibration` / `doodle` / `black` | Start the routine (if it isn't running) and open that screen. |
| `routine=webinput` / `webpolling` / `nfc` | Start WEB-input / WEB-polling / NFC polling. |
| `routine={N}` | Load your saved routine **#N**. |
| `action={ACTIONS}` | Run one or more actions in order (see [Actions](#actions) below). |
| `template={N}` | Generate text from template **#N**. |
| `predefined={N}` | Send predefined text **#N**. |
| `recording={N}` | Play voice recording **#N**. |
| `aiprompt={N}` | Run A.I. text prompt **#N**. |
| `aiimageprompt={N}` | Run A.I. image prompt **#N** (the image goes to the black screen, the Doodle screen and the Image Buffer). |
| `imagetemplate={N}` | Print image template **#N** on the connected printer. |
| `imagetemplatedoodle={N}` | Show image template **#N** on the Doodle screen. |
| `imagetemplateprism={N}` | Send image template **#N** to the Lumen Prism. |
| `imagetemplateteleport={N}` | Send image template **#N** to the Teleport. |
| `imagetemplateinversion={N}` | Send image template **#N** to the Inversion Board. |
| `imagetemplateultra={N}` | Send image template **#N** to the Inversion Board Ultra. |
| `imagetemplatepeekboard={N}` | Send image template **#N** to the Iarvel Peek Board. |
| `imagetemplaterealboard={N}` | Send image template **#N** to the RealBoard. |
| `imagetemplateeink={N}` | Send image template **#N** to the E-ink tag. |
| `imagetemplatevhs={N}` | Send image template **#N** to the VHS tape (The Missing Tape). |
| `imagetemplatephoto={N}` | Print image template **#N** on the color photo printer. |
| `imagetemplategenerate={N}` | Generate image template **#N** into the Image Buffer (then its *Action after image generated*). |
| `wait={N}` | Wait **N** seconds before the next parameter. |

The **#N** numbers are the same ones the app shows next to the routines, templates, predefined texts, recordings, A.I. prompts and image templates (and asks for in the matching actions).

**Example:** `mystersmith://?predefined=2&wait=5&aiprompt=1` – sends predefined text #2, waits 5 seconds, then runs A.I. prompt #1.

---

## Actions

`action=` runs the same actions you can choose for the triggers, by their **internal names**, separated by commas. Write `pauseN` between them to wait **N** seconds. The app also waits 1 second after every action.

**Example:** `mystersmith://?action=vibrate_short,pause3,blackscreen_show`

A few useful names:

| Name | Action |
|---|---|
| `vibrate_short` / `vibrate_long` / `vibrate_double` | Vibrate the phone. |
| `blackscreen_show` / `blackscreen_hide` | Show / hide the black screen. |
| `doodle_start` / `doodle_clear` | Open / clear the Doodle screen. |
| `start_webpolling` / `stop_webpolling` / `poll_once` | WEB-polling. |
| `start_webinput` / `stop_webinput` | WEB-input. |
| `start_nfc` / `stop_nfc` | NFC polling. |
| `delete_last_text` | Delete the last text from the Text Buffer. |
| `translate_last_text` | Translate the last text. |
| `lastext_to_clipboard` | Copy the last text to the clipboard. |
| `show_imagebuffer` / `clear_image_buffer` | Show / clear the Image Buffer. |
| `start_fakelockscreen` / `start_fakehomescreen` | Open the fake lock screen / home screen. |

All the names are on the [List of available actions](available-actions.md) page. The names are case-sensitive; an unknown name is skipped. Actions that need a number (template, prompt, recording...) have their own parameters in the table above.

---

## Home screen shortcuts

These are what the app icon's long-press menu uses — be careful with them:

| Parameter | What it does |
|---|---|
| `reset=1` | **Reset app version**: back to the installed version (the downloaded update is forgotten), then the app asks you to restart it. |
| `default=1` | **Default settings**: every setting back to default, your personal data (account, add-ons, API keys) is kept. |
| `clear=1` | **Clear all settings**: deletes every setting. |

---

## For app developers

| Parameter | What it does |
|---|---|
| `get_token={SCHEME}` | Sends the user's MysterSmith API token back to your app: MysterSmith opens `{SCHEME}://?mystersmith_token={TOKEN}` (`empty` if the user has none). |
| `open={SCHEME}` | Opens another app (`{SCHEME}://`) 3 seconds later. |

---

## Writing the link

* **Encode the text:** a space is `%20` (a `+` stays a `+`). Accents, emojis and other special characters must be URL-encoded too.
* **Avoid `&` and `=` inside a text** — they separate the parameters.
* A link with no parameter (`mystersmith://`) just opens the app.

**Examples of where to use it:**

* **iOS Shortcuts:** the *Open URLs* action with `mystersmith://?text=...`
* **Android (Tasker, Automate...):** *Browse URL* / *Open URL* with the same link.
* **A web page:** `<a href="mystersmith://?autostart=black">Start</a>`
* **NFC tag / QR code:** write the link as a URL (URI) record — scanning it opens MysterSmith.
