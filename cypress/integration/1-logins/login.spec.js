///<reference types="cypress"/>
describe('verify the login functinality',()=>{

    it('Tc-01 valid craditials',()=>{
        cy.visit('http://www.testyou.in/Login.aspx')
        cy.get('#ctl00_CPHContainer_txtUserLogin').type('supriyatajane2015@gmail.com')
        cy.get('#ctl00_CPHContainer_txtPassword').type('9860279886')
        cy.get('[name="ctl00$CPHContainer$btnLoginn"]').click()
        
    })
})