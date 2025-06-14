# PWD Command Guide

## What is the PWD Command?

The **pwd** (Print Working Directory) command is a simple tool used in **Linux**, **macOS**, and other **Unix-like systems**. It shows the full path of the folder you're currently in on the terminal. This helps you know exactly where you are in your computer's file system, making it easier to work with files and folders.

The **pwd** command has been around since the **1970s**, created for early **Unix** systems at **Bell Labs**. It’s still super useful today because it’s easy to use and works everywhere.

## Syntax

```bash
pwd [OPTION]
```

## Options

You usually don’t need extra options with **pwd**, but here are a few you might use:

- **-L** (Logical): Shows the path with any **symbolic links** (shortcuts) as they are. This is what **pwd** does by default.
  ```bash
  pwd -L
  ```
- **-P** (Physical): Shows the actual folder path, ignoring **symbolic links**.
  ```bash
  pwd -P
  ```
- **--help**: Shows a help message about **pwd**.
  ```bash
  pwd --help
  ```
- **--version**: Tells you the version of **pwd**.
  ```bash
  pwd --version
  ```

**Note**: Not all systems have these options, but they’re common in **Linux** with **GNU Coreutils**.

## How to Use the PWD Command

To see your current folder, just type:

```bash
pwd
```

### Example 1: Basic Usage

```bash
$ pwd
/home/user/my-project
```

This means you’re in the **my-project** folder inside **user**’s home directory.

### Example 2: Symbolic Links

If you’re in a folder that’s a **symbolic link** (a shortcut), **-L** and **-P** show different paths:

```bash
$ ln -s /var/www/html /home/user/web
$ cd /home/user/web
$ pwd -L
/home/user/web
$ pwd -P
/var/www/html
```

**-L** shows the shortcut path (**web**), while **-P** shows the real folder (**html**).

## Why Use the PWD Command?

The **pwd** command is handy for:

- **Finding Your Location**: Checks which folder you’re in while navigating with **cd**.
- **Scripts**: Saves the current folder path for tasks like saving files or logs.
  ```bash
  CURRENT_DIR=$(pwd)
  echo "You are in $CURRENT_DIR"
  ```
- **Git Projects**: Makes sure you’re in the right folder before running **git** commands like `git add` or `git commit`.
- **Learning**: Helps new users understand how folders work in the terminal.

## How It Works

The **pwd** command can be:

- **Built-in**: Part of shells like **Bash** or **Zsh**, using the **$PWD** variable for speed.
  ```bash
  $ type pwd
  pwd is a shell builtin
  ```
- **External Tool**: A separate program at **/bin/pwd**, included in **GNU Coreutils**.
  ```bash
  $ /bin/pwd
  /home/user/my-project
  ```

The **built-in** and **external** versions might act differently with **symbolic links**.

## Where It Works

You can use **pwd** on:

- **Linux** (like **Ubuntu**, **Fedora**, **CentOS**)
- **macOS**
- **BSD** (like **FreeBSD**, **OpenBSD**)
- **Solaris** and other **Unix** systems
- **Windows Subsystem for Linux (WSL)**
- **Git Bash** on **Windows**

It follows the **POSIX standard**, so it works the same on most systems.

## A Bit of History

The **pwd** command started in the **1970s** with early **Unix** systems to help users navigate the new file system. It’s barely changed since then, but options like **-L** and **-P** were added later to handle **symbolic links**.

## Things to Watch Out For

- **Symbolic Links**: You might get confused between **-L** (shortcut path) and **-P** (real path).
- **Permissions**: If you don’t have access to a folder, **pwd** might not work.
  ```bash
  $ cd /root
  $ pwd
  pwd: cannot get current directory: Permission denied
  ```
- **$PWD Variable**: The **built-in pwd** uses **$PWD**, which can be wrong if you change it.
  ```bash
  $ export PWD=/fake/path
  $ pwd
  /fake/path
  $ /bin/pwd
  /home/user/real-path
  ```

## Tips for Using PWD

- Use **pwd -P** if you need the real folder path for scripts.
- Use **/bin/pwd** if **$PWD** seems off.
- Save the folder path for later:
  ```bash
  echo "Current folder: $(pwd)" >> mylog.txt
  ```

## Security Tips

- **Permissions**: Make sure you can access the folder to avoid errors.
- **Scripts**: Check **pwd** output in scripts to catch issues with **inaccessible folders** or a changed **$PWD**.

## See Also

- **cd**: Move to a different folder.
- **ls**: List files in a folder.
- **readlink**: Check where symbolic links point.
- **GNU Coreutils**: https://www.gnu.org/software/coreutils/


## It covers:
-   Basic and advanced usage of `pwd`
-   Differences between logical and physical paths
-   Use cases in shell scripting and debugging
-   Compatibility with various systems
-   Common pitfalls and best practices
---
