# 36-Weeks Remote Jobs Preparation Challenge: Week 2.6 | Git Commands, Creating a New Repo, and Installing Git

## Overview
This guide covers **Git Commands**, **Creating a New Repo**, and **Installing Git** for Week 2.6. **Git** is like a magic notebook for tracking code changes, and these skills are key for remote tech jobs. Learn core commands (`git init`, `git add`, `git commit`, `git push`, `git pull`), how to create repos on GitHub, and how to install Git. Explained like you’re 10!

## Why This Matters
In remote tech jobs, you’ll:
- Use Git commands to save and share code.
- Create repos to start projects.
- Install Git to work on any computer.
These skills show employers you can manage code professionally.

## Installing Git
- **What**: Git is a tool you install to track code changes.
- **How**:
  - **Windows/macOS**: Download from [git-scm.com](https://git-scm.com/downloads), run the installer, and follow prompts.
  - **Linux**: Use a package manager, e.g., `sudo apt install git` (Ubuntu) or `sudo yum install git` (CentOS).
  - **Verify**: Run `git --version` (e.g., `git version 2.39.2`).
- **Like**: Adding a new app to your tablet to draw cool pictures.

## Git Commands
Core commands to work with Git:
- `git init`: Start a new repo in a folder.
- `git add <file>`: Pick files to save.
- `git commit -m "message"`: Save changes with a note.
- `git push origin <branch>`: Send changes to GitHub.
- `git pull origin <branch>`: Get updates from GitHub.

## Creating a New Repo
- **On GitHub**:
  - Go to [github.com](https://github.com), sign in.
  - Click “New repository,” name it (e.g., `my-app`), and create (skip initializing with README).
- **Clone Locally**:
  - Copy the repo URL (e.g., `https://github.com/username/my-app.git`).
  - Run `git clone <url>` to download it.
- **Like**: Setting up a new toy box online and bringing it home.

## Quick Example
1. **Install Git**:
   - Download from [git-scm.com](https://git-scm.com/downloads), install, check `git --version`.
2. **Create a Repo on GitHub**:
   - Make a repo called `my-app` at [github.com](https://github.com).
3. **Clone Locally**:
   ```bash
   git clone https://github.com/username/my-app.git
   cd my-app
   ```
4. **Use Commands**:
   Create `app.js`:
   ```javascript
   console.log("Hello!");
   ```
   Run:
   ```bash
   git init  # If not cloned, start a repo
   git add app.js
   git commit -m "Add hello message"
   git push origin main
   ```
   Update:
   ```bash
   git pull origin main
   ```

## Prerequisites
- Computer with a terminal (macOS/Linux: Terminal; Windows: PowerShell).
- GitHub account ([github.com](https://github.com)).

## Tips for Remote Jobs
- Use clear commit messages (e.g., “Add login page”).
- Push regularly to share work.
- Pull before coding to stay updated.

## Common Pitfalls
- Not installing Git properly (check `git --version`).
- Forgetting `git add` before committing.
- Not setting up the remote (`git remote add origin <url>`).

## Conclusion
For the **36-Weeks Remote Jobs Preparation Challenge**, mastering **Git commands** (`git init`, `git add`, `git commit`, `git push`, `git pull`), **creating repos**, and **installing Git** prepares you for remote tech jobs. Practice this example to manage code like a pro!