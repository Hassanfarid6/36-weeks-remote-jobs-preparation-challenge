# Node.js Commands Guide

## What are These Commands?

This guide covers **Installing Node.js**, and the **node** and **npm** commands, essential tools for JavaScript development on **Linux**, **macOS**, **Windows**, and other systems. These tools allow you to run JavaScript outside the browser, manage dependencies, and build applications. **Node.js**, created in **2009** by **Ryan Dahl**, is a cornerstone for modern web development.

## Commands and Installation Overview

### Installing Node.js

**Node.js** is a runtime for executing JavaScript. Install it using official installers or package managers.

- **Usage**:
  - **Windows/macOS**: Download the installer from [nodejs.org](https://nodejs.org).
  - **Linux (Debian/Ubuntu)**:
    ```bash
    sudo apt update
    sudo apt install nodejs npm
    ```
  - **Linux (Fedora)**:
    ```bash
    sudo dnf install nodejs
    ```
  - **Using NVM** (Node Version Manager, all platforms):
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
    nvm install node
    ```
- **Verify Installation**:
  ```bash
  $ node -v
  v20.11.0
  $ npm -v
  10.2.3
  ```

### node Command

The **node** command runs JavaScript files or starts a Node.js REPL (interactive shell).

- **Usage**: Execute a JavaScript file.
  ```bash
  node <file>.js
  ```
- **Example**:
  ```bash
  $ echo "console.log('Hello, Node.js!');" > app.js
  $ node app.js
  Hello, Node.js!
  ```
- **REPL**:
  ```bash
  $ node
  > console.log('Hello, World!');
  Hello, World!
  ```

### npm Command

The **npm** (Node Package Manager) command manages JavaScript packages.

- **Usage**: Install a package for your project.
  ```bash
  npm install <package>
  ```
- **Example**:
  ```bash
  $ npm install express
  $ ls node_modules
  express
  ```
- **Global Install**:
  ```bash
  npm install -g <package>
  ```
- **Initialize a Project**:
  ```bash
  $ npm init -y
  ```

## Why Use These Tools?

These tools are essential for:

- **Running JavaScript**: Execute scripts or build apps with **node**.
- **Managing Dependencies**: Install and manage libraries with **npm**.
- **Web Development**: Create servers (e.g., with Express) or front-end projects.
- **Git Workflows**: Manage Node.js projects in repositories.
- **Learning**: Understand JavaScript and package management.

## Where They Work

These tools work on:

- **Linux** (e.g., **Ubuntu**, **Fedora**, **CentOS**)
- **macOS**
- **Windows**
- **Windows Subsystem for Linux (WSL)**
- **Cloud Environments** (e.g., AWS, Docker)

**Node.js** and **npm** are cross-platform, ensuring consistent behavior.

## Things to Watch Out For

- **Version Conflicts**: Ensure **Node.js** and **npm** versions match your project’s needs.
  ```bash
  $ node -v
  ```
- **Permissions**: Avoid permission errors by using **nvm** or installing locally.
  ```bash
  npm install express  # Local install, no sudo
  ```
- **Package Security**: Check packages for vulnerabilities.
  ```bash
  npm audit
  ```

## Tips for Using These Tools

- Use **nvm** to manage multiple **Node.js** versions:
  ```bash
  nvm use 18
  ```
- Update **npm** regularly:
  ```bash
  npm install -g npm
  ```
- Cache clean for **npm** issues:
  ```bash
  npm cache clean --force
  ```
- Run scripts defined in `package.json`:
  ```bash
  npm run start
  ```

## Security Tips

- **Permissions**: Avoid running **npm** as root; use local installs or **nvm**.
- **Audit Dependencies**: Regularly check for vulnerabilities:
  ```bash
  npm audit fix
  ```
- **Trusted Packages**: Install from reputable sources like [npmjs.com](https://www.npmjs.com).

## See Also

- **nvm**: Node Version Manager - https://github.com/nvm-sh/nvm
- **yarn**: Alternative package manager - https://yarnpkg.com/
- **pnpm**: Fast package manager - https://pnpm.io/
- **Node.js Docs**: https://nodejs.org/en/docs/


