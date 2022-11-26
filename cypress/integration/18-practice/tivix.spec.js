///<reference types="cypress"/>
describe('verify the tivix functinality',()=>{

    it('Tc-01 verify the first form',()=>{
        cy.visit('http://qalab.pl.tivixlabs.com/')
        // cy.get('#country').select('France').should('have.value',"3")

        // cy.get('#city').select('Paris').should('have.value',"3")
        cy.get('#country').select('Germainy').should('have.value', "2")
        cy.get('#city').select('Cracow').should('have.value', "2")

        cy.get('#model').type('quality')
        cy.get('#pickup').type('2022-08-01')
        cy.get('#dropoff').type('2022-08-02')
        cy.get('.btn.btn-primary').click()
        cy.get('.btn.btn-success').eq(2).click()
        cy.get('.btn').click()
        cy.get('#name').type('supriya')
        cy.get('#last_name').type('Tajane')
        cy.get('#card_number').type(1234)
        cy.get('#email').type('supriyatajne2015@gmail.com')
        cy.get('.btn.btn-primary').click()
    })
})