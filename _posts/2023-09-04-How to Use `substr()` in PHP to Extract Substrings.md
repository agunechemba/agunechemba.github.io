# How to Use `substr()` in PHP to Extract Substrings

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2024/10/echo-substrhello-world-6-3.png?w=1024" alt="" class="wp-image-1619" />

Working with strings is a key part of PHP programming, and `substr()` is one of the most useful functions for this. It extracts a portion of a string based on a start position and optional length.

---

#### What is `substr()`?

`substr()` extracts part of a string. It takes:

* **\$string**: The original string.
* **\$start**: The starting index (0-based). Negative values start from the end.
* **\$length** (optional): Number of characters to extract. Negative values exclude chars from the end.

---

#### Syntax

```php
substr(string $string, int $start, ?int $length = null): string
```

---

#### Examples

1. **Basic extraction**

```php
echo substr("Hello World", 6); // Output: World
```

Starts at index 6, returns the rest.

2. **Using length**

```php
echo substr("Hello World", 6, 3); // Output: Wor
```

Extracts 3 characters starting at index 6.

3. **Negative start**

```php
echo substr("Hello World", -5); // Output: World
```

Starts 5 characters from the end.

4. **Negative length**

```php
echo substr("Hello World", 0, -6); // Output: Hello
```

Returns string excluding last 6 characters.

---

#### When to Use `substr()`?

* **Text processing:** Extract file extensions, manipulate URLs, or handle user input.
* **Data cleanup:** Trim unwanted parts.
* **Custom formatting:** Show previews or excerpts.

---

#### Final thoughts

`substr()` is a flexible, essential PHP function for string manipulation. Get comfortable with its parameters to boost your PHP skills.

---

### Quiz

1. What is the output of:

```php
echo substr("Programming in PHP", 0, 11);
```

* A) Programming
* B) in PHP
* C) Programmin
* D) PHP

2. Which is true about `$start` in `substr()`?

* A) Must be positive
* B) Can be negative to start from the end
* C) Determines length
* D) Is optional

---

Drop your answers anytime!
