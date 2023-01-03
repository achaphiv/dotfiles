#!/bin/sh

APPS=$HOME/.local/opt

export PATH=$(paste -d ":" -s - << EOF
$HOME/.local/bin/
$PATH
EOF
)

export FISH_CLIPBOARD_CMD=cat
export TERM=xterm-256color

export DEBFULLNAME="Bob Chez"
export DEBEMAIL="no1wantdthisname@gmail.com"

ulimit -c unlimited
ulimit -Sn unlimited || true
