
# Cypress Testing Solution

This repository contains a comprehensive Cypress testing setup with CI/CD integration using GitHub Actions. The setup includes running tests with specific tags, parallel execution, and testing across multiple browsers (Chrome, Firefox, and Edge).

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Cypress Grep Plugin](#cypress-grep-plugin)
- [GitHub Actions CI/CD](#github-actions-cicd)
    - [Running Tests with Specific Tags](#running-tests-with-specific-tags)
    - [Parallel Execution Across Browsers](#parallel-execution-across-browsers)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
```

## Project Structure

```
your-repo/
├── .github/
│   └── workflows/
│       ├── cypress-grep.yml
│       └── cypress-browsers.yml
├── cypress/
│   └── e2e/
│       ├── spec-1.cy.js
│       ├── spec-2.cy.js
│       └── spec-3.cy.js
├── node_modules/
├── package.json
├── package-lock.json
└── cypress.config.js (if using Cypress v10 or later)
```

## Cypress Grep Plugin

This project uses the [Cypress Grep Plugin](https://github.com/cypress-io/cypress-grep) to filter and run tests with specific tags.

### Example Scripts

- Run all tests:
  ```bash
  npm run all
  ```

- Run tests with `@web` tag:
  ```bash
  npm run web
  ```

- Run tests with `@social` tag:
  ```bash
  npm run social
  ```

- Run tests with `@ecom` tag:
  ```bash
  npm run ecom
  ```

## GitHub Actions CI/CD

### Running Tests with Specific Tags

The `cypress-grep.yml` workflow allows you to manually trigger tests with specific tags using the workflow dispatch event.

```yaml
name: Cypress Grep Tests

on:
  workflow_dispatch:
    inputs:
      tag:
        description: 'Tag to run'
        required: true
        default: '@web'

jobs:
  cypress-grep-run:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '14'

      - name: Install dependencies
        run: npm install

      - name: Run Cypress tests with grep
        run: |
          if [ "${{ github.event.inputs.tag }}" == "@web" ]; then
            npm run web
          elif [ "${{ github.event.inputs.tag }}" == "@social" ]; then
            npm run social
          elif [ "${{ github.event.inputs.tag }}" == "@ecom" ]; then
            npm run ecom
          else
            npm run all
          fi
```

### Parallel Execution Across Browsers

The `cypress-browsers.yml` workflow runs Cypress tests in parallel across different browsers (Chrome, Firefox, and Edge).

```yaml
name: Cypress Browser Tests

on: [push, pull_request]

jobs:
  cypress-run:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        browser: [chrome, firefox, edge]
        spec-file: [spec-1.cy.js, spec-2.cy.js, spec-3.cy.js]

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '14' # Specify the Node.js version you need

      - name: Install dependencies
        run: npm install

      - name: Run Cypress tests on ${{ matrix.browser }}
        run: |
          npx cypress run --browser ${{ matrix.browser }} --spec "cypress/e2e/${{ matrix.spec-file }}"
        env:
          # Set the necessary environment variables here if needed
```

## Author

Lasitha Wijenayake(lasithdilshan20@gmail.com)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
