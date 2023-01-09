# Gilded Rose - Refactoring Kata / Challenge

<div>
  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
  <img src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white"/>
</div>

<br>

My work on the famous "Gilded Rose" tech test / refactoring kata.

- Language / Tools

  - JavaScript
  - Jest

- Objectives

  - Use a TDD / OOP approach
  - Make it easy to add new shop items
  - Focus on high code quality
    - Readability
    - Reliability
    - Extensibility

- Orginal Specifications

  - Original challenge specifications are in the root directory:
    ```sh
    /GildedRoseRequirements.txt
    ```

- Credit and thanks to [emilybache](https://github.com/emilybache) for the base legacy code available in virtually all programming languages:
  - https://github.com/emilybache/GildedRose-Refactoring-kata

## Design / Planning

![Screenshot](/design/design_1.png)

### Items rules planning

  - Individual item properties daily change rules: [click here](https://github.com/44jovi/gilded-rose-js/blob/main/design/items_planning.md)

## Testing

![Screenshot](/test/test_coverage/test_coverage_0.png)

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

To run the demo script

```sh
node test/test_scripts/script.js
```

It is adapted from the original `texttest_fixture.js` with added items to demonstrate the updated code working.

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
