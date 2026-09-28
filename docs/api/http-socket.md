# HTTP Socket – local server (send & receive)

Besides the cloud-based WEB API, MysterSmith can also run a **small HTTP server right inside the app**, directly on your phone. Any other app, script, or shortcut running on the **same device** can then send data into MysterSmith, trigger actions, and read back the current TextBuffer / ImageBuffer – **instantly and offline**, with no round-trip to the internet.

The server listens on port **`62369`**.

!!! tip "On the same device? Just use `localhost` – no API key needed"

    If the app that talks to MysterSmith runs on the **same phone** (a Shortcut, Tasker/Automate flow, a companion app, a local web page, etc.), always use:

    `http://localhost:62369`

    This address is **the same for everyone** – there is no token, key, or account ID to add to the URL. Because the connection never leaves the device, it is fast and works with no internet connection.

    *(The IP address shown in the app is only needed if you want to reach MysterSmith from **another** device on the same Wi‑Fi network.)*

---

## Turning the server on

The HTTP Socket server is **not** running by default. Switch it on in the app first – once it is running, the app shows you the exact address it is listening on (and lets you copy the base URL to the clipboard).

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

{ACTIONS} = one or more action names, separated by commas. Insert `pauseN` to wait N seconds between steps.

**Example:** `http://localhost:62369/data?action=peeksmith_show,pause3,vibrate`

This runs the actions in order, pausing 3 seconds in the middle.

### Other useful parameters

You can combine these in the `/data` URL just like in the Custom URL scheme:

| Parameter | What it does |
|---|---|
| `text={TEXT}` | Send text (URL-encoded). |
| `action=a,b,pauseN,c` | Run actions in order; `pauseN` waits N seconds. |
| `routine={N}` | Load saved routine number **N**. |
| `routine=text` / `card` / `vibration` / `doodle` / `black` | Open the matching send screen / mode. |
| `template={N}` | Generate template number **N**. |
| `predefined={N}` | Send predefined text number **N**. |
| `recording={N}` | Play voice recording number **N**. |
| `aiprompt={N}` | Run A.I. prompt number **N**. |
| `wait={N}` | Wait N seconds before the next parameter. |

---

## Reading data from MysterSmith

### Read the last text from the TextBuffer

**URL:** `http://localhost:62369/text/getlast`

**JSON response:** `{"text":"Hello World"}`

Returns the newest entry in the TextBuffer (or `"???"` if the buffer is empty).

!!! note "Requires the API Access add-on"
    This endpoint only responds if the [API Access](../purchase-add-ons/api-access.md) add-on is active on the account.

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

- **Start the server first.** The endpoints only respond while the HTTP Socket server is switched on in the app.
- **`localhost` on the same device, no key.** The base URL `http://localhost:62369` is identical for everyone and needs no token. Use the device's Wi‑Fi IP address only when connecting from a *different* device.
- **URL-encode your text.** Encode spaces and special characters (e.g. `Hello%20World`).
- **Add-on-gated endpoints stay silent if the add-on is missing.** If the required add-on (API Access / Image Buffer) is not active, the request receives no reply instead of an error – so set a timeout on the caller's side.
- **`/data` mirrors the Custom URL scheme.** The same parameters work in both, so you can reuse anything documented there.
