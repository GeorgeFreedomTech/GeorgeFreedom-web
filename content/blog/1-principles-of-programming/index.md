+++
title = "Principles of Programming"
description = "The core concepts every programmer needs, from variables and data types to loops and functions, explained with Python examples."
date = 2024-03-18
type = "article"
path = "principles-of-programming"

[extra]
image = "images/principles-of-programming.jpg"

[taxonomies]
tags = ["python", "programming-basics"]
+++

*Note: all code snippets are written in Python*

No matter what language you choose, the basics are the same everywhere, and there’s no way you can chart new territories or reach distant destinations (in coding) without mastering the fundamental **navigation skills** first. Even if you somehow shortcut your way, you’ll likely get lost later anyway, and finding your way back will be tough. So let’s take a look at these essential tools and concepts for your coding **expedition**.

## 1. Variables
What is a variable? It might sound technical, but imagine you’re **mapping a new land**. A variable is like placing a marker on your map for a newly discovered landmark, resource, or location. By **giving it a name**, you bring that concept into your documented world (your program). From that moment on, this named discovery exists, and you can refer to it and work with it. It’s like being an explorer charting the unknown. In computer language, you mark your discoveries like this:

```python
destination = "Lost City of Pythos"
current_location = "Base Camp Delta"
distance_km = 15.5
has_map = True
```

And from now on, your expedition plan includes the destination "Lost City of Pythos", starting from current_location "Base Camp Delta", with a distance_km of 15.5 km to the next waypoint, and you confirmed you have the map (has_map is True).

Whenever you want to work with this information, you use its name (e.g., "destination" or "distance_km") and decide what happens next. You might want to **check your log** (print it) to see the current status:

```python
print(current_location)
```

Result:
```text
Base Camp Delta
```

Or you might update your progress (change the variable’s value) as you travel:

```python
current_location = "Jaguar Temple Ruins"
distance_km = 0 # Arrived at waypoint

print(current_location)
print(distance_km)
```

Result:
```text
Jaguar Temple Ruins
0
```

Your expedition progresses! Storing and updating information using variables is key to tracking your journey.

## 2. Data types: The Right Gear for the Terrain
This one is quite intuitive. You know that a **compass** is different from a **rope**, or using programming language, **numbers** (integers/floats) are not **text** (strings). There are actions you can perform with numbers (calculations) that don’t make sense for text, and vice-versa. You wouldn’t try to measure distance with your journal or use a climbing rope to navigate – *it’s about using the right type of gear (data type) for the specific task or terrain*.

```python
expedition_log_entry = "Day 5: Crossed the Serpent River." # This is text (string)
days_since_start = 5 # This is a whole number (integer)
```

Here we have "expedition_log_entry" as text and "days_since_start" as a number. We can perform text operations on the log entry (like searching for words) and numerical operations on the number of days (like calculating supplies needed), but we can’t directly perform mathematical calculations on the text entry itself. It makes sense, right?

## 3. Conditions: Choosing Your Path
Conditions are essential for navigation. They allow your program to **make decisions based on the situation**, like choosing a path at a **crossroads** based on signs, checking the weather before leaving camp, or verifying if you have enough supplies. You tell your program: if something is true, do this; otherwise, do that.

```python
weather_forecast = "Clear Skies"
river_level = "Low"

if weather_forecast == "Clear Skies" and river_level == "Low":
    print("Conditions optimal. Proceed with river crossing.")
elif weather_forecast == "Rain":
    print("Rain predicted. Set up camp and wait.")
else:
    print("Assess situation carefully before proceeding.")
```

Result:
```text
Conditions optimal. Proceed with river crossing.
```

This code checks the conditions. Only if both the weather is clear AND the river level is low does the program recommend crossing. If it rains, it suggests waiting. Otherwise, it advises caution. Conditions allow your program to react intelligently to its environment.

## 4. Lists (and other collections): Your Expedition Inventory
A list is like your **explorer’s backpack, inventory sheet, or a logbook** – a way to store multiple items (discoveries, gear, waypoints) together in an **organized sequence**. This makes it easy to carry your findings or supplies around (in your code) and simple to find a specific item when you need it, especially if you remember its position (or index).

```python
explorer_pack = ["compass", "map", "water bottle", "rations", "torch"]

print("Checking item no. 2:", explorer_pack[1]) # Index 1 is the second item
```

Result:
```text
Checking item no. 2: map
```

Here, you need the map from your pack. Knowing it’s the second item (at index [1], because counting starts from 0), you access it directly.

## 5. Loops: Traversing the Path or Searching an Area
Loops are essential when you need to **repeat an action** or series of steps. Imagine trekking along a planned route segment by segment ("for" loop) or systematically searching an area until you find what you’re looking for ("while" loop). Instead of writing the same instruction over and over, you efficiently define the repetition within a loop.

Let’s use a "for" loop for known stages of a journey:

```python
route_segments_to_cover = 4
print("Starting today's trek:")

for segment_number in range(route_segments_to_cover):
    print(f" Navigating segment {segment_number + 1}...")
    # Code to handle navigation for one segment would go here

print("Reached today's destination point!")
```

Result:
```text
Starting today's trek: 
Navigating segment 1... 
Navigating segment 2... 
Navigating segment 3... 
Navigating segment 4... 
Reached today's destination point!
```

The "for" loop automatically handles repeating the navigation step for the specified number of segments. Now, a "while" loop for searching until a condition changes:

```python
area_surveyed_percent = 0
target_artifact_found = False # We haven't found it yet

print("Surveying the excavation site...")

while area_surveyed_percent < 100 and not target_artifact_found:
    print(f" Surveying sector… {area_surveyed_percent}% complete.")
    area_surveyed_percent += 20 # Survey another 20%
    # In a real scenario, code here would check if the artifact was found in this sector
    # For this example, let’s pretend we find it at 60%
if area_surveyed_percent == 60:
    target_artifact_found = True
    print(">>> Artifact Found! <<<")
if target_artifact_found:
    print("Survey successful!")
else:
    print("Area fully surveyed, artifact not found.")
```

Result:
```text
Surveying the excavation site... 
Surveying sector... 0% complete. 
Surveying sector... 20% complete. 
Surveying sector... 40% complete. 
>>> Artifact Found! <<< 
Survey successful!
```

The "while" loop continued as long as the whole area wasn’t surveyed AND the artifact wasn’t found. Once target_artifact_found became True, the loop stopped on the next check.

## 6. Functions: Your Standard Procedures and Reusable Tools
Remember loops and efficiency? Functions elevate this. Imagine you have a **standard procedur**e** you perform often during your expedition – like **setting up camp securely** each night, or **calculating the optimal route** between two points using specific map data and calculations. It involves multiple steps. Repeating these manually each time is tedious and prone to errors.

Instead, you define these steps once inside a "function", like creating a detailed procedure checklist or designing a reusable navigation tool. Then, whenever you need to perform that entire procedure, you simply call the function’s name.

```python
def setup_night_camp(location_name, security_level):
"""Performs standard steps to set up camp."""
    print(f"\nSetting up camp at {location_name} (Security: {security_level}):")
    print(" - Clearing area...")
    print(" - Pitching tent...")
    if security_level > 1:
        print(" - Setting up perimeter alert...")
    print(f"Camp at {location_name} is ready.")

# Now, use the function when needed:
setup_night_camp("Whispering Falls", security_level=2)
setup_night_camp("Eagle Peak", security_level=1)
```

Result:
```text
Setting up camp at Whispering Falls (Security: 2): 
- Clearing area... 
- Pitching tent... 
- Setting up perimeter alert... 
Camp at Whispering Falls is ready.
Setting up camp at Eagle Peak (Security: 1): 
- Clearing area... 
- Pitching tent... 
Camp at Eagle Peak is ready.
```

By calling "setup_night_camp()", you execute all the defined steps efficiently and consistently. That’s the practical magic of functions!

 
Often, other explorers or cartographers have already created incredibly useful **maps, guides, or specialized toolkits (functions and data)** for common tasks. It makes sense to use these **libraries** rather than recreating everything from scratch (like charting the stars yourself if an astronomical almanac exists). 

Using a library is like consulting an expert atlas or borrowing a specialized piece of equipment from a shared resource pool. You just need to **import the library** into your project and learn how to use its tools (usually with the help of documentation).

```python
# Example: Using Python's built-in 'datetime' library for logging
import datetime # Import the library

log_time = datetime.datetime.now() # Use a tool from the library
print(f”Log entry timestamp: {log_time}”)

# Example: Using a hypothetical "get_web_data" library to get external data (like weather)
import get_web_data # You would import it first

weather_api_url = "some-weather-service.com/api?location=BaseCamp"
response = get_web_data.get(weather_api_url) # Use a function from the library

print("Weather data fetched.") #(Simplified example)
```

Result:
```text
Log entry timestamp: 2025-04-23 17:XX:XX.XXXXXX #(Time will vary) 
Weather data fetched
```

By using "import", you leverage the work of others and gain powerful capabilities quickly.

—

*p.s. This post is not meant to teach programming exhaustively (even though the code works in Python), it’s meant to show the core principles and offer a general overview of the fundamental concepts in this coding adventure.*

*I hope this guide helps you embark on your own coding expedition!*

➡️Get inspired:

[Python Foundations](https://github.com/GeorgeFreedomTech/Python-Foundations-Course)

[Python Intermediate](https://github.com/GeorgeFreedomTech/Python-Intermediate-Course)

[Python Advanced](https://github.com/GeorgeFreedomTech/Python-Advanced-Course)
