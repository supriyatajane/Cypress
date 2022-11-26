///<reference types="cypress"/>
describe('verify the Alerts functinality',()=>{
    
    it('Tc_01 verify the window Alert',()=>{
        cy.visit('http://www.akankshatours.in/')
        cy.on('window:alert',function(str){
            expect(str).eql('There is No Service Found for the City')
            return true
        })
        cy.contains('Mumbai - Solapur').click()

    })
    it('Tc_02 verify the alerts in wayAutomation site',()=>{
        cy.visit('https://www.way2automation.com/way2auto_jquery/alert.php#load_box')
        
        cy.get('[src="alert/simple-alert.html"]').then(function(el){
            let body=el.contents().find('body')
            //cy.log(body)
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find('button').contains('Click the button to display an alert box:').click()
            cy.on('window:alert',function(str){
                expect(str).eql('I am an alert box!')
                return true
            })

        })
        
    })

    it('TC-03 verify the alerts in https://testautomationpractice.blogspot.com/',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.contains('Click Me').click()
        cy.on('window.confirm',function(str){
            expect(str).eql('Press a button!')
            return true
        })
        cy.get('#demo').should('have.text','You pressed OK!')
    })
    it.only('TC_04 verify the alerts',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.contains('Click Me').click()
        cy.on('window.alert',function(str){
            expect(str).eql('Press a button!')
            return false
        })
        //cy.get('#demo').should('have.text','You pressed Cancel!')
        
    })
})