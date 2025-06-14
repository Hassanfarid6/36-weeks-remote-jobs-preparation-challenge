# 36-Weeks Remote Jobs Preparation Challenge: Week 2.6 | Branching and Merging

## Overview

This guide explores **Branching** and **Merging** for Week 2.6 of the **36-Weeks Remote Jobs Preparation Challenge**. **Branching** lets you create and manage separate versions of your project using `git branch` and `git checkout`, like sketching on different papers. **Merging** combines those versions into one with `git merge <branch>`, like gluing your sketches into a main book. These skills are vital for remote tech jobs, where you’ll work on features safely and integrate them into projects. Clear steps and examples to make you a Git pro!

## Branching

Branching in Git means creating separate versions of your project to work on different tasks. Each branch is like a parallel universe where you can make changes without affecting the main codebase (usually called the `main` branch).

### Why Branch?

- **Try new ideas**: Add a feature (e.g., a login page) without risking the main code.
- **Fix bugs safely**: Test a fix in a branch before applying it.
- **Work in teams**: Everyone can work on their own branch without conflicts.
- **Like**: Drawing a new idea on a separate piece of paper, keeping your main picture safe.

### Key Branching Commands

- `git branch <name>`: Creates a new branch (e.g., `git branch feature`).
- `git branch`: Lists all branches (the current branch has a `*`).
- `git checkout <name>`: Switches to a branch (e.g., `git checkout feature`).
- `git checkout -b <name>`: Creates and switches to a branch in one step.
- `git branch -d <name>`: Deletes a branch after it’s merged (e.g., `git branch -d feature`).

## Merging

Merging is the process of combining changes from one branch into another, integrating your work into the main project. It’s like taking your separate sketch and adding it to the main drawing book.

### Why Merge?

- **Integrate features**: Add tested features (e.g., a new button) to the main code.
- **Fix issues**: Apply bug fixes from a branch to the main project.
- **Teamwork**: Combine everyone’s contributions into one cohesive codebase.
- **Like**: Gluing your new sketch into your main sketchbook to complete the picture.

### Key Merging Command

- `git merge <branch>`: Combines the specified branch’s changes into the current branch (e.g., `git merge feature`).
  - Run this while on the target branch (e.g., `main`).
  - If changes overlap, Git may prompt you to resolve **merge conflicts** (explained below).

## Step-by-Step Guide to Branching and Merging

### Step 1: Set Up a Repository

- Start a new project:

  ```bash
  mkdir my-website
  cd my-website
  git init
  ```
- Add a file `index.js`:

  ```javascript
  console.log("My website starts!");
  ```
- Commit:

  ```bash
  git add index.js
  git commit -m "Initial commit: add index.js"
  ```

### Step 2: Create a Branch

- Make a branch for a new feature, like a navigation bar:

  ```bash
  git branch add-navbar
  ```
- Check branches:

  ```bash
  git branch
  ```

  Output:

  ```
    add-navbar
  * main
  ```

### Step 3: Switch to the Branch

- Move to the new branch:

  ```bash
  git checkout add-navbar
  ```
- Or create and switch in one step:

  ```bash
  git checkout -b add-navbar
  ```
- Verify:

  ```bash
  git branch
  ```

  Output:

  ```
  * add-navbar
    main
  ```

### Step 4: Make Changes in the Branch

- Edit `index.js`:

  ```javascript
  console.log("My website starts!");
  console.log("Navigation bar added!");
  ```
- Commit:

  ```bash
  git add index.js
  git commit -m "Add navigation bar"
  ```

### Step 5: Switch Back to Main

- Return to the main branch:

  ```bash
  git checkout main
  ```
- Check `index.js`—it’s unchanged:

  ```javascript
  console.log("My website starts!");
  ```

### Step 6: Merge the Branch

- Merge the feature into `main`:

  ```bash
  git merge add-navbar
  ```
- Git combines the changes. Now `index.js` on `main` includes:

  ```javascript
  console.log("My website starts!");
  console.log("Navigation bar added!");
  ```
- If there’s a **merge conflict** (e.g., both branches changed the same line), Git pauses and marks the conflicting file:

  ```javascript
  <<<<<<< HEAD
  console.log("My website starts!");
  =======
  console.log("Website launched!");
  >>>>>>> add-navbar
  ```
  - Edit the file to keep the desired changes, e.g.:

    ```javascript
    console.log("Website launched!");
    console.log("Navigation bar added!");
    ```
  - Stage and commit:

    ```bash
    git add index.js
    git commit -m "Resolve merge conflict"
    ```

### Step 7: Delete the Branch (Optional)

- Remove the merged branch:

  ```bash
  git branch -d add-navbar
  ```

### Step 8: Push to GitHub (Optional)

- Link to a GitHub repo:

  ```bash
  git remote add origin <repo-url>
  ```
- Push:

  ```bash
  git push origin main
  ```

## Practical Example: Building a Portfolio Website

Let’s create a portfolio website, using branching and merging to add features:

1. **Set Up**:

   ```bash
   mkdir portfolio
   cd portfolio
   git init
   ```

   Create `portfolio.js`:

   ```javascript
   console.log("Portfolio website launched!");
   ```

   Commit:

   ```bash
   git add portfolio.js
   git commit -m "Initial commit: add portfolio.js"
   ```

2. **Create and Work on a Branch**:

   ```bash
   git checkout -b add-about
   ```

   Edit `portfolio.js`:

   ```javascript
   console.log("Portfolio website launched!");
   console.log("About: I’m a coder!");
   ```

   Commit:

   ```bash
   git add portfolio.js
   git commit -m "Add about section"
   ```

3. **Create Another Branch**:

   ```bash
   git checkout main
   git checkout -b add-contact
   ```

   Edit `portfolio.js`:

   ```javascript
   console.log("Portfolio website launched!");
   console.log("Contact: email@me.com");
   ```

   Commit:

   ```bash
   git add portfolio.js
   git commit -m "Add contact section"
   ```

4. **Merge Branches**:

   - Merge `add-about` into `main`:

     ```bash
     git checkout main
     git merge add-about
     ```

     `portfolio.js` now has:

     ```javascript
     console.log("Portfolio website launched!");
     console.log("About: I’m a coder!");
     ```
   - Merge `add-contact`:

     ```bash
     git merge add-contact
     ```

     If no conflicts, `portfolio.js` becomes:

     ```javascript
     console.log("Portfolio website launched!");
     console.log("About: I’m a coder!");
     console.log("Contact: email@me.com");
     ```

5. **Handle a Merge Conflict (Example)**:

   - Suppose `add-contact` changed the first line differently:

     ```javascript
     console.log("Portfolio site started!");
     console.log("Contact: email@me.com");
     ```
   - Merging `add-contact` causes a conflict:

     ```javascript
     <<<<<<< HEAD
     console.log("Portfolio website launched!");
     console.log("About: I’m a coder!");
     =======
     console.log("Portfolio site started!");
     console.log("Contact: email@me.com");
     >>>>>>> add-contact
     ```
   - Edit to resolve:

     ```javascript
     console.log("Portfolio website launched!");
     console.log("About: I’m a coder!");
     console.log("Contact: email@me.com");
     ```
   - Complete the merge:

     ```bash
     git add portfolio.js
     git commit -m "Resolve merge conflict"
     ```

6. **Clean Up**:

   ```bash
   git branch -d add-about
   git branch -d add-contact
   ```

7. **Push to GitHub**:

   - Create a GitHub repo (`portfolio`).
   - Link:

     ```bash
     git remote add origin git@github.com:username/portfolio.git
     ```
   - Push:

     ```bash
     git push origin main
     ```

## Prerequisites

- Git installed (`git --version`). Download from git-scm.com.
- GitHub account (github.com) for pushing.
- Terminal (macOS/Linux: Terminal; Windows: PowerShell).
- Basic Git knowledge (e.g., commits, pushing).

## Tips for Remote Jobs

- **Clear branch names**: Use `feature/about-page` or `bugfix/login` for clarity.
- **Test before merging**: Ensure branches work to avoid breaking `main`.
- **Resolve conflicts carefully**: Check files thoroughly during conflicts.
- **Use pull requests**: Merge via GitHub PRs for team reviews in jobs.
- **Push branches**: Share feature branches for collaboration.

## Common Pitfalls

- **Merging without committing**: Commit changes before switching branches.
- **Conflicts ignored**: Always resolve conflicts manually and test.
- **Wrong branch**: Check with `git branch` (`*` shows current).
- **Unmerged branches**: Don’t delete branches with unmerged changes (use `git branch -D` if sure).

## Going Further

- **Advanced merging**: Learn `git rebase` for cleaner history.
- **Pull requests**: Create PRs on GitHub for branch merges.
- **Git workflows**: Explore GitFlow or trunk-based development.
- **Resources**:
  - Git Docs
  - GitHub Branching Guide
  - FreeCodeCamp Git tutorials.

## Conclusion

For the **36-Weeks Remote Jobs Preparation Challenge**, **branching** (`git branch`, `git checkout`) and **merging** (`git merge <branch>`) let you experiment safely and combine work like a pro. Practice the portfolio example, create and merge branches, and you’ll be ready to collaborate in remote tech jobs!