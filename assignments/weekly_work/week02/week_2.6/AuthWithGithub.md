# 36-Weeks Remote Jobs Preparation Challenge: Week 2.6 | Pushing Code to GitHub via CLI and Authenticating

## Overview
This guide dives into **Pushing Code to GitHub via CLI** and **Authenticating** for Week 2.6 of the **36-Weeks Remote Jobs Preparation Challenge**. **Pushing** means sending your code changes to GitHub using the command `git push origin <branch>`. **Authenticating** is like showing your ID to prove it’s you, using SSH keys or HTTPS. These skills are crucial for remote tech jobs, where you’ll share code with teammates online. We’ll explain everything like you’re 10, with detailed steps to make it fun and clear!

## Why This Matters for Remote Jobs
In remote tech roles, pushing code to GitHub and authenticating properly are daily tasks. They help you:
- **Share work**: Send your code to teammates or bosses via GitHub.
- **Collaborate globally**: Keep projects updated for distributed teams.
- **Build a portfolio**: Show employers your projects on GitHub.
- **Stay secure**: Use authentication to protect your code and prove your identity.
Mastering these ensures you can work professionally and securely in a remote environment.

## Pushing Code to GitHub via CLI
Pushing code means sending your local Git changes (like commits) to a GitHub repository so others can see or use them. It’s like mailing your drawing to a shared art gallery!

### What is `git push origin <branch>`?
- **What**: The `git push` command uploads your local commits to a GitHub repo.
- **Parts**:
  - `origin`: The name of your remote repo (usually GitHub).
  - `<branch>`: The branch you’re pushing (e.g., `main` or `feature`).
- **Like**: Sending your toy to a shared toy box in the cloud.
- **Why**: It updates GitHub with your latest work, letting teammates access it.

### How It Works
1. Make changes and commit them locally (using `git add` and `git commit`).
2. Ensure your local repo is linked to GitHub (with `git remote add origin <url>`).
3. Push with `git push origin <branch>` to send changes to GitHub.
4. Authenticate (we’ll cover this next) to prove it’s you.

## Authenticating with GitHub
Authentication is like showing a key to unlock GitHub’s door, proving you’re allowed to push code. There are two main ways: **SSH keys** (like a secret handshake) or **HTTPS** (like a username and password).

### Option 1: SSH Keys
- **What**: SSH keys are a secure pair of codes (public and private) that let your computer talk to GitHub without a password.
- **Why**: Faster and safer for frequent pushes, common in remote jobs.
- **Like**: A special key that opens GitHub’s gate automatically.

### Option 2: HTTPS
- **What**: HTTPS uses your GitHub username and a personal access token (PAT) as a password.
- **Why**: Easier to set up but requires entering credentials (or caching them).
- **Like**: Showing your ID card every time you enter GitHub.

## Step-by-Step Guide

### Step 1: Install and Verify Git
- Download Git from [git-scm.com](https://git-scm.com/downloads).
- **Windows/macOS**: Run the installer, follow prompts.
- **Linux**: Use `sudo apt install git` (Ubuntu) or `sudo yum install git` (CentOS).
- Check: `git --version` (e.g., `git version 2.39.2`).
- **Like**: Adding a new app to your tablet to start drawing.

### Step 2: Set Up Git Configuration
- Tell Git who you are (needed for commits):
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
  ```
- This links your commits to your GitHub account.

### Step 3: Create a GitHub Repository
- Go to [github.com](https://github.com), sign in.
- Click “New repository,” name it (e.g., `my-project`), and create (skip initializing with README).
- Copy the repo URL (e.g., `https://github.com/username/my-project.git`).