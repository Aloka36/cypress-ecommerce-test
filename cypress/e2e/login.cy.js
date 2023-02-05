import loginPage from "../PageObject/loginPage"

describe('Login Test cases', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  it("Enter Incorrect email address and password", () => {

    const usernameInputField = loginPage.getUsernameInputField();
    if (usernameInputField.should("be.visible")) {
      usernameInputField.focus();
      usernameInputField.type("sample");
      cy.log(usernameInputField + "Input Successful");
    } else {
      cy.log("Input Unsuccessful");
    }

    const passwordInputField = loginPage.getPasswordInputField();
    if (passwordInputField.should("be.visible")) {
      passwordInputField.focus();
      passwordInputField.type("sample-password");
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

    cy.wait(2000);
    const  error = loginPage.getErrorText();
  
    if( error
      .should("be.visible")
      .should("have.text","Epic sadface: Username and password do not match any user in this service"))
   
     {
       cy.log("Error Text is Displayed   ")
     }else{
       cy.log("Error Text not displayed");
     }
  })

  it("Enter Correct email address and password", () => {

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

    cy.wait(2000);
    const productsVisible = loginPage.getIsProductsVisible();
    if( productsVisible
      .should("be.visible")
      .should("have.text", "Products")
      )
      {
           cy.log("User Logged in")
         }else{
           cy.log("User not Logged in");
         } 
  })

})