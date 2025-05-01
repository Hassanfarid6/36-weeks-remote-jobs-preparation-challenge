# CD Command Guide

## What is the CD Command?

The **cd** (Change Directory) command is a simple and essential tool in **Linux**, **macOS**, and other **Unix-like systems**. It allows you to **navigate** between folders in the terminal by changing your current working directory to the one you specify. Whether you're a beginner or a seasoned developer, **cd** is a must-know command for working in the command line.

Created in the **1970s** for early **Unix** systems at **Bell Labs**, the **cd** command remains a cornerstone of file system navigation due to its straightforward functionality.

## Syntax

```bash
cd [OPTION] [DIRECTORY]
```

## Options

The **cd** command is typically used with a directory path, but it supports a few special cases:

- **No argument**: Moves to the user’s **home directory** (e.g., `/home/user`).
  ```bash
  cd
  ```
- **-**: Returns to the **previous directory** you were in.
  ```bash
  cd -
  ```
- **~**: Refers to the **home directory** (short for `$HOME`).
  ```bash
  cd ~
  ```
- **..**: Moves up one level to the **parent directory**.
  ```bash
  cd ..
  ```

**Note**: As a **shell built-in** command, **cd** doesn’t have many options like external tools. Its behavior may vary slightly depending on the shell, such as **Bash** or **Zsh**.

## How to Use the CD Command

To switch to a specific folder, run:

```bash
cd <directory>
```

### Example 1: Basic Navigation

```bash
$ cd /home/user/my-project
$ pwd
/home/user/my-project
```

This moves you to the **my-project** folder, and **pwd** confirms your location.

### Example 2: Moving Up or to Home

```bash
$ cd /home/user/my-project
$ cd ..
$ pwd
/home/user
$ cd
$ pwd
/home/user
```

Here, **cd ..** moves to the parent directory (**user**), and **cd** (without arguments) takes you to your **home directory**.

### Example 3: Returning to Previous Directory

```bash
$ cd /var/log
$ cd /home/user
$ cd -
$ pwd
/var/log
```

Using **cd -** switches back to the previous directory (**/var/log**).

## Why Use the CD Command?

The **cd** command is useful for:

- **File Navigation**: Gets you to the right folder to work with files or run commands.
- **Shell Scripts**: Changes directories in scripts to perform tasks in specific locations.
  ```bash
  cd /path/to/project
  git pull
  ```
- **Git Repositories**: Ensures you’re in the correct folder for **git** commands like `git add` or `git commit`.
- **Learning**: Helps new users explore and understand the file system in the terminal.

## How It Works

The **cd** command is a **shell built-in**, meaning it’s part of shells like **Bash** or **Zsh** and not a separate program (e.g., no `/bin/cd`). It updates the shell’s environment variables:

- **$PWD**: Stores the current working directory.
- **$OLDPWD**: Stores the previous working directory.

```bash
$ cd /home/user/my-project
$ echo $PWD
/home/user/my-project
$ cd ..
$ echo $OLDPWD
/home/user/my-project
```

## Where It Works

The **cd** command is available on:

- **Linux** distributions (e.g., **Ubuntu**, **Fedora**, **CentOS**)
- **macOS**
- **BSD** variants (e.g., **FreeBSD**, **OpenBSD**)
- **Solaris** and other **Unix** systems
- **Windows Subsystem for Linux (WSL)