///<reference types="cypress"/>

describe('verify the differen functinality',()=>{

    it('Tc-01 verify sucessful functinality',()=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('supriya')
        cy.get('[name="last_name"]').type('tajane')
        cy.get('[name="email"]').type('supriya@gmail.com')
        cy.get('[name="message"]').type('hiii')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')

    })

    it('Tc-02 verify the functinality invalid email id',()=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('supriya')
        cy.get('[name="last_name"]').type('tajane')
        cy.get('[name="email"]').type('supriyagmail.com')
        cy.get('[name="message"]').type('hiii')
        cy.get('[type="submit"]').click()
        cy.get('body').should('contain',' Error: Invalid email address')
    })

    it('Tc-03 verify the reset functinality',()=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('supriya')
        cy.get('[name="last_name"]').type('tajane')
        cy.get('[name="email"]').type('supriyagmail.com')
        cy.get('[name="message"]').type('hiii')
        cy.get('[type="reset"]').click()



        cy.get('[name="first_name"]').should('have.text','')
        cy.get('[name="last_name"]').should('have.text','')
        cy.get('[name="email"]').should('have.text','')
        cy.get('[name="message"]').should('have.text','')
        




    })
    it('Tc-04 verify the contact us text',()=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="contactme"]').should('be.visible')
        cy.get('[name="contactme"]').should('be.text','CONTACT US')
    })


    it('Tc-05 verify the contact us text functinality',()=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="contactme"]').as('con')
        cy.get('@con').should('be.visible')
        cy.get('@con').should('be.text','CONTACT US')

    })
})