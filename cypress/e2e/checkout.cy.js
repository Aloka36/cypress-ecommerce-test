import checkoutPage from '../PageObject/checkoutPage';

describe('Checkout Product', () => {
  it('Add Product and checkout', () => {
    cy.login()
    cy.addToCart()

    const checkout = checkoutPage.getCheckoutButton();
    if (checkout.should("be.visible")) {
      checkout.click();
      cy.log("checkout Button is Displayed and Clickable ")
    } else {
      cy.log("checkout Button not Displayed")
    }

    const firstname = checkoutPage.getFirstNameInputField();
    if (firstname.should("be.visible")) {
      firstname.focus();
      firstname.type("sample");
      cy.log(firstname + "Input Successful");
    } else {
      cy.log("Input Unsuccessful");
    }

    const lastname = checkoutPage.getLastNameInputField();
    if (lastname.should("be.visible")) {
      lastname.focus();
      lastname.type("sample");
      cy.log(lastname + "Input Successful");
    } else {
      cy.log("Input Unsuccessful");
    }

    const zipcode = checkoutPage.getZipCodeInputField();
    if (zipcode.should("be.visible")) {
      zipcode.focus();
      zipcode.type("sample");
      cy.log(zipcode + "Input Successful");
    } else {
      cy.log("Input Unsuccessful");
    }

    const next = checkoutPage.getContinueButton();
    if (next.should("be.visible")) {
      next.click();
      cy.log("continue Button is Displayed and Clickable ")
    } else {
      cy.log("continue Button not Displayed")
    }

    const finish = checkoutPage.getFinishButton();
    if (finish.should("be.visible")) {
      finish.click();
      cy.log("finish Button is Displayed and Clickable ")
    } else {
      cy.log("finish Button not Displayed")
    }

    const checkoutcomplete = checkoutPage.getCheckoutComplete();
    if (checkoutcomplete
      .should("be.visible")
      .should("have.text", "Checkout: Complete!")
    ) {
      cy.log("Checkout complete")
    } else {
      cy.log("Checkout not complete");
    }

    const ordercomplete = checkoutPage.getOrderComplete();
    if (ordercomplete
      .should("be.visible")
      .should("have.text", "THANK YOU FOR YOUR ORDER")
    ) {
      cy.log("order complete")
    } else {
      cy.log("order not complete");
    }
  })
})