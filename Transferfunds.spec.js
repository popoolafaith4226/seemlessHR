// cypress/integration/transferFunds.spec.js

import LoginPage from '../POM/LoginPage';
import TransferFundsPage from '../POM/TransferFundsPage';

describe('Transfer funds', () => {
  const loginPage = new LoginPage();
  const transferFundsPage = new TransferFundsPage();

  beforeEach(() => {
    loginPage.visit();
    loginPage.fillLoginForm('TestBank', 'Abcd1234#');
    loginPage.submit();
  });

  it('should transfer funds between accounts', () => {
    transferFundsPage.transferFunds('1000', '18672', '19338');
    transferFundsPage.transferConfirmationMessage().should('have.text', 'Transfer Complete!');
  });
});
