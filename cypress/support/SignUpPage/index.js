const elements = require('./elements').ELEMENTS;
import { v4 as uuidv4 } from 'uuid';
require('cypress-xpath');

const myuuid = uuidv4();

class SignUpPage {
    clickSignUp() {
        cy.get(elements.buttonSignUp).click()
    }
    validateSignUpPage() {
        cy.get(elements.textValideSignUp).should('exist')
    }
    fillUserName() {
        cy.wait(350)
        cy.get(elements.inputUserName).click().type(myuuid)
    }
    fillUserInvalid() {
        cy.wait(350)
        cy.get(elements.inputUserName).click().type('leotest')
    }
    fillPassword(){
        cy.get(elements.inputPassword).click().type(myuuid)
    }
    clickRegister(){
        cy.xpath(elements.buttonRegister).click()
    }
    validateAlertSucess(){
        cy.on('window:alert',(str) => {
            expect(str).to.equal('Sign up successful.')
        })
    }
    validateAlertError(){
        cy.on('window:alert',(str) => {
            expect(str).to.equal('This user already exist.')
        })
    }
}

export default new SignUpPage();