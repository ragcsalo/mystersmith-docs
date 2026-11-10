# HTTP Socket – local server (send & receive)

Besides the cloud-based WEB API, MysterSmith can also run a **small HTTP server right inside the app**, directly on your phone. Any other app, script, or shortcut running on the **same device** can then send data into MysterSmith, trigger actions, and read back the current TextBuffer / ImageBuffer – **instantly and offline**, with no round-trip to the internet.

The server listens on port **`62369`**.

!!! note "Requires the API Access add-on"
    The whole HTTP Socket server needs the [API Access](../purchase-add-ons/api-access.md) add-on (since v2.3.94). Without it, the server doesn't start at all.

!!! tip "On the same device? Just use `localhost` – no API key needed"

    If the app that talks to MysterSmith runs on the **same phone** (a Shortcut, Tasker/Automate flow, a companion app, a local web page, etc.), always use:

    `http://localhost:62369`

    This address is **the same for everyone** – there is no token, key, or account ID to add to the URL. Because the connection never leaves the device, it is fast and works with no internet connection.

    *(The IP address shown in the app is only needed if you want to reach MysterSmith from **another** device on the same Wi‑Fi network.)*

---

## Turning the server on

With the API Access add-on, the server starts by itself when the app starts. You find it in **Settings → MYSTERSMITH API → HTTP Socket server**: tap **START** if it is not running, or **Details** to see the exact address it is listening on (and copy the base URL to the clipboard).

While the server is on, the endpoints below are available at `http://localhost:62369`.

---

## Sending data into MysterSmith

The main endpoint for sending is **`/data`**. Any parameters you add to the URL are processed exactly the same way as the [Custom URL scheme](custom-url-scheme.md) – so anything you can do with `mystersmith://…` you can also do over the HTTP socket.

### Send a text

**URL:** `http://localhost:62369/data?text={TEXT}`

{TEXT} = the text you want to send (URL-encoded)

**Example:** `http://localhost:62369/data?text=Hello%20World`

The text is sent to your connected peek display, added to the TextBuffer, and shown as a small notification in the app.

**JSON response:** `{"success":true,"message":"Received: {\"text\":\"Hello World\"}"}`

### Trigger actions

**URL:** `http://localhost:62369/data?action={ACTIONS}`

{ACTIONS} = one or more action names, separated by commas. Insert `pauseN` to wait N seconds between steps. Some useful names are listed on the [Custom URL scheme](custom-url-scheme.md#actions) page.

**Example:** `http://localhost:62369/data?action=vibrate_short,pause3,blackscreen_show`

This runs the actions in order, pausing 3 seconds in the middle.

Actions that ask for a #ID (image templates, templates, A.I. prompts...) have their own parameter instead of `action=` (see the table below). They can be mixed, in order:

`http://localhost:62369/data?action=poll_once,pause3&imagetemplategenerate=9`

runs *poll_once*, waits 3 seconds, then generates image template #9.

### Other useful parameters

You can combine these in the `/data` URL just like in the Custom URL scheme:

| Parameter | What it does |
|---|---|
| `text={TEXT}` | Send text (URL-encoded). |
| `action=a,b,pauseN,c` | Run actions in order; `pauseN` waits N seconds. |
| `routine={N}` | Load saved routine number **N**. |
| `routine=text` / `card` / `vibration` / `doodle` / `black` | Open the matching send screen / mode. |
| `template={N}` | Generate template number **N**. |
| `indextovalue={N}` | Convert the last Text Buffer text from index to value, with indexed list **#N**. |
| `valuetoindex={N}` | Convert the last Text Buffer text from value to index, with indexed list **#N**. |
| `predefined={N}` | Send predefined text number **N**. |
| `recording={N}` | Play voice recording number **N**. |
| `aiprompt={N}` | Run A.I. text prompt number **N**. |
| `aiimageprompt={N}` | Run A.I. image prompt number **N** (the image goes to the Doodle / black screen and the Image Buffer). |
| `imagetemplate={N}` | Print image template **#N** on the connected printer (subscribers). **N** is the template's number in the loaded routine, shown next to its name in the template list. |
| `imagetemplatedoodle={N}` | Show image template **#N** on the Doodle screen. |
| `imagetemplateprism={N}` | Send image template **#N** to the Lumen Prism. |
| `imagetemplateteleport={N}` | Send image template **#N** to the Teleport. |
| `imagetemplateinversion={N}` | Send image template **#N** to the Inversion Board. |
| `imagetemplateultra={N}` | Send image template **#N** to the Inversion Board Ultra. |
| `imagetemplatepeekboard={N}` | Send image template **#N** to the Iarvel Peek Board. |
| `imagetemplaterealboard={N}` | Send image template **#N** to the RealBoard. |
| `imagetemplateeink={N}` | Send image template **#N** to the connected E-ink tag. |
| `imagetemplatevhs={N}` | Send image template **#N** to the VHS tape (The Missing Tape). |
| `imagetemplategenerate={N}` | Generate image template **#N** into the Image Buffer (then its "Action after image generated"). |
| `wait={N}` | Wait N seconds before the next parameter. |

---

## Reading data from MysterSmith

### Read the current text from the TextBuffer

**URL:** `http://localhost:62369/text/getlast`

**JSON response:**

```json
{"text":"123","time":1792411234567,"time_iso":"2026-10-19T12:40:34.567Z","index":4,"count":5}
```

Returns the newest entry in the TextBuffer — or, if you have stepped back in the TextBuffer, the one you are on (`"???"` if the buffer is empty).

* `time` - when the text came into the TextBuffer, in milliseconds since 1970 (`time_iso`: the same in UTC). Use it to tell two equal texts apart, e.g. a spectator entering *123* twice. It is `null` for a text the app got from the server at start (its time isn't known).
* `index` - its position in the TextBuffer (0 = the oldest), `count` - how many texts are in it.
* `time`, `time_iso`, `index` and `count` are new in **v2.3.51** - older versions return only `text`.

### Read any text from the TextBuffer

**URL:** `http://localhost:62369/text/get/txt1` … `http://localhost:62369/text/get/last2`

The positions work just like the #TXT / #LAST variables:

| URL | Returns |
|---|---|
| `/text/get/txt1` | the **oldest** text in the TextBuffer (#TXT1) |
| `/text/get/txt2` | the second oldest (#TXT2) |
| `/text/get/last1` | the **newest** text (#LAST1) |
| `/text/get/last2` | the one before the newest (#LAST2) |

Any number works, not only 1–9 (e.g. `/text/get/last12`).

**JSON response:**

```json
{"text":"queen of hearts","time":1792411234567,"time_iso":"2026-10-19T12:40:34.567Z","index":3,"txt":4,"last":2,"count":5}
```

* `index` - its position (0 = the oldest), `txt` / `last` - its #TXT and #LAST number, `count` - how many texts are in the TextBuffer.
* If there is no such text (e.g. `/text/get/last3` with only 2 texts), the reply is **HTTP 404** with `{"error":"not in the Text Buffer","count":2}`.
* New in **v2.3.96**.

### Read the whole TextBuffer

**URL:** `http://localhost:62369/text/getall`

**JSON response:**

```json
{"count":2,"current":1,"texts":[
  {"text":"123","time":1792411200000,"time_iso":"2026-10-19T12:40:00.000Z","index":0,"txt":1,"last":2},
  {"text":"queen of hearts","time":1792411234567,"time_iso":"2026-10-19T12:40:34.567Z","index":1,"txt":2,"last":1}
]}
```

Every text, the **oldest first**, with the same fields as above. `current` is the index of the text you are on in the TextBuffer (usually the newest). New in **v2.3.96**.

!!! tip "Collecting every peek in your own app"
    Poll `/text/getlast` and watch `count`: if it grew by more than one since your last request, read the missed texts with `/text/get/lastN` — or simply read `/text/getall`. Everything stays on the phone, no internet needed.

### Read the last image from the ImageBuffer

**URL:** `http://localhost:62369/image/getlast`

**JSON response:** `{"image":"data:image/png;base64,iVBORw0KGgo…"}`

Returns the newest image in the ImageBuffer as a full data-URL string.

If you prefer the raw base64 (without the JSON wrapper), use:

**URL:** `http://localhost:62369/base64/get`

**Response:** the base64 data-URL string on its own.

!!! note "Requires the Image Buffer add-on"
    Both image-reading endpoints only respond if the [Image Buffer](../purchase-add-ons/image-buffer.md) add-on is active.

---

## Sending an image into MysterSmith

You can push an image straight into the ImageBuffer with a POST request:

**URL:** `http://localhost:62369/base64/push`
**Method:** `POST`
**Body (JSON):** `{ "data": "data:image/png;base64,iVBORw0KGgo…" }`

The `data` value must be a full data-URL starting with `data:image`. On success the image is saved to the ImageBuffer, displayed in the app, and the server replies with `image saved to buffer`.

!!! note "Requires the Image Buffer add-on"
    This endpoint only responds if the [Image Buffer](../purchase-add-ons/image-buffer.md) add-on is active.

---

## Example code

Send a text from any web page or app:

```js
fetch("http://localhost:62369/data?text=" + encodeURIComponent("Hello from another app"));
```

Read the current TextBuffer:

```js
const res  = await fetch("http://localhost:62369/text/getlast");
const data = await res.json();
console.log(data.text);
```

Read the text before the newest one, and the whole TextBuffer:

```js
const prev = await (await fetch("http://localhost:62369/text/get/last2")).json();
const all  = await (await fetch("http://localhost:62369/text/getall")).json();
all.texts.forEach(t => console.log(t.txt, t.text));
```

Push an image:

```js
await fetch("http://localhost:62369/base64/push", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ data: myDataUrl })   // must start with "data:image"
});
```

---

## Good to know

- **API Access add-on.** Without it, the HTTP Socket server doesn't start, so nothing answers on port 62369.
- **The server must be running.** The endpoints only respond while the HTTP Socket server is on (it starts with the app; **START** in **Settings → MYSTERSMITH API** if it was stopped).
- **`localhost` on the same device, no key.** The base URL `http://localhost:62369` is identical for everyone and needs no token. Use the device's Wi‑Fi IP address only when connecting from a *different* device.
- **URL-encode your text.** Encode spaces and special characters (e.g. `Hello%20World`).
- **Add-on-gated endpoints stay silent if the add-on is missing.** If the required add-on (Image Buffer) is not active, the request receives no reply instead of an error – so set a timeout on the caller's side.
- **`/data` mirrors the Custom URL scheme.** The same parameters work in both, so you can reuse anything documented there.
