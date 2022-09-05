///<reference types="cypress"/>

describe('verify the login command functinality', () => {

    beforeEach(function () {
        //cy.login('Admin','password123')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('Tc-01 verify the login functinality', () => {
        cy.login('Admin', 'password123')
        cy.get('img[alt="client brand banner"]').should('be.visible')
    })

    it('Tc-02 ,verify the Pim', () => {
        cy.login('Admin', 'password123')
        cy.url().should('include', 'pim')
        //cy.get("h6[class]").should('have.text',"PIM")
    })

    it('Tc-02 invalid craditials', () => {
        cy.login('Admin', 'password1233')
        cy.get('[class="oxd-alert-content oxd-alert-content--error"]').should('be.text', 'Invalid credentials')

    })
})