# Bash Commands Review: pwd, ls, cat, touch, mkdir, mv, cp

## Overview
This `README.md` reviews seven essential Bash commands: **pwd**, **ls**, **cat**, **touch**, **mkdir**, **mv**, and **cp**. These are like magic spells you type in the **terminal** to control your computer. Bash (Bourne Again Shell) is a tool that lets you give commands to manage files, navigate folders, and more. This guide is written to be clear for beginners (like explaining to a 10-year-old) while providing practical details for learners revisiting these commands (e.g., from Week 2.2).

## What is Bash?
Bash is a **shell**—a way to talk to your computer by typing commands in a terminal. Instead of clicking with a mouse, you type short instructions to do things like list files, create folders, or move stuff around. It’s fast, powerful, and makes you feel like a computer wizard!

- **Terminal:** The app where you type Bash commands (e.g., Terminal on macOS/Linux or Git Bash on Windows).
- **Why use these commands?** They’re the building blocks for navigating and managing files, and they’re used everywhere in programming, system administration, and automation.

## The Commands
Let’s dive into each command, what it does, how to use it, and some fun examples. Each command is like a tool in your Bash toolbox!

### 1. **pwd** (Print Working Directory)
- **What it does:** Tells you where you are in your computer’s file system, like asking, “Which room am I in?”
- **How it works:** Prints the full path of your current directory.
- **Syntax:** `pwd`
- **Example:**
  ```bash
  pwd
  ```
  Output: `/home/user/documents`
  This means you’re in the “documents” folder inside “user” inside “home”.
- **Why it’s useful:** Helps you avoid getting lost when navigating folders.
- **Try it:** Open a terminal and type `pwd`. Write down the path it shows.

### 2. **ls** (List Directory Contents)
- **What it does:** Shows all files and folders in your current directory, like peeking inside a toy box.
- **How it works:** Lists names of files and folders where you are.
- **Syntax:** `ls [options]`
- **Examples:**
  ```bash
  ls
  ```
  Output: `file1.txt photos videos`
  ```bash
  ls -l
  ```
  Output: Detailed list with permissions, size, and dates (e.g., `rw-r--r--  1 user  1024 May 2 2025 file1.txt`).
  ```bash
  ls -a
  ```
  Output: Includes hidden files (e.g., `.bashrc .hidden_file`).
- **Options:**
  - `-l`: Long format (details).
  - `-a`: Show all, including hidden files.
  - `-lh`: Long format with human-readable sizes (e.g., 1K instead of 1024 bytes).
- **Why it’s useful:** Lets you see what’s around you before making changes.
- **Try it:** Run `ls`, then `ls -la`, and compare the outputs.

### 3. **cat** (Concatenate and Display)
- **What it does:** Shows the contents of a file, like opening a book to read it. It can also combine files.
- **How it works:** Prints the file’s text to the terminal.
- **Syntax:** `cat [file]`
- **Example:**
  ```bash
  cat notes.txt
  ```
  Output: (If notes.txt contains “Hello, Bash!”) `Hello, Bash!`
- **More uses:**
  - Combine files: `cat file1.txt file2.txt > combined.txt` creates a new file with both contents.
  - View multiple files: `cat file1.txt file2.txt` shows both one after another.
- **Why it’s useful:** Great for quickly reading text files without opening an editor.
- **Try it:** Create a file with `echo "Test" > test.txt`, then run `cat test.txt` to see it.

### 4. **touch** (Create or Update File)
- **What it does:** Creates a new, empty file or updates the timestamp of an existing one, like making a blank sheet of paper.
- **How it works:** If the file doesn’t exist, it’s created. If it does, its “last modified” time is updated.
- **Syntax:** `touch [file]`
- **Example:**
  ```bash
  touch new_file.txt
  ```
  Creates an empty file called “new_file.txt”. Check with `ls`.
- **More uses:**
  - Create multiple files: `touch file1.txt file2.txt`.
  - Update timestamp: `touch old_file.txt` makes it seem recently modified.
- **Why it’s useful:** Handy for creating placeholder files or testing scripts.
- **Try it:** Run `touch example.txt`, then `ls` to confirm it’s there.

### 5. **mkdir** (Make Directory)
- **What it does:** Creates a new folder, like building a new toy box.
- **How it works:** Makes a directory in your current location.
- **Syntax:** `mkdir [directory]`
- **Example:**
  ```bash
  mkdir projects
  ```
  Creates a folder called “projects”. Check with `ls`.
- **Options:**
  - `-p`: Creates parent directories if needed (e.g., `mkdir -p parent/child` makes both).
- **Why it’s useful:** Organizes your files by grouping them in folders.
- **Try it:** Run `mkdir test_folder`, then `cd test_folder` and `pwd` to explore.

### 6. **mv** (Move or Rename)
- **What it does:** Moves files/folders to a new location or renames them, like picking up a toy and putting it somewhere else.
- **How it works:** Changes a file’s location or name.
- **Syntax:** `mv [source] [destination]`
- **Examples:**
  - Move: `mv file.txt documents/` moves “file.txt” to the “documents” folder.
  - Rename: `mv old_name.txt new_name.txt` renames the file.
- **Options:**
  - `-i`: Prompts before overwriting existing files.
- **Why it’s useful:** Great for organizing or correcting file names.
- **Try it:** Create `touch temp.txt`, then run `mv temp.txt new_temp.txt`, and check with `ls`.

### 7. **cp** (Copy)
- **What it does:** Makes a copy of a file or folder, like photocopying a drawing.
- **How it works:** Duplicates the source to a new location or name.
- **Syntax:** `cp [source] [destination]`
- **Examples:**
  - Copy file: `cp note.txt note_backup.txt` creates a copy.
  - Copy folder: `cp -r folder new_folder` copies a folder and its contents.
- **Options:**
  - `-r`: Recursive, for copying directories.
  - `-i`: Prompts before overwriting.
- **Why it’s useful:** Lets you back up or duplicate files safely.
- **Try it:** Create `touch original.txt`, then run `cp original.txt copy.txt`, and check with `ls`.

## Practical Workflow
Let’s combine these commands in a real-world example, like organizing a school project:
1. Check where you are:
   ```bash
   pwd
   ```
   Output: `/home/user`
2. List files:
   ```bash
   ls
   ```
   Output: `documents photos`
3. Create a project folder:
   ```bash
   mkdir school_project
   ```
4. Move into it:
   ```bash
   cd school_project
   ```
5. Create a file:
   ```bash
   touch essay.txt