---
title: "Prime Programmers Hub - JSS 1 - 3 Curriculum"
date: 2018-11-28
author: "Agunechemba Ekene"
tags: [tech, tutorial, programming, PPH]
description: "JavaScript Mastery Curriculum for Young Programmers"
---

**PRIME PROGRAMMERS HUB**

# **JavaScript Mastery Curriculum for Young Programmers**

## **Overview**

JavaScript Mastery is a progressive, project-based curriculum designed to guide young learners (ages 8-12) from their first line of code to building professional-grade applications. Drawing from Marijn Haverbeke's acclaimed Eloquent JavaScript (4th Edition), this curriculum transforms complex programming concepts into accessible, engaging weekly lessons.

### **Curriculum: JavaScript Adventurer (Age 8\)**

**Student Name:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Age:** 8 **Source:***Eloquent JavaScript* (4th Edition) by Marijn Haverbeke

**How to Use This Curriculum:**

* **For the Student:** This is your guide to learning JavaScript\! Each week, you'll have a page to read, some things to learn, and fun challenges to complete. Take your time, have fun, and don't be afraid to make mistakes—that's how we learn\!

* **For the Parent/Teacher:** This curriculum breaks down the complex concepts from the book into bite-sized, weekly lessons. The focus is on hands-on coding and practical application. Use the online sandbox at [https://eloquentjavascript.net/code](https://eloquentjavascript.net/code) for all coding exercises. Encourage experimentation and celebrate every success\!

### **Term 1: The Basics and Your First Programs**

**Term Goal:** To understand the very basics of computers and programming, learn what values are, and be able to write simple programs using variables, loops, and conditions.

#### **Week 1: What is Programming?**

**Pages Source:** Introduction (Pages 1-4), "On Programming" (Pages 2-4)

**Lesson Objectives:**

* Understand that a computer is a tool that needs precise instructions.

* Explain what a program is in simple terms.

* Learn how to run a simple program in the online sandbox.

**Content:**

* **Computers are Dumb?** Computers are super-fast but not very smart. They only do exactly what you tell them to do, step-by-step.

* **A Program is a Recipe.** Like a recipe for your favorite cookies, a program is a list of instructions for the computer.

* **Your First Program:** Let's say "Hello\!" Go to the online sandbox and type:console.log("Hello, World\!");  Then click the "Run" button. You just wrote your first program\!

**Review Questions:**

* What is a program?

* What does console.log do?

#### **Week 2: Values, Types, and Numbers**

**Pages Source:** Chapter 1 (Values, Numbers, Arithmetic \- Pages 15-19)

**Lesson Objectives:**

* Learn that computers work with different "types" of information (values).

* Understand what numbers are in JavaScript.

* Use basic arithmetic to make the computer do math for you.

**Content:**

* **Values:** The computer remembers pieces of information called "values." Think of them as different kinds of toys in a toy box.

* **Numbers:** These are for math\! The numbers 13 and 3.14 are "number values."

* **Arithmetic:** We can ask the computer to do math using operators like \+, \-, \* (multiply), and / (divide).

  * **Activity:** In the sandbox, type 100 \+ 4 \* 11 and run it. What answer do you get? Try changing the numbers and operators\!

**Review Questions:**

* What is a "value"?

* What are the names of the 4 math operators we learned today?

* Write the code to calculate 25 divided by 5\.

#### **Week 3: Strings and Their Magic**

**Pages Source:** Chapter 1 (Strings, Unary Operators \- Pages 20-23)

**Lesson Objectives:**

* Understand what a "string" is (text).

* Learn how to use strings in a program.

* Explore the typeof operator to find out the type of a value.

**Content:**

* **Strings are Text:** Any piece of text (like your name or a sentence) is a string value. You write them inside quotes, like "Hello" or 'Bye'.

* **Using Strings:** You can even "glue" strings together\! This is called concatenation.

  * **Activity:** Type console.log("My name is " \+ "Alex"). What does it output? Change "Alex" to your name.

* **What Type is It?:** The typeof operator tells you what type of value something is. Type typeof 5 and then typeof "5". Do you get the same answer?

**Review Questions:**

* What is a string?

* How do you "glue" two strings together?

* What does typeof 100 give you?

#### **Week 4: True or False? (Booleans)**

**Pages Source:** Chapter 1 (Boolean Values, Comparison \- Pages 24-25)

**Lesson Objectives:**

* Learn about the Boolean values: true and false.

* Use comparison operators to create Boolean values.

* Write code that makes decisions based on a condition.

**Content:**

* **Booleans:** This is a special type of value that is only either true or false. It's like an "on/off" switch.

* **Comparing Things:** We can compare values to get a Boolean answer.

  * **Activity:** Type and run these:

    * console.log(3 \> 2\) (Is 3 greater than 2?)

    * console.log(5 \== 10\) (Is 5 equal to 10?)

    * console.log("apple" \== "apple") (Are these texts the same?)

* **Making Decisions:** A program can use true or false to decide what to do. We'll learn more about this next week\!

**Review Questions:**

* What are the two Boolean values?

* Which operator checks if two things are equal? (\> or \==)

* Is 10 \< 5 true or false?

#### **Week 5: Making Choices (Conditional Execution)**

**Pages Source:** Chapter 2 (Conditional execution \- Pages 41-43)

**Lesson Objectives:**

* Write code that executes only when a condition is true.

* Use the if, else if, and else statements.

* Create programs that can "think" and respond to different situations.

**Content:**

* **The if Statement:** The if statement checks a condition (like a Boolean) and runs a piece of code only if it's true.

  * **Activity:**let age \= 8; if (age \> 10\) { console.log("You're older than 10\!"); } else { console.log("You're 10 or younger\!"); }  Change the age to 12\. What happens?

* **else and else if:**else runs if the if condition is false. Use else if to check another condition.

  * **Challenge:** Make a program that says "Small" if a number is less than 10, "Medium" if it's between 10 and 100, and "Large" if it's 100 or more. (Hint: look at the example on page 43\!)

**Review Questions:**

* What keyword do you use to make a choice in your code?

* What is the difference between if and else?

* Write a code that prints "Good job\!" if a variable called score is greater than 50\.

#### **Week 6: Repeating Actions (while Loops)**

**Pages Source:** Chapter 2 (while and do loops \- Pages 43-46)

**Lesson Objectives:**

* Use a while loop to repeat a piece of code.

* Understand the concept of a loop counter.

* Create a program that counts numbers.

**Content:**

* **The while Loop:** Imagine you have to do 20 jumping jacks. A while loop lets you repeat a task as long as a condition is true.

* **Counting with a Loop:**

  * **Activity:**let counter \= 0; while (counter \< 5\) { console.log("Number: " \+ counter); counter \= counter \+ 1; }  What numbers does this print?

* **Even Numbers:** Try to write a loop that prints all even numbers from 0 to 12\. (Hint: The solution is in the book on page 44\!)

**Review Questions:**

* What is a loop?

* What keyword starts a loop?

* Why do we use a counter variable in a loop?

#### **Week 7: Repeating Actions (for Loops)**

**Pages Source:** Chapter 2 (for loops \- Pages 47-49)

**Lesson Objectives:**

* Learn the for loop as a more compact way to repeat code.

* Understand the three parts of a for loop: initializer, condition, and update.

* Decide when to use a while loop vs. a for loop.

**Content:**

* **The for Loop:** This is like a "super-loop" that puts the counter, condition, and update all in one line. It's easier to read\!

* **Structure of a for Loop:**for (let i \= 0; i \< 5; i \= i \+ 1\) { // code to run }

* **Printing Even Numbers Again:** Re-write your even-number program from last week using a for loop.

  * **Activity:** The solution is on page 48 of the book.

**Review Questions:**

* What are the three parts of a for loop?

* Write a for loop that prints the numbers 1 to 10\.

* Which loop would you use if you didn't know exactly how many times to repeat? (while or for)

#### **Week 8: Variables (or "Bindings")**

**Pages Source:** Chapter 2 (Bindings, Binding names \- Pages 34-37)

**Lesson Objectives:**

* Understand what a variable (or binding) is.

* Use let and const to create variables.

* Store values in variables and use them in code.

**Content:**

* **Variables are Like Boxes:** A variable (the book calls it a "binding") is like a box that you can put a value into. You give the box a name so you can find it later.

* **Creating a Variable:** You use let to create a variable.

  * let myName \= "Alex";

  * **Activity:** Create a variable called favoriteNumber and assign it your favorite number. Then use console.log to print it.

* **Constants:**const is for a variable that you promise won't change (like const pi \= 3.14). It's like a box with a lid that's glued on.

**Review Questions:**

* What is a variable?

* What's the difference between let and const?

* How would you store the value 100 in a variable called score?

#### **Week 9: Functions (Building Blocks)**

**Pages Source:** Chapter 2 (Functions \- Pages 38-39), Chapter 3 (Defining a function \- Pages 59-60)

**Lesson Objectives:**

* Understand what a function is.

* Use built-in functions like Math.max and console.log.

* Write your very own, simple function.

**Content:**

* **What is a Function?** A function is a reusable piece of code that performs a specific task. It's like a recipe you can use over and over.

* **Using Functions:** We've been using them already\! console.log is a function that prints things.

  * **Activity:** Use the Math.max function to find the biggest number: console.log(Math.max(5, 10, 2));.

* **Writing Your Own Function:** We can define new functions using function.

  * **Activity:**function sayHello() { console.log("Hi there\!"); } sayHello(); // This calls the function 

**Review Questions:**

* What is a function?

* What does the Math.max function do?

* How do you call (or run) a function?

#### **Week 10: Project: A Simple Clock**

**Pages Source:** Review Chapters 1 and 2\.

**Lesson Objectives:**

* Apply knowledge of variables, loops, and console.log.

* Build a small, complete program.

* Create a simple clock that counts seconds.

**Content & Project:**

* **Plan:** We'll create a program that counts up from 0 to 10 seconds, showing a message for each second.

* **Code:** Use a for loop and a variable.for (let second \= 0; second \<= 10; second \= second \+ 1\) { console.log("Second: " \+ second); } console.log("Time's up\!"); 

* **Improve It:** Modify your program to print a "BEEP\!" message when it reaches 5 seconds.

**Review Questions:**

* What's the starting value of the second variable?

* How could you make the clock count to 20 seconds?

* Why does the loop stop at 10 seconds? (Hint: look at the condition second \<= 10)

#### **Week 11: Project: FizzBuzz (Part 1\)**

**Pages Source:** Chapter 2 Exercises (FizzBuzz \- Page 56\)

**Lesson Objectives:**

* Practice using loops and conditions.

* Solve a classic programming problem (part one).

* Write a program that prints special words for special numbers.

**Content & Project:**

* **The Challenge:** Write a program that prints numbers from 1 to 20\. But for numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5, print "Buzz".

* **Hint:** Use % (the remainder operator). If a number is divisible by 3, the remainder when you divide by 3 is 0 (number % 3 \== 0).

* **Plan:** Use a for loop. Inside the loop, use if/else if to check the conditions.

**Review Questions:**

* What operator do you use to check if a number is divisible by another?

* What would you print for the number 6?

* What would you print for the number 10?

#### **Week 12: Term Review and Showcase**

**Pages Source:** N/A

**Lesson Objectives:**

* Review all concepts learned in Term 1\.

* Showcase a project of your choice.

* Celebrate your progress\!

**Content:**

* **Review:** Let's review the big ideas:

  * Values and Types (Numbers, Strings, Booleans)

  * Variables (let, const)

  * Making Choices (if, else)

  * Repeating Actions (while, for)

  * Functions (Using and Making)

* **Showcase:** Choose one of your favorite mini-projects from the term to share. Explain how it works.

* **Wrap-up:** Great job, programmer\! You've learned the fundamental building blocks of all JavaScript programs.

**Review Questions:**

* What is your favorite thing you learned this term?

* What is a "value"?

* Why are loops useful?

### **Curriculum: JavaScript Adventurer (Age 8\) \- Term 2**

**Term Goal:** To learn how to group information into collections (arrays) and real-world things (objects), and to write flexible code using functions that can work with different kinds of data.

#### **Week 1: What are Data Structures?**

**Pages Source:** Chapter 4 (Introduction, The Werequrrel \- Pages 84-85)

**Lesson Objectives:**

* Understand that programs need to organize information.

* Learn that "data structures" are like special containers for data.

* Explore the problem of tracking data (like the weresquirrel's journal).

**Content:**

* **Organizing Information:** So far, we've used simple "boxes" (variables) to hold one value at a time. What if we need to keep track of many things, like a list of your friends' names? We need a new type of container\!

* **Data Structures:** These are special ways to group, store, and organize data. Think of them as different types of toy boxes: one for a list of cars, another for a set of building blocks.

* **The Weresquirrel's Problem:** The book talks about Jacques, who needs to track his daily activities. He needs a way to store a list of events for each day. This is a perfect job for a data structure\!

**Review Questions:**

* What is a data structure?

* Why do we need data structures?

* What kind of information does Jacques the were-squirrel need to track?

#### **Week 2: Your First List\! (Arrays)**

**Pages Source:** Chapter 4 (Datasets \- Pages 86-87)

**Lesson Objectives:**

* Create and use an array to store a list of values.

* Access individual items in an array using their index.

* Understand that array indices start at 0\.

**Content:**

* **What is an Array?** An array is a list. It's a single variable that can hold many values.

  * let myFriends \= \["Alex", "Sam", "Jordan"\];

* **Accessing Items:** You get an item from the list by using its position, called an "index." The first item is at index 0\!

  * **Activity:**let colors \= \["Red", "Green", "Blue"\]; console.log(colors\[0\]); // This prints "Red" console.log(colors\[1\]); // This prints "Green" 

* **The length Property:** You can find out how many items are in an array using .length.

  * console.log(colors.length); // This will print 3

**Review Questions:**

* What is an array?

* What is the index of the first item in an array?

* Write an array of your three favorite foods.

#### **Week 3: Playing with Arrays**

**Pages Source:** Chapter 4 (Methods, Further Arrayology \- Pages 88-89, 105-107)

**Lesson Objectives:**

* Learn powerful methods to work with arrays.

* Use push to add items and pop to remove the last item.

* Use indexOf to find an item in an array.

**Content:**

* **Adding and Removing:** Arrays have built-in "methods" (actions we can perform on them).

  * .push(item): Adds an item to the **end** of the list.

  * .pop(): Removes the **last** item from the list.

  * **Activity:**let animals \= \["Dog", "Cat"\]; animals.push("Bird"); console.log(animals); // \["Dog", "Cat", "Bird"\] animals.pop(); console.log(animals); // \["Dog", "Cat"\] 

* **Finding Things:** The .indexOf(item) method tells you the position of an item in the list. If it's not there, it returns \-1.

  * console.log(animals.indexOf("Cat")); // Prints 1

**Review Questions:**

* What method adds an item to the end of an array?

* What does .pop() do?

* What value does .indexOf() return if it can't find the item?

#### **Week 4: Objects: Describing Things**

**Pages Source:** Chapter 4 (Objects \- Pages 90-93)

**Lesson Objectives:**

* Understand that an object is a way to group related information.

* Create an object using curly braces {}.

* Access and change the properties of an object.

**Content:**

* **What is an Object?** An object is like a description of a real-world thing. It has "properties" that describe it.

  * A dog object might have properties like name, breed, and age.

* **Creating an Object:** We use curly braces { } and list the properties.let myDog \= { name: "Buster", breed: "Golden Retriever", age: 3 }; 

* **Using an Object:** We can get a property using a dot ..

  * console.log(myDog.name); // Prints "Buster"

  * **Activity:** Create an object for your favorite animal. Include its name, type, and color. Then, print its name.

**Review Questions:**

* What is an object?

* How do you create an object?

* How would you get the age property from the myDog object?

#### **Week 5: Mutability: Changing Things**

**Pages Source:** Chapter 4 (Mutability \- Pages 94-95)

**Lesson Objectives:**

* Understand the difference between simple values (Numbers, Strings) and complex values (Objects).

* Learn that you can change the properties of an object.

* Understand why changing an object in one place can affect it in another.

**Content:**

* **Simple vs. Complex:** Numbers and strings are like a single Lego brick. They can't be changed. Objects are like a Lego model; you can take parts off and put new ones on.

* **Changing an Object:** You can change a property by assigning a new value to it.let myDog \= { name: "Buster" }; myDog.name \= "Rex"; // Change the name console.log(myDog.name); // Prints "Rex" 

* **The Important Idea:** If you have two variables that point to the same object, and you change that object, both variables will see the change.

  * **Activity:** Copy the example from page 95 (object1 and object2). Try it in the sandbox and see what happens\!

**Review Questions:**

* Can you change a number (like 10\) into something else? (No/Yes)

* Can you change the property of an object? (No/Yes)

* If two variables point to the same object, and you change a property, do both variables show the new value? (No/Yes)

#### **Week 6: The Weresquirrel's Log (Project Part 1\)**

**Pages Source:** Chapter 4 (The lycanthrope's log \- Pages 96-97)

**Lesson Objectives:**

* Apply knowledge of arrays and objects to a real problem.

* Understand how to model a log entry as an object.

* Build a small program to store journal entries.

**Content & Project:**

* **Project Setup:** We're going to help Jacques the were-squirrel\! He needs a program to keep his journal. An entry for one day needs to store two things: a list of activities (an array) and a Boolean value for whether he turned into a squirrel.

* **Modeling an Entry:** The perfect structure for a journal entry is an object.let journalEntry \= { events: \["work", "pizza", "running"\], squirrel: false }; 

* **Adding to the Journal:** We can store all these entries in an array and use the .push() method to add new ones.let journal \= \[\]; journal.push(journalEntry); 

**Review Questions:**

* What two pieces of information does a journal entry need to hold?

* What data structure (array or object) is best for a single journal entry?

* What data structure should we use to store all the journal entries?

#### **Week 7: Finding Data in the Log (Project Part 2\)**

**Pages Source:** Chapter 4 (Computing correlation \- Pages 99-101)

**Lesson Objectives:**

* Write a function to search through a log for specific events.

* Use the includes method to check for an event in an array.

* Practice building a table of counts (frequency table).

**Content & Project:**

* **The Problem:** We want to know if a specific event (like "pizza") is related to Jacques turning into a squirrel.

* **Solution:** We need a function that looks at every entry in the journal and counts how often the event happens with and without squirrelness.

* **Building the tableFor Function:** We'll use a for loop to go through the journal array. For each entry, we'll check if it includes the event and if the squirrel property is true or false.

  * **Activity:** Write a function countEvent that takes an eventName and the journal and simply prints the number of times that event occurs. (Hint: you'll need a counter variable).

**Review Questions:**

* What method checks if an item is in an array?

* How can you get the squirrel property from a journal entry?

* What are the four possible combinations of "event occurred" and "squirrel transformation"?

#### **Week 8: Functions are Values**

**Pages Source:** Chapter 5 (Higher-Order Functions, Abstracting repetition \- Pages 122-126)

**Lesson Objectives:**

* Understand that functions can be used like any other value.

* Learn how to pass a function as an argument to another function.

* Understand the concept of "abstraction."

**Content:**

* **Functions are Values:** We've seen numbers and strings. Functions are just another type of value. You can store a function in a variable\!let sayHello \= function() { console.log("Hi\!"); }; sayHello(); // This calls the function 

* **Passing Functions:** You can pass a function as an argument to another function. This is how we get powerful "higher-order functions."

* **Abstraction:** This is a big word that means "hiding details." A function is an abstraction. You use it without needing to know *how* it works.

**Review Questions:**

* Can you store a function in a variable?

* What is a "higher-order function"?

* What does "abstraction" mean in programming?

#### **Week 9: ForEach and Filter**

**Pages Source:** Chapter 5 (Higher-Order Functions \- Page 126, Filtering arrays \- Pages 130-131)

**Lesson Objectives:**

* Use the forEach method to loop over an array.

* Use the filter method to create a new array with only the items we want.

**Content:**

* **forEach \- The Easy Loop:** Instead of writing a for loop, we can use forEach on an array to "do something" for each item.let numbers \= \[1, 2, 3\]; numbers.forEach(function(num) { console.log(num \* 2); }); // Prints 2, 4, 6 

* **filter \- The Selector:** We use filter to create a new array containing only the elements that pass a "test."

  * **Activity:**let ages \= \[10, 15, 18, 12, 20\]; let canDrive \= ages.filter(function(age) { return age \>= 16; }); console.log(canDrive); // Prints \[18, 20\] 

**Review Questions:**

* What does forEach do?

* What does filter do?

* What would \[1, 2, 3, 4\].filter(num \=\> num \> 2\) return?

#### **Week 10: Map and Reduce**

**Pages Source:** Chapter 5 (Transforming with map, Summarizing with reduce \- Pages 131-134)

**Lesson Objectives:**

* Use the map method to transform every item in an array.

* Use the reduce method to combine all items into a single value.

**Content:**

* **map \- The Transformer:**map creates a new array by applying a function to every item in the original array.let numbers \= \[1, 2, 3\]; let doubled \= numbers.map(function(num) { return num \* 2; }); console.log(doubled); // Prints \[2, 4, 6\] 

* **reduce \- The Summarizer:**reduce takes all the items in an array and combines them into a single value (like a sum or a product).

  * **Activity:** Try to use reduce to add all the numbers in an array. The example in the book is \[1, 2, 3, 4\].reduce((a, b) \=\> a \+ b).

**Review Questions:**

* What is the difference between map and filter?

* What does reduce do?

* How would you use map to add the word "Hello" to the front of every name in an array?

#### **Week 11: Project: Build a Robot\! (Intro)**

**Pages Source:** Chapter 7 (The Task, Persistent Data \- Pages 177-180)

**Lesson Objectives:**

* Understand the concept of a persistent (unchanging) state.

* Learn how to model a simple virtual world.

* Simulate moving an object in a graph (road network).

**Content & Project:**

* **Introduction to the Robot Project:** We're going to build a program that simulates a robot delivering packages in a village. This is a big, fun project\!

* **The Village and State:** The village is modeled as a graph (roads). We need to keep track of where the robot is and where the packages are. This is our "state."

* **Persistent Data:** Our robot's state is an object. When the robot moves, we don't change the old state. We create a new state object to describe the new situation. This makes our program much easier to understand.

**Review Questions:**

* What is "state" in our robot simulation?

* What does "persistent" mean?

* Why is it good to create a new state instead of changing the old one?

#### **Week 12: Term Review and Showcase**

**Pages Source:** N/A

**Lesson Objectives:**

* Review all concepts learned in Term 2\.

* Showcase a project of your choice.

* Celebrate your progress\!

**Content:**

* **Review:** Let's review the big ideas:

  * **Data Structures:** Arrays (lists) and Objects (descriptions).

  * **Working with Arrays:**push, pop, indexOf, forEach, filter, map, reduce.

  * **Data Flow:** Thinking about how data is stored and how it changes (or doesn't\!).

  * **Robot Project:** A sneak peek at a larger, more complex program.

* **Showcase:** Choose one of your favorite mini-projects from the term to share. Explain how it works.

* **Wrap-up:** You're becoming a real data wizard\! You can now organize and manage large amounts of information in your programs. This is a superpower\!

**Review Questions:**

* What is your favorite thing you learned this term?

* What is the difference between an array and an object?

* Name one of the "higher-order functions" (like map or filter) and explain what it does.

### **Curriculum: JavaScript Adventurer (Age 8\) \- Term 3**

**Term Goal:** To create an interactive, graphical project (like a mini-game, a drawing app, or a story generator) by combining programming logic with HTML and CSS. The primary focus is on the "Project: A Pixel Art Editor" from the book.

#### **Week 1: Introduction to the Browser World**

**Pages Source:** Chapter 13 (JavaScript and the Browser, The Web, HTML \- Pages 321-328)

**Lesson Objectives:**

* Understand that JavaScript can also run in a web browser.

* Learn what HTML is and how it structures a webpage.

* Understand what a "tag" is and how it works (like \<h1\> and \<p\>).

**Content:**

* **A New Playground:** Until now, we've been using the online sandbox. The real "home" of JavaScript is inside a web browser like Chrome or Firefox.

* **HTML: The Structure of the Web:** HTML is the language used to build webpages. It uses "tags" to mark up text.

  * **Activity:** Create a simple HTML file on your computer (or use a sandbox that supports HTML) with the following:\<h1\>My Awesome Page\</h1\> \<p\>This is my first web page\!\</p\>  Save it as index.html and open it in your browser. You've just built a webpage\!

* **It's a Tree\!** The book explains HTML as a tree of boxes. This is an important way to think about webpages.

**Review Questions:**

* What is HTML used for?

* What does \<h1\> do?

* What is a "tag"?

#### **Week 2: Your First Interactive Page**

**Pages Source:** Chapter 13 (HTML and JavaScript \- Pages 329-330)

**Lesson Objectives:**

* Learn how to add JavaScript to an HTML page using the \<script\> tag.

* Use the alert function to create a pop-up.

* Understand the difference between the HTML structure and the JavaScript behavior.

**Content:**

* **Bringing JavaScript to the Web:** We add JavaScript to a webpage using the \<script\> tag.

  * **Activity:** Add this to your HTML page from last week, between the body tags:\<script\> alert("Hello from the webpage\!"); \</script\>  When you open the page, it should show a pop-up message.

* **The alert Function:** This is the browser's version of console.log, but it creates a pop-up window.

* **Behavior vs. Structure:** HTML is the structure of your page. JavaScript is the behavior.

**Review Questions:**

* What HTML tag do you use to add JavaScript?

* What does the alert function do?

* What is the difference between HTML and JavaScript?

#### **Week 3: The Document Object Model (DOM)**

**Pages Source:** Chapter 14 (Document structure, Trees \- Pages 334-337)

**Lesson Objectives:**

* Understand what the DOM is and how it represents a webpage.

* Understand the concept of a "tree" structure.

* Use document.body to access the body of a page.

**Content:**

* **The DOM is a Map:** The browser reads your HTML and creates a map of it in memory called the Document Object Model (DOM). It's a "tree" of objects.

* **Navigating the Tree:** You can use JavaScript to access and manipulate this tree. For example, document.body gives you the \<body\> tag.

  * **Activity:** Let's change the background color of your page\! Put this in a \<script\> tag:document.body.style.backgroundColor \= "lightblue"; 

* **It's All Objects:** The HTML tags become "objects" that have properties (like style) and methods (like appendChild). This is the "secret life of objects" in the browser\!

**Review Questions:**

* What does "DOM" stand for?

* What is document.body?

* How would you change the color of a webpage to red?

#### **Week 4: Finding and Changing Elements**

**Pages Source:** Chapter 14 (Finding elements, Changing the document \- Pages 341-343)

**Lesson Objectives:**

* Use document.querySelector and getElementById to find elements.

* Change the content of elements using textContent.

* Understand how to use appendChild to add new elements.

**Content:**

* **Finding Elements:** To change something, you first need to find it.

  * **By ID:**document.getElementById("myId") finds an element with a specific id.

  * **By Selector:**document.querySelector("h1") finds the first \<h1\> tag.

* **Changing Elements:** You can change their content.

  * **Activity:**\<h1 id="title"\>Hello\</h1\> \<script\> let title \= document.getElementById("title"); title.textContent \= "Goodbye\!"; \</script\> 

* **Adding Elements:** You can create new elements and add them to the page.

  * **Activity:** Add a new paragraph:let newP \= document.createElement("p"); newP.textContent \= "I was added by JavaScript\!"; document.body.appendChild(newP); 

**Review Questions:**

* How do you find an element with the id "header"?

* What property do you use to change the text inside an element?

* What method do you use to create a new HTML element?

#### **Week 5: Handling Events**

**Pages Source:** Chapter 15 (Event handlers, Events and DOM nodes \- Pages 363-366)

**Lesson Objectives:**

* Understand what an event is (like a click).

* Use addEventListener to make code run when an event happens.

* Make a button that responds to a click.

**Content:**

* **Events are Actions:** Events are things that happen, like a user clicking a button or moving their mouse.

* **Listening for Events:** We can use addEventListener to "listen" for an event and run a function when it happens.

  * **Activity:**\<button id="myButton"\>Click Me\</button\> \<script\> let button \= document.getElementById("myButton"); button.addEventListener("click", function() { alert("You clicked me\!"); }); \</script\> 

* **Event Handlers:** The function that is called when an event happens is called an "event handler."

**Review Questions:**

* What is an event?

* What method do you use to respond to an event?

* Write the code to make a button change the text of a paragraph when clicked.

#### **Week 6: The Pixel Art Editor (Getting Started)**

**Pages Source:** Chapter 19 (Components, The state \- Pages 495-500)

**Lesson Objectives:**

* Understand the goal of the Pixel Art Editor.

* Understand the concept of "state" in an application.

* Set up the basic structure of the editor.

**Content:**

* **The Big Project:** We're going to build our own program to draw pixel art\! This is a classic and fun project.

* **What is "State"?** The "state" is all the information the application needs to know, like the current picture, the selected color, and the selected tool.

* **The Picture Class:** The book provides a Picture class. Think of it as the "canvas" for our pixel art. It stores the image as a grid of colors.

  * **Activity:** In the sandbox, try to create a small picture:let myPic \= Picture.empty(5, 5, "\#FFFFFF"); // This creates a white 5x5 picture 

**Review Questions:**

* What is the "state" of the Pixel Art Editor?

* What does the Picture class do?

* What color is \#FFFFFF?

#### **Week 7: The Pixel Art Editor (Drawing)**

**Pages Source:** Chapter 19 (The canvas, The application \- Pages 502-508)

**Lesson Objectives:**

* Understand how the canvas is used to display the picture.

* Explore the drawPicture function.

* Learn about the "dispatch" function for updating the state.

**Content:**

* **Displaying the Picture:** The editor uses an HTML \<canvas\> to show the picture. The drawPicture function takes a Picture object and draws it to the canvas.

* **Drawing Tools:** The editor has tools like the "draw" tool and the "rectangle" tool.

* **Updating the State:** When you draw a pixel, we don't just change the canvas. We create a *new*Picture object and "dispatch" an action to update the state. The state then tells the canvas to redraw.

**Review Questions:**

* What HTML element is used to display the picture?

* What does the drawPicture function do?

* What is the purpose of the "dispatch" function?

#### **Week 8: The Pixel Art Editor (Tools)**

**Pages Source:** Chapter 19 (Drawing tools \- Pages 509-512)

**Lesson Objectives:**

* Explore the code for different drawing tools.

* Modify or create a new tool.

* Understand the "flood fill" tool.

**Content:**

* **Built-in Tools:** The editor comes with tools like draw, fill, rectangle, and pick.

* **How a Tool Works:** Each tool is a function. It gets the mouse position, the state, and a dispatch function. It uses these to change the picture.

* **The "fill" Tool:** Let's focus on the fill tool. It's a bit more complex. It uses a technique called "flood fill" to color an entire area. The book explains how it works on page 511\.

  * **Activity:** Try to modify the draw tool to always draw a 3x3 square instead of just one pixel.

**Review Questions:**

* What are the four main tools mentioned?

* How does a tool change the picture?

* What does the "fill" tool do?

#### **Week 9: The Pixel Art Editor (Saving & Loading)**

**Pages Source:** Chapter 19 (Saving and loading \- Pages 513-517)

**Lesson Objectives:**

* Understand how to save a picture as an image file.

* Understand how to load an image from a file.

* Explore the SaveButton and LoadButton components.

**Content:**

* **The SaveButton:** The book explains the SaveButton component. It draws the picture onto a canvas and uses toDataURL() to turn it into a downloadable image.

* **The LoadButton:** This button lets you upload an image file. The code reads the file using a FileReader, draws it to a canvas, and reads the pixel data.

* **Data URLs:** This is a fascinating concept\! The image is turned into a long text string (a Data URL) that can be used as a link.

**Review Questions:**

* What does the SaveButton do?

* What is a Data URL?

* How does the LoadButton read the pixels from an uploaded image?

#### **Week 10: The Pixel Art Editor (Undo History)**

**Pages Source:** Chapter 19 (Undo history \- Pages 517-519)

**Lesson Objectives:**

* Understand the importance of an undo feature.

* Learn how to store a history of changes.

* Understand the historyUpdateState function.

**Content:**

* **Why Undo?** We all make mistakes. An undo feature lets us go back in time\!

* **Storing History:** Since our Picture objects are immutable (they never change), we can just store the old pictures in an array. This is called the "history."

* **The historyUpdateState Function:** This is a special function that manages the state. When you draw, it adds the previous picture to the history. When you undo, it pops the last one from the history.

**Review Questions:**

* Why is an undo feature useful?

* How does the editor store its history?

* What does the historyUpdateState function do?

#### **Week 11: Putting it All Together & Final Polish**

**Pages Source:** Chapter 19 (Let's draw \- Pages 519-522)

**Lesson Objectives:**

* Launch a working Pixel Art Editor.

* Understand how all the pieces fit together.

* Make the project your own\!

**Content & Project:**

* **The Final Code:** The book provides the final code to assemble everything. Let's run it\!

  * **Activity:** In the sandbox, type or paste the startPixelEditor function and the startState. Then, add the code to put it on the page:document.body.appendChild(startPixelEditor({}));  You should see a fully working Pixel Art Editor\!

* **Make it Yours:** Try to customize the tools. Can you change the starting color? Can you make the canvas bigger?

* **Brainstorm:** What other tools could you add? A spray can? A stamp tool? The possibilities are endless.

**Review Questions:**

* What is the name of the function that starts the editor?

* What does document.body.appendChild do?

* How would you make the initial picture a red 30x30 square?

#### **Week 12: Term Review and Showcase**

**Pages Source:** N/A

**Lesson Objectives:**

* Review all concepts learned in Term 3\.

* Showcase a project of your choice.

* Celebrate your progress\!

**Content:**

* **Review:** Let's review the big ideas:

  * **The Browser:** The DOM (document), events, and HTML.

  * **The Pixel Art Editor:** State, components, tools, and history.

  * **Putting it all together:** Connecting all the concepts from the previous terms.

* **Showcase:** Choose one of your favorite projects from the term to share. Explain how it works. The Pixel Art Editor is a fantastic project to show off\!

* **Wrap-up:** Congratulations\! You have completed the JavaScript curriculum for 8-year-olds. You've gone from writing your first "Hello, World\!" to building a complete, interactive application. You have built a fantastic foundation in programming. Keep exploring, keep building, and keep having fun\!

### **Curriculum: JavaScript Explorer (Age 10\)**

**Student Name:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Age:** 10 **Source:***Eloquent JavaScript* (4th Edition) by Marijn Haverbeke

**How to Use This Curriculum:**

* **For the Student:** This is your guide to becoming a more confident and skilled programmer. Each week, you'll read specific pages from the book, learn key concepts, and complete coding challenges. The projects will be more complex, and you'll start to see the bigger picture of how programs are built.

* **For the Parent/Teacher:** This curriculum moves at a faster pace and introduces more advanced topics. Encourage the student to not just copy code but to truly understand it. The exercises at the end of each chapter in the book are essential. Use the online sandbox at [https://eloquentjavascript.net/code](https://eloquentjavascript.net/code) for all coding exercises.

### **Term 1: Core Concepts and Problem Solving**

**Term Goal:** To solidify the understanding of fundamental JavaScript concepts and to develop strong problem-solving skills through algorithmic thinking and code organization.

#### **Week 1: The Big Picture**

**Pages Source:** Introduction (Pages 1-14)

**Lesson Objectives:**

* Understand the history and purpose of JavaScript.

* Learn what a programming language is and why it matters.

* Get comfortable with the structure of the book and the online sandbox.

**Content:**

* **Why JavaScript?** It's everywhere\! It runs in your browser, on servers, and even on some robots.

* **Language Matters:** Different programming languages are good for different things. JavaScript is great for making interactive websites.

* **Code is for People:** The book emphasizes that code is written for humans to understand, not just computers. We'll explore this idea.

* **Using the Sandbox:** The online code sandbox is your primary tool. We'll review how to run code, edit examples, and complete exercises.

**Review Questions:**

* What is JavaScript primarily used for?

* Why is it important that code is easy for humans to read?

* Where can you run the example code from the book?

#### **Week 2: The Building Blocks (Values, Types, and Operators)**

**Pages Source:** Chapter 1 (Pages 15-31)

**Lesson Objectives:**

* Master the different data types: Numbers, Strings, Booleans, and undefined/null.

* Understand and use arithmetic, comparison, and logical operators.

* Learn the rules of automatic type conversion and why it can be tricky.

**Content:**

* **Data Types Deep Dive:** We'll review Numbers (integers, floats, special values), Strings (concatenation, template literals), and Booleans (comparisons, logical operators).

* **Operator Precedence:** The order in which operators are applied (e.g., multiplication before addition). We'll use parentheses to make our code clear.

* **Type Coercion:** JavaScript is "loose" and will sometimes convert types for you (e.g., "5" \- 1 gives 4). This can cause bugs\! We'll learn to use \=== and \!== to avoid it.

* **Short-Circuiting:** The && and || operators are more powerful than they seem. They can return values, not just true or false.

**Review Questions:**

* What is the result of "10" \+ 5?

* What is the difference between \== and \===?

* Why is it important to know about type coercion?

#### **Week 3: Program Structure (Statements and Control Flow)**

**Pages Source:** Chapter 2 (Pages 32-57)

**Lesson Objectives:**

* Understand the difference between expressions and statements.

* Use if, else if, and else for conditional logic.

* Master while and for loops for repetition.

**Content:**

* **Expressions vs. Statements:** An expression produces a value (like 5 \+ 5). A statement is an action (like let x \= 10;). A program is a list of statements.

* **Conditional Logic:** We'll write more complex conditional statements with multiple else if branches.

* **Looping Techniques:** We'll explore while and do-while loops. We'll master the for loop, understanding its three parts: initialization, condition, and update.

* **The switch Statement:** A cleaner way to write if/else chains when checking many possible values for a single variable.

* **Exercises:** Start the "Looping a Triangle", "FizzBuzz", and "Chessboard" exercises.

**Review Questions:**

* What is the difference between an expression and a statement?

* Write a for loop that prints the numbers from 10 down to 1\.

* When would you use a switch statement?

#### **Week 4: Functions (The Foundation)**

**Pages Source:** Chapter 3 (Pages 58-83)

**Lesson Objectives:**

* Understand how to define and use functions.

* Learn about parameters, arguments, and return values.

* Explore the concept of scope (global vs. local).

**Content:**

* **Function Definition:** We'll practice writing functions using the function keyword.

* **Parameters and Arguments:** Parameters are the "placeholders" in the function definition. Arguments are the values you pass when you call the function.

* **Return Values:** A function can send a value back to where it was called using return.

* **Scope:** What is "visible" where? We'll explore global, local, and block scope.

* **The Call Stack:** Understanding how the computer keeps track of where to return after a function call.

* **Exercises:** Start the "Minimum" exercise.

**Review Questions:**

* What is a parameter?

* What does the return keyword do?

* What is a "local" variable?

#### **Week 5: Advanced Functions (Closures and Recursion)**

**Pages Source:** Chapter 3 (Closure, Recursion, Growing functions \- Pages 70-77)

**Lesson Objectives:**

* Understand the concept of closures and their practical use.

* Learn about recursion and when it's a useful approach.

* Write functions that are more flexible and powerful.

**Content:**

* **Closure:** A function that "remembers" the variables from the scope where it was created, even after that scope has finished. This is a powerful and sometimes tricky concept.

* **Recursion:** A function that calls itself. We'll look at examples like the power function and the number puzzle.

* **Growing Functions:** How to use functions to organize code, reduce repetition, and make programs easier to understand.

* **Exercises:** Start the "Recursion" exercise (defining isEven).

**Review Questions:**

* What is a closure?

* What is recursion?

* Why is it important to organize code into functions?

#### **Week 6: Data Structures (Objects and Arrays)**

**Pages Source:** Chapter 4 (Pages 84-117)

**Lesson Objectives:**

* Master the creation and manipulation of arrays.

* Master the creation and manipulation of objects.

* Understand the difference between mutability and immutability.

**Content:**

* **Arrays (Deep Dive):** We'll explore all the important array methods: push, pop, shift, unshift, indexOf, slice, concat, and the length property.

* **Objects (Deep Dive):** We'll learn about property names, accessing properties (dot vs. bracket), and the delete operator.

* **Mutability:** Objects are mutable (you can change them). Numbers and strings are immutable (you can't change them). This difference is crucial.

* **The Weresquirrel:** We'll work through the weresquirrel example, building a journal and performing data analysis.

* **Exercises:** Start the "Sum of a Range" and "Reversing an Array" exercises.

**Review Questions:**

* What method would you use to add an item to the end of an array?

* How do you access a property of an object?

* What is the difference between a mutable and an immutable value?

#### **Week 7: The Weresquirrel Project (Data Analysis)**

**Pages Source:** Chapter 4 (The lycanthrope's log, Computing correlation \- Pages 96-104)

**Lesson Objectives:**

* Write code to analyze a real-world dataset.

* Calculate the correlation coefficient (phi) for different events.

* Use loops and array methods to process data.

**Content:**

* **Journal Data:** We'll use the provided JOURNAL dataset (a large set of Jacques' logs).

* **The tableFor Function:** We'll write a function that creates a frequency table (a 2x2 table) for any given event.

* **Computing Correlation:** We'll implement the phi coefficient formula from the book.

* **Finding the Culprit:** We'll loop through all event types, compute their correlation, and find the strongest relationships.

* **The Result:** Peanuts and brushed teeth\! We'll explain why this shows a correlation.

**Review Questions:**

* What is the purpose of the tableFor function?

* What does a correlation coefficient close to 1 indicate?

* How did Jacques find the cause of his transformation?

#### **Week 8: Higher-Order Functions (Part 1\)**

**Pages Source:** Chapter 5 (Abstraction, Higher-Order Functions \- Pages 122-129)

**Lesson Objectives:**

* Understand the concept of abstraction and its benefits.

* Learn what higher-order functions are.

* Use forEach and filter in your own code.

**Content:**

* **Abstraction:** The art of hiding complexity. A function is an abstraction.

* **Higher-Order Functions:** Functions that take other functions as arguments or return functions. This is a core concept in JavaScript.

* **forEach (Revisited):** We'll use forEach to loop over arrays in a cleaner way.

* **filter:** We'll use filter to create new arrays containing only the elements that pass a test (the "predicate" function).

* **Script Dataset:** The book introduces the SCRIPTS dataset, which we'll use in the next weeks.

**Review Questions:**

* What is abstraction?

* What is a higher-order function?

* What does the filter method do?

#### **Week 9: Higher-Order Functions (Part 2\)**

**Pages Source:** Chapter 5 (Transforming with map, Summarizing with reduce \- Pages 131-136)

**Lesson Objectives:**

* Use map to transform arrays.

* Use reduce to combine arrays into a single value.

* Learn about "composability" and why it's powerful.

**Content:**

* **map (The Transformer):** We'll use map to create a new array by applying a function to every element in the original array.

* **reduce (The Summarizer):** We'll use reduce to combine all the elements of an array into a single value (e.g., a sum, a maximum).

* **Composability:** We can combine filter, map, and reduce in a "pipeline" to solve complex data processing tasks in a very readable way.

  * **Example:** Find the average year of origin of living scripts. SCRIPTS.filter(s \=\> s.living).map(s \=\> s.year).reduce((a, b) \=\> a \+ b) / count

**Review Questions:**

* What is the difference between map and filter?

* What does reduce do?

* What is "composability" and why is it useful?

#### **Week 10: Project: The Language Robot (Intro)**

**Pages Source:** Chapter 7 (Meadowfield, The task, Persistent data \- Pages 175-180)

**Lesson Objectives:**

* Set up the project and understand its goals.

* Build the graph of the village.

* Create the VillageState class.

**Content & Project:**

* **The Project:** We're going to build a delivery robot that navigates a village to deliver parcels. This is a complex, multi-week project.

* **The Village Map:** We'll use the roads array and the buildGraph function to create the road network.

* **The VillageState Class:** We'll understand the VillageState class, which holds the robot's location and the parcels. Notice how it creates a *new* state for every move (persistent data).

* **Running a Simulation:** We'll use the runRobot function to test our robot.

**Review Questions:**

* What is the goal of the robot project?

* What is the VillageState class used for?

* What is a "persistent" data structure?

#### **Week 11: Project: The Language Robot (Algorithms)**

**Pages Source:** Chapter 7 (Simulation, The mail truck's route, Pathfinding \- Pages 182-188)

**Lesson Objectives:**

* Implement a "route-following" robot.

* Implement a pathfinding algorithm.

* Understand the concept of a "search problem."

**Content & Project:**

* **Robot 1: The Random Robot:** We'll use the simple randomRobot.

* **Robot 2: The Route Robot:** We'll use a fixed route (mailRoute).

* **Robot 3: The Goal-Oriented Robot:** We'll build a robot that can find the shortest path between two points.

* **The findRoute Function:** This function is the "search." It explores the graph, trying to find the shortest path from the robot's current location to a parcel's location.

**Review Questions:**

* Why is the random robot inefficient?

* How does the findRoute function work?

* What is a "search problem"?

#### **Week 12: Term Review and Showcase**

**Pages Source:** N/A

**Lesson Objectives:**

* Review all concepts learned in Term 1\.

* Showcase a project of your choice.

* Celebrate your progress\!

**Content:**

* **Review:** Let's review the big ideas:

  * Core JavaScript: Types, Operators, Control Flow.

  * Functions: Scope, Closures, Recursion.

  * Data Structures: Arrays, Objects, Mutability.

  * Higher-Order Functions: forEach, filter, map, reduce.

  * Robot Project: Simulations and pathfinding.

* **Showcase:** Choose one of your favorite projects to share. The robot project is a great one to show\!

* **Wrap-up:** You've covered the most important concepts in JavaScript programming. You're now ready for even more advanced topics\!

**Review Questions:**

* What is a closure, in your own words?

* What is a higher-order function?

* What was the most interesting thing you learned this term?

### **Term 2: The Secret Life of Objects and Modularity**

**Term Goal:** To understand the object-oriented nature of JavaScript (prototypes, classes, inheritance) and learn how to structure larger programs using modules.

#### **Week 1: Methods and Prototypes**

**Pages Source:** Chapter 6 (Methods, Prototypes \- Pages 146-150)

**Lesson Objectives:**

* Understand how methods work and the role of the this keyword.

* Understand the prototype chain.

* Use Object.create and Object.getPrototypeOf.

**Content:**

* **Methods:** Functions that are properties of an object. They can use this to access the object they belong to.

* **The this Binding:** We'll explore how this is determined by how a function is called. Arrow functions don't have their own this.

* **Prototypes:** The "inheritance" mechanism of JavaScript. If an object doesn't have a property, the system looks at its prototype.

* **Object.create:** A way to create a new object with a specific prototype.

**Review Questions:**

* What is the this keyword?

* What is a prototype?

* How do you create an object with a specific prototype?

#### **Week 2: Classes and Private Properties**

**Pages Source:** Chapter 6 (Classes, Private properties \- Pages 150-154)

**Lesson Objectives:**

* Define classes using the class keyword.

* Understand constructors and instance methods.

* Use private properties (with \#) for encapsulation.

**Content:**

* **The class Keyword:** A cleaner, more modern way to create objects and define methods.

* **Constructor:** The special method that runs when you create a new instance (new ClassName()).

* **Private Properties:** Properties that start with \# are private. They can only be accessed from inside the class.

* **Encapsulation:** Hiding the internal details of an object. Private properties help with this.

**Review Questions:**

* What is a class in JavaScript?

* What is a constructor?

* How do you declare a private property?

#### **Week 3: Overriding and Maps**

**Pages Source:** Chapter 6 (Overriding derived properties, Maps \- Pages 155-159)

**Lesson Objectives:**

* Understand how to override properties from a prototype.

* Learn about the Map data structure.

* Understand the difference between an object and a Map for storing key-value pairs.

**Content:**

* **Overriding:** You can add a property to an object that already exists on its prototype. The object's own property "overrides" the prototype's.

* **Maps:** A Map is a better choice than a plain object for a collection of key-value pairs, especially when keys aren't strings. It has methods like set, get, has, and delete.

* **Polymorphism:** A single piece of code that can work with different types of objects (as long as they share a method name, like toString).

**Review Questions:**

* What does it mean to "override" a property?

* How is a Map different from a plain object?

* What is polymorphism?

#### **Week 4: Getters, Setters, and Symbols**

**Pages Source:** Chapter 6 (Getters, setters, and statics, Symbols \- Pages 161-164)

**Lesson Objectives:**

* Use getters and setters to control access to properties.

* Understand what symbols are and why they're useful.

* Learn about static methods.

**Content:**

* **Getters and Setters:** Methods that look like properties. get is used to read a value, set to write it. This allows you to run code when a property is accessed.

* **Static Methods:** Methods that are attached to the class itself, not to instances (e.g., Temperature.fromFahrenheit(100)).

* **Symbols:** A unique, immutable value that can be used as a property name. This helps avoid name conflicts.

**Review Questions:**

* What is a getter?

* What is a static method?

* What is a symbol?

#### **Week 5: The Iterator Interface and Inheritance**

**Pages Source:** Chapter 6 (The iterator interface, Inheritance \- Pages 165-170)

**Lesson Objectives:**

* Understand the iterator protocol (Symbol.iterator, next).

* Use for/of with custom objects.

* Understand inheritance and the extends keyword.

**Content:**

* **Iterators:** An object is iterable if it has a \[Symbol.iterator\]() method that returns an iterator. The iterator must have a next() method.

* **for/of:** We'll see how for/of works with our own custom objects.

* **Inheritance (extends):** Creating a new class that is a slightly modified version of an existing class.

* **super:** Used in the constructor to call the parent class's constructor.

**Review Questions:**

* What is the iterator interface?

* What method must an object have to be iterable?

* What does the extends keyword do?

#### **Week 6: Modules (ES Modules)**

**Pages Source:** Chapter 10 (ES modules \- Pages 251-253)

**Lesson Objectives:**

* Understand the concept of modules and why they are important.

* Use import and export to build a modular program.

* Learn the difference between named exports and default exports.

**Content:**

* **What are Modules?** They are a way to split your code into separate files, each with a specific purpose.

* **export:** The export keyword makes a variable, function, or class available to other modules.

* **import:** The import keyword brings code from another module into your current file.

* **Named vs Default Exports:** You can have many named exports per module (e.g., export function dayName() { ... }) or one default export (e.g., export default \["Winter", "Spring"\]).

**Review Questions:**

* Why are modules useful?

* What is the difference between export and import?

* What is a default export?

#### **Week 7: Packages and CommonJS**

**Pages Source:** Chapter 10 (Packages, CommonJS modules \- Pages 254-260)

**Lesson Objectives:**

* Understand what a package is and how NPM works.

* Understand the CommonJS module system (require, exports).

* Learn how to use packages from NPM.

**Content:**

* **Packages:** A package is a reusable chunk of code that you can download and use in your projects.

* **NPM:** The Node Package Manager. It's a huge repository of JavaScript packages.

* **CommonJS:** The older (but still widely used) module system. It uses require() to import and exports to export.

* **require:** A function that loads a module and returns its interface.

* **exports:** An object that determines what a module exposes to the outside world.

**Review Questions:**

* What is NPM?

* What is the difference between CommonJS and ES Modules?

* How do you install a package using NPM?

#### **Week 8: Building and Bundling**

**Pages Source:** Chapter 10 (Building and bundling, Module design \- Pages 261-265)

**Lesson Objectives:**

* Understand why we need build tools (transpilers, bundlers, minifiers).

* Learn principles of good module design.

* Apply these principles to the Robot project.

**Content:**

* **Transpilers:** Tools that convert modern JavaScript into older JavaScript so it runs on older browsers.

* **Bundlers:** Tools that combine many small module files into one big file. This is faster to load in a browser.

* **Minifiers:** Tools that make your code smaller by removing whitespace and renaming variables.

* **Module Design:** We'll discuss principles like ease of use, composability, and using simple data structures.

**Review Questions:**

* What is a bundler and why is it useful?

* What is a minifier?

* What is a key principle of good module design?

#### **Week 9: Project: A Modular Robot**

**Pages Source:** Chapter 7 (Exercises \- Pages 189-190)

**Lesson Objectives:**

* Refactor the Robot project into separate modules.

* Apply module design principles.

* Understand how modules help manage complexity.

**Content & Project:**

* **Refactoring:** We'll take the robot code from Term 1 and split it into modules. For example, a roads.js module, a state.js module, and an example-robots.js module.

* **Design Decisions:** We'll decide what each module should export and what dependencies it should have.

* **Exercise:** We'll complete the "Roads module" exercise from the book.

**Review Questions:**

* Why would we split the robot code into modules?

* What would the state.js module likely export?

* What is a dependency?

#### **Week 10: Error Handling (Bugs and Errors)**

**Pages Source:** Chapter 8 (Pages 191-213)

**Lesson Objectives:**

* Understand different types of errors and how to handle them.

* Use try, catch, and finally.

* Learn about strict mode and assertions.

**Content:**

* **Types of Errors:** Syntax errors, runtime errors, and logical errors (bugs).

* **Strict Mode ("use strict"):** Helps catch common mistakes.

* **Exceptions:** We'll learn to use throw to raise an exception and try/catch to handle it.

* **finally:** Code that will always run, regardless of whether an error occurred.

* **Assertions:** Checks that we put in our code to verify things are as they should be.

**Review Questions:**

* What is the purpose of try/catch?

* What is a finally block used for?

* What is an assertion?

#### **Week 11: Asynchronous Programming (Intro)**

**Pages Source:** Chapter 11 (Asynchronicity, Callbacks \- Pages 269-272)

**Lesson Objectives:**

* Understand the difference between synchronous and asynchronous code.

* Understand the concept of a callback function.

* Write simple asynchronous code with setTimeout.

**Content:**

* **Synchronous vs. Asynchronous:** In synchronous code, things happen one after another. Asynchronous code can happen "out of order."

* **Callbacks:** A function that is passed as an argument to another function and is executed later (often when an event happens).

* **setTimeout:** A classic example of an asynchronous function. It schedules a callback to run after a certain delay.

* **Contagious Asynchronicity:** Once you start using asynchronous code, functions that call it must also become asynchronous.

**Review Questions:**

* What is the difference between synchronous and asynchronous code?

* What is a callback function?

* What does the setTimeout function do?

#### **Week 12: Term Review and Showcase**

**Pages Source:** N/A

**Lesson Objectives:**

* Review all concepts learned in Term 2\.

* Showcase a project of your choice.

* Celebrate your progress\!

**Content:**

* **Review:** Let's review the big ideas:

  * **Objects and Classes:** Prototypes, class, private properties, getters/setters.

  * **Modules:** ES Modules, CommonJS, Packages, NPM.

  * **Error Handling:**try/catch, exceptions, assertions.

  * **Asynchronicity:** Callbacks and setTimeout.

* **Showcase:** Choose one of your favorite projects to share. The modular robot is a great one to show\!

* **Wrap-up:** Great work\! You've now mastered the core of the JavaScript language and are ready to move on to advanced topics like promises, async/await, and building full applications.

**Review Questions:**

* What is the prototype chain?

* What are the three parts of an exception handling block?

* What is a callback function and why is it used?

### **Term 3: Advanced Topics and Real-World Applications**

**Term Goal:** To understand advanced JavaScript concepts like Promises and the browser DOM, and to build a complete, interactive web application.

#### **Week 1: Promises**

**Pages Source:** Chapter 11 (Promises, Failure \- Pages 273-279)

**Lesson Objectives:**

* Understand what a Promise is and why it's better than callbacks.

* Use .then() and .catch() to handle asynchronous results and errors.

* Chain promises together.

**Content:**

* **What is a Promise?** It's an object that represents a future result (or failure). It's like a receipt for a value you don't have yet.

* **States:** A promise is either "pending," "fulfilled" (resolved), or "rejected" (failed).

* **.then():** You use .then() to register a callback that will run when the promise resolves.

* **.catch():** You use .catch() to register a callback that will run when the promise rejects.

* **Chaining:** You can chain .then() calls to create a sequence of asynchronous actions.

**Review Questions:**

* What is a Promise?

* What is the difference between .then() and .catch()?

* Why are Promises better than plain callbacks?

#### **Week 2: Async Functions**

**Pages Source:** Chapter 11 (Async functions \- Pages 283-285)

**Lesson Objectives:**

* Use the async and await keywords.

* Write asynchronous code that looks and behaves like synchronous code.

* Understand how to handle errors in async functions.

**Content:**

* **The async Keyword:** It declares a function as asynchronous. async functions always return a Promise.

* **The await Keyword:** You can only use await inside an async function. It pauses the execution of the function until a Promise resolves, and then returns the resolved value.

* **Try/Catch with Async:** You can use try/catch inside an async function to handle errors from awaited Promises.

* **Benefit:**async/await makes asynchronous code much easier to read and write.

**Review Questions:**

* What does the async keyword do?

* What does the await keyword do?

* How do you handle errors in an async function?

#### **Week 3: The Browser Environment**

**Pages Source:** Chapter 13 (Networks and the Internet, The Web, HTML \- Pages 322-328)

**Lesson Objectives:**

* Understand the basics of networks, the internet, and the World Wide Web.

* Understand the structure of an HTML document.

* Use the browser's developer tools.

**Content:**

* **How the Web Works:** IP addresses, DNS, servers, and clients.

* **The Request-Response Cycle:** Your browser sends a request, and the server sends back a response.

* **HTML Structure (Revisited):** We'll look at more HTML tags and how they create the page structure.

* **Developer Tools:** We'll learn how to use the browser's developer tools (Inspector, Console) to debug and inspect web pages.

**Review Questions:**

* What is a DNS server used for?

* What is the purpose of HTML?

* How do you open the developer tools in your browser?

#### **Week 4: The Document Object Model (DOM)**

**Pages Source:** Chapter 14 (Document structure, Trees, Moving through the tree \- Pages 334-341)

**Lesson Objectives:**

* Master DOM navigation and manipulation.

* Use properties like parentNode, childNodes, firstChild, nextSibling.

* Understand the difference between NodeLists and arrays.

**Content:**

* **The DOM Tree:** We'll trace the relationships between HTML elements using the DOM tree.

* **Navigating:** We'll practice moving between parent, child, and sibling nodes.

* **Finding Elements (Revisited):** We'll use getElementById, getElementsByTagName, getElementsByClassName, and querySelector/querySelectorAll.

* **NodeLists:** The collections returned by some methods are not arrays. We'll learn how to convert them to arrays.

**Review Questions:**

* What is document.body?

* How do you get a list of all \<p\> elements in a document?

* What is a NodeList?

#### **Week 5: DOM Manipulation and Styling**

**Pages Source:** Chapter 14 (Changing the document, Creating nodes, Attributes, Layout, Styling \- Pages 342-352)

**Lesson Objectives:**

* Create, insert, and delete DOM elements.

* Use createElement and appendChild.

* Manipulate element attributes and styles.

* Understand the concept of layout and how to read element positions.

**Content:**

* **Creating and Adding Elements:** We'll use document.createElement and document.createTextNode.

* **Removing Elements:** We'll use parentNode.removeChild.

* **Attributes:** We'll use getAttribute, setAttribute, and the className property.

* **Inline Styles:** We'll change an element's style using the .style property.

* **Layout:** We'll use offsetWidth, clientHeight, and getBoundingClientRect to get information about an element's position and size.

**Review Questions:**

* How do you create a new HTML element?

* How do you change an element's class?

* What method do you use to get an element's position on the screen?

#### **Week 6: Handling User Input (Events)**

**Pages Source:** Chapter 15 (Handling Events \- Pages 363-389)

**Lesson Objectives:**

* Write robust event handlers for mouse, keyboard, and touch events.

* Understand event propagation (bubbling and capturing).

* Prevent default behavior.

**Content:**

* **Event Types:** We'll explore click, mousedown, mousemove, keydown, keyup, scroll, focus, blur, and load.

* **The Event Object:** We'll use the event object to get information about the event (e.g., event.key, event.pageX).

* **Event Propagation:** We'll understand how events bubble up from the target element to the root.

* **preventDefault:** We'll stop the browser's default behavior (like following a link).

* **stopPropagation:** We'll stop an event from bubbling up to parent elements.

**Review Questions:**

* What is event propagation?

* How do you stop an event from triggering the default browser behavior?

* What is the difference between clientX and pageX?

#### **Week 7: Project: A Pixel Art Editor (Intro)**

**Pages Source:** Chapter 19 (Pages 495-500)

**Lesson Objectives:**

* Understand the project goals and architecture.

* Set up the project and understand the core Picture class.

* Implement the drawPicture function.

**Content & Project:**

* **The Project:** We're going to build a full-featured pixel art editor. This will be a multi-week project.

* **State Management:** We'll use a single state object ({picture, tool, color}) and a dispatch function to update it.

* **The Picture Class:** We'll understand how it stores pixels, and how its draw method creates a new, updated picture (immutability in action\!).

* **Drawing on Canvas:** We'll write the drawPicture function to render a Picture onto a \<canvas\>.

**Review Questions:**

* What is the central concept of the project's data flow?

* What is the Picture class responsible for?

* What does the draw method of a Picture object return?

#### **Week 8: Project: A Pixel Art Editor (Components)**

**Pages Source:** Chapter 19 (Components, DOM building, The canvas, The application \- Pages 495-509)

**Lesson Objectives:**

* Implement the main application component (PixelEditor).

* Implement the PictureCanvas component.

* Implement the tool selection and color selection controls.

**Content & Project:**

* **The Component Pattern:** We'll structure the UI as a set of components. Each component gets a state and can dispatch actions.

* **PictureCanvas:** This component is responsible for displaying the picture and handling pointer events (mouse and touch).

* **PixelEditor:** This is the main component that combines the canvas and the controls.

* **Controls:** We'll implement the ToolSelect and ColorSelect components.

**Review Questions:**

* What is the role of the PictureCanvas component?

* How does a component update itself when the state changes?

* What is the purpose of the dispatch function?

#### **Week 9: Project: A Pixel Art Editor (Tools)**

**Pages Source:** Chapter 19 (Drawing tools \- Pages 509-512)

**Lesson Objectives:**

* Implement the draw, rectangle, fill, and pick tools.

* Understand how tools interact with the dispatch function.

* Write code to draw lines and shapes.

**Content & Project:**

* **The draw Tool:** We'll implement the draw function that changes individual pixels to the selected color.

* **The rectangle Tool:** We'll implement the rectangle function that draws a rectangle between the start and end points.

* **The fill Tool:** We'll implement the fill function (flood fill). This is an interesting algorithm (it's a graph search on a grid).

* **The pick Tool:** We'll implement the pick function to select the color of a pixel.

**Review Questions:**

* What is the draw tool responsible for?

* How does the rectangle tool work?

* What is the algorithm used by the fill tool?

#### **Week 10: Project: A Pixel Art Editor (Saving, Loading, and Undo)**

**Pages Source:** Chapter 19 (Saving and loading, Undo history, Let's draw \- Pages 513-521)

**Lesson Objectives:**

* Implement the SaveButton and LoadButton.

* Implement the undo history.

* Launch and test the complete application.

**Content & Project:**

* **SaveButton:** We'll use the canvas's toDataURL() method to create a downloadable image.

* **LoadButton:** We'll use a FileReader to read an image file and extract its pixel data.

* **UndoButton:** We'll implement the undo history using an array of previous pictures. The historyUpdateState function manages this.

* **Launching:** We'll use the startPixelEditor function to launch our completed application.

**Review Questions:**

* How do you save a picture as a file?

* How does the undo history work?

* What does the startPixelEditor function do?

#### **Week 11: Project: A Pixel Art Editor (Polishing and Extending)**

**Pages Source:** Chapter 19 (Exercises \- Pages 522-525)

**Lesson Objectives:**

* Add new features to the Pixel Art Editor.

* Complete the "Keyboard shortcuts" and "Circle tool" exercises.

* Make the project your own.

**Content & Project:**

* **Keyboard Shortcuts:** We'll add shortcuts (e.g., B for brush, F for fill, Ctrl-Z for undo).

* **Circle Tool:** We'll implement a new tool that draws a filled circle.

* **Efficient Drawing:** We'll optimize the drawPicture function to redraw only the pixels that have changed.

* **Creative Extension:** What other tools or features can you add? A line tool? A spray can? The sky's the limit\!

**Review Questions:**

* What keyboard shortcut might you use for the "draw" tool?

* How does the circle tool calculate which pixels to color?

* How could you make the drawPicture function more efficient?

#### **Week 12: Term Review and Showcase**

**Pages Source:** N/A

**Lesson Objectives:**

* Review all concepts learned in Term 3\.

* Showcase a project of your choice.

* Celebrate your progress\!

**Content:**

* **Review:** Let's review the big ideas:

  * **Asynchronous JavaScript:** Promises, async/await.

  * **The Browser:** DOM, Events, Styling.

  * **Full Application:** The Pixel Art Editor project, from state management to UI components.

* **Showcase:** Show off your Pixel Art Editor\! Demonstrate its features and explain how you built it.

* **Wrap-up:** You've done it\! You've completed a comprehensive JavaScript curriculum and built a real-world application. You are now a skilled JavaScript programmer with a strong understanding of the language, the browser, and how to build complex applications. You're ready to take on even bigger challenges, whether it's building websites, games, or contributing to open-source projects.

**Review Questions:**

* What is the difference between a Promise and an async/await?

* What is the Document Object Model (DOM) and how do you interact with it?

* What was the most challenging part of building the Pixel Art Editor, and how did you solve it?

### **Curriculum: JavaScript Master (Age 12\)**

**Student Name:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ **Age:** 12 **Source:***Eloquent JavaScript* (4th Edition) by Marijn Haverbeke

**How to Use This Curriculum:**

* **For the Student:** This is your advanced guide to mastering JavaScript. You will learn about regular expressions, build your own programming language, create a full platform game, and build a complete web application with a server and client. This is serious, professional-level programming.

* **For the Parent/Teacher:** This curriculum covers the most challenging topics in the book. The learner should be encouraged to work independently, read the book carefully, and experiment with the code. The projects are substantial and will require multiple weeks. The exercises at the end of each chapter are critical for developing a deep understanding.

### **Term 1: Advanced Language Features and Problem Solving**

**Term Goal:** To master advanced JavaScript language features including regular expressions, error handling, and modules, and to build a complex project (a platform game).

#### **Week 1: Introduction to Regular Expressions**

**Pages Source:** Chapter 9 (Creating a regular expression, Testing for matches, Sets of characters \- Pages 214-218)

**Lesson Objectives:**

* Understand what regular expressions are and why they are useful.

* Create regular expressions using literals (/.../) and the RegExp constructor.

* Use the test method to check for matches.

* Use character sets (\[abc\], \[a-z\], \\d, \\w, \\s) to match patterns.

**Content:**

* **What is a Regular Expression?** A powerful tool for pattern matching in strings. It's like a mini-language within JavaScript.

* **Creating Regexps:** We'll use both the literal notation (/abc/) and the RegExp constructor (new RegExp("abc")).

* **The test Method:** The simplest way to check if a pattern exists in a string.

* **Character Sets and Ranges:** We'll learn to match specific sets of characters (e.g., \[0-9\] for any digit, \[^0-9\] for any non-digit).

* **Built-in Shorthands:** We'll use \\d (digit), \\w (word character), \\s (whitespace), and their uppercase inverses.

**Review Questions:**

* What is a regular expression?

* What is the difference between /abc/ and new RegExp("abc")?

* What does the \\d character class match?

#### **Week 2: Repetition and Grouping in Regexps**

**Pages Source:** Chapter 9 (Repeating parts of a pattern, Grouping subexpressions \- Pages 220-224)

**Lesson Objectives:**

* Use repetition operators (\+, \*, ?, {n,m}) to match patterns that occur multiple times.

* Use parentheses to group parts of a pattern.

* Understand the difference between greedy and nongreedy matching.

**Content:**

* **Repetition Operators:**

  * \+ : One or more times.

  * \* : Zero or more times.

  * ? : Zero or one time.

  * {n,m} : Between n and m times.

* **Grouping:** Use parentheses () to treat a group of characters as a single unit (e.g., /(ab)+/ matches "ab", "abab", "ababab").

* **Greedy vs. Nongreedy:** By default, repetition operators are "greedy" (they match as much as possible). Adding a ? makes them "nongreedy" (they match as little as possible). We'll explore why this matters.

**Review Questions:**

* What is the difference between \+ and \*?

* How do you group parts of a regular expression?

* What is the difference between greedy and nongreedy matching?

#### **Week 3: Advanced Regexp Features**

**Pages Source:** Chapter 9 (Matches and groups, The Date class, Boundaries and look-ahead, Choice patterns, The mechanics of matching \- Pages 224-229)

**Lesson Objectives:**

* Use the exec method to get detailed match information.

* Use capturing groups to extract parts of a match.

* Understand the ^ and $ boundary markers.

* Use look-ahead assertions ((?=...)).

* Use the | operator for alternative patterns.

* Understand the regexp matching algorithm (backtracking).

**Content:**

* **The exec Method:** Returns an array with the full match and any captured groups.

* **Capturing Groups:** Extracting specific parts of a match (e.g., extracting the day, month, and year from a date string).

* **Boundaries:**^ matches the start of the string, $ matches the end, \\b matches a word boundary.

* **Look-Ahead:**(?=...) matches only if the pattern inside is found, but doesn't consume it.

* **Alternatives:**| allows you to match one pattern or another (e.g., /pig|cow/).

* **Backtracking:** Understanding how the regexp engine "tries" different paths to find a match.

**Review Questions:**

* What does the exec method return?

* What is the purpose of the ^ and $ markers?

* What is backtracking in the context of regular expressions?

#### **Week 4: Practical Regexp Applications**

**Pages Source:** Chapter 9 (The replace method, Greed, Dynamically creating RegExp objects, The search method, The lastIndex property, Parsing an INI file \- Pages 232-243)

**Lesson Objectives:**

* Use replace with regular expressions to perform complex string transformations.

* Understand and avoid common regexp pitfalls (greediness, lastIndex).

* Dynamically create regular expressions.

* Build a practical INI file parser using regexps.

**Content:**

* **replace with Regexps:** We'll use the global flag (/g) to replace all matches.

* **Replacement with Groups:** We'll use $1, $2, etc., in the replacement string to refer to captured groups.

* **Replacement with a Function:** We'll pass a function to replace for more complex transformations (e.g., the minusOne function in the book).

* **The lastIndex Property:** Understanding how the g flag affects repeated calls to exec.

* **Dynamic Regexps:** Using the RegExp constructor to build patterns from strings.

* **Parsing an INI File:** We'll build a complete parser for a configuration file format using regular expressions.

**Review Questions:**

* How do you replace all occurrences of a pattern in a string?

* What is the $1 placeholder used for in a replacement string?

* What is the purpose of the lastIndex property?

#### **Week 5: Error Handling and Debugging (Advanced)**

**Pages Source:** Chapter 8 (Language, Strict mode, Types, Testing, Debugging \- Pages 191-200)

**Lesson Objectives:**

* Master the use of try/catch/finally for robust error handling.

* Understand how to write and use assertions.

* Learn advanced debugging techniques (using debugger, browser dev tools).

* Understand the value of automated testing.

**Content:**

* **Advanced Exception Handling:** We'll write code that catches specific types of errors and rethrows others.

* **Assertions:** Writing assert functions to check that your code is in a consistent state.

* **The debugger Statement:** We'll learn how to use the debugger keyword to pause execution and inspect the state of the program.

* **Automated Testing:** We'll write simple test functions (like the test function in the book) to verify our code works correctly.

* **The Error Class:** We'll create custom error classes (e.g., InputError).

**Review Questions:**

* What is the purpose of the finally block?

* How do you create a custom error class?

* What does the debugger keyword do?

#### **Week 6: Modules (Deep Dive)**

**Pages Source:** Chapter 10 (ES modules, CommonJS modules, Building and bundling, Module design \- Pages 251-265)

**Lesson Objectives:**

* Understand the ES module system in depth (import/export syntax, default exports).

* Understand the CommonJS module system (require/exports).

* Learn about packages, NPM, and versioning.

* Design modular programs with clear interfaces.

**Content:**

* **ES Module Syntax:** We'll practice with named exports, default exports, and importing.

* **Dynamic Imports:**import() as a function for loading modules on demand.

* **CommonJS:** We'll understand how require works and why it's still widely used (especially with Node.js).

* **Packages:** We'll dive deeper into package.json and semantic versioning.

* **Module Design Principles:** Ease of use, composability, minimal state, and using simple data structures.

* **Circular Dependencies:** We'll understand the challenges and how CommonJS handles them.

**Review Questions:**

* What is the difference between a named export and a default export?

* What does the require function do?

* What are the key principles of good module design?

#### **Week 7: Project: A Modular Robot (Refactoring)**

**Pages Source:** Chapter 7 (Project: A Robot) and Chapter 10 (Exercises)

**Lesson Objectives:**

* Refactor the Robot project into a set of well-designed modules.

* Use ES modules to manage dependencies.

* Apply module design principles in practice.

**Content & Project:**

* **Project Setup:** We'll create a project with a package.json file.

* **Creating Modules:** We'll split the robot code into modules (e.g., roads.mjs, state.mjs, robots.mjs, run.mjs).

* **Using NPM:** We'll install the dijkstrajs package and use it instead of our custom findRoute function.

* **Refactoring:** We'll improve the design by reducing dependencies and making the code more modular.

* **Exercise:** Complete the "A modular robot" exercise from Chapter 10\.

**Review Questions:**

* What modules did you create for the robot project?

* Why did you choose to use dijkstrajs from NPM?

* How did refactoring the code into modules improve its design?

#### **Week 8: Project: A Platform Game (Introduction)**

**Pages Source:** Chapter 16 (The game, The technology, Levels \- Pages 390-393)

**Lesson Objectives:**

* Understand the architecture of a platform game.

* Design levels using a string-based plan.

* Read and parse level data into a structured format.

**Content & Project:**

* **The Game:** We'll build a simple platform game (similar to Dark Blue). The player moves, jumps, collects coins, and avoids lava.

* **Level Design:** Levels will be defined using strings (. for empty space, \# for walls, @ for the player, o for coins, etc.).

* **The Level Class:** We'll parse the level string into a Level object containing background grid data and a list of actors (player, coins, lava).

* **The Vec Class:** We'll use the Vec class (from Chapter 6 exercises) to represent positions and sizes.

**Review Questions:**

* What is the player's goal in the game?

* What characters are used to represent walls and lava in the level plan?

* What is the Level class responsible for?

#### **Week 9: Project: A Platform Game (Actors and Collision)**

**Pages Source:** Chapter 16 (Actors, Drawing, Motion and collision \- Pages 396-414)

**Lesson Objectives:**

* Implement the actor classes (Player, Lava, Coin).

* Implement collision detection between actors and the background grid.

* Implement the game's physics (gravity, jumping, movement).

**Content & Project:**

* **Actor Classes:** We'll implement the Player, Lava, and Coin classes. Each will have a pos, size, and update method.

* **Collision Detection:** The Level.touches method checks if a rectangle overlaps with a specific type of background tile (wall or lava).

* **Physics:** The Player.update method handles gravity, jumping, and horizontal movement.

* **Lava Behavior:** We'll implement bouncing and dripping lava.

* **The State Class:** This class holds the current state of the game (level, actors, status). It's persistent.

**Review Questions:**

* What does the update method of an actor do?

* How does the game detect collisions with walls?

* How does the player's jump work?

#### **Week 10: Project: A Platform Game (Display and Control)**

**Pages Source:** Chapter 16 (Drawing, Tracking keys, Running the game \- Pages 402-410, 417-421)

**Lesson Objectives:**

* Implement the DOMDisplay class to render the game.

* Handle keyboard input.

* Run the game loop using requestAnimationFrame.

* Manage game state (lives, levels).

**Content & Project:**

* **DOMDisplay:** We'll draw the game using DOM elements (tables for the grid, absolutely positioned divs for actors).

* **Keyboard Input:** We'll use trackKeys to track the state of the arrow keys.

* **The Game Loop:** We'll use runAnimation and requestAnimationFrame to create a smooth, fixed-step game loop.

* **Game Management:** We'll implement runLevel and runGame to manage level transitions.

* **Exercises:** We'll complete the "Game over" (lives) and "Pausing the game" exercises.

**Review Questions:**

* How does the DOMDisplay draw the background grid?

* How does the game track which keys are being pressed?

* What does the runLevel function do?

#### **Week 11: Project: A Platform Game (Canvas Display)**

**Pages Source:** Chapter 17 (Back to the game \- Pages 447-454)

**Lesson Objectives:**

* Implement a canvas-based display system (CanvasDisplay).

* Understand the trade-offs between DOM and canvas rendering.

* Use sprites to make the game look more polished.

**Content & Project:**

* **CanvasDisplay:** We'll rewrite the display system to use a \<canvas\> element. This is more efficient for games.

* **Sprites:** We'll use drawImage to draw character sprites from a sprite sheet.

* **Viewport:** We'll implement a viewport that follows the player.

* **Comparison:** We'll discuss the pros and cons of DOM vs. Canvas for game rendering.

* **Exercise:** Complete the "A monster" exercise to add a new enemy to the game.

**Review Questions:**

* Why is canvas sometimes better for games than DOM?

* What is a viewport?

* How do you draw a sprite from a sprite sheet?

#### **Week 12: Term Review and Showcase**

**Pages Source:** N/A

**Lesson Objectives:**

* Review all concepts learned in Term 1\.

* Showcase a project of your choice.

* Celebrate your progress\!

**Content:**

* **Review:** Let's review the big ideas:

  * **Regular Expressions:** Pattern matching, groups, replacement.

  * **Error Handling:**try/catch, assertions, debugging.

  * **Modules:** ES Modules, CommonJS, design principles.

  * **Platform Game:** Complete project from level design to rendering.

* **Showcase:** Show off your platform game\! Demonstrate its features and explain how you built it.

* **Wrap-up:** You've built a complete, polished platform game using JavaScript and the DOM/Canvas. You're now a skilled game developer\!

**Review Questions:**

* What are regular expressions used for?

* What is the difference between ES Modules and CommonJS?

* What was the most challenging part of building the platform game, and how did you solve it?

### **Term 2: The Browser, HTTP, and Full-Stack Development**

**Term Goal:** To master the browser environment, understand how the web works (HTTP, forms), and build interactive web applications.

#### **Week 1: HTTP and the Web (Deep Dive)**

**Pages Source:** Chapter 18 (The protocol, Browsers and HTTP, Fetch \- Pages 461-468)

**Lesson Objectives:**

* Understand the HTTP protocol in detail (methods, status codes, headers).

* Understand how browsers make requests and handle responses.

* Use the fetch API to make HTTP requests from JavaScript.

**Content:**

* **The HTTP Protocol:** We'll explore the structure of HTTP requests (method, path, headers) and responses (status code, headers, body).

* **HTTP Methods:** We'll learn about GET, POST, PUT, DELETE, and their intended uses.

* **HTTP Status Codes:** We'll understand common codes (200, 304, 404, 500, etc.).

* **The fetch API:** We'll make GET and POST requests using fetch. We'll learn how to set headers, read response bodies (.text(), .json()), and handle errors.

* **HTTP Sandboxing:** We'll understand CORS (Cross-Origin Resource Sharing) and why it exists.

**Review Questions:**

* What are the four main HTTP methods?

* What does a 404 status code mean?

* How do you use fetch to make a POST request with a JSON body?

#### **Week 2: HTTP and Forms (Client-Side)**

**Pages Source:** Chapter 18 (Form fields, Focus, Disabled fields, The form as a whole \- Pages 472-479)

**Lesson Objectives:**

* Master HTML forms and form fields (text, password, checkbox, radio, select, file).

* Handle form submission and validation with JavaScript.

* Use the FormData object.

**Content:**

* **Form Field Types:** We'll explore all the major form field types (input, textarea, select).

* **The form Element:** We'll understand the action, method, and enctype attributes.

* **Form Submission:** We'll handle the submit event to prevent default behavior and validate form data.

* **Focus and Disabled:** We'll use focus, blur, and the disabled attribute to manage user interaction.

* **The FormData Object:** We'll use FormData to easily gather data from a form for submission via fetch.

**Review Questions:**

* What is the difference between a text and a password input field?

* How do you prevent a form from submitting normally?

* What is the FormData object used for?

#### **Week 3: Advanced Form Fields and File Handling**

**Pages Source:** Chapter 18 (Text fields, Checkboxes and radio buttons, Select fields, File fields \- Pages 479-487)

**Lesson Objectives:**

* Work with text fields, including selectionStart and selectionEnd.

* Handle checkboxes and radio buttons.

* Handle multiple-choice select fields.

* Read and process files selected by the user.

**Content:**

* **Text Fields:** We'll use the value property, selectionStart/selectionEnd, and the input event.

* **Checkboxes and Radio Buttons:** We'll use the checked property and the change event.

* **Select Fields:** We'll use the options property and the selected property of each option.

* **File Fields:** We'll use the files property and the FileReader API to read file contents.

* **Exercise:** We'll build a simple note-taking application that uses localStorage.

**Review Questions:**

* How do you get the selected value from a radio button group?

* How do you get the selected value from a \<select\> element?

* How do you read the contents of a file selected in a file input field?

#### **Week 4: Client-Side Data Storage**

**Pages Source:** Chapter 18 (Storing data client-side \- Pages 487-491)

**Lesson Objectives:**

* Understand the localStorage and sessionStorage APIs.

* Use JSON to serialize and deserialize complex data.

* Build a persistent, client-side application.

**Content:**

* **localStorage:** We'll use setItem, getItem, and removeItem to store key-value pairs that persist even after the browser is closed.

* **sessionStorage:** Similar to localStorage, but data is cleared when the browser session ends.

* **JSON and Storage:** We'll learn how to serialize objects and arrays to JSON strings (using JSON.stringify) and deserialize them (using JSON.parse) for storage.

* **Note-Taking App (Revisited):** We'll build the note-taking application from the book, which uses localStorage for persistence.

**Review Questions:**

* What is the difference between localStorage and sessionStorage?

* Why do you need to use JSON.stringify before storing an object?

* What happens to data in localStorage when the user clears their browser data?

#### **Week 5: Advanced Event Handling**

**Pages Source:** Chapter 15 (Events and the event loop, Timers, Debouncing \- Pages 382-387)

**Lesson Objectives:**

* Understand the event loop and how it affects event handling.

* Use setTimeout and setInterval to schedule tasks.

* Implement debouncing and throttling for performance.

**Content:**

* **The Event Loop:** We'll understand how JavaScript's single-threaded model with an event loop processes events and callbacks.

* **setTimeout and setInterval:** We'll use these to schedule functions to run after a delay or repeatedly.

* **requestAnimationFrame:** We'll understand why this is better for animations than setInterval.

* **Debouncing:** We'll implement debouncing to limit how often a function is called (e.g., for scroll or resize events).

* **Throttling:** We'll implement throttling to ensure a function is called at most once in a given period.

**Review Questions:**

* What is the event loop?

* What is the difference between setTimeout and setInterval?

* What is debouncing and why is it useful?

#### **Week 6: Asynchronous Programming (Promises and Async)**

**Pages Source:** Chapter 11 (Promises, Failure, Async functions, Generators \- Pages 273-287)

**Lesson Objectives:**

* Master Promises (creating, chaining, error handling).

* Master async/await for writing clean asynchronous code.

* Understand Generators and their relationship to async functions.

* Complete the "Quiet Times" exercise.

**Content:**

* **Creating Promises:** We'll use the Promise constructor and Promise.resolve/Promise.reject.

* **Promise.all:** We'll use Promise.all to run multiple promises in parallel.

* **async/await (Deep Dive):** We'll write complex asynchronous logic using async/await.

* **Generators (function\*):** We'll understand how generators work and how they relate to async functions.

* **Exercise:** Complete the "Quiet Times" exercise (processing a log file using async/await).

**Review Questions:**

* What is Promise.all used for?

* What is the advantage of async/await over chaining promises?

* What is a generator function?

#### **Week 7: Project: A Skill-Sharing Website (Design)**

**Pages Source:** Chapter 21 (Design, Long polling \- Pages 552-555)

**Lesson Objectives:**

* Understand the architecture of a full-stack web application.

* Understand the concept of long polling for real-time updates.

* Design the HTTP interface for the application.

**Content & Project:**

* **Project Goals:** We'll build a website where users can propose talks and comment on them.

* **Client-Server Architecture:** We'll understand the roles of the client (browser) and the server (Node.js).

* **Real-Time Updates:** We'll use long polling to push updates from the server to all connected clients.

* **HTTP Interface Design:** We'll design the API endpoints (/talks, /talks/\<title\>, /talks/\<title\>/comments), methods (GET, PUT, POST, DELETE), and data formats (JSON).

**Review Questions:**

* What is the goal of the skill-sharing website?

* What is long polling and why is it used?

* What HTTP method would you use to create a new talk?

#### **Week 8: Project: A Skill-Sharing Website (Server)**

**Pages Source:** Chapter 21 (The server \- Pages 559-569)

**Lesson Objectives:**

* Implement the server-side of the application using Node.js.

* Build a router and serve static files.

* Implement the HTTP interface for talks and comments.

* Implement the long polling mechanism.

**Content & Project:**

* **Setting Up the Server:** We'll use Node.js's http module and the serve-static package.

* **Routing:** We'll build a Router class (or use a package) to handle different HTTP methods and paths.

* **Talks as Resources:** We'll implement handlers for GET, PUT, POST, and DELETE on the /talks endpoints.

* **Long Polling:** We'll implement the waitForChanges mechanism to hold requests until new data is available.

* **Testing:** We'll use curl to test our server's API.

**Review Questions:**

* What is the serve-static package used for?

* How does the server handle a PUT request to create a new talk?

* How does the server implement long polling?

#### **Week 9: Project: A Skill-Sharing Website (Client)**

**Pages Source:** Chapter 21 (The client \- Pages 570-579)

**Lesson Objectives:**

* Implement the client-side of the application in the browser.

* Use the fetch API to communicate with the server.

* Implement the UI components and the polling loop.

**Content & Project:**

* **HTML and CSS:** We'll build a basic HTML page and style it with CSS.

* **Client-Side JavaScript:** We'll write JavaScript to handle user actions (submit talk, add comment, delete talk).

* **The pollTalks Function:** We'll implement the long polling loop that continuously asks the server for updates.

* **Rendering Components:** We'll write functions to render the talk list, comment list, and forms.

* **State Management:** We'll manage the application state (talks, user) on the client side.

**Review Questions:**

* What is the pollTalks function responsible for?

* How does the client send a new comment to the server?

* How does the client update the UI when new data arrives from the server?

#### **Week 10: Project: A Skill-Sharing Website (Persistence)**

**Pages Source:** Chapter 21 (Exercises \- Page 580\)

**Lesson Objectives:**

* Add disk persistence to the server.

* Save talks to a file and reload them on server restart.

* Complete the "Disk persistence" exercise.

**Content & Project:**

* **The Problem:** The server currently stores talks only in memory. A server restart loses all data.

* **Solution:** We'll save the talks object to a JSON file on disk whenever it changes.

* **Loading:** On server startup, we'll try to load the talks from the file. If the file doesn't exist, we'll start with an empty object.

* **Exercise:** Complete the "Disk persistence" exercise.

**Review Questions:**

* Why does the server need disk persistence?

* How would you save the talks to a file?

* What happens if the JSON file is corrupted?

#### **Week 11: Project: A Skill-Sharing Website (Polishing)**

**Pages Source:** Chapter 21 (Exercises \- Page 580\)

**Lesson Objectives:**

* Fix the comment field reset issue.

* Add additional features (edit talks, delete comments, etc.).

* Deploy the application.

**Content & Project:**

* **Comment Field Reset:** We'll solve the problem where typing in a comment field is interrupted by updates from the server.

* **Additional Features:** We'll brainstorm and implement new features (e.g., editing talks, user authentication).

* **Deployment:** We'll deploy the application to a hosting service so it can be accessed over the internet.

* **Exercise:** Complete the "Comment field resets" exercise.

**Review Questions:**

* What caused the comment field reset problem?

* How did you solve it?

* What additional features would you like to add to the application?

#### **Week 12: Term Review and Showcase**

**Pages Source:** N/A

**Lesson Objectives:**

* Review all concepts learned in Term 2\.

* Showcase a project of your choice.

* Celebrate your progress\!

**Content:**

* **Review:** Let's review the big ideas:

  * **HTTP and the Web:**fetch, forms, status codes.

  * **Client-Side Storage:**localStorage, sessionStorage.

  * **Asynchronous Programming:** Promises, async/await.

  * **Full-Stack Application:** The Skill-Sharing Website (server \+ client).

* **Showcase:** Show off your Skill-Sharing Website\! Demonstrate its features and explain how it works.

* **Wrap-up:** You've built a complete, real-time, full-stack web application. This is a huge achievement\! You are now a full-stack JavaScript developer.

**Review Questions:**

* What is the difference between the server-side and client-side of a web application?

* How does long polling enable real-time updates?

* What was the most challenging part of the Skill-Sharing Website project, and how did you solve it?

### **Term 3: Compilers, Advanced Node.js, and Final Project**

**Term Goal:** To build a programming language (Egg), create a production-ready Node.js server, and complete a final, self-directed project.

#### **Week 1: Building a Programming Language (Parsing)**

**Pages Source:** Chapter 12 (Parsing \- Pages 300-307)

**Lesson Objectives:**

* Understand the concept of a parser and a syntax tree.

* Build a recursive descent parser for the Egg language.

* Parse expressions into a syntax tree.

**Content:**

* **The Egg Language:** We'll introduce the syntax of Egg (expressions, applications, special forms).

* **Parsing:** A parser reads a string of code and produces a structured representation (a syntax tree).

* **parseExpression:** We'll implement this function to parse a single expression (value, word, or application).

* **parseApply:** We'll implement this function to parse function applications.

* **The Syntax Tree:** We'll represent expressions as objects with type, value, name, operator, and args properties.

**Review Questions:**

* What is a parser?

* What is a syntax tree?

* How does the parseExpression function work?

#### **Week 2: Building a Programming Language (Evaluation)**

**Pages Source:** Chapter 12 (The evaluator, Special forms \- Pages 307-311)

**Lesson Objectives:**

* Implement the evaluator for the Egg language.

* Understand how the evaluator interprets the syntax tree.

* Implement special forms (if, while, do, define).

**Content:**

* **The evaluate Function:** This function takes a syntax tree and a scope object and returns the value of the expression.

* **Evaluating Values and Words:** Literal values return themselves. Words are looked up in the scope.

* **Evaluating Applications:** We'll handle special forms (if, while, do, define) and regular function calls.

* **Special Forms:** We'll implement the if, while, do, and define special forms in the specialForms object.

**Review Questions:**

* What does the evaluate function do?

* How does the evaluator handle a function application?

* Why are if and while implemented as special forms rather than regular functions?

#### **Week 3: Building a Programming Language (Functions and Environment)**

**Pages Source:** Chapter 12 (The environment, Functions, Compilation, Cheating \- Pages 311-317)

**Lesson Objectives:**

* Add functions to the Egg language (fun special form).

* Understand lexical scoping and closures in Egg.

* Explore the concept of compilation.

**Content:**

* **The fun Special Form:** We'll implement functions. The fun form creates a function object that captures the current scope (closure).

* **The Global Scope:** We'll populate the top-level scope with useful values (numbers, operators, print).

* **Testing Egg:** We'll write and run Egg programs that use functions.

* **Compilation:** We'll discuss how to compile Egg to JavaScript for better performance.

* **Cheating:** We'll note that the evaluator uses JavaScript's own mechanisms for many things (numbers, strings, arrays, if, while).

**Review Questions:**

* How does the fun special form create a closure?

* What is the topScope object used for?

* What is the difference between an interpreter and a compiler?

#### **Week 4: Building a Programming Language (Exercises)**

**Pages Source:** Chapter 12 (Exercises \- Pages 318-320)

**Lesson Objectives:**

* Complete the exercises from Chapter 12 (Arrays, Comments, Fixing Scope).

* Deepen understanding of the Egg language implementation.

**Content & Project:**

* **Arrays:** We'll add support for arrays in Egg by adding array, length, and element functions to the top scope.

* **Comments:** We'll modify the skipSpace function to skip over comments.

* **Fixing Scope:** We'll implement the set special form, which updates an existing binding in the current or outer scope.

* **Experimentation:** We'll write and run more complex Egg programs to test our language.

**Review Questions:**

* How did you add array support to Egg?

* How did you implement comments?

* How does the set special form differ from define?

#### **Week 5: Advanced Node.js (Filesystem and HTTP)**

**Pages Source:** Chapter 20 (The filesystem module, The HTTP module, Streams \- Pages 534-540)

**Lesson Objectives:**

* Master the fs (filesystem) module (reading, writing, directories).

* Master the http module (creating a server, handling requests).

* Understand Node.js streams (readable and writable streams).

**Content:**

* **fs Promises API:** We'll use fs/promises to read and write files asynchronously.

* **fs Sync API:** We'll use the synchronous versions (readFileSync, writeFileSync) for simpler scripts.

* **Creating an HTTP Server:** We'll use createServer to build a simple web server.

* **Handling Requests:** We'll inspect the request object (method, url, headers) and send responses.

* **Streams:** We'll understand readable and writable streams and how to use pipe.

**Review Questions:**

* How do you read a file asynchronously in Node.js?

* How do you create a simple HTTP server?

* What is a stream and why is it useful?

#### **Week 6: Project: A File Server (Full Implementation)**

**Pages Source:** Chapter 20 (A file server \- Pages 541-549)

**Lesson Objectives:**

* Build a complete HTTP file server with support for GET, PUT, and DELETE.

* Implement proper error handling and status codes.

* Understand how to serve static files and handle dynamic requests.

**Content & Project:**

* **The Server Setup:** We'll create an HTTP server and route requests based on method and path.

* **The urlPath Function:** We'll safely resolve file paths, preventing directory traversal attacks.

* **GET Handler:** We'll serve files and directories, with proper Content-Type headers.

* **DELETE Handler:** We'll delete files and directories.

* **PUT Handler:** We'll create or overwrite files.

* **Testing:** We'll test the server using curl.

**Review Questions:**

* How does the server prevent users from accessing files outside the public directory?

* What Content-Type header is returned for a .html file?

* How does the server handle a PUT request?

#### **Week 7: Node.js Packages and Modules**

**Pages Source:** Chapter 20 (Installing with NPM, Package files, Versions \- Pages 531-534)

**Lesson Objectives:**

* Understand the package.json file and its dependencies.

* Install and use packages from NPM.

* Understand semantic versioning.

**Content:**

* **package.json:** We'll create and manage a package.json file for our projects.

* **npm install:** We'll install packages (e.g., mime-types) and save them as dependencies.

* **Semantic Versioning:** We'll understand ^, \~, and how version numbers indicate compatibility.

* **Using Packages:** We'll import and use installed packages in our code.

**Review Questions:**

* What is the purpose of the package.json file?

* What is semantic versioning?

* How do you install a package and save it as a dependency?

#### **Week 8: Project: A Public Space on the Web**

**Pages Source:** Chapter 20 (Exercises \- Page 551\)

**Lesson Objectives:**

* Build a collaborative website on top of the file server.

* Use HTML forms to edit and save files.

* Apply all previous knowledge (HTTP, DOM, events, fetch).

**Content & Project:**

* **The Goal:** Create a public, collaborative website where anyone can edit the content.

* **Client-Side Interface:** We'll build an HTML page with a \<textarea\> for editing file content and a \<select\> for choosing which file to edit.

* **Saving:** We'll use fetch with the PUT method to save the content back to the server.

* **Loading:** We'll use fetch with the GET method to load the content of the selected file.

* **Exercise:** Complete the "A public space on the web" exercise.

**Review Questions:**

* How does the client know which files are available to edit?

* How does the client save the edited content to the server?

* What HTTP method is used for saving?

#### **Week 9: Advanced Node.js (Streams and Performance)**

**Pages Source:** Chapter 20 (Streams \- Pages 539-540) and Node.js documentation

**Lesson Objectives:**

* Master Node.js streams for efficient data processing.

* Understand when to use streams vs. buffers.

* Build a streaming file server.

**Content:**

* **Streams vs. Buffers:** We'll compare reading a file entirely into memory (readFile) vs. streaming it (createReadStream).

* **pipe:** We'll understand how to pipe data from a readable stream to a writable stream.

* **Backpressure:** We'll understand how streams handle backpressure to prevent memory issues.

* **Streaming Server:** We'll modify our file server to use streams for GET and PUT requests.

* **Performance:** We'll see how streaming improves memory usage and response times.

**Review Questions:**

* What is the advantage of using streams over reading the entire file into memory?

* What does the pipe method do?

* What is backpressure?

#### **Week 10: Final Project (Planning and Setup)**

**Pages Source:** N/A

**Lesson Objectives:**

* Choose a final project.

* Write a project plan.

* Set up the development environment.

**Content & Project:**

* **Project Ideas:** Choose from a list of ideas or come up with your own.

  * **Option 1:** A chat application (client \+ server with WebSockets).

  * **Option 2:** A blog engine (Node.js \+ database).

  * **Option 3:** A game (e.g., a multiplayer game with a Node.js server).

  * **Option 4:** A data visualization dashboard (using a library like D3.js).

  * **Option 5:** Your own idea\!

* **Project Plan:** Write a plan that includes:

  * **Goal:** What does your application do?

  * **Technologies:** What tools will you use (Node.js, Express, React, WebSockets, etc.)?

  * **Architecture:** How will the client and server communicate?

  * **Database:** Will you need a database? If so, which one (SQLite, MongoDB)?

  * **Timeline:** Break the project into weekly milestones.

**Review Questions:**

* What project have you chosen and why?

* What technologies will you use?

* What is the first thing you will build?

#### **Week 11: Final Project (Implementation)**

**Pages Source:** N/A

**Lesson Objectives:**

* Implement the core features of the project.

* Write clean, modular code.

* Test the application thoroughly.

**Content & Project:**

* **Coding:** Spend the week building the main features of your project.

* **Testing:** Write automated tests for critical parts of your application.

* **Refactoring:** Clean up your code, remove duplication, and ensure it's well-organized.

* **Documentation:** Write comments and a README.md explaining how to run and use your project.

**Review Questions:**

* What progress did you make this week?

* What challenges did you encounter and how did you overcome them?

* What is your plan for next week?

#### **Week 12: Final Project (Polishing and Presentation)**

**Pages Source:** N/A

**Lesson Objectives:**

* Polish the project (UI, performance, error handling).

* Write a presentation about the project.

* Present the project to an audience.

**Content:**

* **Polishing:** Fix bugs, improve the user interface, add error handling.

* **Deployment:** Deploy the application to a cloud service (e.g., Heroku, Vercel, or a VPS).

* **Presentation:** Prepare a presentation that covers:

  * The project goal.

  * The technologies used.

  * The architecture (how it works).

  * A live demo.

  * Challenges faced and how they were solved.

* **Showcase:** Present your project to your teacher, family, or peers.

**Review Questions:**

* What was the most important thing you learned from the final project?

* What would you do differently if you started over?

* What are your future programming goals?

**Congratulations\!** You have completed the full JavaScript curriculum. You have built programming languages, games, full-stack web applications, and much more. You are now a highly skilled, independent programmer ready to take on any challenge. The world of software development is open to you\!
