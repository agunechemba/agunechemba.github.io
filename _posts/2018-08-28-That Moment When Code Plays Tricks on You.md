# That Moment When Code Plays Tricks on You

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/01/a_coder_crying-edited.jpeg" width="100%"/>

> *"Is that an 'l' or a '1'? Wait... is that an 'O' or a zero?"*

It's in these moments that you realize programming isn't always about solving problems—sometimes it's about solving the *mystery of your own making*.

Here's the thing: we're lazy. Not in a bad way, just in a *"let me type this as fast as my brain can think it"* kind of way.

We use `i` for loops. `x` for whatever. `o` for... something. And then the universe decides to play a cruel joke. In most code editors, these characters look like long-lost twins:

- `l` (lowercase L) and `1` (one)
- `O` (uppercase O) and `0` (zero)  
- `I` (uppercase I) and `l` (lowercase L)

So when you write:

```
if (O == 0) {
  l += 1;
}
```

You're basically writing a riddle for your future self. And trust me, future you will *not* appreciate it.

Someone's probably told you: "Download Fira Code! Try JetBrains Mono! Problem solved!"

And sure, those fonts help. They add little flourishes so `0` has a dot and `1` has a little hat. It's like putting glasses on your code—definitely better, but it doesn't fix the *real* problem.

Because if you're using a single letter that *could* be mistaken for something else, you're still gambling. A font won't save you if you named your variable `OO` and your function `00`.


Take a look: 

#### What i did wrong
```
let l = 5;
let O = "open";
```

#### How i fixed it
```
let lowerCaseL = 5;  // okay, still weird, but at least you know
let uppercaseO = "open";
```

&

```
let maxAttempts = 5;
let doorStatus = "open";
let currentIndex = 0;
```

See what happened there? Suddenly you don't *need* to decode anything. The code tells you what it does. It's like the difference between a cryptic text message and a clear sentence.


This isn't about being ["clean code"](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882) snob. This is about survival. When your code reads clearly, you:

- **Find bugs faster**
- **Fix things quicker**
- **Collaborate easier**
- **Feel less stressed**

I've been the person who opens a file from three months ago and thinks, *"Who wrote this mess?"* but here's what I've learned after years of writing code and occasionally crying over it:

> If someone can read your variable name and instantly know what it represents, you've won!.
