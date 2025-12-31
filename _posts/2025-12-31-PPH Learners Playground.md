# From Frustration to Freedom: Why I Built a "Playground" for My Code Learners

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/04/img_20241018_082917.jpg" width="100%">

If you’ve ever stood in a room full of eager students ready to write their first line of HTML, you know the "Environment Panic."

For months, I struggled with a recurring headache: **What IDE do I give my beginners?**

I tried the heavy hitters like VS Code, but for a 12-year-old, the sidebar, the extensions, and the complex file systems (which look different on Windows than they do on a Mac) are just noise. They want to create, not troubleshoot why their folder didn't "open" correctly. Then there’s the internet issue. Most online editors are great, but the moment the Wi-Fi drops, the lesson stops. I wanted something distraction-free, lightning-fast, and completely independent of the cloud.

That is why I built the **PPH Learners Playground**.

### The "Zero-Drag" Philosophy

When I sat down to design this, I had three non-negotiables:

1. **No Internet Required:** It had to be a "single folder" experience. If you have the files on a USB drive, you have a professional-grade editor.
2. **OS Agnostic:** I didn't want to explain "C: drives" or "Users/Home/Desktop." I wanted a web-based interface that feels the same whether they are on a Chromebook, an old Windows laptop, or a Tablet.
3. **Real-Time Visuals:** Highlighting has to be pretty (thanks to Prism.js!), and the preview has to be instant. Young learners need that dopamine hit of seeing their code turn into a button immediately.

### Overcoming the "Textarea" Wall

One of the hardest parts was getting the syntax highlighting right. Standard web text boxes don't "do" colors. I had to build a layered system—a transparent typing layer on top of a colored display layer. It took some serious math to keep the line numbers and the text perfectly synced, but the result is a smooth, professional feel that respects the learner's focus.

### The Success Story

Since deploying the **PPH Learners Playground** at **Pepe Programmers Hub**, the results have been transformative.

We no longer spend the first 20 minutes of class fixing path errors or waiting for "npm install" to finish. Students simply open the playground and start building. They are learning the *logic* of code rather than the *frustration* of tooling. Watching a student’s face light up as they download their work—a real, working file they made themselves—is the ultimate win.

We’ve moved past the "Setup Phase" and straight into the "Innovation Phase."

---

### Try it out!

I’ve hosted the playground live so you can see exactly what our learners are using. Whether you are a teacher or a curious beginner, feel free to play around:

👉 **Live Editor:** [https://pphlearnersplayground.surepath.ng/](https://pphlearnersplayground.surepath.ng/)

👉 **Github Repo:** [https://github.com/agunechemba/PPH-Learners-Playground](https://github.com/agunechemba/PPH-Learners-Playground)