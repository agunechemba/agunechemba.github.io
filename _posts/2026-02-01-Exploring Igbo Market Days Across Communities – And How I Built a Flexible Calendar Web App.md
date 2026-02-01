# Exploring Igbo Market Days Across Communities – And How I Built a Flexible Calendar Web App

<img src="https://i.ibb.co/pj9TZLBc/calender.png" width="100%">

Time in Igboland is different. Not in hours or minutes, but in **market days, moons, and seasons**. Growing up learning about Igbo traditions, I always found it fascinating that **Nkwo in one town could be Orie in another**, and that each community had its own way of marking time.

Recently, I decided to dig deeper into this and share it with the world. That’s how I ended up building a **web app** that helps users explore Igbo (and even Yoruba) market days, completely flexibly.

---

## Market Days in Igbo Communities – Not as Uniform as You Think

Many people assume that all Igbo communities follow the same four-day market week:

**Eke → Orie (Oye) → Afor → Nkwo**

And yes, these are widely recognized, but the reality is more nuanced:

* **Different towns may start the cycle on different days.**
  For example, **Orsumoghu in Ihiala LGA** might consider a certain day Nkwo, while a nearby town like Uli could call it Orie on the same Gregorian date.
* **Reference points differ.** Traditional Igbo calendars weren’t tied to the Western Gregorian calendar. Elders often remembered a specific day and counted forward from there.
* **Community traditions ruled.** What mattered was not global correctness but local agreement.

This diversity made me realize that **any tool or app that claims to show “the Igbo calendar” needs flexibility**—one size does not fit all.

---

## Enter the Web App: Flexibility at the Core

I wanted something practical: a way for anyone to **calculate the market day for any date**, using any reference point. The app needed to:

1. **Let users choose a reference date and market day.**
   For instance, a user could say: *“28 July 1991 was Nkwo in Orsumoghu.”* The app uses this as the starting point.

2. **Calculate forward or backward to find the market day for any other date.**
   The math is simple but powerful:

   * Count the number of days between the reference date and the target date.
   * Divide by 4 (because Igbo market weeks have 4 days).
   * Use the remainder to find the market day relative to the reference.

3. **Support Yoruba market days too.**
   The Yoruba system uses an **8-day week with 4 market days**, and some users wanted to explore these alongside the Igbo cycle.

4. **Keep it community-friendly.**
   Users can adjust the reference date to reflect **their own ancestral calendar**, making it accurate for their specific town.

---

### Example: How It Works

Say your reference is:

* **Date:** 28 July 1991
* **Market Day:** Nkwo

You want to know the market day for **31 January 2026**. The app calculates the number of days in between, divides by 4, and tells you **Orie**. Simple, but it works for **any Igbo town**, as long as you know the reference.

---

## Why This Matters

This isn’t just a fun coding project. It’s about **cultural preservation and accessibility**:

* People in the diaspora can reconnect with **ancestral rhythms**.
* Students of African history and anthropology get a **hands-on way to explore traditional calendars**.
* Farmers, traders, and festival organizers can **align events with market cycles**, just like ancestors did.

### <a href="https://agunechemba.name.ng/Ancestral-Calendar/" target="_blank">Give the app a try!</a>