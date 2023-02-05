const loginPage = {
    getUsernameInputField: () =>  cy.get('[data-test="username"]'),
    getPasswordInputField: () => cy.get('[data-test="password"]'),
    getLoginButton: () => cy.get('[data-test="login-button"]'),
    getErrorText: () => cy.get('[data-test="error"]'),
    getIsProductsVisible: () => cy.get('.title')
}
module.exports = loginPage;