# Generate

Simple CLI that generates a secure secret for you using the node crypto module.

# Installation

To install this simply run `npm i -g secret-gen-cli`

# Usage

- `generate <length>` length is optional if no length the lenght will be 72.

# Notice

The length of the string is not exactly the length provided, because it converts the string to `hex`.

