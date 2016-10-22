#!/usr/bin/env bash

# Install command-line tools using Homebrew.

# Ask for the administrator password upfront.
sudo -v

# Keep-alive: update existing `sudo` time stamp until the script has finished.
while true; do sudo -n true; sleep 60; kill -0 "$$" || exit; done 2>/dev/null &

# Make sure we’re using the latest Homebrew.
brew update

# Upgrade any already-installed formulae.
brew upgrade --all

# Install GNU core utilities (those that come with OS X are outdated).
# Don’t forget to add `$(brew --prefix coreutils)/libexec/gnubin` to `$PATH`.
brew install coreutils
sudo ln -s /usr/local/bin/gsha256sum /usr/local/bin/sha256sum

# Install some other useful utilities like `sponge`.
brew install moreutils
# Install GNU `find`, `locate`, `updatedb`, and `xargs`, `g`-prefixed.
brew install findutils
# Install GNU `sed`, overwriting the built-in `sed`.
brew install gnu-sed --with-default-names
# Install Bash 4.
# Note: don’t forget to add `/usr/local/bin/bash` to `/etc/shells` before
# running `chsh`.
brew install bash
brew tap homebrew/versions
brew install bash-completion2

# Autojump is good for fast directory switching
brew install autojump

# Install `wget` with IRI support.
brew install wget --with-iri

# Install more recent versions of some OS X tools.
brew install vim --override-system-vi
brew install homebrew/dupes/grep
brew install homebrew/dupes/openssh
brew install homebrew/dupes/screen

# Install font tools.
brew tap bramstein/webfonttools
brew install sfnt2woff
brew install sfnt2woff-zopfli
brew install woff2

# Install other useful binaries.
brew install git

# As I like having stuff a bit easier (and be able to activate my bash profile
# on target server without changing the profile to everybody)
brew install sshrc

# For toggling between light & dark mode of OS X
brew install dark-mode

# Monitors data going through pipe between unix commands
brew install pv

# Batch renaming tool
brew install rename

# Command line interface for testing internet bandwidth using speedtest.net
brew install speedtest_cli

# Installs public key to target server's authorized_keys
brew install ssh-copy-id

# Tool for testing any server port for the SSL/TLS ciphers, etc.
brew install testssl

# Recursive directory listing command
brew install tree

# Commandline tool for doing screenshots of webpages
# brew install webkit2png

# Node.JS, we want to use JavaScript in console!
brew install node

# So we can use Flow JS type-checker
brew install flow

# Heroku toolbelt
brew install heroku

# Well, I don't always get all the British accents
brew install subliminal

# Because reading through man pages is not my favourite pasttime
brew install tldr

# Remove outdated versions from the cellar.
brew cleanup
