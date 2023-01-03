#!/bin/sh

APPS=$HOME/.local/opt

export PATH=$(paste -d ":" -s - << EOF
$HOME/.local/bin/
$PATH
EOF
)

export XDG_DATA_DIRS=$(paste -d ":" -s - << EOF
$HOME/.nix-profile/share
$XDG_DATA_DIRS
EOF
)

export FISH_CLIPBOARD_CMD=cat
export TERM=xterm-256color

ulimit -c unlimited
ulimit -Sn unlimited || true
