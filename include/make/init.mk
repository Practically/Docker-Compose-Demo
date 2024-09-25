# Sets up your Makefile with some quality-of-life configurations.

# Change the shell that Make uses to bash.
SHELL := bash

# Force Make to run each recipe in one single shell session instead of a new
# session per command.
.ONESHELL:

# Set bash unofficial "strict mode".
.SHELLFLAGS := -eu -o pipefail -c

# Have Make warn us if we try to use undefined variables.
MAKEFLAGS += --warn-undefined-variables

# Stop Make applying loads of built-in magic rubbish. We don't need it!
MAKEFLAGS += --no-builtin-rules

# Silence recursive Make directory notices.
MAKEFLAGS += --no-print-directory
