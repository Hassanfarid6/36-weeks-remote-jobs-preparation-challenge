# Course Curriculum

This README provides an overview of a course curriculum covering JavaScript asynchronous programming, Bash scripting, Express.js basics, JavaScript functional programming, and Git/GitHub version control.

## Week 2.1 | Revision of Promises, Async JS

- **Understanding Callbacks**
  - Learn how callbacks manage asynchronous operations in JavaScript.
- **Asynchronous Functions**
  - Explore `async/await` syntax for cleaner asynchronous code.
- **Promises**
  - Understand Promises with `.then()`, `.catch()`, and `.finally()` for handling async results.
- **Promisified vs. Non-Promisified Functions**
  - Compare callback-based functions with promisified versions for better async handling.

## Week 2.2 | Bash and Terminal (Basics)

- **Introduction to Terminals**
  - Overview of terminal interfaces and their role in development.
- **How to Open the Terminal**
  - Instructions for accessing terminals on Windows, macOS, and Linux.
- **pwd Command**
  - Print the current working directory: `pwd`.
- **cd Command**
  - Navigate directories: `cd <directory>`.
- **ls Command**
  - List directory contents: `ls` or `dir` (Windows).
- **Changing into Multiple Folders**
  - Navigate nested directories: `cd folder1/folder2`.
- **mkdir Command**
  - Create directories: `mkdir <directory>`.
- **touch Command**
  - Create empty files: `touch <file>`.
- **cat Command**
  - Display file contents: `cat <file>`.
- **vi Command**
  - Edit files with `vi`: `vi <file>`.
- **mv Command**
  - Move/rename files: `mv <source> <destination>`.
- **cp Command**
  - Copy files: `cp <source> <destination>`.
- **Installing Node.js**
  - Install Node.js using official installers or package managers.
- **node Command**
  - Run JavaScript files: `node <file>.js`.
- **npm Command**
  - Manage packages: `npm install <package>`.

## Week 2.3 | Bash (Advanced), How to Install Node.js

- **Bash**
  - Introduction to Bash scripting for automation.
- **pwd, ls, cat, touch, mkdir, mv, cp**
  - Review of basic commands (see Week 2.2).
- **rm Command**
  - Delete files/directories: `rm <file>` or `rm -r <directory>`.
- **chmod Command**
  - Modify permissions: `chmod <mode> <file>`.
- **echo Command**
  - Print text: `echo "text"`.
- **head and tail Commands**
  - View file start/end: `head <file>`, `tail <file>`.
- **Pipe Operator (`|`)**
  - Chain commands: `command1 | command2`.
- **wc Command**
  - Count words/lines: `wc <file>`.
- **grep Command**
  - Search text: `grep "pattern" <file>`.
- **history Command**
  - View command history: `history`.
- **Bash Scripting**
  - Write scripts: `#!/bin/bash` followed by commands.
- **Install Node.js**
  - Detailed installation steps for Node.js.
- **grep, sed, and awk**
  - Advanced text processing: `grep`, `sed "s/pattern/replace/"`, `awk '{print $1}'`.

## Week 2.4 | Express (Basics)

- **Single-Threaded Nature of JS**
  - Understand JavaScript's event loop and non-blocking I/O.
- **HTTP Servers**
  - Create servers using Node.js `http` module.
- **Express**
  - Introduction to Express.js for building web servers.
- **Types of Methods**
  - HTTP methods: `GET`, `POST`, `PUT`, `DELETE`, etc.
- **Basic HTTP Server & Routes**
  - Set up Express server: `app.get('/route', (req, res) => {})`.
- **Taking Input in HTTP Servers**
  - Handle request bodies using middleware like `express.json()`.
- **Query Parameters**
  - Access query params: `req.query`.
- **Request and Response**
  - Work with `req` (request) and `res` (response) objects.
- **Types of Request Methods**
  - Explore use cases for HTTP methods.
- **Status Codes**
  - Common codes: `200` (OK), `404` (Not Found), `500` (Server Error).
- **Postman**
  - Use Postman for API testing.

## Week 2.5 | Filter, Map, Arrow Functions

- **Arrow Functions**
  - Concise function syntax: `const fn = () => {}`.
- **Map Function**
  - Transform arrays: `array.map(item => item * 2)`.
- **Filter Function**
  - Filter arrays: `array.filter(item => item > 0)`.
- **startsWith Function**
  - Check string prefixes: `"text".startsWith("te")`.

## Week 2.6 | Git and GitHub

- **What is Git & Version Control?**
  - Introduction to tracking code changes with version control.
- **Centralized vs. Distributed VCS**
  - Compare centralized (e.g., SVN) vs. distributed (e.g., Git).
- **Why Git?**
  - Benefits: speed, branching, collaboration.
- **What is GitHub?**
  - Platform for hosting Git repositories.
- **Git Terms & Terminologies**
  - Key terms: repository, commit, branch, merge, pull request.
- **Git Workflow**
  - Typical flow: `clone` → `commit` → `push` → `pull`.
- **Commits**
  - Save changes: `git commit -m "message"`.
- **Git Commands**
  - Core commands: `git init`, `git add`, `git commit`, `git push`, `git pull`.
- **Creating a New Repo**
  - Create repositories on GitHub and clone locally.
- **Installing Git**
  - Install Git via official installers or package managers.
- **Pushing Code to GitHub via CLI**
  - Push code: `git push origin <branch>`.
- **Authenticating**
  - Set up SSH keys or HTTPS for GitHub authentication.
- **Branching**
  - Create/manage branches: `git branch`, `git checkout`.
- **Merging**
  - Combine branches: `git merge <branch>`.
- **Pull Request (PR)**
  - Submit changes for review on GitHub.
- **Git Merge Conflict**
  - Resolve conflicts when merging conflicting changes.

------------------------------------------------------------------

- Week 2.1 | Revision Of Promises, Async JS
    - Understanding Callbacks
    - Asynchronous Functions
    - Promises
    - Promisified vs. Non-Promisified Functions


- Week 2.2 | Bash And Terminal (Basics)
    - Introduction to Terminals
    - How to open the terminal on your machine
    - pwd command
    - cd command
    - ls command
    - changing directly into multiple folders using a single command
    - mkdir command
    - touch command
    - cat command
    - vi command
    - mv command
    - cp command
    - how to install node in our machine
    - node command
    - npm command and installing libraries using it


- Week 2.3 | Bash (Advance), How to Install Node JS
    - Bash
    - pwt
    - ls
    - cat
    - touch
    - mkdir
    - mv
    - cp
    - rm
    - chmod
    - echo
    - head and tail
    - pipe operator
    - wc
    - grep
    - history
    - script in bash
    - Install nodejs
    - grep, sed and awk


- Week 2.4 | Express (Basics)
    - Single Threaded nature of JS
    - Http Servers
    - Express
    - Types of methods
    - Basic Http sever & Routes
    - Taking input in http servers
    - Query Parameters
    - What is Request and response
    - Types of Request Methods
    - Status codes
    - What is Postman


- Week 2.5 | Filter, Map, Arrow Fns
    - Arrow Functions
    - Map function
    - Filtering func
    - startsWith func


- Week 2.6 | Git and Github
    - What is git & version control system?
    - Centalized vcs
    - Distributed vcs
    - Why git?
    - What is Github?
    - Terms & terminologies in git
    - Workflow of git
    - Commits
    - Git commands
    - Creating a new repo
    - Installing git
    - Pushing code on github through cli
    - Authenticating
    - Branching
    - Merging
    - Pull Request(PR)
    - What is Git Merge Conflict