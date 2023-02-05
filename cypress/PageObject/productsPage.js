const productsPage = {
    getBikeLightAddToCartButton: () => cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]'),
    getCartButton: () => cy.get('.shopping_cart_link'),
    getCartItem: () => cy.get('.cart_item'),
    getCartItemName: () => cy.get('.inventory_item_name'),
    getRemoveButton: () => cy.get('[data-test="remove-sauce-labs-bike-light"]')
}
module.exports = productsPage;