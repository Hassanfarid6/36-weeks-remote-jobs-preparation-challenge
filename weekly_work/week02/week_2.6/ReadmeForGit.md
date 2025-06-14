# Week 2.6: What is Git & Version Control?

## Overview
This guide introduces **Git** and **Version Control**, which help you keep track of changes to your code. Think of version control as a magical notebook that saves every version of your project, so you can go back if you make a mistake. Git is the tool we use to do this. This is part of Week 2.6, building on your JavaScript skills.

## What is Version Control?
**Version control** is like a time machine for your code. It saves every change you make, like adding a new feature or fixing a bug, so you can:
- Go back to an older version if something breaks.
- See who changed what and when.
- Work with friends without messing up each other’s code.

Imagine you’re drawing a picture. Version control saves every step (sketch, colors, details), so you can undo mistakes or show your work to others.

## What is Git?
**Git** is a super popular version control tool. It’s like a librarian who organizes all your project’s changes. Git saves your code in a **repository** (a folder with a history of changes) and lets you:
- Save snapshots of your work (called **commits**).
- Create **branches** to try new ideas without breaking the main project.
- Share your code with others (e.g., on GitHub).

## Why Use Git & Version Control?
- **Fix mistakes**: Go back if you break something.
- **Teamwork**: Work with friends without confusion.
- **Track changes**: Know what changed and why.
- **Backup**: Your code is saved safely.

## Prerequisites
- A computer with a terminal (e.g., Terminal on macOS/Linux, Command Prompt/PowerShell on Windows).
- Basic JavaScript knowledge (from Week 2.6, e.g., arrays, functions).
- Git installed (check with `git --version`). If not installed:
  - Download from [git-scm.com](https://git-scm.com/downloads).
  - Install and verify: `git --version` (e.g., `git version 2.39.2`).

## Getting Started with Git
Let’s set up a simple project and use Git to track changes!

### Step 1: Set Up a Project
1. Create a folder:
   ```bash
   mkdir my-project
   cd my-project
   ```
2. Create a file `hello.js`:
   ```javascript
   console.log("Hello, Git!");
   ```

### Step 2: Initialize Git
1. Make the folder a Git repository:
   ```bash
   git init
   ```
   This creates a hidden `.git` folder to store your project’s history.

### Step 3: Track and Save Changes
1. Tell Git to track `hello.js`:
   ```bash
   git add hello.js
   ```
   `git add` prepares files for saving.
2. Save the changes (commit):
   ```bash
   git commit -m "Add hello.js with greeting"
   ```
   `-m "message"` describes what you changed. Commits are like snapshots.

### Step 4: Make and Track More Changes
1. Edit `hello.js`:
   ```javascript
   console.log("Hello, Git!");
   console.log("Learning version control!");
   ```
2. Check what changed:
   ```bash
   git status
   ```
   Shows `hello.js` has changes.
3. Add and commit again:
   ```bash
   git add hello.js
   git commit -m "Add second greeting"
   ```

### Step 5: View History
1. See all commits:
   ```bash
   git log
   ```
   Shows a list of commits with messages, dates, and IDs.

## Key Git Commands
- `git init`: Start a new Git repository.
- `git add <file>`: Track a file.
- `git commit -m "message"`: Save changes with a message.
- `git status`: Check what’s changed or ready to commit.
- `git log`: View commit history.

## Example Workflow
Imagine you’re coding a game:
1. Write code in `game.js` and save it: `git add game.js`, `git commit -m "Start game"`.
2. Add a new feature (e.g., score): Edit `game.js`, then `git add game.js`, `git commit -m "Add score"`.
3. Make a mistake? Go back with `git checkout <commit-id>` or fix it and commit again.

## Tips
- Commit often: Save small changes with clear messages (e.g., “Fix button color”).
- Use `git status` a lot: It shows what’s going on.
- Write good commit messages: Explain what you did.
- Install Git properly: Ensure `git --version` works.

## Common Pitfalls
- Forgetting to `git add`: Nothing will commit without adding files.
- Vague commit messages: Use clear ones (not “stuff”).
- Not installing Git: Check `git --version` first.

## Going Further
- **GitHub**: Share your repository online (try `git push` after setting up).
- **Branches**: Use `git branch` and `git checkout` to try new features safely.
- **Undo changes**: Learn `git revert` or `git reset` for mistakes.
- **Resources**:
  - [Git Docs](https://git-scm.com/doc)
  - FreeCodeCamp or GitHub’s Git guides.

## Conclusion
**Version control** with **Git** is like a superhero for your code, saving every change and letting you work with others. Practice with the example, try `git add` and `git commit`, and you’ll be a Git master in no time!