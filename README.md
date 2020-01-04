# dotfiles

## What

Configure a devbox from scratch.

I.E. with only `git` and `python3` installed.

## How

- `pipenv` installs `ansible`
- `ansible` installs the programs
- `stow` creates symbolic links for program configuration

## Install

Download the repository:

```bash
git clone git@github.com:achaphiv/dotfiles
cd dotfiles
git submodule init
git submodule update
```

Run the install script:

```bash
./install
```
