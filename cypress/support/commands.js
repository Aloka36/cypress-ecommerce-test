import loginPage from "../PageObject/loginPage";
import productsPage from "../PageObject/productsPage";
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("login", () => {
    cy.visit('https://www.saucedemo.com')

    const usernameInputField = loginPage.getUsernameInputField();
    if (usernameInputField.should("be.visible")) {
      usernameInputField.focus();
      usernameInputField.type("standard_user");
      cy.log(usernameInputField + "Input Successful");
    } else {
      cy.log("Input Unsuccessful");
    }

    const passwordInputField = loginPage.getPasswordInputField();
    if (passwordInputField.should("be.visible")) {
      passwordInputField.focus();
      passwordInputField.type("secret_sauce");
      cy.log(passwordInputField + "Input Successful");
    } else {
      cy.log("Input Unsuccessful");
    }

    const loginButton = loginPage.getLoginButton();
    if (loginButton.should("be.visible")) {
      loginButton.click();
      cy.log("Button is Displayed and Clickable ")
    } else {
      cy.log("Button not Displayed")
    }
});

Cypress.Commands.add("addToCart", () => {
    const AddToCartButton = productsPage.getBikeLightAddToCartButton();
    if (AddToCartButton.should("be.visible")) {
      AddToCartButton.click();
      cy.log("Add to Cart Button is Displayed and Clickable ")
    } else {
      cy.log("Add to Cart Button not Displayed")
    }

    const cartButton = productsPage.getCartButton();
    if (cartButton.should("be.visible")) {
      cartButton.click();
      cy.log("Cart Button is Displayed and Clickable ")
    } else {
      cy.log("Cart Button not Displayed")
    }
})