# How Social Media Preview Works - JavaScript `substring()`

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2024/10/6015105009924031169.jpg?w=1024" width="100%"/>

### Understanding the `createOGMetaDescription` function:

```
function createOGMetaDescription(content, maxLength = 150) {
  // STEP 1: Remove ALL HTML tags
  const plainText = content.replace(/<[^>]*>/g, '');
  
  // STEP 2: Check if text exceeds max length
  return plainText.length > maxLength

  // STEP 3a: If too long → truncate and add ellipsis
    ? plainText.substring(0, maxLength) + "…" 
    // STEP 3b: If short enough → return as-is
    : plainText;
}
```

### Visualizing Each Step

```
// Given this HTML:   <h1>Breaking News</h1>
// <p>Scientists discover <strong>revolutionary</strong> new 
// energy source that could power the entire world for 
// centuries to come.</p>
// create a constant named "htmlContent" and assign the given html to it.

const htmlContent = `
  <h1>Breaking News</h1>
  <p>Scientists discover <strong>revolutionary</strong> new 
  energy source that could power the entire world for 
  centuries to come.</p>
`;
```

// STEP 1: Remove HTML tags, replace with `'nothing'`

```
const plainText = content.replace(/<[^>]*>/g, '');

// Result: "Breaking News Scientists discover revolutionary new 
//          energy source that could power the entire world for 
//          centuries to come."

// STEP 2 & 3: Check length and truncate if needed

const result = createOGMetaDescription(htmlContent, 60);

// Result: "Breaking News Scientists discover revolutionary new energy source that could power…"
//                                                                                ^^^ 60 chars
```

### How `substring()` Works Here

```
plainText.substring(Start index, maxLength)

```

| Part | Value |
|------|-------|
| `plainText` | The cleaned HTML content |
| `.substring(` | Method call |
| `0` | Start index |
| `maxLength` | End index |
| `)` | Close method |


### Real Life Example

```
// Real life example
const blogPost = `
  <div class="post">
    <h2>10 Best JavaScript Tips</h2>
    <p>Here are the top 10 JavaScript tips that every 
    developers should know in 2024. These tips will help 
    you write cleaner, more efficient code...</p>
  </div>
`;

createOGMetaDescription(blogPost, 50);
// Returns: "10 Best JavaScript Tips Here are the top 10 JavaS…"
// NB: the substring() is used inside the initial createOGMetaDescription function.
```
