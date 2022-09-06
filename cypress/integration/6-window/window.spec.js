///<reference types="cypress"/>

describe('verify the window command', () => {
    beforeEach(function () {
        cy.visit('http://automationpractice.com/index.php')
    })

    it('Tc-01 verify the the url prperties window object', () => {
        cy.window().should((win) => {
            //console.log(win.location)

            expect(win.location.hash).eql("")
            expect(win.location.host).eql("automationpractice.com")
            expect(win.location.hostname).eq("automationpractice.com")
            expect(win.location.href).eq("http://automationpractice.com/index.php")
        })
    })

    it('Tc-02 verify the reload method window', () => {
        cy.window().should((win) => {
            win.location.reload()
        })
    })

    it('Tc-03 verify the reload method in cypress',()=>{
        cy.reload()
    })

    it('Tc-04 verify the forwrd an back command',()=>{
        cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click()

        cy.window().should((win)=>{
            win.history.back()//win.history.go(-1)
        })
        cy.get('#home-page-tabs > :nth-child(2) > .blockbestsellers').should('be.visible')
        cy.window().should((win)=>{
            win.history.forward()
        })
        cy.get('h2[class="title_block"]').should('be.visible')
    })

    it('Tc-05 verify the forward and backwrd command in cypress',()=>{
        cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click()
       cy.go(-1)
       cy.get('#home-page-tabs > :nth-child(2) > .blockbestsellers').should('be.visible')
       cy.go(1)
       cy.get('h2[class="title_block"]').should('be.visible')

    })

    it('Tc-06 verify the url in cypress command',()=>{
      cy.location('host').should('eq','automationpractice.com')
      cy.location('hostname').should('eq','automationpractice.com')
      cy.location('href').should('eq','http://automationpractice.com/index.php')
      
    })
})