import productsPage from "../PageObject/productsPage";

describe('Add Product to Cart', () => {
  beforeEach(() => {
    cy.login();
  })
  it('Add Sauce Labs Bike Light to cart', () => {

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

    const item = productsPage.getCartItem();
    item.should("be.visible")

    const itemName = productsPage.getCartItemName();
    itemName.should("have.text", "Sauce Labs Bike Light")
  })

  it('Remove product from cart', () => {
    cy.addToCart()

    const removeItem = productsPage.getRemoveButton();
    if (removeItem.should("be.visible")) {
      removeItem.click();
      cy.log("Remove Button is Displayed and Clickable ")
    } else {
      cy.log("Remove Button not Displayed")
    }

    const item = productsPage.getCartItem();
    item.should("not.exist")
  })

})

  
