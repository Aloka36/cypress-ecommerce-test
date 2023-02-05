const checkoutPage = {
    getCheckoutButton: () => cy.get('[data-test="checkout"]'),
    getFirstNameInputField: () => cy.get('[data-test="firstName"]'),
    getLastNameInputField: () => cy.get('[data-test="lastName"]'),
    getZipCodeInputField: () => cy.get('[data-test="postalCode"]'),
    getContinueButton: () => cy.get('[data-test="continue"]'),
    getFinishButton: () => cy.get('[data-test="finish"]'),
    getCheckoutComplete: () => cy.get('.title'),
    getOrderComplete: () => cy.get('.complete-header')
}
module.exports = checkoutPage;