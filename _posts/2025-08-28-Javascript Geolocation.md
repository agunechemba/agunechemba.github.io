# 🌍 Javascript Geolocation: Learning Geolocation in JavaScript

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/08/js-geolocation.jpg" width="100%">

Have you ever used an app that magically knows **where you are**? Google Maps draws a little blue dot showing your location. Uber follows your car in real time. Weather apps can instantly give you the forecast for your city.

All of that is possible because of a browser feature called **Geolocation**.

But here’s something important: location data is **very private**. Before a website can use it, your browser will always ask:

👉 *“Do you want to share your location with this site?”*

If you say **yes**, then the site can get your latitude and longitude. Let’s see how this works in JavaScript.

---

## 1. Following the user with `watchPosition`

Imagine you’re walking down the street and you want a website to follow you like a little blue dot on a map. That’s where `watchPosition` comes in.

```
if (navigator.geolocation) {
  var watchId = navigator.geolocation.watchPosition(updateLocation, geolocationFailure);
} else {
  console.log("Geolocation is not supported by this browser.");
}

var updateLocation = function(position) {
  console.log("New position at: " + position.coords.latitude + ", " + position.coords.longitude);
};

// Stop tracking
navigator.geolocation.clearWatch(watchId);
```

* The browser first checks if geolocation is supported.
* If it is, `watchPosition` starts keeping track of where you are.
* Every time you move, `updateLocation` is called with your new coordinates.

If you ever want to stop, you call `clearWatch`. That’s like telling the website:

> “Okay, you’ve followed me enough. Please stop.”

📌 **Example use case:** Navigation apps like Google Maps or Uber.

---

## 2. Getting the location once with `getCurrentPosition`

Not every app needs to follow you around. Sometimes they just want to know your location once. For example, a weather app might ask, “What’s your city?” so it can give you today’s forecast.

That’s where `getCurrentPosition` is used:

```
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationFailure);
} else {
  console.log("Geolocation is not supported by this browser.");
}

var geolocationSuccess = function(pos) {
  console.log("Your location is " + pos.coords.latitude + "°, " + pos.coords.longitude + "°.");
};

var geolocationFailure = function(err) {
  console.log("ERROR (" + err.code + "): " + err.message);
};
```

Here’s what’s happening:

* If it succeeds, `geolocationSuccess` runs and prints your latitude and longitude.
* If it fails, `geolocationFailure` runs and shows an error.

📌 **Example use case:** Weather apps or e-commerce sites showing local stores.

---

## 3. Understanding errors more clearly

Sometimes geolocation doesn’t work. Maybe you clicked “Deny.” Maybe your GPS is turned off. Or maybe the signal took too long.

To help us understand, the error object has a **code**. We can translate that into words:

```
var getErrorCode = function(err) {
  switch (err.code) {
    case err.PERMISSION_DENIED:
      return "PERMISSION_DENIED";
    case err.POSITION_UNAVAILABLE:
      return "POSITION_UNAVAILABLE";
    case err.TIMEOUT:
      return "TIMEOUT";
    default:
      return "UNKNOWN_ERROR";
  }
};
```

This makes error messages much easier to read. Instead of just a number, you’ll see something like:

```
ERROR (PERMISSION_DENIED): User denied Geolocation
```

---

## 🔎 Quick Review

* Use **`watchPosition`** if you want continuous updates.
* Use **`getCurrentPosition`** if you only need the location once.
* Always handle errors gracefully, because users may deny access or the device may fail.

---

# ✏️ Practice Time: Fill-in-the-gap Questions

Now it’s your turn. Fill in the blanks below to test your understanding.

1. To keep getting updates as the user moves, we use `____________`.
2. To stop continuous tracking, we call `navigator.geolocation.____________`.
3. To get the location only once, we use `____________`.
4. The method `navigator.geolocation` checks if the browser \_\_\_\_\_\_\_\_\_\_\_\_ geolocation.
5. The property `position.coords.latitude` gives the user’s \_\_\_\_\_\_\_\_\_\_\_\_.
6. The property `position.coords.longitude` gives the user’s \_\_\_\_\_\_\_\_\_\_\_\_.
7. If the user blocks location access, the error code will be `____________`.
8. If the device cannot figure out where it is, the error code will be `____________`.
9. If it takes too long to find location, the error code will be `____________`.
10. If none of the known error types fit, the function returns `____________`.