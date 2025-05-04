# 36-Weeks Remote Jobs Preparation Challenge: Week 2.6 | Git and GitHub

## Overview
Welcome to **Week 2.6** of the **36-Weeks Remote Jobs Preparation Challenge**! This week, we’re diving into **Git** and **GitHub**, essential tools for coders aiming for remote tech jobs. Git helps you track code changes like a magical notebook, and GitHub lets you share and collaborate online. This guide covers why Git is awesome, what GitHub does, and key Git terms (repository, commit, branch, merge, pull request), building on Week 2.5’s version control intro. It’s explained like you’re 10, so everyone can understand!

## Why This Matters for Remote Jobs
In remote tech jobs, you’ll use **Git** and **GitHub** to:
- Manage code changes efficiently.
- Collaborate with global teams.
- Showcase your projects to employers on GitHub.
- Contribute to open-source projects, boosting your portfolio.

## Learning Objectives
- Understand **Git** and its benefits (speed, branching, collaboration).
- Learn what **GitHub** is and how it hosts Git repositories.
- Master key **Git terms**: repository, commit, branch, merge, pull request.
- Apply these concepts in a practical project.

## Key Concepts

### 1. Why Git?
**Git** is a distributed version control system (VCS) that tracks code changes. Here’s why it’s a must-have:
- **Speed**: Works on your computer, so saving changes (`git commit`) is super fast, even offline.
  - Example: Commit a new feature in seconds without internet.
  - Like: Saving a drawing instantly on your tablet.
- **Branching**: Create branches to try new ideas without breaking the main code.
  - Example: Make a `new-feature` branch to add a button, merge it if it works.
  - Like: Sketching on a separate paper, keeping your main picture safe.
- **Collaboration**: Multiple people can work on the same project without chaos.
  - Example: You add a menu, a teammate adds text, and Git combines them.
  - Like: Building a LEGO castle with friends, fitting pieces together.
- **Other perks**: Safe (multiple project copies), flexible, and widely used in tech jobs.

### 2. What is GitHub?
**GitHub** is an online platform that hosts **Git repositories**, letting you store, share, and collaborate on code.
- **What it does**:
  - Save your Git repo online (`git push`).
  - Collaborate with pull requests to review changes.
  - Share projects with employers or friends.
- **Why it’s awesome**:
  - Backs up your code.
  - Supports teamwork with global teams.
  - Builds your portfolio for job applications.
- **Example**: Push your project to GitHub, share the link, and let a teammate add features.
- **Like**: A cloud toy box where you store and share toys with friends.

### 3. Git Terms & Terminologies
These terms are the building blocks of Git:
- **Repository (Repo)**: A folder with your code and its change history.
  - Example: A project folder with `app.js` and a `.git` folder.
  - Like: A notebook with all your drawings.
- **Commit**: A snapshot of your changes, saved with a message.
  - Example: `git commit -m "Add homepage"` saves a new page.
  - Like: Taking a photo of your drawing to save that step.
- **Branch**: A separate version of your project for experimenting.
  - Example: A `feature` branch to test a new button.
  - Like: A separate paper for a new sketch.
- **Merge**: Combining changes from one branch into another.
  - Example: Merge `feature` into `main` after testing.
  - Like: Adding your sketch to the main drawing.
- **Pull Request (PR)**: A GitHub feature to propose and review changes before merging.
  - Example: Submit a PR for `feature` to `main`, get teammate approval.
  - Like: Showing your sketch to a friend before adding it to the book.

### 4. Centralized vs. Distributed VCS (Week 2.5 Recap)
- **Centralized VCS** (e.g., SVN): One server holds all code history. Simple but needs internet and risks server failure.
- **Distributed VCS** (e.g., Git): Everyone has a full copy of the project. Faster, safer, but slightly trickier.
- Git’s distributed nature makes it ideal for remote work, enabling offline work and collaboration.

## Practical Example
Let’s create a project to practice Git and GitHub terms for the challenge:
1. **Create a Repository**:
   ```bash
   mkdir portfolio
   cd portfolio
   git init
   ```
2. **Add and Commit**:
   Create `index.js`:
   ```javascript
   console.log("My portfolio website!");
   ```
   Track and commit:
   ```bash
   git add index.js
   git commit -m "Initial commit: add index.js"
   ```
3. **Create a Branch**:
   ```bash
   git checkout -b add-about
   ```
   Edit `index.js`:
   ```javascript
   console.log("My portfolio website!");
   console.log("About me: I love coding!");
   ```
   Commit:
   ```bash
   git add index.js
   git commit -m "Add about section"
   ```
4. **Merge the Branch**:
   ```bash
   git checkout main
   git merge add-about
   ```
5. **Push to GitHub**:
   - Create a GitHub repo at [github.com](https://github.com) named `portfolio`.
   - Link and push:
     ```bash
     git remote add origin <repo-url>
     git push -u origin main
     git push origin add-about
     ```
6. **Create a Pull Request**:
   - On GitHub, make a pull request from `add-about` to `main`.
   - Add a description: “Added about section to portfolio.”
   - Merge after review (pretend a teammate checks it).

## Prerequisites
- **Git** installed (`git --version`). Download from [git-scm.com](https://git-scm.com/downloads).
- **GitHub account** ([github.com](https://github.com)).
- Terminal (e.g., Terminal on macOS/Linux, PowerShell on Windows).
- Basic Week 2.5/2.6 knowledge (e.g., version control, Git basics).

## Key Git Commands
- `git init`: Start a repository.
- `git add <file>`: Track changes.
- `git commit -m "message"`: Save a snapshot.
- `git branch <name>`: Create a branch.
- `git checkout <branch>`: Switch branches.
- `git merge <branch>`: Combine branches.
- `git push origin <branch>`: Send to GitHub.
- `git pull origin <branch>`: Get updates.

## Tips for Remote Jobs
- **Clear commits**: Use messages like “Add login page” to show professionalism.
- **Active GitHub**: Regularly push projects to impress recruiters.
- **Collaborate**: Practice pull requests to mimic remote team workflows.
- **Organize repos**: Keep your GitHub tidy with clear names and READMEs.

## Common Pitfalls
- **Forgetting `git add`**: Untracked files won’t commit.
- **Wrong branch**: Check with `git branch` before editing.
- **Not pushing**: Local commits need `git push` to reach GitHub.
- **Unreviewed PRs**: Always review pull requests to avoid bugs.

## Going Further
- **Advanced Git**: Learn `git rebase`, `git stash`, or resolving conflicts.
- **GitHub features**: Use issues for tasks or GitHub Actions for automation.
- **Portfolio boost**: Build projects (e.g., a to-do app) and host them on GitHub.
- **Resources**:
  - [Git Docs](https://git-scm.com/doc)
  - [GitHub Docs](https://docs.github.com/)
  - FreeCodeCamp Git/GitHub tutorials or GitHub’s interactive labs.

## Conclusion
For the **36-Weeks Remote Jobs Preparation Challenge**, mastering **Git** and **GitHub** is key to landing a tech job. Git’s **speed**, **branching**, and **collaboration** make coding efficient, while GitHub showcases your work to the world. Practice the example, use terms like **repository**, **commit**, and **pull request**, and build a stellar GitHub profile to shine in remote work!