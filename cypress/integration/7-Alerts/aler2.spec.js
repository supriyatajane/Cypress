///<reference types="cypress"/>
describe('verify the window alert(),confirm(),prompt()', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    beforeEach(function () {
        cy.visit('https://demo.automationtesting.in/Alerts.html')
    })

    it('Tc-01 verify the window alert()', () => {
        cy.on('window:alert', function (str) {
            expect(str).eql('I am an alert box!')
            return true
        })
        cy.get('[id="OKTab"] > button').click()
    })

    it('Tc-02 verify the window confirm()-OK',()=>{
        
        cy.on('window:confirm',function(str){
            expect(str).include('Press a Button !')
            return true
        })
        cy.contains('Alert with OK & Cancel ').click()
        cy.get('[id="OKTab"] > button').click()

        //cy.get('p[id="demo"]').should('have.text','You pressed Ok')
    })


    it('Tc-03 the window confirm()-cancel() ',function(){
        cy.on('window:confirm',function(str){
            expect(str).include('Press a Button !')
            return false
        })
        cy.contains('Alert with OK & Cancel ').click()
        cy.get('[id="CancelTab"]>button').click()
        cy.get('#demo').should('have.text','You Pressed Cancel')

    })
    it('Tc-04 the window prompt()-OK',()=>{
        cy.window().then(function(win){
            cy.stub(win,'prompt').returns('Automation Testing user')
        
            cy.contains('Alert with Textbox ').click()
            cy.get('[id="Textbox"]>button').click()
    
    
        })
        cy.get('#demo1').should('have.text','Hello Automation Testing user How are you today')
        
    })

    it('Tc-05 verify the window prompt()-Cancel',()=>{


        cy.window().then(function(win){
            cy.stub(win,'prompt').returns(null)
        
            cy.contains('Alert with Textbox ').click()
            cy.get('[id="Textbox"]>button').click()
    
        })
       // cy.get('#demo1').should('have.text','Hello Automation Testing user How are you today')
        
    })
})