### How to Use Google Drive Images as a Source on Your Website

![Agunechemba](https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/512px-Google_Drive_icon_%282020%29.svg.png)

Using Google Drive to host images for your website is smart, but the usual public link won’t work as an image source.

No worries — here’s a simple fix:

1. Copy this code snippet where you want the image in your HTML:

```html
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
