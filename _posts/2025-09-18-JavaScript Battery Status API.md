# 🔋 JavaScript Battery Status API: How it works in JavaScript

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/09/battery-api-infographic.jpg" width="100%">

Imagine your laptop, tablet, or phone. One thing you always check is the **battery percentage** —

* “Do I have enough to watch one more YouTube video?”
* “Can I finish this level before my phone dies?”

The **Battery Status API** is a way for JavaScript to *ask the device about its battery*. It lets a website know things like:

* How much charge is left.
* Whether the device is charging or not.
* How much time until it’s full.
* How much time until it’s empty.

This can be useful for websites to **adjust themselves** depending on your battery. For example:

* A game might lower graphics quality if your battery is low.
* A video app might avoid auto-playing videos if your device isn’t charging.
* A learning app might warn you to “plug in soon” if your laptop is almost dead.

---

### 🛠 How it works in JavaScript

You use `navigator.getBattery()` which returns a **BatteryManager object**.
This object has several properties:

1. `battery.level` → a number from **0 to 1** (so 0.5 = 50% battery).
2. `battery.charging` → `true` if the device is plugged in, `false` if not.
3. `battery.chargingTime` → estimated time (in seconds) until the battery is fully charged.
4. `battery.dischargingTime` → estimated time (in seconds) until the battery is empty.

---

### ⚡ Example Code

Here’s how you can check battery status:

```
navigator.getBattery().then(function(battery) {
  console.log("Battery level:", battery.level * 100 + "%");
  console.log("Charging:", battery.charging);
  console.log("Time to full charge:", battery.chargingTime, "seconds");
  console.log("Time left until empty:", battery.dischargingTime, "seconds");
});
```

👉 If your battery is at 50%, this would print:

```
Battery level: 50%
Charging: false
Time to full charge: Infinity
Time left until empty: 7200 seconds (2 hours)
```

---

### 🔔 Listening for changes

What if the battery percentage changes while you’re on the page?

The Battery API lets you **listen for events**:

```
navigator.getBattery().then(function(battery) {
  battery.addEventListener("levelchange", function() {
    console.log("Battery now at: " + battery.level * 100 + "%");
  });

  battery.addEventListener("chargingchange", function() {
    console.log("Charging status changed: " + (battery.charging ? "Plugged in" : "Unplugged"));
  });
});
```

So, if you unplug your charger, the site will know and react.

---

### 🏗 Real-life uses

* **Video streaming sites** → pause autoplay if you’re on low battery.
* **Games** → switch to low-power mode.
* **Study apps** → remind you: “Plug in your laptop before the class continues.”
* **Eco-friendly sites** → reduce background animations when you’re not charging.

---

### ⚠️ A Note on Privacy & Support

Because the Battery API reveals device info, some browsers (like Chrome and Firefox) **reduced support** for it due to privacy concerns. Websites could, in theory, “fingerprint” you based on your unique battery timings.

So today, the Battery Status API isn’t supported everywhere, but it’s still important to **understand how it works** for learning.

---

## ✅ Summary for Young Learners

* The **Battery Status API** lets websites know your battery’s **percentage, charging status, and timing**.
* It uses `navigator.getBattery()` and gives a **BatteryManager object** with info.
* You can even **listen for changes** (like plugging/unplugging).
* Useful for making web apps smarter and more power-friendly.
* Limited in modern browsers because of **privacy** concerns.

---

## 📝 Review Questions – Fill in the Gaps

1. The Battery Status API allows websites to check the device’s \_\_\_\_\_\_\_.
2. To access battery info, you call `navigator.________()`.
3. The `battery.level` property returns a number between 0 and \_\_\_\_\_\_\_.
4. If `battery.charging` is `true`, it means the device is \_\_\_\_\_\_\_.
5. The property `battery.chargingTime` gives the time left until the battery is \_\_\_\_\_\_\_.
6. The property `battery.dischargingTime` gives the time left until the battery is \_\_\_\_\_\_\_.
7. You can listen for changes in battery using `battery.addEventListener("_______", ...)`.
8. If a website lowers graphics when your battery is low, that’s an example of being \_\_\_\_\_\_\_-friendly.
9. Some browsers reduced support for this API because of \_\_\_\_\_\_\_ concerns.
10. The Battery API can be useful for apps that want to save \_\_\_\_\_\_\_ when the battery is low.
