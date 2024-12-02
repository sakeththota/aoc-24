# Advent of Code 2024 Solutions

A modified solutions runner for the Advent of Code 2024 problems inspired by [goosewin/aoc2024](https://github.com/goosewin/aoc2024)

## Setup

**Prerequisites**
- Bun
- Node 18+

**Installation**
1. Clone this repository
2. Install dependencies with `bun install` 

## Project Structure
```
.
├── src/
│   ├── <day #>-solution.ts     # solutions
│   ├── <day #>-input           # input files
│   └── lib.ts                  # utilities
├── index.ts                    # CLI
└── package.json
```

## Usage

```bash
# run all available solutions
bun start

# run specified day and part
bun start 1
bun start --p 2
```