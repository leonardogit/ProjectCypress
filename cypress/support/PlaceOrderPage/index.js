const elements = require('./elements').ELEMENTS;
require('cypress-xpath');
import example from '../../fixtures/example.json'

class PlaceOrderPage {
    validatePagePlaceOrder(){
        cy.get(elements.textValidate).contains('Place order')
    }
    populateModal(){
        cy.wait(400)
        cy.get(elements.fillName).type(example.fillName)
        cy.get(elements.fillCountry).type(example.fillCountry)
        cy.get(elements.fillCity).type(example.fillCity)
        cy.get(elements.fillCard).type(example.fillCard)
        cy.get(elements.fillMonth).type(example.fillMonth)
        cy.get(elements.fillYear).type(example.fillYear)
        cy.xpath(elements.buttonPurcharse).click()
    }
    validatePopUpPurchase(){
        cy.get(elements.validatePopUp).contains('Thank you for your purchase!')
    }
}

export default new PlaceOrderPage();