# 36-Weeks Remote Jobs Preparation Challenge: Week 2.6 | Git Terms & Terminologies

## Overview
Welcome to **Week 2.6** of the **36-Weeks Remote Jobs Preparation Challenge**! This guide is all about **Git Terms & Terminologies**—**repository**, **commit**, **branch**, **merge**, and **pull request**. These are like the magic words you need to use **Git** (a tool that saves your code like a superhero notebook) and **GitHub** (a website where you share your code with the world). They’re super important for getting a remote tech job, where you’ll use Git every day to keep your code organized and work with teammates far away. We’ll explain everything like you’re 10, with fun examples and details to make it crystal clear!

## Why This Matters for Remote Jobs
When you work as a coder from home, Git and GitHub are your best friends. These terms help you:
- **Save your work safely**: Never lose your code, even if you make a mistake.
- **Work with others**: Team up with people anywhere without messing up the project.
- **Show off to bosses**: Put your projects on GitHub to impress companies hiring coders.
- **Join cool projects**: Add your skills to open-source projects (like free apps) to make your resume shine.
Learning these terms makes you look like a pro coder, ready for a remote job!

## Step-by-Step Guide to Git Terms & Terminologies
Let’s go on a coding adventure, building a project step by step to learn each term. Imagine you’re making a fun website for your favorite game, and Git is helping you save and share it!

### Step 1: Repository (Repo) - Your Project’s Toy Box
- **What is it?** A repository is a special folder where your project lives, holding all your code files (like `app.js`) and a secret diary of every change you make. This diary is kept in a hidden folder called `.git`. It’s like a toy box that remembers every toy you put in or take out!
- **Why it’s cool**: A repo is your project’s home, keeping everything organized. In a remote job, you’ll start every project with a repo to track your work.
- **How it works**:
  - Create a repo with `git init` to turn a folder into a Git project.
  - Get someone else’s repo with `git clone <url>` from GitHub.
  - The repo stores all your commits and branches (coming up next!).
- **Example**: You make a folder called `my-game-site` for your game website. Running `git init` turns it into a repo, ready to track files like `game.js`.
- **Job tip**: Companies expect you to work in repos and push them to GitHub. A clean repo shows you’re organized.
- **Like**: A big toy box with a notebook that lists every toy you added or changed.
- **Details**: Repos can be **local** (on your computer) or **remote** (on GitHub). You’ll use both in jobs to keep your code safe and share it.

### Step 2: Commit - Saving a Picture of Your Work
- **What is it?** A commit is like taking a picture of your project at a certain moment, saving all the changes you made. You add a note (called a message) to say what you did, like “Added a new button.” It’s like saving your progress in a video game so you can come back later.
- **Why it’s cool**: Commits let you save your work, go back if you mess up, and show your team what you’ve done. In remote jobs, commits are like your work diary.
- **How it works**:
  - Pick files to save with `git add <file>` (like putting toys in a pile).
  - Save the snapshot with `git commit -m "your message here"`.
  - Check your commit history with `git log` to see all your pictures.
- **Example**: You write `game.js` with `console.log("Game starts!")`. You run `git add game.js` and `git commit -m "Add game start message"`. Now that version is saved forever!
- **Job tip**: Write clear commit messages (e.g., “Fix login error”) so teammates know exactly what you did.
- **Like**: Snapping a photo of your drawing to save that exact version.
- **Details**: Each commit has a unique ID (a long code) and records who made it and when. In teams, you’ll make lots of small commits to track progress.

### Step 3: Branch - Trying New Ideas Safely
- **What is it?** A branch is like a separate copy of your project where you can try new things without touching the main version (usually called `main`). It’s like having a second toy box to build a new toy without breaking the original.
- **Why it’s cool**: Branches let you experiment, like adding a new game feature, without risking the working project. In remote jobs, every feature or fix gets its own branch.
- **How it works**:
  - Make a branch with `git branch <name>` (e.g., `git branch new-button`).
  - Switch to it with `git checkout <name>` or combine with `git checkout -b <name>`.
  - Work and commit as usual; changes only affect that branch.
- **Example**: You want to add a score display to `game.js`. You create a branch with `git checkout -b add-score`, add the code, and commit. The `main` branch stays unchanged.
- **Job tip**: Name branches clearly (e.g., `feature/score-display`) to show what they’re for.
- **Like**: Drawing a new idea on a fresh piece of paper, keeping your main picture safe.
- **Details**: You can have many branches (e.g., one for each feature). The `main` branch is usually the “official” version, and branches let you test ideas before adding them.

### Step 4: Merge - Bringing Your Ideas Together
- **What is it?** Merging is when you take the changes from one branch and add them to another, like putting your new toy into the main toy box. It combines your work into the main project.
- **Why it’s cool**: Merging lets you add tested features to the main code, keeping your project growing. In remote jobs, you merge after your work is reviewed.
- **How it works**:
  - Switch to the branch you want to update (e.g., `git checkout main`).
  - Merge another branch with `git merge <branch-name>` (e.g., `git merge add-score`).
  - If changes clash (a “conflict”), Git asks you to fix them (like choosing which toy to keep).
- **Example**: Your `add-score` branch works great. You switch to `main` with `git checkout main` and run `git merge add-score`. Now `main` has the score display!
- **Job tip**: Test your branch before merging to avoid breaking the main project.
- **Like**: Gluing your new drawing into your main sketchbook.
- **Details**: Merging keeps the commit history, so you can see every step. If there’s a conflict, Git highlights the problem, and you edit the files to resolve it.

### Step 5: Pull Request (PR) - Showing and Sharing Your Work
- **What is it?** A pull request is a way to show your branch’s changes on GitHub, ask for feedback, and merge them into another branch (like `main`). It’s like asking your team if your new toy is good enough to add to the main box.
- **Why it’s cool**: PRs let teammates review your work, catch mistakes, and suggest improvements before merging. In remote jobs, PRs are how you collaborate with people far away.
- **How it works**:
  - Push your branch to GitHub with `git push origin <branch-name>`.
  - On GitHub, create a PR from your branch to the target branch (e.g., `main`).
  - Write a description, get feedback, make fixes if needed, and merge when approved.
- **Example**: You push your `add-score` branch to GitHub and create a PR to merge it into `main`. Your teammate checks it, says “Looks great!” and you merge it.
- **Job tip**: Write clear PR descriptions (e.g., “Added score display to game”) to make reviews easy.
- **Like**: Showing your new drawing to a friend, getting their thumbs-up, then adding it to the book.
- **Details**: PRs can include comments, code reviews, and tests. In big teams, PRs ensure quality, and you’ll often review others’ PRs too.

## Practical Example: Building a Game Website
Let’s pretend you’re making a simple website for your game, using all these terms together:
1. **Step 1: Create a Repository**:
   ```bash
   mkdir game-website
   cd game-website
   git init
   ```
   Your `game-website` folder is now a Git repo, ready to track your project.
2. **Step 2: Add and Commit**:
   Create `game.js`:
   ```javascript
   console.log("Welcome to my game!");
   ```
   Save it:
   ```bash
   git add game.js
   git commit -m "Initial commit: add game start"
   ```
   This commit saves your first version.
3. **Step 3: Create a Branch**:
   ```bash
   git checkout -b add-score
   ```
   Edit `game.js`:
   ```javascript
   console.log("Welcome to my game!");
   console.log("Your score: 0");
   ```
   Commit:
   ```bash
   git add game.js
   git commit -m "Add score display"
   ```
   Your score feature is safe in the `add-score` branch.
4. **Step 4: Merge the Branch**:
   ```bash
   git checkout main
   git merge add-score
   ```
   The score display is now in `main`.
5. **Step 5: Push and Create a Pull Request**:
   - Create a GitHub repo at [github.com](https://github.com) called `game-website`.
   - Link and push:
     ```bash
     git remote add origin <repo-url>
     git push -u origin main
     git push origin add-score
     ```
   - On GitHub:
     - Create a pull request from `add-score` to `main`.
     - Write: “Added score display to game.js.”
     - Merge after pretending a teammate approves.

## Prerequisites
- **Git** installed (`git --version`). Download from [git-scm.com](https://git-scm.com/downloads).
- **GitHub account** ([github.com](https://github.com)).
- Terminal (macOS/Linux: Terminal; Windows: PowerShell).
- Basic Week 2.6 knowledge (e.g., Git, GitHub basics).

## Tips for Remote Jobs
- **Clear commits**: Use messages like “Add user login” to show you’re professional.
- **Smart branches**: Name them like `feature/login` or `bugfix/button`.
- **Great PRs**: Write what you changed and why in pull requests.
- **GitHub portfolio**: Push projects often to show employers your skills.

## Common Pitfalls
- **Forgetting `git add`**: Files won’t commit if not staged.
- **Wrong branch**: Check with `git branch` (look for the `*`).
- **Not pushing**: Run `git push` to get commits to GitHub.
- **Skipping PR reviews**: Always check pull requests to avoid mistakes.

## Going Further
- **More terms**: Try `clone` (copy a repo), `pull` (get updates), or `conflict` (fix clashes).
- **Advanced Git**: Learn `git rebase` or `git stash`.
- **GitHub fun**: Use issues for tasks or GitHub Actions to automate stuff.
- **Resources**:
  - [Git Docs](https://git-scm.com/doc)
  - [GitHub Docs](https://docs.github.com/)
  - FreeCodeCamp Git tutorials.

## Conclusion
For the **36-Weeks Remote Jobs Preparation Challenge**, **repository**, **commit**, **branch**, **merge**, and **pull request** are your Git superpowers. They help you save, experiment, and share code like a pro coder. Try the game website example, use these terms, and build a cool GitHub profile to land that remote tech job!