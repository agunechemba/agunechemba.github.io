# Prime Programmers Hub: "Algorithms to Live By" Curriculum

## CURRICULUM OVERVIEW

This curriculum is based on **"Algorithms to Live By"** — a book that explores how computer science algorithms can be applied to everyday human decisions and problems. The book covers:

| Chapter | Topic |
|---------|-------|
| 1 | Optimal Stopping - When to Stop Looking |
| 2 | Explore/Exploit - The Latest vs. The Greatest |
| 3 | Sorting - Making Order |
| 4 | Caching - Forget About It |
| 5 | Scheduling - First Things First |
| 6 | Bayes's Rule - Predicting the Future |
| 7 | Overfitting - When to Think Less |
| 8 | Relaxation - Let It Slide |
| 9 | Randomness - When to Leave It to Chance |
| 10 | Networking - How We Connect |
| 11 | Game Theory - The Minds of Others |

---

# TERM 1: Optimal Stopping - Knowing When to Stop

---

### Topic 1: Introduction to Optimal Stopping

**Objective:** Students will understand the concept of optimal stopping and identify it in daily life.

**Content:**
- What is optimal stopping? (Deciding when to stop looking)
- The "look vs. leap" dilemma
- Real-world examples: apartment hunting, dating, parking
- The cost of information gathering

**Pseudocode Example:**
```
PROBLEM: You are looking for an apartment in a competitive market.
You must decide immediately: take it or leave it forever.

ALGORITHM: Basic Look-Then-Leap

INPUT: List of apartments (unknown quality), number of days to search
OUTPUT: Best apartment found

SET lookPhase = 0.37 * totalDays
SET bestSeen = NEGATIVE_INFINITY
SET currentDay = 1

WHILE currentDay <= totalDays
    VIEW next apartment
    IF currentDay <= lookPhase THEN
        // Just observe, don't commit
        bestSeen = MAX(bestSeen, currentApartment.quality)
        DISPLAY "Observing day " + currentDay
    ELSE
        // Leap phase - ready to commit
        IF currentApartment.quality > bestSeen THEN
            DISPLAY "Found the best apartment on day " + currentDay
            RETURN currentApartment
        END IF
    END IF
    currentDay = currentDay + 1
END WHILE

RETURN "No apartment found"
```

**Activity:** Students identify 5 situations in their daily life where optimal stopping applies.

---

### Topic 2: The 37% Rule - The Look-Then-Leap Principle

**Objective:** Students will apply the 37% Rule to solve decision problems.

**Content:**
- The Secretary Problem
- The 37% Rule derivation
- Why 37%? (1/e ≈ 0.3679)
- Success rate of 37%

**Pseudocode Example:**
```
PROBLEM: You need to hire the best secretary from 100 applicants.
You interview one at a time and cannot recall rejected applicants.

ALGORITHM: 37% Rule for Hiring

INPUT: Number of applicants (N = 100)
OUTPUT: Best applicant selected

SET lookPhase = ROUND(N * 0.37)  // 37 applicants to observe
SET bestSeen = NEGATIVE_INFINITY
SET applicantIndex = 1

FOR each applicant FROM 1 TO N
    EVALUATE applicant quality
    
    IF applicantIndex <= lookPhase THEN
        // Look phase - observe only
        bestSeen = MAX(bestSeen, applicant.quality)
    ELSE
        // Leap phase - ready to hire
        IF applicant.quality > bestSeen THEN
            DISPLAY "Hired applicant number: " + applicantIndex
            RETURN applicant
        END IF
    END IF
    
    applicantIndex = applicantIndex + 1
END FOR

RETURN "Hired the last applicant"  // If none better found
```

**Activity:** Simulate the 37% Rule with a deck of cards and record success rates.

---

### Topic 3: Full Information Problems

**Objective:** Students will solve optimal stopping problems with full information.

**Content:**
- No-information vs. full-information games
- The Threshold Rule
- Working backward from the end
- When to lower standards

**Pseudocode Example:**
```
PROBLEM: You have applicants with known test scores (percentiles).
Your goal: Get the single best applicant.

ALGORITHM: Threshold Rule (Full Information)

INPUT: Number of applicants left, current applicant's percentile
OUTPUT: Decision to hire or continue

FUNCTION shouldHire(applicantsRemaining, applicantPercentile)
    // Calculate threshold based on remaining applicants
    IF applicantsRemaining == 0 THEN
        RETURN TRUE  // Must hire the last one
    END IF
    
    IF applicantsRemaining == 1 THEN
        threshold = 50  // Hire if above average
    ELSE IF applicantsRemaining == 2 THEN
        threshold = 69
    ELSE IF applicantsRemaining == 3 THEN
        threshold = 78
    ELSE IF applicantsRemaining == 5 THEN
        threshold = 87
    ELSE IF applicantsRemaining == 10 THEN
        threshold = 94
    ELSE IF applicantsRemaining == 20 THEN
        threshold = 97
    END IF
    
    RETURN applicantPercentile >= threshold
END FUNCTION

// Main decision process
FOR each applicant
    IF shouldHire(applicantsLeft, applicant.percentile) THEN
        HIRE applicant
        BREAK
    END IF
END FOR
```

**Activity:** Create a decision chart showing when to stop based on remaining options.

---

### Topic 4: Selling a House - Optimal Stopping with Costs

**Objective:** Students will solve optimal stopping problems with search costs.

**Content:**
- Selling a house as an optimal stopping problem
- The cost of waiting
- Setting a reservation price
- Sunk costs and not looking back

**Pseudocode Example:**
```
PROBLEM: You are selling a house. Offers range from ₦40M to ₦50M.
Each offer costs ₦2M in waiting (mortgage, maintenance).

ALGORITHM: House Selling with Waiting Cost

INPUT: Range of offers (minOffer, maxOffer), costPerOffer
OUTPUT: Best offer accepted

SET offerRange = maxOffer - minOffer
SET threshold = minOffer + offerRange * (1 - SQRT(costPerOffer / offerRange))

FUNCTION shouldAccept(offer)
    RETURN offer >= threshold
END FUNCTION

// Main process
WHILE offers remain
    RECEIVE new offer
    IF shouldAccept(offer) THEN
        DISPLAY "Accepting offer: ₦" + offer
        RETURN offer
    ELSE
        DISPLAY "Rejecting offer: ₦" + offer + " (below threshold)"
        CONTINUE searching
    END IF
END WHILE

DISPLAY "No acceptable offer found"
```

**Activity:** Calculate the optimal selling price for different waiting costs.

---

### Topic 5: Parking and Quitting - Real-World Applications

**Objective:** Students will apply optimal stopping to parking and quitting decisions.

**Content:**
- Parking as an optimal stopping problem
- Occupancy rate and parking strategy
- The Burglar Problem (quitting while ahead)
- When there is no optimal stopping rule

**Pseudocode Example:**
```
PROBLEM: Finding a parking spot near your destination.

ALGORITHM: Optimal Parking Strategy

INPUT: Distance to destination (in spots), occupancy rate
OUTPUT: Decision on taking a spot

// Calculate when to start looking seriously
SET switchPoint = -(LOG(2) / LOG(1 - occupancyRate))

FUNCTION shouldTakeSpot(spotDistance, occupancyRate)
    // If we're beyond the switch point and this is an empty spot
    IF spotDistance <= switchPoint THEN
        RETURN TRUE  // Take this spot!
    ELSE
        RETURN FALSE // Keep looking (still in look phase)
    END IF
END FUNCTION

// Parking process
FOR each spot moving toward destination
    IF spot.isEmpty AND shouldTakeSpot(distanceToDest, occupancyRate) THEN
        PARK in this spot
        DISPLAY "Parked " + distanceToDest + " spots from destination"
        RETURN
    END IF
END FOR
```

**Activity:** Calculate the optimal parking strategy for different occupancy rates (85%, 90%, 95%, 99%).

---

# TERM 2: Explore/Exploit - The Latest vs. The Greatest

---

### Topic 1: The Explore/Exploit Tradeoff

**Objective:** Students will understand the balance between trying new things and enjoying favorites.

**Content:**
- What is exploration? (Gathering information)
- What is exploitation? (Using known good options)
- The multi-armed bandit problem
- Win-Stay, Lose-Shift strategy

**Pseudocode Example:**
```
PROBLEM: You are at a casino with two slot machines.
You want to maximize your total winnings.

ALGORITHM: Win-Stay, Lose-Shift

INPUT: Two slot machines, number of plays
OUTPUT: Total winnings

SET totalWinnings = 0
SET currentMachine = 1  // Start with machine 1
SET playCount = 1

WHILE playCount <= totalPlays
    PLAY currentMachine
    result = GET_OUTCOME()
    totalWinnings = totalWinnings + result
    
    IF result == WIN THEN
        // Stay on this machine
        DISPLAY "Win! Stay on machine " + currentMachine
    ELSE
        // Shift to the other machine
        currentMachine = 3 - currentMachine  // Switch between 1 and 2
        DISPLAY "Loss! Shift to machine " + currentMachine
    END IF
    
    playCount = playCount + 1
END WHILE

RETURN totalWinnings
```

**Activity:** Simulate the Win-Stay, Lose-Shift strategy with a coin toss.

---

### Topic 2: The Gittins Index

**Objective:** Students will calculate and apply the Gittins index for decision-making.

**Content:**
- What is the Gittins index?
- The value of the unknown
- Geometric discounting
- Using the Gittins index table

**Pseudocode Example:**
```
PROBLEM: You have two restaurants. One you've been to 15 times (9 good, 6 bad).
Another you've been to 2 times (1 good, 1 bad). Which to choose?

ALGORITHM: Gittins Index Decision

INPUT: Restaurant A (wins=9, losses=6), Restaurant B (wins=1, losses=1)
OUTPUT: Which restaurant to choose

// Gittins index values for 90% future discounting
FUNCTION getGittinsIndex(wins, losses)
    // Look up in Gittins index table
    // 0-0: 0.7029, 1-1: 0.6346, 2-2: 0.6010
    // 9-6: 0.6300, etc.
    RETURN indexValue
END FUNCTION

// Restaurant A: 9 wins, 6 losses -> Expected value = 60%
// Restaurant B: 1 win, 1 loss -> Expected value = 50%

SET indexA = getGittinsIndex(9, 6)  // 0.6300
SET indexB = getGittinsIndex(1, 1)  // 0.6346

IF indexB > indexA THEN
    DISPLAY "Choose Restaurant B (the less experienced one)"
    RETURN "Restaurant B"
ELSE
    DISPLAY "Choose Restaurant A"
    RETURN "Restaurant A"
END IF
```

**Activity:** Use the Gittins index table to choose between options with different track records.

---

### Topic 3: Upper Confidence Bound - The Optimism Algorithm

**Objective:** Students will use Upper Confidence Bound algorithms to make decisions.

**Content:**
- What is regret? (Minimizing lost opportunity)
- Optimism in the face of uncertainty
- Confidence intervals
- Upper Confidence Bound algorithm

**Pseudocode Example:**
```
PROBLEM: You have several restaurants. Which to try next?

ALGORITHM: Upper Confidence Bound

INPUT: List of restaurants with their success history
OUTPUT: Which restaurant to choose

FUNCTION getUpperConfidenceBound(restaurant)
    // UCB = average + exploration bonus
    // exploration bonus = sqrt(2 * log(totalVisits) / restaurantVisits)
    
    SET average = restaurant.successes / restaurant.visits
    SET bonus = SQRT(2 * LOG(totalVisitsAll) / restaurant.visits)
    RETURN average + bonus
END FUNCTION

// For each restaurant, calculate UCB
BEST = null
BEST_UCB = NEGATIVE_INFINITY

FOR each restaurant
    ucb = getUpperConfidenceBound(restaurant)
    DISPLAY restaurant.name + ": UCB = " + ucb
    
    IF ucb > BEST_UCB THEN
        BEST_UCB = ucb
        BEST = restaurant
    END IF
END FOR

DISPLAY "Choose: " + BEST.name + " (optimistic choice)"
RETURN BEST
```

**Activity:** Calculate UCB scores for different options and make recommendations.

---

### Topic 4: A/B Testing and Clinical Trials

**Objective:** Students will understand how explore/exploit applies to testing.

**Content:**
- A/B testing in web design
- Adaptive clinical trials
- The ethics of exploration
- "Play the winner" algorithm

**Pseudocode Example:**
```
PROBLEM: Testing two medical treatments. Which is better?

ALGORITHM: Play the Winner (Adaptive Trial)

INPUT: Treatment A and Treatment B, target patients
OUTPUT: Treatment assignment for each patient

SET hat = [A, B]  // Start with one ball for each treatment
SET patientsTreated = 0

WHILE patientsTreated < targetPatients
    // Draw a treatment at random from the hat
    treatment = RANDOM_PICK(hat)
    
    ASSIGN patient to treatment
    result = GET_OUTCOME(treatment)
    patientsTreated = patientsTreated + 1
    
    IF result == SUCCESS THEN
        // Add another ball for this treatment (more likely next time)
        hat.PUSH(treatment)
        DISPLAY "Success! " + treatment + " gets another ball"
    ELSE
        // Add a ball for the OTHER treatment (more likely next time)
        IF treatment == A THEN
            hat.PUSH(B)
        ELSE
            hat.PUSH(A)
        END IF
        DISPLAY "Failure! " + OTHER_TREATMENT + " gets another ball"
    END IF
END WHILE

DISPLAY "Final results: Treatment A used " + countA + " times"
DISPLAY "Final results: Treatment B used " + countB + " times"
```

**Activity:** Simulate an adaptive clinical trial with two treatment options.

---

### Topic 5: The Restless World and Life's Interval

**Objective:** Students will understand how the interval affects explore/exploit decisions.

**Content:**
- The restless bandit (changing probabilities)
- Childhood as exploration
- Old age as exploitation
- The interval makes the strategy

**Pseudocode Example:**
```
PROBLEM: You are moving to a new city. How to choose restaurants?

ALGORITHM: Interval-Based Restaurant Strategy

INPUT: Length of stay (days), number of restaurants
OUTPUT: Exploration strategy

SET explorationPeriod = 0.37 * lengthOfStay

FUNCTION shouldExplore(currentDay)
    RETURN currentDay <= explorationPeriod
END FUNCTION

FUNCTION shouldExploit(currentDay)
    RETURN currentDay > explorationPeriod
END FUNCTION

// Strategy
FOR day = 1 TO lengthOfStay
    IF shouldExplore(day) THEN
        DISPLAY "Day " + day + ": Try a NEW restaurant"
        TRY random new restaurant
    ELSE
        DISPLAY "Day " + day + ": Go to FAVORITE restaurant"
        GO_TO best discovered restaurant
    END IF
END FOR

// Explanation
IF lengthOfStay < 30 THEN
    DISPLAY "Short stay: More exploration, less exploitation"
ELSE IF lengthOfStay < 365 THEN
    DISPLAY "Medium stay: Balanced exploration and exploitation"
ELSE
    DISPLAY "Long stay: More exploration early, more exploitation later"
END IF
```

**Activity:** Create a life timeline showing when to explore vs. exploit in different life stages.

---

# TERM 3: Sorting - Making Order

---

### Topic 1: Introduction to Sorting

**Objective:** Students will understand the importance and difficulty of sorting.

**Content:**
- The history of sorting (Census, IBM)
- Why sorting matters
- The agony of sorting (scale hurts)
- Insertion Sort and Bubble Sort

**Pseudocode Example:**
```
PROBLEM: Sort a stack of books alphabetically.

ALGORITHM: Insertion Sort

INPUT: List of books (unsorted)
OUTPUT: List of books (sorted)

FUNCTION insertionSort(books)
    SET sortedBooks = []
    
    FOR each book IN books
        // Find where to insert the book
        SET position = 0
        
        WHILE position < LENGTH(sortedBooks) AND 
              sortedBooks[position].title < book.title
            position = position + 1
        END WHILE
        
        // Insert at the correct position
        INSERT book at position in sortedBooks
    END FOR
    
    RETURN sortedBooks
END FUNCTION

// Example usage
books = ["Wallace", "Pynchon", "Austen", "Orwell", "Hemingway"]
sorted = insertionSort(books)
DISPLAY "Sorted books: " + sorted
// Output: Austen, Hemingway, Orwell, Pynchon, Wallace
```

**Activity:** Sort a stack of 10 books using Insertion Sort and count the comparisons.

---

### Topic 2: Big-O Notation and Complexity

**Objective:** Students will analyze algorithm efficiency using Big-O notation.

**Content:**
- What is Big-O notation?
- Constant time O(1)
- Linear time O(n)
- Quadratic time O(n²)
- Exponential and factorial time

**Pseudocode Example:**
```
PROBLEM: Compare different sorting algorithms by their time complexity.

ANALYSIS: Big-O Notation

ALGORITHM COMPARISON TABLE:

1. Constant Time (O(1)):
   - Getting first book on a shelf
   - No matter how many books, takes same time

2. Linear Time (O(n)):
   - Checking if a specific book is on a shelf
   - Need to check each book once

3. Quadratic Time (O(n²)):
   - Bubble Sort or Insertion Sort
   - For n books, need to compare n * n times

4. Linearithmic Time (O(n log n)):
   - Mergesort
   - For n books, need about n * log₂(n) comparisons

5. Exponential Time (O(2^n)):
   - Trying all possible subsets
   - Gets very slow very fast

6. Factorial Time (O(n!)):
   - Trying all possible orderings
   - Almost impossible for n > 20

FUNCTION estimateTime(n, complexity)
    IF complexity == "O(1)" THEN RETURN 1
    IF complexity == "O(n)" THEN RETURN n
    IF complexity == "O(n²)" THEN RETURN n * n
    IF complexity == "O(n log n)" THEN RETURN n * LOG2(n)
    IF complexity == "O(2^n)" THEN RETURN 2^n
    IF complexity == "O(n!)" THEN RETURN FACTORIAL(n)
END FUNCTION

// Compare for n = 100
DISPLAY "For n=100:"
DISPLAY "O(1): 1 operation"
DISPLAY "O(n): 100 operations"
DISPLAY "O(n²): 10,000 operations"
DISPLAY "O(n log n): ~664 operations"
DISPLAY "O(2^n): impossible"
```

**Activity:** Calculate Big-O for different algorithms and compare their efficiency.

---

### Topic 3: Mergesort - Divide and Conquer

**Objective:** Students will implement the Mergesort algorithm.

**Content:**
- The divide-and-conquer approach
- Merging sorted lists
- Linearithmic time O(n log n)
- Real-world applications

**Pseudocode Example:**
```
PROBLEM: Sort a list of books using Mergesort.

ALGORITHM: Mergesort (Divide and Conquer)

FUNCTION mergesort(books)
    // Base case: 0 or 1 book is already sorted
    IF LENGTH(books) <= 1 THEN
        RETURN books
    END IF
    
    // Divide: Split the list in half
    SET mid = LENGTH(books) / 2
    SET leftHalf = books[0 TO mid]
    SET rightHalf = books[mid TO END]
    
    // Conquer: Sort each half recursively
    SET sortedLeft = mergesort(leftHalf)
    SET sortedRight = mergesort(rightHalf)
    
    // Combine: Merge the two sorted halves
    RETURN merge(sortedLeft, sortedRight)
END FUNCTION

FUNCTION merge(left, right)
    SET result = []
    SET i = 0, j = 0
    
    WHILE i < LENGTH(left) AND j < LENGTH(right)
        IF left[i].title < right[j].title THEN
            result.APPEND(left[i])
            i = i + 1
        ELSE
            result.APPEND(right[j])
            j = j + 1
        END IF
    END WHILE
    
    // Add any remaining elements
    WHILE i < LENGTH(left)
        result.APPEND(left[i])
        i = i + 1
    END WHILE
    
    WHILE j < LENGTH(right)
        result.APPEND(right[j])
        j = j + 1
    END WHILE
    
    RETURN result
END FUNCTION
```

**Activity:** Simulate Mergesort with a deck of cards and count the number of comparisons.

---

### Topic 4: Bucket Sort and Sorting in Practice

**Objective:** Students will use Bucket Sort for practical sorting problems.

**Content:**
- What is Bucket Sort?
- When to use Bucket Sort
- Knowing the distribution
- Sorting in libraries

**Pseudocode Example:**
```
PROBLEM: Sort books by their library call numbers.

ALGORITHM: Bucket Sort (Library Sorting)

INPUT: List of books with call numbers
OUTPUT: Books sorted by call number

FUNCTION bucketSort(books, numBuckets)
    // Create empty buckets
    SET buckets = [] of size numBuckets
    
    // Distribute books into buckets based on call number
    FOR each book IN books
        // Determine which bucket this book goes to
        bucketIndex = GET_BUCKET_FOR_CALL_NUMBER(book.callNumber, numBuckets)
        buckets[bucketIndex].APPEND(book)
    END FOR
    
    // Sort each bucket individually
    SET sortedBooks = []
    FOR bucketIndex = 0 TO numBuckets-1
        // Use Insertion Sort for small buckets
        sortedBucket = insertionSort(buckets[bucketIndex])
        sortedBooks.APPEND_ALL(sortedBucket)
    END FOR
    
    RETURN sortedBooks
END FUNCTION

// Example: Library of Congress classification
// PS3000-PS9999: American Literature
// Each bucket represents a range of call numbers
```

**Activity:** Design a bucket sorting system for a library with 1000 books.

---

### Topic 5: Sorting in Society - Tournaments and Rankings

**Objective:** Students will understand sorting in social contexts.

**Content:**
- Sports tournaments as sorting
- Single Elimination vs. Round Robin
- The problem with silver medals
- Pecking orders in animal societies
- Race vs. fight

**Pseudocode Example:**
```
PROBLEM: Determine the best team in a tournament.

ALGORITHM: Single Elimination Tournament (Mergesort style)

INPUT: List of teams
OUTPUT: Tournament winner

FUNCTION singleElimination(teams)
    IF LENGTH(teams) == 1 THEN
        RETURN teams[0]  // Winner!
    END IF
    
    // Round: Pair up teams and play games
    SET winners = []
    
    FOR i = 0 TO LENGTH(teams)-2 STEP 2
        team1 = teams[i]
        team2 = teams[i+1]
        winner = PLAY_GAME(team1, team2)
        winners.APPEND(winner)
        DISPLAY team1.name + " vs " + team2.name + " -> " + winner.name + " wins"
    END FOR
    
    // If odd number, one team gets a bye
    IF LENGTH(teams) % 2 == 1 THEN
        winners.APPEND(teams[LENGTH(teams)-1])
        DISPLAY teams[LENGTH(teams)-1].name + " gets a bye"
    END IF
    
    // Recursively continue
    RETURN singleElimination(winners)
END FUNCTION

// Problem: Round Robin determines true rankings but takes many games
// Single Elimination: n-1 games (linear time)
// Round Robin: n(n-1)/2 games (quadratic time)
```

**Activity:** Design a tournament schedule for 8 teams and analyze the number of games needed.

---

# TERM 4: Caching and Scheduling

---

### Topic 1: The Memory Hierarchy and Caching

**Objective:** Students will understand caching and its applications to daily life.

**Content:**
- What is caching? (Storing frequently used items)
- The memory hierarchy (fast memory vs. slow memory)
- Temporal locality
- Cache misses

**Pseudocode Example:**
```
PROBLEM: Organize your desk for maximum efficiency.

ALGORITHM: Cache-Based Desk Organization

// Memory Hierarchy
// Level 1: Desk surface (fastest, smallest)
// Level 2: Desk drawer (medium speed, medium size)
// Level 3: File cabinet (slow, large)

FUNCTION organizeDesk(items)
    // Items used frequently go on the desk surface
    // Items used occasionally go in the drawer
    // Items used rarely go in the file cabinet
    
    FOR each item IN items
        usageCount = GET_USAGE_COUNT(item)
        
        IF usageCount > 10 PER_DAY THEN
            PLACE_ON_DESK(item)
        ELSE IF usageCount > 2 PER_DAY THEN
            PLACE_IN_DRAWER(item)
        ELSE
            PLACE_IN_CABINET(item)
        END IF
    END FOR
END FUNCTION

// Caching principle: Keep what you need close
// Book analogy: Library (slow) vs. Desk (fast)
```

**Activity:** Design a multi-level caching system for a library.

---

### Topic 2: Eviction Policies - LRU, FIFO, and Bélády's Algorithm

**Objective:** Students will apply cache eviction policies to manage limited space.

**Content:**
- What is cache eviction?
- Least Recently Used (LRU)
- First-In First-Out (FIFO)
- Random Eviction
- Bélády's optimal algorithm (clairvoyance)

**Pseudocode Example:**
```
PROBLEM: You have a small closet with space for only 10 items.
What do you keep and what do you throw away?

ALGORITHM: Least Recently Used (LRU) Eviction

INPUT: List of items used over time, cache size (10)
OUTPUT: Items kept in cache

FUNCTION lruEviction(itemSequence, cacheSize)
    SET cache = []  // Current items in closet
    
    FOR each item IN itemSequence
        IF item IN cache THEN
            // Item already in cache, move to front (recently used)
            REMOVE item from cache
            cache.PREPEND(item)
        ELSE
            // New item, need to make space
            IF LENGTH(cache) >= cacheSize THEN
                // Remove least recently used (last item)
                evicted = cache.REMOVE_LAST()
                DISPLAY "Removed: " + evicted
            END IF
            cache.PREPEND(item)
        END IF
    END FOR
    
    RETURN cache
END FUNCTION

// Compare with FIFO (First-In First-Out)
// LRU performs better because of temporal locality
```

**Activity:** Simulate LRU and FIFO with a sequence of page requests.

---

### Topic 3: The Noguchi Filing System - Self-Organizing Lists

**Objective:** Students will implement the Move-to-Front algorithm.

**Content:**
- The Noguchi Filing System
- Move-to-Front algorithm
- Self-organizing lists
- Optimality of Move-to-Front

**Pseudocode Example:**
```
PROBLEM: Organize files in a box so the most used are easiest to find.

ALGORITHM: Move-to-Front (Noguchi Filing System)

INPUT: Sequence of file requests
OUTPUT: Optimally ordered files

FUNCTION moveToFront(files, requests)
    // Files are in a list, most recent at position 0
    
    FOR each requestedFile IN requests
        // Search from front of list
        position = 0
        found = false
        
        WHILE position < LENGTH(files) AND NOT found
            IF files[position] == requestedFile THEN
                found = true
            ELSE
                position = position + 1
            END IF
        END WHILE
        
        IF found THEN
            // Move to front
            REMOVE file from position
            files.PREPEND(requestedFile)
        END IF
    END FOR
    
    RETURN files
END FUNCTION

// Explanation: Most recently used files are at the front
// This is optimal within a constant factor of clairvoyance
```

**Activity:** Simulate Move-to-Front with 10 files and 20 requests.

---

### Topic 4: Scheduling - Deadlines and Priorities

**Objective:** Students will schedule tasks optimally based on different metrics.

**Content:**
- Single-machine scheduling
- Earliest Due Date (minimize maximum lateness)
- Moore's Algorithm (minimize number of late tasks)
- Shortest Processing Time (minimize sum of completion times)

**Pseudocode Example:**
```
PROBLEM: You have several assignments with different due dates.
How to schedule them to minimize lateness?

ALGORITHM: Earliest Due Date (EDD)

INPUT: List of tasks (duration, dueDate)
OUTPUT: Schedule

FUNCTION earliestDueDate(tasks)
    // Sort tasks by due date (earliest first)
    SORT tasks BY dueDate
    
    // Process in that order
    currentTime = 0
    FOR each task IN tasks
        currentTime = currentTime + task.duration
        lateness = currentTime - task.dueDate
        
        IF lateness > 0 THEN
            DISPLAY "Task " + task.name + " late by " + lateness + " days"
        ELSE
            DISPLAY "Task " + task.name + " on time"
        END IF
    END FOR
    
    RETURN tasks
END FUNCTION

// Alternative: Shortest Processing Time
FUNCTION shortestProcessingTime(tasks)
    // Sort by duration (shortest first)
    SORT tasks BY duration
    // This minimizes the number of outstanding tasks
    RETURN tasks
END FUNCTION
```

**Activity:** Schedule 5 tasks using EDD, SPT, and Moore's Algorithm.

---

### Topic 5: Thrashing and Interrupt Coalescing

**Objective:** Students will avoid thrashing and manage context switching.

**Content:**
- Context switching costs
- Thrashing (doing metawork instead of real work)
- Interrupt coalescing
- Responsiveness vs. throughput

**Pseudocode Example:**
```
PROBLEM: You're overwhelmed with tasks and making no progress.

ALGORITHM: Thrashing Prevention

// Symptoms of thrashing:
// 1. Spending more time planning than doing
// 2. Constantly switching between tasks
// 3. Feeling busy but getting nothing done

FUNCTION preventThrashing(tasks)
    // Strategy: Batch similar tasks together
    SET batches = GROUP_BY_TYPE(tasks)
    
    FOR each batch IN batches
        // Process one type at a time
        PROCESS_BATCH(batch)
    END FOR
END FUNCTION

// Interrupt Coalescing: Wait and process all at once
FUNCTION interruptCoalescing(interrupts, interval)
    SET buffer = []
    SET timer = START_TIMER()
    
    WHILE timer < interval
        IF newInterrupt THEN
            buffer.APPEND(interrupt)
        END IF
    END WHILE
    
    // Process all at once
    PROCESS_ALL(buffer)
    buffer.CLEAR()
    timer = RESTART()
END FUNCTION

// Real-world application: Check email once per day instead of constantly
```

**Activity:** Design a daily schedule that minimizes context switching.

---

# TERM 5: Bayes's Rule and Overfitting

---

### Topic 1: Introduction to Bayes's Rule

**Objective:** Students will understand and apply Bayes's Rule to update beliefs.

**Content:**
- The Reverend Thomas Bayes
- Prior and posterior probabilities
- Reasoning forward from hypotheticals
- Laplace's Law (the rule of succession)

**Pseudocode Example:**
```
PROBLEM: You bought 1 raffle ticket and it won. What are the chances?

ALGORITHM: Laplace's Law of Succession

FUNCTION estimateProbability(successes, attempts)
    // If you know nothing, add 1 to successes and 2 to attempts
    estimated = (successes + 1) / (attempts + 2)
    RETURN estimated
END FUNCTION

// Examples:
// 1 win in 1 attempt -> (1+1)/(1+2) = 2/3 ≈ 66.7%
// 3 wins in 10 attempts -> (3+1)/(10+2) = 4/12 = 33.3%
// 0 wins in 10 attempts -> (0+1)/(10+2) = 1/12 ≈ 8.3%

// Application: Predicting a bus arrival
// If bus has been late 3 times in 10 days:
chanceLate = estimateProbability(3, 10)  // 33.3%
```

**Activity:** Use Laplace's Law to estimate the probability of winning a new game.

---

### Topic 2: Prior Probabilities and Belief Updating

**Objective:** Students will combine prior beliefs with new evidence.

**Content:**
- What are prior probabilities?
- Updating beliefs with Bayes's Rule
- The Copernican Principle
- Uninformative priors

**Pseudocode Example:**
```
PROBLEM: You have two coins - one fair, one two-headed.
You pick one at random and flip heads. Which coin is it?

ALGORITHM: Bayes's Rule - Two-Headed Coin Problem

INPUT: Prior probabilities, evidence
OUTPUT: Updated probabilities

FUNCTION bayesUpdate(priorFair, priorDouble, evidence)
    // Prior: 50% fair, 50% double-headed
    // Evidence: Flip came up heads
    
    // Likelihood: P(Heads | Fair) = 0.5, P(Heads | Double) = 1.0
    likelihoodFair = 0.5
    likelihoodDouble = 1.0
    
    // Unnormalized posteriors
    posteriorFair = priorFair * likelihoodFair
    posteriorDouble = priorDouble * likelihoodDouble
    
    // Normalize
    total = posteriorFair + posteriorDouble
    posteriorFair = posteriorFair / total
    posteriorDouble = posteriorDouble / total
    
    RETURN (posteriorFair, posteriorDouble)
END FUNCTION

// Example: If 9 fair coins and 1 double-headed coin
priorFair = 0.9
priorDouble = 0.1
(posteriorFair, posteriorDouble) = bayesUpdate(priorFair, priorDouble)

DISPLAY "After seeing heads:"
DISPLAY "P(Fair) = " + posteriorFair  // ≈ 0.818
DISPLAY "P(Double) = " + posteriorDouble  // ≈ 0.182
```

**Activity:** Update beliefs after multiple coin flips.

---

### Topic 3: The Copernican Principle - Predicting the Future

**Objective:** Students will make predictions with limited data using the Copernican Principle.

**Content:**
- The Copernican Principle
- Predicting how long things will last
- Multiplicative Rule
- When the Copernican Principle works

**Pseudocode Example:**
```
PROBLEM: You saw the Berlin Wall 8 years after it was built.
How much longer will it last?

ALGORITHM: Copernican Principle Prediction

FUNCTION copernicanPrediction(age)
    // Best guess: It will last as long as it has already
    future = age
    total = age + future
    RETURN future
END FUNCTION

// Examples:
// Berlin Wall at age 8 years -> predict 8 more years (actually lasted 20)
// USA at age 1776 -> predict until year ~3552
// Google at age 8 (1998) -> predict until ~2014 (close!)
// Relationship at 1 month -> predict 1 more month

// Application: Predicting lifespan of a business
age = GET_AGE_OF_BUSINESS()
future = copernicanPrediction(age)
DISPLAY "Business has lasted " + age + " years"
DISPLAY "Predicted to last about " + future + " more years"

// Caution: Works best when you know nothing about the phenomenon
```

**Activity:** Use the Copernican Principle to predict the lifespan of 5 companies.

---

### Topic 4: Overfitting - The Danger of Complexity

**Objective:** Students will understand overfitting and how to avoid it.

**Content:**
- What is overfitting? (Fitting noise, not signal)
- The case against complexity
- Occam's Razor
- Regularization
- Cross-Validation

**Pseudocode Example:**
```
PROBLEM: Predict marriage satisfaction over time.
Do you use a simple model or a complex one?

ALGORITHM: Overfitting Comparison

DATA: Marriage satisfaction survey (10 years of data)

// Simple Model (1 factor): Satisfaction = a * time + b
FUNCTION simpleModel(time, data)
    // Fit a straight line
    // Prediction: Satisfaction decreases steadily
    RETURN a * time + b
END FUNCTION

// Complex Model (9 factors): High-degree polynomial
FUNCTION complexModel(time, data)
    // Passes through every data point perfectly
    // Prediction: Wild oscillations after year 10
    RETURN a0 + a1*time + a2*time² + ... + a9*time⁹
END FUNCTION

// Cross-Validation: Test on data not used for training
FUNCTION crossValidate(model, data)
    // Split data into training (80%) and test (20%)
    trainSet = data[0 TO 80%]
    testSet = data[80% TO END]
    
    // Train model on training set
    // Test on test set
    trainError = train(model, trainSet)
    testError = test(model, testSet)
    
    IF testError > trainError * 1.5 THEN
        DISPLAY "Warning: Model is overfitting!"
    END IF
    
    RETURN testError
END FUNCTION

// Result: Simple model predicts better than complex model
```

**Activity:** Fit models to a dataset and identify overfitting.

---

### Topic 5: Early Stopping and Regularization

**Objective:** Students will apply techniques to avoid overfitting.

**Content:**
- Early Stopping (stop thinking too much)
- The Lasso (penalizing complexity)
- Cross-Validation in practice
- When to think less

**Pseudocode Example:**
```
PROBLEM: You're planning a project. How much time to spend planning?

ALGORITHM: Early Stopping for Decision-Making

FUNCTION earlyStopping(decisionComplexity, uncertainty)
    // If the decision is simple and certain, think deeply
    IF decisionComplexity == "LOW" AND uncertainty == "LOW" THEN
        SET thinkingTime = "LONG"  // Deep analysis
    END IF
    
    // If the decision is complex and uncertain, stop early
    IF decisionComplexity == "HIGH" AND uncertainty == "HIGH" THEN
        SET thinkingTime = "SHORT"  // Don't overthink
        DISPLAY "Early stopping recommended!"
        DISPLAY "More thinking would lead to overfitting"
    END IF
    
    // The Lasso: Penalize complexity
    FUNCTION lasso(factors, importance)
        // Only keep factors that are significantly important
        threshold = 0.1
        FOR each factor IN factors
            IF factor.importance < threshold THEN
                REMOVE factor  // Complexity penalty
            END IF
        END FOR
        RETURN factors
    END FUNCTION
    
    // Result: Simpler decisions are often better
    RETURN "Keep it simple!"
END FUNCTION

// Real-world application: Darwin's marriage decision
// He listed pros and cons, but stopped when he ran out of paper
// Early stopping prevented overthinking
```

**Activity:** Apply Early Stopping to a difficult personal decision.

---

# TERM 6: Relaxation, Randomness, and Game Theory

---

### Topic 1: Relaxation - Let It Slide

**Objective:** Students will use relaxation techniques to solve hard problems.

**Content:**
- What is relaxation? (Making problems easier)
- Constraint Relaxation
- Continuous Relaxation
- Lagrangian Relaxation
- The traveling salesman problem

**Pseudocode Example:**
```
PROBLEM: Plan the shortest route visiting 10 cities.

ALGORITHM: Constraint Relaxation - Minimum Spanning Tree

INPUT: Cities and distances between them
OUTPUT: Approximate shortest route

// Hard problem: Traveling Salesman (intractable)
FUNCTION travelingSalesman(cities)
    // Try all permutations - n! possibilities
    // For 10 cities: 3.6 million possibilities
    // For 20 cities: 2.4e18 (impossible)
    bestRoute = FIND_BEST_PERMUTATION(cities)
    RETURN bestRoute
END FUNCTION

// Relaxed problem: Minimum Spanning Tree
FUNCTION minimumSpanningTree(cities)
    // Connect all cities with minimum total distance
    // Allow revisiting and free backtracking
    // Easy to solve in O(n²) time
    tree = KRUSKAL(cities)
    RETURN tree
END FUNCTION

// Use relaxed solution as lower bound
relaxedDistance = minimumSpanningTree(cities)
realSolution = travelingSalesman(cities)

DISPLAY "Relaxed distance: " + relaxedDistance
DISPLAY "Real distance: " + realSolution
DISPLAY "Ratio: " + (realSolution / relaxedDistance)
// The ratio will be less than 2 for many problems
```

**Activity:** Find the minimum spanning tree for 5 cities.

---

### Topic 2: Randomness - When to Leave It to Chance

**Objective:** Students will use randomness to solve problems.

**Content:**
- The Monte Carlo Method (sampling)
- Randomized algorithms
- The Miller-Rabin primality test
- Simulated Annealing
- Random restarts (escaping local maxima)

**Pseudocode Example:**
```
PROBLEM: Determine if a large number is prime.

ALGORITHM: Miller-Rabin Primality Test (Randomized)

FUNCTION isProbablyPrime(n, iterations)
    // If n is even and not 2, not prime
    IF n % 2 == 0 THEN RETURN n == 2
    
    // Find d and s such that n-1 = d * 2^s
    d = n - 1
    s = 0
    WHILE d % 2 == 0
        d = d / 2
        s = s + 1
    END WHILE
    
    // Test with random witnesses
    FOR i = 1 TO iterations
        a = RANDOM_INTEGER(2, n-2)
        x = (a^d) MOD n
        
        IF x == 1 OR x == n-1 THEN
            CONTINUE  // Possibly prime, test more
        END IF
        
        FOR j = 1 TO s-1
            x = (x^2) MOD n
            IF x == n-1 THEN
                BREAK  // Possibly prime
            END IF
        END FOR
        
        IF x != n-1 THEN
            RETURN "Composite"  // Definitely not prime
        END IF
    END FOR
    
    RETURN "Probably prime"  // 1-4^(-iterations) chance of being wrong
END FUNCTION

// Example: 40 iterations gives 1 in 2^80 chance of error
// Used in real-world cryptography!
```

**Activity:** Test the primality of several numbers using random sampling.

---

### Topic 3: Simulated Annealing - Physics Meets Optimization

**Objective:** Students will apply simulated annealing to optimization problems.

**Content:**
- What is simulated annealing?
- Temperature and cooling schedules
- Escaping local maxima
- The Metropolis Algorithm

**Pseudocode Example:**
```
PROBLEM: Find the best layout for computer chips (circuit design).

ALGORITHM: Simulated Annealing

INPUT: Current solution, temperature schedule
OUTPUT: Improved solution

FUNCTION simulatedAnnealing(initialSolution, maxIterations)
    current = initialSolution
    best = current
    temperature = STARTING_TEMPERATURE
    
    FOR iteration = 1 TO maxIterations
        // Propose a random neighbor
        neighbor = RANDOM_NEIGHBOR(current)
        
        // Calculate energy (cost) of both solutions
        currentEnergy = EVALUATE(current)
        neighborEnergy = EVALUATE(neighbor)
        
        // Decide whether to accept the neighbor
        IF neighborEnergy < currentEnergy THEN
            // Always accept better solutions
            current = neighbor
            IF neighborEnergy < EVALUATE(best) THEN
                best = neighbor
            END IF
        ELSE
            // Sometimes accept worse solutions (probability depends on temperature)
            probability = EXP((currentEnergy - neighborEnergy) / temperature)
            IF RANDOM() < probability THEN
                current = neighbor  // Accept worse solution!
            END IF
        END IF
        
        // Cool down (reduce temperature)
        temperature = temperature * COOLING_RATE
    END FOR
    
    RETURN best
END FUNCTION

// Cooling schedule:
// Start hot: Accept many bad moves (explore)
// End cool: Accept only good moves (exploit)

// Real-world application: Chip layout at IBM
```

**Activity:** Simulate simulated annealing on a simple optimization problem.

---

### Topic 4: Networking - How We Connect

**Objective:** Students will understand networking concepts and protocols.

**Content:**
- Packet switching vs. circuit switching
- Acknowledgment (ACKs)
- Exponential Backoff
- Flow control (AIMD)
- Bufferbloat

**Pseudocode Example:**
```
PROBLEM: Two computers are trying to communicate over a shared network.

ALGORITHM: Exponential Backoff for Collision Avoidance

FUNCTION sendPacket(packet)
    maxAttempts = 10
    attempts = 0
    delay = 1  // Start with 1 millisecond
    
    WHILE attempts < maxAttempts
        IF channelIsClear() THEN
            TRANSMIT(packet)
            // Wait for acknowledgment
            IF waitForACK(timeout = 100ms) THEN
                RETURN "Success"
            END IF
        END IF
        
        // Transmission failed - back off
        attempts = attempts + 1
        
        // Choose random delay between 0 and 2^attempts - 1
        maxDelay = POWER(2, attempts) - 1
        delay = RANDOM_INTEGER(0, maxDelay) * BASE_DELAY
        
        DISPLAY "Backing off for " + delay + "ms"
        WAIT(delay)
    END WHILE
    
    RETURN "Failed after " + maxAttempts + " attempts"
END FUNCTION

// AIMD: Additive Increase, Multiplicative Decrease
FUNCTION aimdFlowControl()
    rate = 100  // Packets per second
    
    WHILE transmitting
        // Additive Increase
        rate = rate + 1
        
        IF packetLost() THEN
            // Multiplicative Decrease
            rate = rate / 2
            DISPLAY "Packet loss! Rate cut to " + rate
        END IF
    END WHILE
    
    RETURN rate
END FUNCTION
```

**Activity:** Simulate network communication with Exponential Backoff.

---

### Topic 5: Game Theory - The Minds of Others

**Objective:** Students will analyze strategic interactions using game theory.

**Content:**
- The Prisoner's Dilemma
- Nash equilibrium
- The Tragedy of the Commons
- Mechanism design
- Information cascades

**Pseudocode Example:**
```
PROBLEM: Two prisoners deciding whether to cooperate or defect.

ALGORITHM: Prisoner's Dilemma Decision

FUNCTION prisonerDilemma(partnerStrategy)
    // Options: Cooperate (C) or Defect (D)
    // Payoff matrix:
    //         Partner C  Partner D
    // Player C  (3,3)    (0,5)
    // Player D  (5,0)    (1,1)
    
    // If you don't know partner's strategy, Defect is dominant
    IF partnerStrategy == "UNKNOWN" THEN
        RETURN "DEFECT"  // Always better, no matter what partner does
    END IF
    
    // If you know partner will cooperate
    IF partnerStrategy == "COOPERATE" THEN
        // Defect gives 5, Cooperate gives 3
        RETURN "DEFECT"  // Still better to defect
    END IF
    
    // If you know partner will defect
    IF partnerStrategy == "DEFECT" THEN
        // Defect gives 1, Cooperate gives 0
        RETURN "DEFECT"  // Still better to defect
    END IF
    
    RETURN "DEFECT"  // Defection is the dominant strategy
END FUNCTION

// PROBLEM: Tragedy of the Commons
FUNCTION tragedyOfCommons(villagers, resource)
    // Each villager benefits from using the resource
    // Cost of overuse is shared by all
    
    FOR each villager IN villagers
        // Individual incentive: Use as much as possible
        usage = villager.getResource(resource)
        totalUsage = totalUsage + usage
    END FOR
    
    IF totalUsage > resource.capacity THEN
        DISPLAY "Resource exhausted! Everyone loses."
        RETURN "Collapse"
    ELSE
        DISPLAY "Resource sustainable."
        RETURN "Stable"
    END IF
END FUNCTION

// Solution: Mechanism design - change the rules
// Example: Make using more resource more expensive
```

**Activity:** Simulate the Prisoner's Dilemma with different strategies.

---

# TERM 7: Advanced Applications

---

### Topic 1: Putting It All Together - Optimal Stopping + Explore/Exploit

**Objective:** Students will combine optimal stopping with explore/exploit.

**Content:**
- When to explore vs. when to stop
- The interval determines the strategy
- Real-world integration

**Pseudocode Example:**
```
PROBLEM: You're moving to a new city for 12 months.
How should you choose restaurants?

ALGORITHM: Integrated Decision Strategy

INPUT: Duration of stay (12 months)
OUTPUT: Strategy for restaurant selection

// Step 1: Use optimal stopping for the exploration phase
SET lookPhase = 0.37 * duration  // 4.4 months
SET bestFound = null

// Step 2: During exploration, use explore/exploit for each restaurant
SET exploreRate = 0.3  // Try new places 30% of the time

FOR month = 1 TO duration
    IF month <= lookPhase THEN
        // Exploration phase: Try everything
        restaurant = RANDOM_NEW_RESTAURANT()
        DISPLAY "Month " + month + ": Exploring - " + restaurant.name
        UPDATE bestFound(restaurant)
    ELSE
        // Exploitation phase: Use explore/exploit
        IF RANDOM() < exploreRate THEN
            restaurant = RANDOM_NEW_RESTAURANT()
            DISPLAY "Month " + month + ": Exploring - " + restaurant.name
        ELSE
            restaurant = bestFound
            DISPLAY "Month " + month + ": Exploiting - " + restaurant.name
        END IF
    END IF
END FOR

// As end approaches, increase exploitation
// In last month, always go to best found
```

**Activity:** Design an integrated strategy for a 6-month stay in a new city.

---

### Topic 2: Sorting + Caching - The Search-Sort Tradeoff

**Objective:** Students will balance sorting and caching decisions.

**Content:**
- Search vs. sort tradeoff
- When to sort vs. when to cache
- Memory organization

**Pseudocode Example:**
```
PROBLEM: Organize a collection of books or files.

ALGORITHM: Search-Sort Tradeoff Decision

INPUT: Collection of items, expected search frequency
OUTPUT: Organization strategy

// If you'll search many times: Sort and use caches
FUNCTION organizeForFrequentSearch(items)
    // Sort items (takes time upfront)
    sortedItems = MERGESORT(items)
    
    // Create cache for most frequently accessed items
    cache = LRU_CACHE(sortedItems, size = 10%)
    
    RETURN (sortedItems, cache)
END FUNCTION

// If you'll search rarely: Don't sort, just use caches
FUNCTION organizeForRareSearch(items)
    // Don't sort - leave as is
    // Just keep a cache of recently used items
    cache = LRU_CACHE(items, size = 20%)
    
    RETURN (items, cache)
END FUNCTION

// Decision function
FUNCTION decideStrategy(items, expectedSearches, searchCost)
    // Calculate cost of sorting
    sortCost = n * LOG(n)  // Time to sort
    
    // Calculate benefit of sorting for each search
    searchCostSorted = LOG(n)  // Binary search
    searchCostUnsorted = n / 2  // Linear search average
    
    benefitPerSearch = searchCostUnsorted - searchCostSorted
    totalBenefit = expectedSearches * benefitPerSearch
    
    IF totalBenefit > sortCost THEN
        RETURN "Sort and Cache"
    ELSE
        RETURN "Cache Only (Don't Sort)"
    END IF
END FUNCTION
```

**Activity:** Design an organization system for your email inbox.

---

### Topic 3: Scheduling + Overfitting - Time Management

**Objective:** Students will manage time with overfitting awareness.

**Content:**
- Scheduling with uncertainty
- Early stopping in planning
- The cost of over-optimization

**Pseudocode Example:**
```
PROBLEM: Plan a project timeline without over-optimizing.

ALGORITHM: Adaptive Scheduling with Early Stopping

INPUT: Project tasks with estimated durations
OUTPUT: Project schedule

// Start with simple schedule (Shortest Processing Time)
FUNCTION createInitialSchedule(tasks)
    SORT tasks BY duration
    RETURN tasks
END FUNCTION

// Don't over-optimize - use early stopping
FUNCTION optimizeSchedule(tasks, timeBudget)
    bestSchedule = createInitialSchedule(tasks)
    
    // Try a few improvements, but stop early
    FOR attempt = 1 TO 10  // Limited attempts
        proposedSchedule = ADD_RANDOM_TWEAK(bestSchedule)
        IF proposedSchedule.isBetter() THEN
            bestSchedule = proposedSchedule
        END IF
        // Stop after 10 attempts (Early Stopping)
    END FOR
    
    RETURN bestSchedule
END FUNCTION

// Avoid thrashing: Batch similar tasks
FUNCTION batchSchedule(tasks)
    // Group by type (emails, coding, meetings)
    batches = GROUP_BY_TYPE(tasks)
    
    // Schedule batches, not individual tasks
    FOR each batch IN batches
        SCHEDULE_BATCH(batch)
    END FOR
END FUNCTION
```

**Activity:** Create a weekly schedule that minimizes context switching.

---

### Topic 4: Bayes + Overfitting - Making Predictions

**Objective:** Students will make robust predictions using Bayesian methods.

**Content:**
- Prediction with uncertainty
- Regularization in prediction
- Cross-validation for predictions

**Pseudocode Example:**
```
PROBLEM: Predict how long a relationship will last.

ALGORITHM: Bayesian Prediction with Regularization

FUNCTION predictRelationshipDuration(currentMonths, priorDistribution)
    // Prior: Based on general relationship data
    IF priorDistribution == "POWER_LAW" THEN
        // Multiplicative Rule: Relationships follow power law
        predictedTotal = currentMonths * 2
        predictedFuture = predictedTotal - currentMonths
    ELSE IF priorDistribution == "NORMAL" THEN
        // Average Rule: Relationships follow normal distribution
        averageDuration = 12  // months
        predictedTotal = averageDuration
        predictedFuture = predictedTotal - currentMonths
    ELSE
        // Uninformative: Copernican Principle
        predictedFuture = currentMonths
    END IF
    
    // Regularization: Don't overfit to one data point
    // If currentMonths is extreme, pull toward the mean
    IF currentMonths > 100 THEN
        predictedFuture = predictedFuture * 0.8  // Be less extreme
    END IF
    
    RETURN predictedFuture
END FUNCTION

// Example: Relationship is 1 month old
// With power law: predict 1 more month
// With normal: predict ~11 more months
// Decision: Which prior is appropriate?
```

**Activity:** Predict how long 5 different phenomena will last using appropriate priors.

---

### Topic 5: Randomness + Game Theory - Strategic Uncertainty

**Objective:** Students will use randomness in strategic situations.

**Content:**
- Mixed strategies
- Randomization in games
- Information cascades
- The Vickrey auction

**Pseudocode Example:**
```
PROBLEM: How to bid in an auction when others are strategic.

ALGORITHM: Vickrey Auction - Honesty is the Best Policy

FUNCTION vickreyAuction(bids)
    // Each bidder submits a sealed bid
    // Highest bidder wins, pays the second-highest price
    
    highestBid = MAX(bids)
    secondHighest = SECOND_MAX(bids)
    winnerIndex = INDEX_OF(highestBid)
    
    DISPLAY "Winner: Bidder " + winnerIndex
    DISPLAY "Pay: " + secondHighest  // Not their own bid!
    
    // Why honesty is best:
    // 1. Bidding less than true value: Might lose if could have won
    // 2. Bidding more than true value: Might pay more than item is worth
    // 3. Bidding true value: Always optimal (dominant strategy)
    
    RETURN (winnerIndex, secondHighest)
END FUNCTION

// Mixed Strategy: Rock-Paper-Scissors
FUNCTION mixedStrategy(gameHistory)
    // In equilibrium, play each option 1/3 of the time
    // If opponent predicts your move, you lose
    
    // Don't be predictable - use randomness
    IF gameHistory.showedPattern() THEN
        // Adapt: Make your strategy harder to predict
        randomize MORE
    END IF
    
    choice = RANDOM_CHOICE(["Rock", "Paper", "Scissors"])
    RETURN choice
END FUNCTION
```

**Activity:** Simulate a Vickrey auction with 4 bidders.

---

## COMPLETE CURRICULUM SUMMARY

| Term | Chapters | Key Topics |
|------|----------|------------|
| **Term 1** | Chapter 1 | Optimal Stopping, 37% Rule, Full Information, Selling/Parking |
| **Term 2** | Chapter 2 | Explore/Exploit, Gittins Index, UCB, A/B Testing, Clinical Trials |
| **Term 3** | Chapter 3 | Sorting, Big-O, Mergesort, Bucket Sort, Tournaments |
| **Term 4** | Chapters 4-5 | Caching, LRU, Move-to-Front, Scheduling, Thrashing |
| **Term 5** | Chapters 6-7 | Bayes's Rule, Copernican Principle, Overfitting, Early Stopping |
| **Term 6** | Chapters 8-9 | Relaxation, Randomness, Simulated Annealing, Networking |
| **Term 7** | Chapters 10-11 | Game Theory, Prisoner's Dilemma, Auctions, Information Cascades |
| **Term 8** | All Chapters | Integration and Capstone Projects |

---

## KEY ALGORITHMS CHEAT SHEET

| Algorithm | Chapter | Use Case | Key Insight |
|-----------|---------|----------|-------------|
| Look-Then-Leap (37%) | 1 | Finding the best option | Stop after 37% |
| Win-Stay, Lose-Shift | 2 | Simple explore/exploit | Stick with winners |
| Gittins Index | 2 | Optimizing explore/exploit | Value of the unknown |
| Upper Confidence Bound | 2 | Optimistic exploration | Optimism in uncertainty |
| Insertion Sort | 3 | Sorting small sets | One item at a time |
| Mergesort | 3 | Sorting large sets | Divide and conquer |
| Bucket Sort | 3 | Practical sorting | Know the distribution |
| LRU (Least Recently Used) | 4 | Cache eviction | Keep recent items |
| Move-to-Front | 4 | Self-organizing lists | Most recent first |
| Earliest Due Date | 5 | Scheduling deadlines | Do due tasks first |
| Laplace's Law | 6 | Estimating probabilities | (successes+1)/(attempts+2) |
| Copernican Principle | 6 | Predicting duration | Future = past duration |
| Cross-Validation | 7 | Detecting overfitting | Test on unseen data |
| Early Stopping | 7 | Avoiding overfitting | Stop thinking early |
| Simulated Annealing | 9 | Optimization | Accept bad moves |
| Exponential Backoff | 10 | Networking | Wait longer each failure |
| AIMD | 10 | Flow control | Add slowly, drop quickly |
| Vickrey Auction | 11 | Strategy-proof auctions | Pay second-highest bid |
