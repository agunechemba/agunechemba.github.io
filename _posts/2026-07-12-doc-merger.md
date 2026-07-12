# Doc Merger: Merge Spreedsheets Data into a Single Document

<img src="https://i.ibb.co/B5K9fqRt/Screenshot-2026-07-12-06-58-08.png" class="block mx-auto w-[70%]">

If you have ever had to manually copy, paste, and update data from a spreadsheet into a beautifully styled document template—like student report cards, invoices, or business certificates—you know how quickly it becomes a tedious chore.

Worse yet, trying to automate this using standard developer tools often strips out your custom fonts, table border colors, and cell backgrounds, leaving you with a broken layout.

That is exactly why we built **Doc Merger**. By creating individual, isolated files directly inside your Google Drive, this tool completely bypasses the formatting limitations of the Google Docs REST API. It ensures **100% preservation** of your template's layout, tables, colors, and styling.

Here is a step-by-step guide on how to configure your assets and run your very first automated batch compilation.

---

## 🛠️ Step 1: Prepare Your Google Sheet Data

The application reads data row-by-row. To make sure it maps everything correctly, your spreadsheet needs to follow a clean layout:

1. **The Header Row:** The very first row (Row 1) must contain your column titles (e.g., `Student Name`, `Math Score`, `English Score`, `Principal Remarks`).
2. **The Data Rows:** Every row beneath Row 1 should contain the specific details for an individual entry.
3. **The First Column:** The app automatically names your final document copies using the value found in the very first column (Column A). Making this a unique identifier like a student's full name keeps your folder organized.

---

## 🎨 Step 2: Set Up Your Google Doc Template

Design your document exactly how you want it to look in Google Docs. Add your logos, style your tables, set up background cell colors, and choose your brand fonts.

To tell the app where to inject the spreadsheet data, use **text placeholders**:

* Take the exact text from your spreadsheet headers and wrap them in double angle brackets.
* For example, if your sheet column is named `Math Score`, type `<<Math Score>>` inside the exact table cell or paragraph where it belongs.

> ⚠️ **Important Note:** These tags are strictly case-sensitive! `<<Math Score>>` and `<<math score>>` must match your sheet header perfectly.

---

## 🚀 Step 3: Running Your First Generation Batch

Once your spreadsheet and template document are ready, executing the automation takes less than a minute:

1. **Open the Application:** Launch the Doc Merger interface in your browser.
2. **Input your Links:**
* Copy the full URL from your browser address bar for your **Google Sheet** and paste it into the first field.
* Copy the full URL of your styled **Google Doc Template** and paste it into the second field.


3. **Authorize and Execute:** Click the **Sign in & Execute Generation** button. A secure Google OAuth popup window will appear asking for permissions to read the sheet and create files in your Drive.
4. **Track Progress:** The loading status box will keep you updated in real-time as it connects, sets up a dedicated batch output folder, and processes each row sequentially.
5. **Access Your Files:** Once finished, a green success banner will appear. Click **Open Output Folder** to jump straight to your perfectly styled, pre-filled documents inside Google Drive.

---

## 🔒 A Note on Data Privacy

Because Doc Merger runs entirely on the client side (directly inside your own browser window), your spreadsheet data and document tokens are never sent to an external third-party server. Everything stays safely inside the secure Google ecosystem under your own profile rules.

Happy automating!

*Have questions or want to see new features added to the merger hub? email: mr.agunechemba@gmail.com*

---

### 👉 [Open Doc Merger](https://agunechemba.name.ng/doc-merger/)
