///<reference types="cypress"/>




describe('verify the ifame functinality',()=>{
    Cypress.on('uncaught:exception',function(err,runnable){
        return false
    })

    beforeEach(function(){
    cy.visit('https://demo.automationtesting.in/Frames.html')
    })


    it('Tc-01 verify the single iframe with jquery method',()=>{
        cy.get('#singleframe').each(function($el){
            let body=$el.contents().find('body')
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find('input[type="text"]').type('something')
        })

    })

    it('Tc-02 verify the single ifame with javascript',()=>{
        cy.get('#singleframe').each(function(el){
            let body=el[0].contentDocument.body
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find('input[type="text"]').type('something')
        })
    })
})