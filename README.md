# auxisTest

## Tasks
* A single markdown file with the exploratory testing charters: https://github.com/jejimenez/auxisTest/blob/main/ExploratorySession.md
* A separate folder containing test automation implementation: https://github.com/jejimenez/auxisTest


### Requirements

* Node >= 12
* Git

### Common setup

The Home Challenge from Auxis repository contains the automation test suite to test the Swagger Petstore Sample API. It's developed using cypress.
Follow the steps to install the Swagger Pet Store locally, and run it in port 8050: https://github.com/swagger-api/swagger-petstore

Clone the repo.

```bash
git clone https://github.com/jejimenez/auxisTest.git
cd auxisTest
```

Install the dependencies.

```bash
npm install
```

Run cypress.

```bash
npx cypress open
```
Run the integration specs


### Approach and TechStack

This solution has been provided in order to cover the tests cosidered as the main business line once analyzed the Swagger Pet Store API and the API security endpoints. In this respect the Automation Suite runs the tests to cover below test cases:

* Test Pets
  * Should create a pet
  * Should retrieve the just created pet
  * Should modify the pet
  * Should retrieve the just modified pet
  * Should delete the just created pet
* Test Store errors
  * Should get error when order not found - GET
  * Should get error when order not found - DELETE
* Test Orders and Inventory
  * Should get the inventory
  * Should create an order
  * Should retrieve the just created order
  * Should get the inventory additioned
  * Should delete the just created order
  * Should get the inventory subtracted
* Test User errors
  * Should get error when user not found
  * Should get error invalid loginfailed
* Test Users
  * Should create a list of users
  * Should login with the just created user
  * Should logout
  * Should get a user
  * Should delete a user

This automation suite uses cypress considering my preference to use javascript and the minimalistic configuration, and it's listed in the techStack at YellowPaper.

### Suite Report

* Test Pets *PASSED*
  * Should create a pet  *PASSED*
  * Should retrieve the just created pet *PASSED*
  * Should modify the pet *PASSED*
  * Should retrieve the just modified pet *PASSED*
  * Should delete the just created pet *PASSED*
* Test Store errors 
  * Should get error when order not found - GET *PASSED*
  * Should get error when order not found - DELETE *FAILED*
* Test Orders and Inventory 
  * Should get the inventory *PASSED*
  * Should create an order *PASSED*
  * Should retrieve the just created order *PASSED*
  * Should get the inventory additioned *PASSED*
  * Should delete the just created order *PASSED*
  * Should get the inventory subtracted *PASSED*
* Test User errors 
  * Should get error when user not found *PASSED*
  * Should get error invalid login *FAILED*
* Test Users 
  * Should create a list of users *PASSED*
  * Should login with the just created user *PASSED*
  * Should logout *PASSED*
  * Should get a user *PASSED*
  * Should delete a user *PASSED*

