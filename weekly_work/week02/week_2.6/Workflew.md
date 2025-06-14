# 36-Weeks Remote Jobs Preparation Challenge: Week 2.6 | Git Workflow and Commits

## Overview
This guide covers the **Git Workflow** and **Commits** for Week 2.6. The workflow is the steps you follow to work with Git: `clone` → `commit` → `push` → `pull`. Commits save your changes with a message. These are key for remote tech jobs, where you’ll use Git to manage code. Explained like you’re 10!

## Why This Matters
In remote jobs, you’ll:
- Use Git to save and share code.
- Follow workflows to collaborate with teams.
- Show clear commits to prove your work.

## Git Workflow
The **Git Workflow** is like a recipe for coding with Git:
- **Clone**: Copy a project from GitHub (`git clone <url>`).
- **Commit**: Save changes locally (`git commit -m "message"`).
- **Push**: Send changes to GitHub (`git push`).
- **Pull**: Get updates from GitHub (`git pull`).

## Commits
- **What**: A commit saves your changes with a note, like a snapshot.
- **How**: Use `git add <file>` to stage, then `git commit -m "message"`.
- **Example**: `git commit -m "Add button"` saves a new button.

## Quick Example
1. **Clone**:
   ```bash
   git clone <repo-url>
   cd my-project
   ```
2. Edit `app.js`:
   ```javascript
   console.log("Hello!");
   ```
3. **Commit**:
   ```bash
   git add app.js
   git commit -m "Add hello message"
   ```
4. **Push**:
   ```bash
   git push origin main
   ```
5. **Pull**:
   ```bash
   git pull origin main
   ```

## Prerequisites
- Git installed (`git --version`). Get from [git-scm.com](https://git-scm.com/downloads).
- GitHub account ([github.com](https://github.com)).
- Terminal (macOS/Linux: Terminal; Windows: PowerShell).

## Tips for Remote Jobs
- Use clear commit messages (e.g., “Fix login”).
- Push often to share work.
- Pull before starting to avoid conflicts.

## Common Pitfalls
- Forgetting `git add` before committing.
- Not pushing commits to GitHub.
- Skipping `git pull` and causing conflicts.

## Conclusion
The **Git Workflow** (`clone` → `commit` → `push` → `pull`) and **Commits** (`git commit -m "message"`) are essential for remote tech jobs. Practice this flow to manage code like a pro!