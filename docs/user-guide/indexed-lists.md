---
title: "Indexed lists"
date: 2026-11-07 12:00:00
---

# Indexed lists

An **indexed list** is your own table of index + value pairs. MysterSmith looks up the last text of the [Text Buffer](text-buffer.md) in the list, and adds the other half of the pair to the Text Buffer.

**Example:** in a memorized deck, a spectator names a card. The action *convert value to index* turns **Ace of Spades** into its position, **7**. Or the other way around: the spectator names a number, and *convert index to value* turns **7** into **AS**.

You find it in **Settings → Transform / process → INDEXED LISTS**. It needs the [Transformer add-on](../purchase-add-ons/transformer.md) (included in every subscription).

---

## Making a list

Tap **Manage lists → Open list**, optionally enter a name in the last row, and tap the **plus** sign. Then choose the type of the new list:

* **Card stack** — always 52 rows, numbered from 1 to 52. The value of a row is a playing card.
* **Other** — any index + value pairs. The index is a number by default, but it can be a text too; it must be unique in the list.

You can make as many lists as you need. Each one gets a number (**#1**, **#2**...): the actions use this **#ID**. Swipe right on a list (or on an item of an *Other* list) to delete it.

### Card stacks

Write a card in any of these forms: `5C`, `4h`, `QS`, `kd`, `3 of hearts`, `King of Clubs`. MysterSmith shows it as a red or black **4♣**.

To fill a whole stack at once, copy your list and tap **Paste list from clipboard**. The list needs one card per line, from #1 down. Numbered lines (`12. QS`) also work.

Rows that need attention are marked:

* **red** — not a card, the actions ignore it
* **yellow** — this card is in the stack more than once (the actions find the first one)

---

## The actions

Both actions are in the *Special* group, and ask for the **Indexed list #ID**:

| Action | The last text of the Text Buffer is... | Added to the Text Buffer |
|---|---|---|
| *convert index to value (from list)* | an index | the value of that item |
| *convert value to index (from list)* | a value | the index of that item |

* The result goes into the Text Buffer (as a *indexed list result*), so it is also the new `#TEXT`, and it goes to your display devices like any new text.
* A card from a card stack arrives in the same form as one from SEND PLAYING CARD (`2H`, or `2 of Hearts` if the full card name is on), so the playing card actions can use it.
* In a card stack, the text can be in any of the card forms above. In an *Other* list, uppercase and lowercase don't matter, and `07` is the same index as `7`.
* If the text isn't in the list, nothing happens and no message appears, so nothing gives you away during a performance.

**Action after conversion** in the settings can run another action automatically, after the delay you set. See [Triggers and actions](triggers-and-actions.md).

From other apps, use `indextovalue={N}` and `valuetoindex={N}` with the [custom URL scheme](../api/custom-url-scheme.md) or the [HTTP socket](../api/http-socket.md).
