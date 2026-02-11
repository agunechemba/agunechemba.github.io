# 🔍 Mastering JavaScript Object Properties: Dot Notation vs. Bracket Notation

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2026/02/1_lne8barkrwogynfy0mpfua.jpg" width="100%">

Imagine you just joined a fun online game where every player creates a digital identity card. On this card, players can write anything they want. Some players write simple things like their name or level. Some go wild and add things like favorite food or even funny labels like “Best Snack 🍿”.

Behind the game screen, JavaScript is quietly saving all this information. It does this using something called **objects**. You can think of an object like a digital locker. Inside the locker are many small sections, and each section has a label and something stored inside.

For example, a player’s locker might look like this in JavaScript:

```javascript
const player = {
  name: "Ken",
  level: 10
};
```

Here, JavaScript is creating a locker called `player`. Inside it are two labeled sections: `name` and `level`. The values stored inside them are `"Ken"` and `10`.

The word `const` is a special JavaScript keyword. It tells JavaScript to create a variable that should not be replaced later. The curly braces `{ }` are used to create an object. The labels like `name` and `level` are called properties (or keys), and the information stored inside them are called values.

Now, once data is inside this locker, JavaScript needs a way to open it and read what is inside. This is where **dot notation** and **bracket notation** come in.

---

## Dot Notation — The Easy Front Door

Dot notation is the simplest way JavaScript accesses data inside an object. Dot notation means you write a dot between the object name and the property name.

In simple terms, dot notation is a way to access or change object data using a dot (`.`).

The general structure looks like this:

```
objectName.propertyName
```

For example:

```javascript
player.name
```

This tells JavaScript to go to the `player` object, go inside using the dot, and pick the `name` property.

You can also use dot notation to change data:

```javascript
player.level = 11;
```

Here, JavaScript goes to the player object and updates the level.

Dot notation is very popular because it is short, clean, and easy to read. But it has rules. It only works when property names are simple. If the property name has no spaces, no strange symbols, and does not start with a number, dot notation works perfectly.

For example, these are fine:

```javascript
player.age = 20;
player.user_1 = "Online";
player.$coins = 500;
```

But dot notation breaks when property names are “weird”. For example, if a property has a space:

```javascript
player.favorite food = "Rice"; // Error
```

JavaScript gets confused. It thinks `favorite` is the property and `food` is something extra that should not be there.

This is where bracket notation saves the day.

---

## Bracket Notation — The Master Key

Bracket notation is a more flexible way to access object properties. Instead of using a dot, it uses square brackets `[ ]`.

Bracket notation means accessing or changing object properties using brackets with a string (or something that becomes a string) inside.

The structure looks like this:

```
objectName["propertyName"]
```

For example:

```javascript
player["favorite food"] = "Rice";
```

This works because inside brackets, JavaScript treats the value as a string key. That means it can handle spaces, emojis, special characters, and many other things.

Bracket notation can handle almost anything:

```javascript
player["Best Snack 🍿"] = "Popcorn";
player["home address"] = "Lagos";
player["score-per-level"] = 50;
```

Another powerful thing about bracket notation is that it can use variables.

For example:

```javascript
const key = "level";
player[key];
```

JavaScript checks what is inside `key`, sees `"level"`, and then reads `player.level`.

Dot notation cannot do this because dot notation expects the property name to be written directly.

---

## Numbers as Keys — A Hidden JavaScript Trick

JavaScript allows numbers as keys, but secretly turns them into strings.

For example:

```javascript
const obj = {};
obj[123] = "Hello";
```

JavaScript quietly changes `123` into `"123"`.

So these are actually the same:

```javascript
obj[123];
obj["123"];
```

---

## Expressions Inside Brackets — Where Things Get Interesting

Bracket notation can even calculate keys before using them.

For example:

```javascript
const obj = {};

obj["12" + "3"] = "Hi";
obj[120 + 3] = "Hello";
```

First, JavaScript calculates `"12" + "3"`. Because both are text (strings), it joins them to make `"123"`.

Then JavaScript calculates `120 + 3`, which becomes `123`. Then it turns it into `"123"` because object keys are strings.

The second value replaces the first, so the final object becomes:

```javascript
{
  "123": "Hello"
}
```

---

## Dot Notation vs Bracket Notation — The Big Idea

Dot notation is like using the front door of a house. It is fast and easy, but only works if you know the exact door name and the name is simple.

Bracket notation is like having a master key. It works on any door, even if the door name has spaces, emojis, or changes while the program is running.

---

## Final Thought

Objects help JavaScript organize information neatly, like lockers with labeled sections. Dot notation is the simple, everyday way to open those sections. Bracket notation is the powerful backup that works in tricky situations.

Good developers learn both, because real-world programs need both simplicity and flexibility.


## 🧪 Review Questions

1. What is an object in JavaScript, and how is it similar to a locker or container?

2. In the object below, which parts are the properties and which parts are the values?

   ```javascript
   const player = {
     name: "Ken",
     level: 10
   };
   ```

3. What is dot notation in JavaScript?

4. Write the general format (structure) of dot notation.

5. Why is dot notation easier to read and use compared to bracket notation?

6. Give two examples of property names that work well with dot notation.

7. Why does dot notation fail when a property name has spaces or special characters?

8. What is bracket notation in JavaScript?

9. When should you use bracket notation instead of dot notation?

10. What will be the final value stored in this object, and why?

```javascript
const obj = {};
obj["12" + "3"] = "Hi";
obj[120 + 3] = "Hello";
```