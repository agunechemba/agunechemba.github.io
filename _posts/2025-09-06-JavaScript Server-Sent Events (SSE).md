# 🌐 JavaScript Server-Sent Events (SSE): How You Get Live Updates Like Sport Scores, Stock Prices

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/09/real-time-server-updates_simple_compose_.jpg" width="100%">

### **Imagine Subscribing to Live News**

Think about how you watch a **football match live** on your phone. You don’t keep refreshing the page every second to check the score, right? Instead, the updates just **appear automatically**.
That’s exactly what **Server-Sent Events (SSE)** do in JavaScript—they let the **server keep sending updates** to your browser whenever something new happens.

---

### **What are Server-Sent Events?**

* SSE is a way for the **server to push messages to the browser continuously**.
* The browser just **listens** after connecting once.
* It’s **one-way communication**: server → browser (not the other way around).

This makes it perfect for **live updates** like:

* Sports scores
* Stock prices
* Chat notifications
* News tickers

---

### **How Does It Work?**

Normally, when you visit a website, your browser asks the server for information (like “Hey, give me this page”). But with SSE:

1. The browser says: *“Hey server, I want to subscribe to updates.”*
2. The server responds: *“Cool, I’ll send you updates whenever I have something new.”*
3. The browser keeps listening and showing updates in real time.

---

### **The JavaScript API: EventSource**

You can use `EventSource` to listen to server-sent events.

Example:

```
let eventSource = new EventSource("/updates");

eventSource.onmessage = function(event) {
    console.log("New message:", event.data);
};
```

Here:

* `/updates` is the server endpoint streaming messages.
* `onmessage` runs every time a new update arrives.
* `event.data` contains the message from the server.

---

### **Difference from WebSockets**

* **SSE** → one-way (server → browser), lightweight, great for updates.
* **WebSockets** → two-way (server ↔ browser), more complex, great for chat apps or games.

---

### **Real-Life Analogy**

Think of **SSE as subscribing to a live radio broadcast**.

* You tune in once (connect).
* The radio station (server) keeps sending music/news (data).
* You don’t need to call them every time for updates.

---

### **In Short**

* Server-Sent Events = **server continuously sending updates to browser**.
* Uses `EventSource` in JavaScript.
* Best for **live feeds** like sports, stocks, or breaking news.

---


### **Review Questions**

1. Server-Sent Events allow the \_\_\_\_\_\_\_\_\_\_ to push updates to the browser.
2. SSE is a form of \_\_\_\_\_\_\_\_\_\_ communication (one-way or two-way).
3. The JavaScript object used to listen to SSE is called \_\_\_\_\_\_\_\_\_\_.
4. To handle incoming messages in SSE, we use the \_\_\_\_\_\_\_\_\_\_ event handler.
5. The actual data from the server is accessed using \_\_\_\_\_\_\_\_\_\_.
6. SSE is perfect for real-time apps like sports scores and \_\_\_\_\_\_\_\_\_\_ prices.
7. Unlike WebSockets, SSE only allows communication from \_\_\_\_\_\_\_\_\_\_ to browser.
8. In the analogy, SSE is like listening to a live \_\_\_\_\_\_\_\_\_\_ broadcast.
9. WebSockets are better when we need \_\_\_\_\_\_\_\_\_\_ communication.
10. The method `new EventSource("/updates")` is used to \_\_\_\_\_\_\_\_\_\_ to a server’s events.