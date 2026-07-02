# Merge Project

A small TypeScript project that implements a `merge` function for three integer collections and includes unit tests using Jest.

## Requirements

- Node.js (v18 or later recommended)
- npm

## Setup

Install project dependencies:

```bash
npm install
```

## Run

Execute the sample program:

```bash
npm run start
```

## Run Unit Tests

Execute all unit tests:

```bash
npm test
```

## Project Structure

```
merge-project/
├── src/
│   └── index.ts           # Merge implementation
├── tests/
│   └── merge.test.ts      # Unit tests
├── jest.config.js         # Jest + ts-jest configuration
├── package.json           # Scripts and dependencies
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## Algorithm

The solution takes advantage of the input constraints:

- `collection1` is sorted in ascending order.
- `collection2` is sorted in descending order.
- `collection3` is sorted in ascending order.

Instead of sorting all values again, the implementation:

1. Merges `collection1` with `collection2` by traversing `collection2` from the end.
2. Merges the intermediate result with `collection3`.

No built-in sorting function (such as `Array.prototype.sort`) is used.

## Complexity

- **Time Complexity:** `O(n1 + n2 + n3)`
- **Space Complexity:** `O(n1 + n2 + n3)`