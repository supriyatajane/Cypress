import dataset from "../../fixtures/multiple.json"
///<reference types="cypress"/>

describe('verify the fixture file using import',()=>{

dataset.forEach(function(el,index){

    it('Tc-01 verify the using object',()=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(el.first_name)
        cy.get('[name="last_name"]').type(el.last_name)
        cy.get('[name="email"]').type(el.email)
        cy.get('[name="message"]').type(el.message)
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')

    })


})


it.only('Tc-02 verify the data ',()=>{

    dataset.forEach(function(el){
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(el.first_name)
        cy.get('[name="last_name"]').type(el.last_name)
        cy.get('[name="email"]').type(el.email)
        cy.get('[name="message"]').type(el.message)
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')


    })
})

})