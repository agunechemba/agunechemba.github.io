# 06-Binary Systems and Hexadecimal: Robbie the Robot Vacuum:- 8 Bits in Its Brain!

<img src="https://agunechembaekene.wordpress.com/wp-content/uploads/2025/06/a-human-like-computer-who-is-confused.jpeg" width="100%">

## Registers: Tiny On/Off Switches in Computers

Computers only understand two signals: on or off (1 or 0).  In fact, a *bit* is like a tiny lightbulb or switch that can be **ON** (1) or **OFF** (0).  A **register** is just a little box (inside the processor) that holds a handful of these bits.  You can think of it like a control panel with 8 toggle switches.  Each switch (bit) acts like a checkbox: flipping it to 1 is “on”, and 0 is “off”.  By setting certain bits to 1 or 0, the register can send commands to parts of the computer.

## Meet Robbie, the Robot Vacuum!

Imagine a cute robot vacuum named Robbie rolling around your room.  Robbie has three wheels – **A**, **B**, and **C** – to move and steer. Wheel A is a swivel wheel for turning, while wheels B and C (the big ones) drive him forward or backward.  Each drive wheel has its own electric motor.  Inside Robbie’s “brain” is an 8-bit register controlling those motors.  By flipping bits in that register, the vacuum decides which motors to power and in which direction.

In one example, an 8-bit register controls Robbie’s movements.  Here’s how those bits might work:

* **Bit 1:** Turn **Motor B** (left wheel) ON
* **Bit 2:** Turn **Motor B** OFF
* **Bit 3:** Turn **Motor C** (right wheel) ON
* **Bit 4:** Turn **Motor C** OFF
* **Bit 5:** Set **Wheel B** direction FORWARD
* **Bit 6:** Set **Wheel B** direction BACKWARD
* **Bit 7:** Set **Wheel C** direction FORWARD
* **Bit 8:** Set **Wheel C** direction BACKWARD

Flipping a bit to 1 is like flipping a switch to “on,” and 0 is “off”.  For example, setting **Bit 1 = 1** turns motor B on, and **Bit 5 = 1** makes wheel B go forward.  If Robbie’s register reads `10101010`, that means Motor B is ON (bit 1=1) and Motor C is ON (bit 3=1), and bits 5 and 7 (both 1) set them to go forward.  In other words, `10101010` makes both drive wheels turn forward, so Robbie moves straight ahead.  Changing any bit to 0 would turn that motor off or change direction, just like toggling a light switch.

## Computers and Tiny Switches

Finally, remember that **all** these bits are really just electronic switches on a chip.  Modern processors pack millions to billions of tiny transistors (switches) into a chip.  Each transistor holds one bit: if electricity flows (1) it’s on; if not (0) it’s off.  Even a smartphone can have **billions** of these switches.  By turning combinations of them on and off at lightning speed, computers make our robot vacuum (and every app or game) work.

## Review Questions

1. **What is a register?** Explain it in your own words (hint: think of tiny switches).
2. **How many bits are in an “8-bit” register?**
3. If Bit 1 = 1 in Robbie’s example, what does that do? What if Bit 2 = 1?
4. The vacuum’s register shows `10101010`. Describe what Robbie is doing (which motors are on/off and what direction).
5. **Why do computers use bits (1s and 0s) to control things?** (Think about how a switch works inside a chip.)
