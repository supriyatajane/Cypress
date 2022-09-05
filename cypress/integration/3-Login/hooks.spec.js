///<reference types="cypress"/>

describe('verify the hooks functinality', () => {


    before(function () {
        cy.log('i will run before the program')
    })

    after(function () {
        cy.log('i will run after the program')
    })

    beforeEach(function () {
        cy.log('i will run before every test case')
    })

    afterEach(function () {
        cy.log('i will run after every test case')
    })

    it('Tc-01 first test case', () => {
        cy.log('fiirst test case')
    })

    it('Tc-02  second testcase', () => {
        cy.log('second test case')
    })
})