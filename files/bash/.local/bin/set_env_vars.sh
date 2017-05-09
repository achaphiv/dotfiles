#!/bin/sh

APPS=$HOME/.local/opt

#export ANT_HOME=$APPS/apache-ant/
#export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-amd64/
#export JAVA_HOME=$APPS/openjdk1.7/
#export _JAVA_OPTIONS="-Dawt.useSystemAAFontSettings=on -Dswing.aatext=true"
#export _JAVA_OPTIONS="-Xmx4g -XX:MaxPermSize=1g"

#export ANDROID_HOME=$APPS/android-sdks/

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

# less colors
#export LESS_TERMCAP_mb=$'\E[01;31m'       # begin blinking
#export LESS_TERMCAP_md=$'\E[01;38;5;74m'  # begin bold
#export LESS_TERMCAP_me=$'\E[0m'           # end mode
#export LESS_TERMCAP_se=$'\E[0m'           # end standout-mode
#export LESS_TERMCAP_so=$'\E[38;5;246m'    # begin standout-mode - info box
#export LESS_TERMCAP_ue=$'\E[0m'           # end underline
#export LESS_TERMCAP_us=$'\E[04;38;5;146m' # begin underline
#export LESS=-r
