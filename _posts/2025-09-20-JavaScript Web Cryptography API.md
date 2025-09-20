# 🔐 JavaScript Web Cryptography API: Learn How Hashing a Password Works

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/09/futuristic-cyber-security.jpg" width="100%">


Imagine this: You and your best friend want to share secrets during class (not that I’m encouraging it 😅). You decide to **write your message in code** so that if someone else snatches the paper, they won’t understand it.

That “code” you make is basically **encryption**.
And when your friend uses the “key” to read it back into normal words, that’s **decryption**.

Now, the internet works the same way! When you log in to your **bank app**, or when you send a **WhatsApp message**, those apps don’t just send your plain password or text across the internet. That would be dangerous. Instead, they use **cryptography** — scrambling and protecting information with special math.

The **Web Cryptography API** is a set of tools inside your browser (JavaScript) that lets websites do this encryption, decryption, signing, and verifying securely — right on your device.

---

## 🔑 What can the Web Crypto API do?

Think of it like a **toolbox** for security. The main tools are:

1. **Generate Keys** → Make secret codes (keys) for encrypting and decrypting.
2. **Encrypt & Decrypt Data** → Scramble info before sending; unscramble it when received.
3. **Hashing** → Create a fingerprint of data (used for passwords).
4. **Digital Signatures** → Prove that a message really came from you.
5. **Random Numbers** → Create strong, unpredictable values for security (not simple “Math.random()”).

---

## ⚡ Example – Generating Random Numbers

```
const array = new Uint32Array(5);
window.crypto.getRandomValues(array);
console.log(array);
```

👉 This makes 5 strong random numbers that can be used for passwords or keys.

---

## ⚡ Example – Hashing a Password

Hashing is like turning your password into a fingerprint that can’t easily be reversed.

```
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

hashPassword("mypassword123").then(console.log);
```

👉 If you type `"mypassword123"`, you’ll get a long scrambled string like
`ef92b...` (a hash). That’s what gets stored, not your real password.

---

## ⚡ Example – Encrypt and Decrypt

Websites can lock (encrypt) your data and unlock (decrypt) it only if they have the right key.

```
// Simplified idea: Using AES (Advanced Encryption Standard)
const key = await crypto.subtle.generateKey(
  { name: "AES-GCM", length: 256 },
  true,
  ["encrypt", "decrypt"]
);
```

Once you have a key, you can encrypt a message before sending it. Only someone with the same key can decrypt it.

---

## 🎮 Real-Life

* **WhatsApp / Telegram:** Messages are end-to-end encrypted → nobody (not even the company) can read them except you and your friend.
* **Online Games:** Your login info is encrypted so hackers can’t steal your password.
* **School Portal:** When you submit homework online, your login details and grades are protected.

---

## ⚠️ Important Notes

* The **Web Crypto API is built into modern browsers** → you don’t need extra libraries.
* It is **much safer** than using normal `Math.random()` or writing your own crypto code.
* But it can be a bit **complex**, so usually web developers use higher-level libraries that rely on Web Crypto behind the scenes.

---

## ✅ Summary

* The **Web Cryptography API** is like a secret toolbox in your browser for protecting information.
* It can **encrypt**, **decrypt**, **hash**, **sign**, and generate **secure random numbers**.
* It makes websites safer for things like **messages, passwords, and payments**.
* Think of it as the reason why your **WhatsApp messages stay private** and your **online banking is safe**.

---

## 📝 Review – Fill in the Gaps

1. Cryptography is about hiding information so only someone with the right \_\_\_\_\_\_ can read it.
2. The Web Crypto API lets JavaScript do security work \_\_\_\_\_\_\_ in the browser.
3. A password is usually stored as a \_\_\_\_\_\_, not as plain text.
4. The method `crypto.getRandomValues()` generates strong \_\_\_\_\_\_ numbers.
5. The function `crypto.subtle.digest("SHA-256", data)` is used to create a \_\_\_\_\_\_ of data.
6. Encrypting a message scrambles it, while \_\_\_\_\_\_ makes it readable again.
7. WhatsApp uses ******-to-****** encryption to keep chats private.
8. The Web Crypto API provides tools for generating keys, encrypting data, and making digital \_\_\_\_\_\_.
9. Using `Math.random()` for security is bad because it is not truly \_\_\_\_\_\_.
10. The Web Crypto API helps keep passwords, payments, and messages \_\_\_\_\_\_.