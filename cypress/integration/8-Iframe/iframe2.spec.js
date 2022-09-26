///<reference types="cypress"/>


describe('verify the iframe functinality',()=>{
    beforeEach(function(){
        cy.visit('https://the-internet.herokuapp.com/iframe')

    })

    let getIfame=(id)=>{
       return cy.get(`#${id}`).its('0.contentDocument.body').then(cy.wrap)
    }

    it('Tc-01 verify the ifame functinality using jqurey',()=>{
        cy.get('#mce_0_ifr').then(function($el){
            let body=$el.contents().find('body')
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find('p').should('be.visible').and('have.text','Your content goes here.')
        })
    })

    it('Tc-02 verify the iframe functinality using javascript',()=>{
        cy.get('#mce_0_ifr').then(function(el){
            let body=el[0].contentDocument.body
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find('p').should('be.visible').and('have.text','Your content goes here.')
        })
    })


    it('Tc-03 verify the iframe using common utility',()=>{
      getIfame('mce_0_ifr').find('p').should('be.visible').and('have.text','Your content goes here.')
    })

    it('Tc-02 verify the iframe functinality using javascript',()=>{
        cy.get('#mce_0_ifr').then(function(el){
            let body=el[0].contentDocument.body
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find('p').clear()
            cy.get('@bdy').find('p').type('Automation Testing')
        })
    })

})