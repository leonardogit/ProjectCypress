const elements = require('./elements').ELEMENTS;
require('cypress-xpath');
var total;
class CartPage {

    clickRemoveItem() {
        cy.wait(300)
        cy.xpath(elements.clickRemoveItem1).click()
        cy.wait(800)
    }
    clickPlaceOrder() {
        cy.wait(800)
        cy.get(elements.placeOrderButton).click()
    }
    exctractTotal(){
        cy.get(elements.validateTotal).invoke('text').then((total) => {
            cy.log(total)
          })
    }
    clickPurchase(){
        cy.xpath(elements.clickPurcharse).click()
    }
}

export default new CartPage();