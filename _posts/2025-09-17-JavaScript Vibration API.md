# JavaScript Vibration API: How To Make The Device Buzz

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/09/vibration-api-explained.jpg" width="100%">

Picture this: you press a button in a mobile web game and your phone gives a short, satisfying buzz — not a sound, but a tiny physical tap that tells you: “Yep, that action happened.” That little buzz is haptic feedback, and the Vibration API is the simple JavaScript tool that lets web pages trigger that buzz on devices that have vibration hardware.

I’m going to walk you through what the Vibration API *is*, how it *behaves*, how to *use it safely*, and the practical things you’ll want to remember when you add haptics to a site or app. I’ll keep it conversational and show code so you can copy-and-try.

---

## What the Vibration API actually is

The Vibration API provides a way for a web page to pulse the device’s vibration hardware — in short: make the device buzz. It’s meant for **simple tactile feedback** (button presses, small game effects), not as a general notification system. The formal specification defines a single method on `navigator` called `vibrate()` that accepts either a number or an array of numbers describing durations. The API exists to give simple haptic responses, not to replace the Notifications API for messages.

---

## The simple rule: `navigator.vibrate(pattern)`

At its core you call:

```
navigator.vibrate(200);          // vibrate for 200 milliseconds
navigator.vibrate([100,50,100]); // vibrate 100ms, pause 50ms, vibrate 100ms
```

* If you pass a single number it vibrates once for that many milliseconds.
* If you pass an array, the numbers alternate: **even indices** = vibrate, **odd indices** = pause. So `[100, 50, 100]` = buzz 100ms → wait 50ms → buzz 100ms.

A few practical behaviors to know:

* Calling `vibrate()` while another pattern is running will cancel the old pattern and start the new one.
* To stop any ongoing vibration you can call `navigator.vibrate(0)` or `navigator.vibrate([])`.

---

## Rules, limits and return value (important)

There are a couple of rules built into the spec (implementations follow them):

* The browser usually **limits** how many entries can be in a pattern (the spec highlights a common max of **10 entries**) and limits how long each duration may be (often capped; the spec mentions **10,000 ms** as a common max per entry). If you pass longer/longer lists, they’ll be truncated.
* `navigator.vibrate(...)` returns a **boolean**: `true` if the request was accepted, `false` if it was invalid (bad parameters) or refused. However, returning `true` doesn’t magically guarantee a physical buzz — the device might still ignore it (e.g., hardware missing, silent/DND mode, or policy). So treat the return value as “request accepted by the browser” rather than proof of an actual buzz.

---

## Security, visibility and user activation

Browsers try to stop sites from buzzing your phone without reason. So two protections exist:

1. **Sticky user activation / user gesture required** — many browsers require that vibration be initiated as the result of a user action (like a click or touch). This prevents sites from silently buzzing you in the background. Don’t expect a `setTimeout` to circumvent this on modern browsers.

2. **Visibility rules** — the spec recommends that if the page is not visible (in a background tab, or not the top-level visible document), vibration requests may be refused. That prevents background pages from constantly buzzing the device.

Browsers may also apply rate limits, or allow users to block a site’s vibration ability altogether (some browsers let users disable site vibrations).

---

## Browser & device support (practical reality)

Vibration only works on devices that have vibration hardware — mostly phones and some tablets. Desktop machines generally don’t have vibration motors. Support across browsers is mixed: many Android browsers (Chrome, Firefox for Android, Samsung Internet, etc.) support it; Safari and some iOS browsers historically have limited or no support. Always check compatibility and test on real devices.

---

## How to use it — code patterns and examples

Here are practical snippets and patterns you can copy.

**Check support and give a gentle fallback**

```
if ('vibrate' in navigator) {
  const ok = navigator.vibrate(50); // short tick
  // ok === true means the browser accepted the request (not that it definitely vibrated)
} else {
  // fallback: play a tiny sound, show visual feedback, or do nothing
}
```

**Button haptic feedback**

```
<button id="likeBtn">Like</button>
<script>
  document.getElementById('likeBtn').addEventListener('click', (e) => {
    if (navigator.vibrate) navigator.vibrate(30); // small tap
    // proceed with the action (visual change / network request)
  });
</script>
```

**Make an SOS pattern (Morse-like)**

```
// dot=100ms buzz, dash=300ms buzz, gaps 100ms
// SOS = ... --- ...
navigator.vibrate([
  100, 100, 100, 100, 100, 300,  // S: . . .
  300, 100, 300, 100, 300, 100,  // O: - - -
  100, 100, 100                  // S: . . .
]);
```

**Cancel vibration**

```
navigator.vibrate(0);  // stop whatever's running
```

---

## Best practices & UX guidelines

* **Use very short pulses** for UI feedback (20–70 ms). Longer buzzes are intrusive.
* **Don’t spam** — excessive or repetitive vibration is annoying and drains battery.
* **Respect system modes** — if the device is in silent or Do Not Disturb, vibration may be suppressed; that’s fine. Don’t try to force it.
* **Provide an opt-out**: some users don’t want haptic feedback. Add a setting in your app to disable vibrations.
* **Accessibility**: people with vestibular or sensory sensitivities can be upset by vibration. Use it sparingly and make it optional.
* **Test on real hardware**: emulators and desktop browsers aren’t reliable for haptics. Try multiple phones and browsers.
* **Use for interaction feedback, not for alerts**: the spec warns it’s for tactile feedback; use Notifications API when you need to alert users about messages or events.

---

## Privacy & security concerns (why the spec is careful)

The spec mentions a couple of safety/privacy points: vibration can be used together with sensors to fingerprint devices or create side-channel signals. Browsers may therefore limit or warn users, and the API should not be used to leak data. Also, user agents may rate-limit how often a page can vibrate. In short: don’t get creative in ways that invade user privacy.

---

## Common pitfalls (and how to debug)

* **Nothing happens on desktop** — desktops usually lack vibration hardware.
* **No effect on iOS Safari** — iOS historically has poor support, so test and fallback.
* **`navigator.vibrate` returns false** — often because you passed invalid parameters, the page isn’t visible, or the browser refused the request. Validate your arguments and ensure the call runs in a user gesture handler.
* **Buzzer replaced by new pattern** — calling vibrate while a pattern is running aborts the previous one. Use that if you intentionally want to interrupt, but be careful not to cut off a complex haptic effect accidentally.

---

## Closing — when to pick vibration

Use the Vibration API for *tiny, satisfying haptics* that confirm local actions: button presses, toggles, small game events. Don’t use it to nag people or replace well-designed visual or audio feedback. Keep pulses short, optional, and respectful of the user’s device and context.

If you want to dive deeper, the W3C spec and MDN give the detailed rules, limits, and rationale behind the API — great references when you’re building production features.

---

## Review — 10 fill-in-the-gap questions

1. The Vibration API is used to produce small \_\_\_\_\_\_\_\_ feedback on devices.
2. The method you call to make a device vibrate is `navigator._______()`.
3. Passing an array like `[100, 50, 100]` means even indices cause \_\_\_\_\_\_\_ and odd indices cause \_\_\_\_\_\_\_.
4. Calling `navigator.vibrate(0)` or `navigator.vibrate([])` will \_\_\_\_\_\_\_\_ any current vibration.
5. `navigator.vibrate()` returns a \_\_\_\_\_\_\_\_ indicating whether the browser accepted the request.
6. Many browsers require a user \_\_\_\_\_\_\_ (like a click or touch) before vibration will work.
7. The spec commonly limits pattern length (number of entries) to about \_\_\_\_\_\_ entries.
8. The API should be used for simple tactile feedback and **not** as a general \_\_\_\_\_\_ mechanism.
9. If a page is not visible (in the background), a browser may \_\_\_\_\_\_\_\_ the vibration request.
10. For devices or browsers that don’t support vibration, provide a \_\_\_\_\_\_\_\_ (e.g., tiny sound or visual cue).