# Gilded Rose

This is my work on the famous "Gilded Rose" tech test / kata.

- Language
  - JavaScript (Node.js) with Jest for testing

- Objectives
  - Use a TDD / OOP approach
  - Make it easy to add new shop items
  - Focus on high code quality
    - Readability
    - Reliability
    - Extensibility

- Credit and thanks to emilybache for the base legacy code:
  - https://github.com/emilybache/GildedRose-Refactoring-kata

## Design / Planning

![Screenshot](/design/design_1.png)

## Getting started

Clone repo

```sh
git clone https://github.com/44jovi/gilded-rose-js.git
```

Install dependencies

```sh
npm install
```

## Demo

To run the demo script (adapted from original)

```sh
node test/test_scripts/script.js
```

## Running tests

To run all tests

```sh
npm test
```

To run all tests in watch mode

```sh
npm run test:watch
```

To generate test coverage report

```sh
npm run test:coverage
```

To run the linter (eslint)

```sh
npm run test:lint
```
