# 36-Weeks Remote Jobs Preparation Challenge: Week 2.6 | Branching, Merging, Pull Requests, and Git Merge Conflicts

## Overview

This guide covers **Branching**, **Merging**, **Pull Requests (PRs)**, and **Git Merge Conflicts** for Week 2.6 of the **36-Weeks Remote Jobs Preparation Challenge**. **Branching** creates separate versions of your project. **Merging** combines them. **Pull Requests** let you share changes for review on GitHub. **Merge Conflicts** happen when changes clash, and you’ll learn to fix them. These skills are super important for remote tech jobs, where you’ll work on code with teammates. simple steps!

## Why This Matters

In remote tech jobs, you’ll:

- Use branches to work on features without breaking the main code.
- Merge changes to update projects.
- Submit pull requests to get team feedback.
- Fix merge conflicts to keep code working. These show employers you can collaborate and manage code like a pro.

## Branching

Branching lets you create separate versions of your project to try new things, like adding a feature, without messing up the main code (usually called `main`).

- **Why**: Work on new ideas or fixes safely.
- **Commands**:
  - `git branch <name>`: Make a new branch (e.g., `git branch feature`).
  - `git checkout <name>`: Switch to a branch.
  - `git checkout -b <name>`: Create and switch in one step.
  - `git branch`: List branches (`*` shows current).
- **Like**: Drawing on a new piece of paper, keeping your main picture safe.

## Merging

Merging combines changes from one branch into another, like adding your new work to the main project.

- **Why**: Bring features or fixes into the main code.
- **Command**: `git merge <branch>` (e.g., `git merge feature` while on `main`).
- **Like**: Gluing your new sketch into your main sketchbook.

## Pull Request (PR)

A pull request is how you share your branch’s changes on GitHub for teammates to review before merging. It’s like asking for a thumbs-up on your work.

- **Why**: Ensures changes are good before adding them to the main project.
- **How**:
  - Push your branch to GitHub (`git push origin <branch>`).
  - On GitHub, create a PR from your branch to `main`.
  - Add a description, get feedback, and merge when approved.
- **Like**: Showing your drawing to a friend for approval before adding it to the book.

## Git Merge Conflict

A merge conflict happens when two branches change the same part of a file, and Git can’t decide which change to keep. You fix it by choosing the right changes.

- **Why**: Conflicts occur in teamwork when people edit the same code.
- **How**:
  - Git pauses the merge and marks the conflicting file.
  - Edit the file to keep the changes you want.
  - Stage and commit to finish the merge.
- **Like**: Deciding which toy to keep when two friends add different toys to the same box.

## Simple Example: Building a Website

Let’s make a website, use branches, merge them, submit a PR, and fix a conflict.

1. **Set Up**:

   ```bash
   mkdir my-site
   cd my-site
   git init
   ```

   Create `site.js`:

   ```javascript
   console.log("Website started!");
   ```

   Commit:

   ```bash
   git add site.js
   git commit -m "Add site start"
   ```

2. **Create a Branch**:

   ```bash
   git checkout -b add-header
   ```

   Edit `site.js`:

   ```javascript
   console.log("Header: My Site");
   console.log("Website started!");
   ```

   Commit:

   ```bash
   git add site.js
   git commit -m "Add header"
   ```

3. **Merge the Branch**:

   ```bash
   git checkout main
   git merge add-header
   ```

   `site.js` now has:

   ```javascript
   console.log("Header: My Site");
   console.log("Website started!");
   ```

4. **Create Another Branch**:

   ```bash
   git checkout -b add-footer
   ```

   Edit `site.js`:

   ```javascript
   console.log("Website started!");
   console.log("Footer: Contact us!");
   ```

   Commit:

   ```bash
   git add site.js
   git commit -m "Add footer"
   ```

5. **Push and Create a Pull Request**:

   - Create a GitHub repo (`my-site`).
   - Link:

     ```bash
     git remote add origin <repo-url>
     git push origin main
     git push origin add-footer
     ```
   - On GitHub:
     - Create a PR from `add-footer` to `main`.
     - Write: “Added footer to site.”
     - Merge after pretending a teammate approves.

6. **Handle a Merge Conflict**:

   - Create a conflicting branch:

     ```bash
     git checkout main
     git checkout -b change-start
     ```

     Edit `site.js`:

     ```javascript
     console.log("Site launched!");
     console.log("Header: My Site");
     ```

     Commit:

     ```bash
     git add site.js
     git commit -m "Change start message"
     ```
   - Merge `add-footer` into `main` (no conflict):

     ```bash
     git checkout main
     git merge add-footer
     ```
   - Try merging `change-start`:

     ```bash
     git merge change-start
     ```

     Conflict in `site.js`:

     ```javascript
     <<<<<<< HEAD
     console.log("Website started!");
     console.log("Header: My Site");
     console.log("Footer: Contact us!");
     =======
     console.log("Site launched!");
     console.log("Header: My Site");
     >>>>>>> change-start
     ```
   - Fix by editing `site.js`:

     ```javascript
     console.log("Site launched!");
     console.log("Header: My Site");
     console.log("Footer: Contact us!");
     ```
   - Complete the merge:

     ```bash
     git add site.js
     git commit -m "Resolve merge conflict"
     ```

## Prerequisites

- Git installed (`git --version`). Download from git-scm.com.
- GitHub account (github.com).
- Terminal (macOS/Linux: Terminal; Windows: PowerShell).

## Tips for Remote Jobs

- **Clear branch names**: Use `feature/header` or `fix/bug`.
- **Test before merging**: Check your branch works.
- **Good PRs**: Write what you changed (e.g., “Added footer”).
- **Resolve conflicts carefully**: Test after fixing conflicts.

## Common Pitfalls

- **Uncommitted changes**: Commit before switching branches.
- **Ignoring conflicts**: Edit files to resolve conflicts properly.
- **No PR review**: Always get feedback before merging.
- **Wrong branch**: Check with `git branch` (`*` shows current).

## Conclusion

For the **36-Weeks Remote Jobs Preparation Challenge**, **branching**, **merging**, **pull requests**, and **merge conflicts** are key to working on code safely and collaborating. Practice this website example to shine in remote tech jobs!