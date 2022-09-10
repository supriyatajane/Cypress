///<reference types="cypress"/>

//in cypress have three type alerts alert ,confirm,prompt

describe('verify the window alert(),confirm(),prompt()',()=>{

    beforeEach(function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })

    it('Tc-01 verify the windows alert()',()=>{

        cy.on('window:alert',function(str){
            expect(str).eql('I am a JS Alert')
            return true

        })
        cy.contains('Click for JS Alert').click()
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })


    it('Tc-02 verify the window confirm() -OK',()=>{
        cy.on('window:confirm',function(str){
            expect(str).eql('I am a JS Confirm')
            return true
        })
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('have.text','You clicked: Ok')
    })

    it('Tc-03 verify the window confirm()-cancel',()=>{
        cy.on('window:confirm',function(str){
            expect(str).eql('I am a JS Confirm')
            return false
        })
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('have.text','You clicked: Cancel')
    })
//stub are user user return some forcefull result
    it('Tc-04 verify the window prompt()-OK',()=>{
       cy.window().then(function(win){
        cy.stub(win,'prompt').returns('hello')
        cy.contains('Click for JS Prompt').click()
       })
        
        cy.get('#result').should('have.text','You entered: hello')
    })

    it('Tc-05 verify the window prompt()-Cancel',()=>{
        cy.window().then(function(win){
            cy.stub(win,'prompt').returns(null)
            cy.contains('Click for JS Prompt').click()

        })
        cy.get('#result').should('have.text','You entered: null')
    })

})