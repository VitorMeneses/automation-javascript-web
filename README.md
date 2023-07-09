# Automation of web tests using cypress with javascript

- Web tests on the payment flow of a marketplace.
- The scenarios are in Portuguese, but the project is in English following the norms and best practices of quality of automation-oriented software.

## Development Pattern

> Page Objects

## Prerequisites

- Necessary installation of NodeJS:
https://nodejs.org/en

## Installation

> Necessary to clone the project, use git clone with project url provided by git

- Install dependencies present in the project:
`npm install`

### Run the tests
```
$ npx cypress run
```
#### Run the tests in headless mode in a specific environment

#### PROD:
```
$ npx cypress run -e configEnvironment=prod
```

#### QA:
> "O Ambiente de QA está setado como default na execução"

### Run a group of tests passing a reference tag
```
$ npx cypress run -e grepTags='yourTag' 
```
> Example: 
```
$ npx cypress run -e grepTags=checkout configEnvironment=prod
```

### Run the tests with interface, cypress playground.

```
$ npx cypress open
```

or 

```
$ npx cypress open -e configEnvironment=prod
```

---

### Run the tests with different browsers: 
    After opening Cypress, select the E2E option and then choose the browser you want to run the tests.
