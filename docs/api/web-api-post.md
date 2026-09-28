# WEB API - writing data
 
## Sending/saving text to the TextBuffer

You can use the WEB API to send/save a text in the TextBuffer using either a GET or a POST request. To identify your account, you must use your MysterSmith API key, which you will find in your account details in the app.

###Sending data using a GET request (basic URL):

**Short URL:** `https://bsmagic.app/api/push/{APIKEY}/{TEXT}`  
**Long URL:** `https://bsmagic.app/api/textbuffer_json.php?action=push&token={APIKEY}&value={TEXT}`

{APIKEY} = your MysterSmith API key
{TEXT} = the text you want to send (URL-encoded)

**Example (short):** `https://bsmagic.app/api/push/ABC123DE/Hello%20World`  
**Example (long):** `https://bsmagic.app/api/textbuffer_json.php?action=push&token=ABC123DE&value=Hello%20World`

**JSON response format:** `{"saved":1,"type":"API","text":"Hello World","words":"Hello World","number":-1}`

Using the above URLs, you can send/save text to the TextBuffer from any browser or app.

---

## Sending/saving text of a specific type

You can even set the type of the text you are sending, 




