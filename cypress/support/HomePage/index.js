const elements = require('./elements').ELEMENTS;
import example from '../../fixtures/example.json'
require('cypress-xpath');

class HomePage {

    acessHomePage(){
        cy.visit(example.link)
    }
    validateHomePage(){
        cy.get(elements.cardBrand).should('exist')
    }
    clickHome(){
        cy.get(elements.cardBrand).click()
    }
}

export default new HomePage();