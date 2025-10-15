# Adventures in Regex Land: My Journey Learning JavaScript Patterns

<center>
        <img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/agu-ekene.png"
             alt="Agu Ekene"
             width="auto">
</center>

---
    

Regular expressions are **patterns used to match character combinations in strings**.  I remember when I first saw something like `/\w+@\w+\.\w+/` in code – it looked like hieroglyphics!  I was baffled. But over time I learned that regex are just tools for searching and slicing up text. In JavaScript, you can create a `RegExp` object in two ways.  For example, the literal syntax `/pattern/flags` is the simplest, and the constructor `new RegExp("pattern", "flags")` works too.  Both compile to the same thing. (MDN explains it like this: *“The literal notation takes a pattern between two slashes, followed by optional flags... The constructor function takes either a string or a RegExp object and a string of flags”*.)  In practice, I often start with the literal form, and use `RegExp()` only when I need to build a pattern from a variable string.

## Regex Flags: g, i, m, u, y (and more)

Flags are one-letter modifiers that tweak how a regex matches.  For example, the **`g` (global)** flag makes the regex find *all* matches in a string, not just the first.  The **`i` (ignoreCase)** flag makes it case-insensitive. The **`m` (multiline)** flag changes how `^` and `$` match the start and end of lines (instead of the whole string).  JavaScript also has newer flags: **`u` (unicode)** treats the pattern as Unicode code points, and **`y` (sticky)** forces matches to start exactly at the current position (`lastIndex`).  (There’s also `s` for “dotAll” mode, and `d`/`v` in the newest ECMAScript, but the main ones to know are `g`, `i`, `m`, `u`, `y`.)  For example:

* ```js
  const regex = /cat/gi;  // global and ignore-case
  ```
* ```js
  const multiline = /foo$/gm;  // match 'foo' at end of *any* line
  ```
* ```js
  const uni = /\p{Emoji}/u; // match any emoji (unicode flag needed)
  ```
* ```js
  const sticky = /world/y;
  sticky.lastIndex = 6;
  console.log(sticky.test("hello world")); // true
  ```

Flags can feel like extra spices: they let you customize how the pattern behaves.  I learned to always double-check which flags I need, because `g` vs no-`g` can change how methods like `.exec()` and `.match()` behave.

## Quick Checks with `.test()`

Once you have a regex, the simplest thing is to check if there’s a match.  The `.test()` method on a `RegExp` returns `true` or `false`.  MDN says: *“The `test()` method executes a search for a match between a regular expression and a specified string. It returns `true` if there is a match; `false` otherwise.”*.  It’s literally a yes/no question.  For example:

```js
const hasNumber = /\d/;
console.log( hasNumber.test("Room 101") ); // true
console.log( hasNumber.test("No digits here") ); // false
```

With the `g` or `y` flag, `test()` is **stateful**: it advances `lastIndex` like `.exec()` does (so you can loop through matches).  (I learned this the hard way: if you keep calling `.test()` on the same global regex, it will alternate between true/false because it remembers where it left off!)  As a simple check though, `.test()` is super convenient for “does this string contain a pattern?”

## Digging Deeper with `.exec()`

When I needed details about what was matched, I turned to `.exec()`.  This method returns an array with match info or `null` if nothing matched.  The first element is the whole matched text, and the next elements are any **captured groups** (more on that soon).  The array also has properties `index` (where in the string the match was found) and `input` (the original string).  MDN explains: *“If the match succeeds, `exec()` returns an array and updates the regex’s `lastIndex`. The returned array has the matched text as the first item, and then one item for each capturing group.”*. For example:

```js
const re = /(\d+)-(\w+)/;
const result = re.exec("123-abc 456-def");
console.log(result);
// ["123-abc", "123", "abc", index: 0, input: "123-abc 456-def"]
```

Here, `result[0]` is `"123-abc"`, `result[1]` is `"123"` (first group), `result[2]` is `"abc"` (second group).  Notice the array structure: the full match, then each capture.  If there’s no match, `.exec()` returns `null`.

One thing I learned is that `.exec()` with a global regex can be used in a loop to find all occurrences.  For example:

```js
const re = /(\w+),(\d+)/g;
const text = "apples,10 bananas,20";
let match;
while ((match = re.exec(text)) !== null) {
  console.log(`Found ${match[1]}: ${match[2]}`);
}
// Found apples: 10
// Found bananas: 20
```

Here `.exec()` is automatically moving through the string because of the `g` flag. MDN notes that regex objects are stateful with `g`/`y`, so you can use `.exec()` to iterate over matches with capture groups.  This was a powerful moment for me: I realized I could pull out structured data by looping with `.exec()`.

## Regex in String Methods: `.replace()`, `.split()`, `.search()`, `.match()`

JavaScript strings have handy methods that accept regex patterns.  I gradually learned to weave regex into them:

* **`.replace(pattern, replacement)`**: returns a new string where matches of the pattern are replaced. The `pattern` can be a regex or a string; if it’s a string, only the first occurrence is replaced. The `replacement` can be a plain string or a function. MDN says: *“The `replace()` method returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function.”*. For instance:

  ```js
  let s = "Hello John";
  console.log( s.replace("John", "Jane") );
  // "Hello Jane"
  ```

  And with a regex (notice how \$1, \$2 refer to capture groups):

  ```js
  // Swap first and last name
  const nameRe = /(\w+)\s(\w+)/;
  const str = "Maria Cruz";
  const newStr = str.replace(nameRe, "$2, $1");
  console.log(newStr);  // "Cruz, Maria"
  ```

  *This example is from MDN*.  The `$1` and `$2` in the replacement string correspond to the parenthesized groups in the regex (first name and last name).

* **`.split(separator)`**: splits a string into an array around occurrences of the separator pattern. The separator can be a regex, which is really useful. For example, to split on any newline (`\n`) or Windows newline (`\r\n`):

  ```js
  const text = "Line1\nLine2\r\nLine3";
  const lines = text.split(/\r?\n/);
  console.log(lines);
  // ["Line1", "Line2", "Line3"]
  ```

  This technique (splitting on `\r?\n`) came in handy when I needed to normalize line breaks across different platforms.

* **`.search(pattern)`**: searches for the pattern and returns the index of the first match, or `-1` if none. It’s like `.indexOf` but for regex. For example:

  ```js
  const index = "Look for a number 42".search(/\d+/);
  console.log(index); // e.g., 19 (the position of "42")
  ```

  MDN simply notes: *“The `search()` method executes a search for a match... returning the index of the first match in the string.”*. I often use this when I only need to know *where* something is, not capture it.

* **`.match(pattern)`**: returns an array of matches. If the regex has the `g` flag, it returns *all* matches (but no capture groups). If no `g` flag, it returns the same as `.exec()` (the first match plus groups). For example:

  ```js
  const allVowels = "Education".match(/[aeiou]/gi);
  console.log(allVowels); // ["E", "u", "a", "i", "o"]
  ```

  Here I used `/[aeiou]/gi` to find all vowels (case-insensitive). Because I used `g`, `.match()` gave me an array of all vowel characters. Without `g`, it would give me just the first vowel and its capture info.  (MDN details this behavior: with `g`, all matches are returned; without `g`, you get the first match and groups.)

Using regex with string methods felt like learning new superpowers.  Instead of manual loops or splits, I just slap a pattern on there.

## Capturing Groups, Non-Capturing Groups, and Lookahead

One thing that *clicked* for me was grouping with parentheses. Parentheses `()` do two things: they **group** subpatterns and they **capture** the matched text.  A **capturing group** remembers the part of the string it matched.  As MDN explains, *“A capturing group groups a subpattern… It memorizes information about the subpattern match, so you can refer back to it later…through match results.”*.  In practice, when you write a regex like `/(Jan|Feb|Mar) \d{2}/`, the `(Jan|Feb|Mar)` is a capturing group.  If this matches “Mar 21”, then the array from `.exec()` would have the whole match `"Mar 21"` and then the first capture `"Mar"` as separate entries.

Sometimes you just need grouping for structure (e.g. to apply a quantifier to a group), but you don’t actually need to capture. In that case, use a **non-capturing group** `(?:…)`.  This groups the pattern without saving it.  For example, to optionally match a hex hash in a filename, I used `styles(?:\.[0-9a-f]+)?\.css`. MDN notes this is better when you don’t need the matched text, since it avoids extra work.  Non-capturing groups are like organizational brackets: they let you apply `?` or `+` to a subpattern without remembering it.

Another magical feature is lookahead. Lookaheads let you check for something without consuming it. A positive lookahead `(?=pattern)` asserts that the given `pattern` matches right after the current position, but it doesn’t move the regex engine forward.  As MDN says, *“A lookahead… attempts to match the subsequent input… but it does not consume any of the input”*. For example, `/foo(?=bar)/` will match “foo” only if it’s immediately followed by “bar”, but it only returns “foo” as the match. There’s also a negative lookahead `(?!pattern)` which succeeds only if the pattern does **not** match next.  I sometimes think of lookahead as peeking ahead: “Do I see this ahead in the string?” without actually moving the cursor.

Putting it together: with `()`, `(?:)`, `(?=)`, and `(?! )`, I can write complex filters. For example, to match a word only if it’s followed by a digit I might use `/word(?=\d)/`.  These tools took some practice to get right, but they make patterns way more powerful once you understand them.

## Dynamic Replacements with a Callback

A really cool trick I learned is using a function as the replacement in `.replace()`. Instead of passing a string, you can pass a function, and it will be called for each match. MDN notes: *“If \[the replacement] is a function, it will be invoked for every match and its return value is used as the replacement text.”*. The function receives arguments `(match, p1, p2, ..., offset, string)`, where `p1, p2, ...` are capture groups. For example, suppose I want to double every number in a string:

```js
const text = "1,2,3";
const doubled = text.replace(/\d+/g, (match) => {
  return String(Number(match) * 2);
});
console.log(doubled); // "2,4,6"
```

Here the replacer function takes each matched number (`match` like `"1"`, `"2"`, `"3"`), converts it, and returns a new string. I use `String()` or template literals to make sure it’s text. The result is that every number got replaced by its double.  This callback pattern is super flexible – you can transform dates, reformat text, or even build HTML in one go. MDN’s documentation shows examples of using a replacer function to modify matches on the fly.

## Extracting Data in a Loop

After I learned that `.exec()` on a global regex can be looped, I started using regex to parse structured text. For example, suppose I had lines like `"name:Alice age:30"` and I wanted to pull out the fields. I could do:

```js
const data = "name:Alice age:30; name:Bob age:25;";
const fieldRe = /name:(\w+)\s+age:(\d+)/g;
let match;
while ((match = fieldRe.exec(data)) !== null) {
  console.log(`Name = ${match[1]}, Age = ${match[2]}`);
}
// Name = Alice, Age = 30
// Name = Bob, Age = 25
```

Each loop iteration, `fieldRe.exec(data)` finds the next match because of the `g` flag, and `match[1]` and `match[2]` give me the captured groups. This way I can extract lists of entries from a long text. MDN even mentions that using `.exec()` with the global flag is a way to iterate through matches and their capture groups. In fact, modern JavaScript now has `String.prototype.matchAll()` for similar purposes, but I still often rely on the good old `while`+`.exec()` loop since it’s straightforward and well-supported.

## Reflection: From Puzzling to Productive

Looking back, I went from being mystified by regex syntax to using them almost daily.  At first, I felt lost in the symbols (`^`, `.`, `\d`, `?`, `+`, etc.), but I found that thinking of regex as a **search pattern** helped.  It’s like learning a new language for string searching – at first gibberish, but eventually expressive and precise.

Here are a few tips I learned along the way:

* **Start simple**: Try simple patterns like `/cat/` before diving into crazy ones. Use regex testers or the browser console to experiment.
* **Use capturing thoughtfully**: Only capture when you need to extract something. Otherwise use `(?: )` to avoid confusion.
* **Remember the flags**: The `g` flag changes how many matches you get; `i`, `m`, `u`, `y` each have special effects.
* **Leverage online docs**: MDN has great references (as I’ve linked) that explain each method and flag.
* **Practice**: Regex is best learned by doing. I wrote little scripts and tested patterns until I got comfortable.

By treating regex as just another string tool – a way to **pattern-match** – I turned confusion into capability. Now I can tackle tasks like data extraction, validation, and text transformation with confidence. I hope this walkthrough helps other beginners see that regex can indeed make sense, one symbol at a time!

**Happy coding (and pattern matching)!**
