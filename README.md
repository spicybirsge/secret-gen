# Generate

Simple CLI that generates a secure secret for you using the node crypto module.

# Installation

1. Clone this repository
2. Open your terminal and navigate to the root of this project
3. Run `npm i`
4. Run `npm i -g .`

# Usage

- `generate <length>` length is optional if no length the lenght will be 72.

# Notice

The length of the string is not exactly the length provided, because it converts the string to `hex`.

