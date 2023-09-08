const elements = require('./elements').ELEMENTS;
require('cypress-xpath');

class PagePhone {
    clickIphone6(){
        cy.xpath(elements.buttoncardiphone).click()
    }
    clickSonyXperia(){
        cy.xpath(elements.buttoncardNexus).should('be.visible')
        cy.xpath(elements.buttoncardNexus).click()
    }
    validatePageIphone6(){
        cy.contains(elements.validadeTextIphone6,'Iphone 6 32gb')
    }
    validatePageSonyXperia(){
        cy.contains(elements.validadeTextIphone6,'Sony xperia z5')
    }
    clickAddToCart(){
        cy.xpath(elements.clickAddToCart).click()
    }
    validateAlertProductAdd(){
        cy.on('window:alert',(str) => {
            expect(str).to.equal('Product added.')
        })
    }
    clickCart(){
        cy.get(elements.buttonCart).click()
    }
}

export default new PagePhone();