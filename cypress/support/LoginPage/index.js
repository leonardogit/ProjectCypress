const elements = require('./elements').ELEMENTS;
import example from '../../fixtures/example.json'
require('cypress-xpath');

class LoginPage {
    clickLogIn() {
        cy.get(elements.buttonLogIn).click()
    }
    validatePageLogIn() {
        cy.get(elements.modalLogIn).should('exist')
    }
    fillUserNameLogIn() {
        cy.wait(350)
        cy.get(elements.userNameInput).click().type(example.userName)
    }
    fillPasswordLogIn() {
        cy.get(elements.passwordInput).click().type(example.password)
    }
    fillPasswordLogInInvalid() {
        cy.get(elements.passwordInput).click().type(example.passwordInvalid)
    }
    clickFinishLogIn() {
        cy.xpath(elements.buttonFinishLogIn).click()
    }
    validaeErrorLoginPasswordInvalid() {
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Wrong password.')
        })
    }
    validatePageWelcomeUser() {
        cy.wait(500)
        cy.contains(elements.textValidateWelcome, 'Welcome 123')
    }
    LogOut() {
        cy.get(elements.buttonLogOut).click()
    }
    clickPhones(){
        cy.wait(500)
        cy.xpath(elements.buttonPhones).click()
        cy.wait(500)
    }
}

export default new LoginPage();