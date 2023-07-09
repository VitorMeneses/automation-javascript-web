import './commands'
const registerCypressGrep = require('@cypress/grep')
registerCypressGrep()

import '@shelex/cypress-allure-plugin';
require('@shelex/cypress-allure-plugin');
import 'cypress-plugin-api';

Cypress.on('uncaught:exception', (err, runnable) => {
  console.log(err);
  return false;
})