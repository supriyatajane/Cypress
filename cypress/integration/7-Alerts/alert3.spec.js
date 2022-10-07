///<reference types="cypress"/>

describe('verify the alerts', () => {

    it('Tc-01 verify the Window:alert', () => {
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('#name').type('supriya')
        cy.get('#alertbtn').click()
        cy.on('window:alert', function (str) {
            expect(str).eql('Hello supriya, share this practice page who love to learn automation')
        })

    })


    it.only('tc-02 verify the confirm:alert', () => {
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('#name').type('supriya')
        cy.get('#confirmbtn').click()
        cy.on('window:confirm', function (str) {
            expect(str).eql('Hello supriya, Are you sure you want to confirm?')
            return true
        })
    })
})