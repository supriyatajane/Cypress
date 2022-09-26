///<reference types="cypress"/>

describe('verify the  iframe functinality',()=>{


    beforeEach(function(){
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
    })



    const getFrame=(id)=>{
       return cy.get(`#${id}`).its('0.contentDocument.body').then(cy.wrap)
        
    }

    //using jquery-------contents() method
    it('Tc-01 verify the iframe functinality  with using jqurey',()=>{
        cy.get('#frame').then(function($el){
            let body=$el.contents().find('body')
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find('a[href="index.html"]').should('have.text','Home')
        })
    })

    it('Tc-02 verify the iframe with using javasscript',()=>{
        cy.get('#frame').then(function(el){
            let body=el[0].contentDocument.body
          cy.wrap(body).as('bdy')
          cy.get('@bdy').find('a[href="index.html"]').should('have.text','Home')
        })
    })

    it('Tc-03 verify the ifame using common utility',()=>{
    
        getFrame('frame').find('a[href="index.html"]').should('have.text','Home')
    })
})

//getIframeBody('frame').find('a[href="index.html"]').should('have.text','Home')