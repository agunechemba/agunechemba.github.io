# 📝 How to Generate Student Result Sheets as PDFs using Google Apps Script, Google Sheets, and Google Docs

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/05/an_black_guy_working_on_a_computer.jpeg" width="100%">

Creating personalized **student result sheets** manually can be tedious. But with **Google Sheets**, **Google Docs**, and a little **Apps Script magic**, you can automate the whole process—generate **custom PDF reports** in seconds!

---

## 🎯 What You'll Learn

By the end of this tutorial, you'll be able to:

✅ Automatically generate result sheets from Google Sheets
✅ Use a Google Docs template to format each student’s result
✅ Save each result as a **PDF file** in your Google Drive

Let’s get started!

---

## 📊 Step 1: Prepare Your Google Sheet

1. Open [Google Sheets](https://sheets.google.com) and create a new spreadsheet.
2. Enter your student data like this:

| Name      | Math | English | Science | Total |
| --------- | ---- | ------- | ------- | ----- |
| Ken Obi   | 85   | 78      | 90      | 253   |
| Ada Okeke | 92   | 88      | 95      | 275   |

3. Rename your sheet tab to `Sheet1` (or any name you prefer—just remember to update it in the script).

> 🎯 **Tip**: Add more subjects or fields as needed. Just match the placeholders in the Google Doc template (we’ll get to that next).

---

## 📄 Step 2: Create the Google Docs Template

1. Go to [Google Docs](https://docs.google.com) and create a new document.
2. Write a basic result format using **placeholders** like this:

```
STUDENT RESULT SHEET

Name: {{Name}}

Scores:
- Math: {{Math}}
- English: {{English}}
- Science: {{Science}}

Total: {{Total}}
```

3. Save it as **Result Template** (or any name you like).
4. Copy the **Document ID** from the URL.

   Example URL:

   ```
   https://docs.google.com/document/d/1AbCDeFGHIJKlmnoPQRS4567xyz890/edit
                                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                                       👆 This is your Doc ID
   ```

You’ll need this Doc ID for the script.

---

## 🧑‍💻 Step 3: Add the Apps Script Code

1. Go back to your **Google Sheet**.
2. Click on `Extensions > Apps Script`.
3. Delete the default code and paste this:

```javascript
function generateResultSheets() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  const data = sheet.getDataRange().getValues();
  const headers = data[0];

  const templateId = 'YOUR_DOC_TEMPLATE_ID_HERE'; // Replace with your actual Doc ID
  const folder = DriveApp.createFolder('Student Results'); // Create a new folder

  for (let i = 1; i < data.length; i++) {
    const student = {};
    headers.forEach((key, index) => {
      student[key] = data[i][index];
    });

    const copy = DriveApp.getFileById(templateId).makeCopy(`${student.Name} Result`, folder);
    const doc = DocumentApp.openById(copy.getId());
    let body = doc.getBody().getText();

    for (let key in student) {
      body = body.replace(new RegExp(`{{${key}}}`, 'g'), student[key]);
    }

    doc.getBody().setText(body);
    doc.saveAndClose();

    const pdf = DriveApp.getFileById(doc.getId()).getAs('application/pdf');
    folder.createFile(pdf).setName(`${student.Name} Result.pdf`);

    // Delete the temp doc
    DriveApp.getFileById(doc.getId()).setTrashed(true);
  }

  SpreadsheetApp.getUi().alert("All result sheets generated successfully!");
}
```

4. Replace `'YOUR_DOC_TEMPLATE_ID_HERE'` with your actual Google Docs Template ID.
5. Click **Save** (💾 icon) and name your project, e.g., **GenerateResults**.

---

## ▶️ Step 4: Run the Script

1. Click the **Run** ▶️ button.
2. The first time you run it, Google will ask for permission—**review and allow**.
3. Sit back. The script will:

✅ Create a copy of the template for each student
✅ Replace placeholders like `{{Name}}`, `{{Math}}`, etc.
✅ Save the filled document as a **PDF**
✅ Place all PDFs inside a folder called **Student Results**

---

## 🧠 How It Works

Here’s what’s going on under the hood:

* **Read data** from your Google Sheet row by row
* **Create a copy** of the template Doc for each student
* **Replace placeholders** like `{{Math}}`, `{{Total}}` with real scores
* **Convert the Doc to PDF**
* **Save it** in your Drive
* **Trash the Doc copy** to keep things clean

---

## ✅ Final Thoughts

This setup is powerful for:

📌 Report cards
📌 Certificates
📌 Personalized letters
📌 Or anything else with templates!
