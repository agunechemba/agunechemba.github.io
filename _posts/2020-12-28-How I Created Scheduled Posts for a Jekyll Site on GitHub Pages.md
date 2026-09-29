---
title: "How I Created Scheduled Posts for a Jekyll Site on GitHub Pages"
date: 2020-12-28
layout: post

---

# How I Created Scheduled Posts for a Jekyll Site on GitHub Pages

This guide will show you how to write blog posts that automatically publish on a future date.
Your posts stay hidden in a `_drafts/` folder until the scheduled date, then GitHub Actions automatically moves them to `_posts/` and publishes them.

**Prerequisites:**
- A Jekyll site hosted on GitHub Pages
- A GitHub account
- Access to your repository via web browser

## Step 1: Set Up the Auto-Publish System

### 1.1 Create the Workflow File

1. **Go to your repository** on GitHub.com
2. **Click "Add file"** → **"Create new file"**
3. **In the filename box**, type:
   ```
   .github/workflows/publish-scheduled.yml
   ```
4. **Copy and paste** this code:

```
name: Auto Publish Scheduled Drafts

on:
  schedule:
    # Runs daily at 00:00 UTC
    - cron: '0 0 * * *'
  workflow_dispatch: # Allows manual trigger anytime from GitHub Actions tab

jobs:
  publish-posts:
    runs-on: ubuntu-latest
    permissions:
      contents: write

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Process and Publish Due Drafts
        run: |
          TODAY=$(date +'%Y-%m-%d')
          DRAFTS_DIR="./_drafts"
          POSTS_DIR="./_posts"

          mkdir -p "$DRAFTS_DIR" "$POSTS_DIR"

          PUBLISHED_COUNT=0

          # Loop through all markdown files in _drafts
          for file in "$DRAFTS_DIR"/*.md "$DRAFTS_DIR"/*.markdown; do
            # Check if file exists to prevent loop errors on empty dirs
            [ -e "$file" ] || continue

            # Extract date from YAML front matter (matches "date: 2026-09-29" or "date: '2026-09-29'")
            POST_DATE=$(grep -E '^date:\s*' "$file" | head -n 1 | sed -E 's/date:\s*['"'"'"]?([0-9]{4}-[0-9]{2}-[0-9]{2})['"'"'"]?.*/\1/')

            if [ -n "$POST_DATE" ]; then
              # Compare dates: publish if POST_DATE <= TODAY
              if [[ "$POST_DATE" < "$TODAY" || "$POST_DATE" == "$TODAY" ]]; then
                raw_filename=$(basename "$file")

                # Strip existing date prefix if present to avoid duplication (e.g. 2026-09-29-2026-09-29-title.md)
                clean_filename=$(echo "$raw_filename" | sed -E 's/^[0-9]{4}-[0-9]{2}-[0-9]{2}-//')

                # Format destination as YYYY-MM-DD-filename.md using the post's scheduled date
                target_filename="${POST_DATE}-${clean_filename}"

                mv "$file" "$POSTS_DIR/$target_filename"
                echo "✅ Publishing: $raw_filename -> $POSTS_DIR/$target_filename (Scheduled: $POST_DATE)"
                PUBLISHED_COUNT=$((PUBLISHED_COUNT + 1))
              fi
            fi
          done

          if [ $PUBLISHED_COUNT -gt 0 ]; then
            git config user.name "github-actions[bot]"
            git config user.email "github-actions[bot]@users.noreply.github.com"

            # Stage both additions in _posts and deletions in _drafts
            git add _drafts _posts
            git commit -m "🚀 Auto-published $PUBLISHED_COUNT scheduled post(s) [$TODAY]"
            git push
            echo "🎉 Successfully published $PUBLISHED_COUNT post(s)!"
          else
            echo "⏳ No drafts found with a date on or before $TODAY."
          fi
```

5. **Scroll down** to the "Commit new file" section
6. **Add a commit message** (e.g., "Add auto-publish workflow")
7. **Make sure** "Commit directly to the main branch" is selected
8. **Click "Commit new file"**

---

### 1.2 Create the Drafts Folder

1. **Click "Add file"** → **"Create new file"**
2. **Filename**: `_drafts/.gitkeep`
3. **Leave the content area empty**
4. **Commit message**: "Add _drafts folder"
5. **Click "Commit new file"**

---

### 1.3 Test the Workflow

1. **Click the "Actions" tab** at the top of your repository
2. **Look for "Publish Scheduled Blog Posts"** in the left sidebar
3. **Click "Run workflow"** (green button on the right)
4. **Click the green "Run workflow"** button
5. **Wait for it to complete** (should take less than 30 seconds)
6. **Click on the run** and check the output - you should see:
   ```
   No drafts scheduled for YYYY-MM-DD
   ```

---

## Step 2: Write a Scheduled Post

### 2.1 Create Your Draft Post

1. **Go to your repository**
2. **Click "Add file"** → **"Create new file"**
3. **Filename**: `_drafts/YYYY-MM-DD-your-post-title.md`
   - Replace `YYYY-MM-DD` with your desired publish date
   - Example: `_drafts/2026-09-28-my-awesome-post.md`

4. **Add your content** with front matter:

```
---
title: "My Awesome Post"
date: 2026-09-28
layout: post
---

## Introduction

This is my blog post content. It will publish automatically on September 28, 2026!

Write your content here using Markdown.
```

5. **Scroll down** and add a commit message: "Add draft post"
6. **Click "Commit new file"**

---

### 2.2 Verify Your Draft is Hidden

1. **Check your live blog** - the post should NOT appear yet
2. **Check the `_drafts/` folder** - your file is there
3. **Check the `_posts/` folder** - your file is NOT there (it's still hidden)

---

## Step 3: Wait for Auto-Publishing

### 3.1 What Happens Automatically

| Time | What Happens |
|------|--------------|
| **00:00 UTC** on your publish date | GitHub Actions workflow runs |
| **00:00-00:01 UTC** | Finds your draft with today's date |
| **00:00-00:02 UTC** | Moves it from `_drafts/` to `_posts/` |
| **00:00-00:03 UTC** | Commits and pushes to GitHub |
| **00:00-00:05 UTC** | GitHub Pages rebuilds your site |
| **00:00-00:10 UTC** | Your post is LIVE! |

---

### 3.2 Check if It Published

1. **Go to the Actions tab**
2. **Look for the workflow run** on your publish date
3. **Click on it** - you should see:
   ```
   Found drafts to publish for today:
   ./_drafts/YYYY-MM-DD-your-post-title.md
   Moved: YYYY-MM-DD-your-post-title.md
   Published successfully!
   ```
4. **Check the `_posts/` folder** - your file is there
5. **Check the `_drafts/` folder** - your file is gone
6. **Visit your blog** - your post is live!

### File Naming Convention
```
_drafts/YYYY-MM-DD-post-title.md
```
- `YYYY`: 4-digit year (e.g., 2026)
- `MM`: 2-digit month (e.g., 09)
- `DD`: 2-digit day (e.g., 28)
- `post-title`: Your slug (use hyphens)

### Front Matter Template
```
---
title: "Your Post Title"
date: YYYY-MM-DD
layout: post
---

Your content here...
```

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| **Workflow doesn't run** | Check file path: `.github/workflows/publish-scheduled.yml` |
| **Post doesn't publish** | Verify filename has EXACT date (e.g., `2026-09-28-post.md`) |
| **Post publishes too early** | Check UTC time (00:00 UTC = 1:00 AM Nigerian time) |
| **Post still hidden after date** | Manually run workflow from Actions tab |
| **Drafts folder disappears** | Keep `.gitkeep` file inside `_drafts/` |

> Timezone Note: Workflow runs at 00:00 UTC** (Coordinated Universal Time)

**Your Jekyll blog now auto-publishes scheduled posts!**
