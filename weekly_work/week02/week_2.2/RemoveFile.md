## Commands Overview

### vi Command

The **vi** command opens a text editor to create or edit files.

- **Usage**: Edit a file in the terminal.
  ```bash
  vi <file>
  ```
- **Example**:
  ```bash
  $ vi note.txt
  ```
  This opens **note.txt** in **vi**. Press `i` to insert text, `Esc` to exit insert mode, then `:wq` to save and quit, or `:q!` to quit without saving.

### mv Command

The **mv** (Move) command moves or renames files and directories.

- **Usage**: Move a file to a new location or rename it.
  ```bash
  mv <source> <destination>
  ```
- **Example**:
  ```bash
  $ mv note.txt notes/note.txt
  $ mv note.txt new-note.txt
  ```
  The first moves **note.txt** to the **notes** folder; the second renames it to **new-note.txt**.

### cp Command

The **cp** (Copy) command copies files or directories.

- **Usage**: Create a copy of a file in a new location.
  ```bash
  cp <source> <destination>
  ```
- **Example**:
  ```bash
  $ cp note.txt note-backup.txt
  $ cp note.txt notes/note.txt
  ```
  The first copies **note.txt** to **note-backup.txt**; the second copies it to the **notes** folder.

## Why Use These Commands?

These commands are great for:

- **Editing**: Create or modify text files with **vi**.
- **Organizing**: Move or rename files with **mv**.
- **Duplicating**: Make backups or copies with **cp**.
- **Git Workflows**: Manage files in repositories (e.g., editing configs, moving files).
- **Learning**: Understand file management in the terminal.

## Where They Work

These commands work on:

- **Linux** (e.g., **Ubuntu**, **Fedora**, **CentOS**)
- **macOS**
- **BSD** (e.g., **FreeBSD**, **OpenBSD**)
- **Solaris** and other **Unix** systems
- **Windows Subsystem for Linux (WSL)**
- **Git Bash** on **Windows**

They follow the **POSIX standard** for consistent behavior across platforms.

## Things to Watch Out For

- **File Overwrites**: **mv** and **cp** may overwrite files without warning unless you use options like `-i` (interactive).
  ```bash
  $ mv -i note.txt notes/
  mv: overwrite 'notes/note.txt'? y
  ```
- **Permissions**: You need proper access to edit, move, or copy files.
  ```bash
  $ cp note.txt /root/
  cp: cannot create regular file '/root/note.txt': Permission denied
  ```
- **vi Learning Curve**: **vi** has a unique interface; practice basic commands like `i`, `:wq`, and `:q!`.

## Tips for Using These Commands

- Use **vim** (an improved **vi**) if available:
  ```bash
  vim <file>
  ```
- Move or copy multiple files at once:
  ```bash
  mv file1.txt file2.txt destination/
  cp file1.txt file2.txt destination/
  ```
- Copy directories with **cp -r** (recursive):
  ```bash
  cp -r folder1 folder2
  ```
- Use **tab completion** to avoid typing full file names.

## Security Tips

- **Permissions**: Ensure you have **access** to files and directories.
- **Backups**: Use **cp** to create backups before using **mv** or editing with **vi**.
- **Scripts**: Check if files exist before moving or copying:
  ```bash
  if [ -f note.txt ]; then
    cp note.txt note-backup.txt
  else
    echo "File not found"
  fi
  ```

## See Also

- **ls**: List directory contents.
- **rm**: Remove files or directories.
- **cat**: Display file contents.
