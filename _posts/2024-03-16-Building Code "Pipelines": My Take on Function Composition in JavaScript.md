# Building Code "Pipelines": My Take on Function Composition in JavaScript


<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/04/img_20241018_082917.jpg?w=1024" alt="" class="wp-image-2039" />

In functional programming, I often build pipelines — snapping together small, focused functions to form one powerful operation. Think of it like assembling a train track: data enters at the beginning, and each function on the track transforms it before passing it along.

This is called **function composition** — combining functions to create cleaner, more reusable code.

Let’s break it down with a simple example.

#### The Functions

```
const capitalize = x => x.replace(/^\w/, m => m.toUpperCase());
const sign = x => x + ',\nmade with love';
```

* `capitalize` makes the first letter uppercase.
* `sign` appends a friendly message at the end.

Instead of calling them separately like this:

```
const result = sign(capitalize('this is an example'));
```

You can **compose** them into one clean function:

```
const formatText = compose(capitalize, sign);
```

Now:

```
formatText('this is an example');
// Output:
// 'This is an example,
// made with love'
```

Just like that, you’ve built a transformation track.

#### What is `compose`?

Libraries like **Lodash** or **Ramda** give you a `compose()` function out of the box. But here’s a basic version you can write yourself:

```
const compose = (...fns) => x =>
  fns.reduce((acc, fn) => fn(acc), x);
```

It takes any number of functions, and when called with a value, it passes that value through each function in order.

---

**Bottom line**:
Function composition lets you build powerful pipelines by snapping together small, focused functions. It keeps your code clean, modular, and easy to understand.
