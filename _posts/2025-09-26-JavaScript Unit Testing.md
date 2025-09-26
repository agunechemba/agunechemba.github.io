# ✅ JavaScript Unit Testing: Start Simple But Grow Very Powerful

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/09/nigerian-classroom-unit-testing.jpg" width="100%">

If you’ve ever written code and wondered *“How do I know this works every time?”*, you’re already thinking about **unit testing**.

Unit testing is the practice of writing **small, automated tests** to check that individual pieces of code (like a function) behave exactly the way you expect. In JavaScript, this can be as simple as testing a basic function, or as advanced as mocking dependencies and testing **Promises**.

In this lesson, we’ll explore both worlds:

1. **Basic Assertions** → The foundation of testing.
2. **Unit Testing Promises** → Using modern tools like Mocha, Chai, and Sinon.

---

## 🧪 Basic Assertions

At its simplest, a **unit test** is just an **assertion**:

> “If I run this code, do I get the result I expect?”

Let’s build a tiny custom assertion function:

```
function assert(outcome, description) {
  var passFail = outcome ? "pass" : "fail";
  console.log(passFail, ":", description);
  return outcome;
};
```

This function prints `pass` if the test condition is true, or `fail` if it’s false.

Now let’s test a simple `add` function:

```
function add(num1, num2) {
  return num1 + num2;
}
```

A failing test (wrong expectation):

```
var result = add(5, 20);
assert(result == 24, "add(5, 20) should return 25...");
// Output: fail : add(5, 20) should return 25...
```

A corrected test:

```
assert(result == 25, "add(5, 20) should return 25...");
// Output: pass : add(5, 20) should return 25...
```

👉 A real-world test suite would include **multiple assertions** — testing positive numbers, negative numbers, and even edge cases like `add(0, 0)` — to make sure your function works in all scenarios.

---

## ⚡ Testing Promises with Modern Tools

JavaScript isn’t just about simple functions — modern apps rely heavily on **Promises** for asynchronous work. Testing them requires a bit more setup.

The book’s example uses a combination of popular testing tools:

* **Mocha** → A test runner (organizes and runs tests).
* **Chai** → An assertion library (human-readable checks).
* **chai-as-promised** → Extends Chai to handle Promises easily.
* **Sinon** → For spies, stubs, and mocks.
* **Proxyquire** → To override dependencies (inject stubs).

### 🔹 Testing a Function that Returns a Promise

Imagine a `ping` function that returns a Promise:

```
const ping = () => {
  return new Promise((resolve, _reject) => {
    const response = processResponse(data);
    resolve(response);
  });
};
```

We don’t want the real `processResponse` — we just want to test `ping` in isolation.

So we use:

1. **`proxyquire`** → To replace `processResponse` with a fake one (`formattingStub`).
2. **`sinon.stub()`** → To define what the stub should return.

In the test, we assert:

```
expect(pingResult).to.be.fulfilled;
expect(pingResult).to.eventually.equal(response);
```

Thanks to **chai-as-promised**, this reads almost like English: *“I expect this Promise to be fulfilled and eventually equal the response.”*

---

### 🔹 Testing a Function that Consumes a Promise

Now let’s test a wrapper that calls `ping`:

```
const pingWrapper = () => {
  ping.then((response) => {
    // do something with the response
  });
};
```

Steps for testing:

1. Stub the `ping` function itself with `proxyquire`.
2. Use **`sinon-stub-promise`** to control how the stubbed Promise behaves:

   ```
   pingStub.returnsPromise().resolves(response);
   ```
3. After running `pingWrapper`, assert that `ping` was called properly:

   ```
   expect(pingSpy).to.have.been.calledWith(response);
   ```

👉 This approach ensures that your tests **don’t rely on real external dependencies**, making them **fast, reliable, and isolated**.

---

## ✅ Summary

Unit testing in JavaScript can start simple but grow very powerful:

* **Basic Assertions** → Use functions like `assert()` or libraries like Chai to check expected results.
* **Testing Promises** → Requires stubbing dependencies and using tools like Mocha, Chai-as-Promised, Sinon, and Proxyquire.
* **Good tests** → Small, focused, reliable, and independent of real-world services.

The more you test, the more confidence you’ll have that your code won’t break when users interact with it.

---

## 📝 Review – Fill in the Gaps

1. A unit test checks a small, discrete piece of ______.
2. The `assert` function returns “pass” if the test outcome is ______.
3. `add(5, 20)` should correctly return ______.
4. **Mocha** is a JavaScript test ______.
5. **Chai** is used as an ______ library.
6. To test Promises, Chai can be extended with `chai-______`.
7. **Sinon** is useful for creating spies, stubs, and ______.
8. **Proxyquire** allows you to override a module’s ______.
9. `expect(pingResult).to.eventually.equal(response);` checks the resolved value of a ______.
10. A good test suite should cover not just one case but multiple ______.