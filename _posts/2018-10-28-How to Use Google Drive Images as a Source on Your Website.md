# How to Use Google Drive Images as a Source on Your Website

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/07/3.jpg" width="100%">

### Steps

1. Copy this code snippet where you want the image in your HTML:

```
<img src="https://drive.google.com/uc?export=view&id=
```

2. Go to your Google Drive image, and make sure it’s set to “Anyone with the link can view.”

3. From the shareable link, copy the file ID part — the long string between `/d/` and `/view`. For example, in this link:

```
https://drive.google.com/file/d/1GjcKp6QmaYj3b3846tryJVfFwljiUk9Q/view?usp=sharing
```

The ID is: `1GjcKp6QmaYj3b3846tryJVfFwljiUk9Q`

4. Paste that ID right after `id=` in the snippet. It should look like this:

```html
<img src="https://drive.google.com/uc?export=view&id=1GjcKp6QmaYj3b3846tryJVfFwljiUk9Q">
```

Make sure the entire link is inside double quotes.

Done right? Your Google Drive image should now show up perfectly on your site.

Feel free to share this quick tip!
