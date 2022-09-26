///<reference types="cypress"/>
describe('verify the dynamic dropdown', () => {
    Cypress.on('uncaught:exception', function (err, runnable) {
        return false
    })
    it('tc-01 verify th amzon website', () => {
        cy.visit('https://www.amazon.in')
        cy.get('#twotabsearchtextbox').type('iphone')
        cy.get('.s-suggestion.s-suggestion-ellipsis-direction').each(function (el) {
            cy.log(el.text().trim())
            if (el.text().trim() == 'iphone 14') {
                el.click()
                return false
            }
        })
    })


    it('Tc-02 verify the filpkart website', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('electric')
        cy.wait(2000)
        cy.get('.lrtEPN._17d0yO').each(function (el) {
            cy.log(el.text().trim())
            if (el.text().trim() == 'electric cycle') {
                el.click()
                return false
            }
        })
    })


    it('Tc-03 verify the automation site', () => {
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.get('#autocomplete').type('india')
        //cy.wait(2000)
        cy.get('.ui-menu-item-wrapper').each(function (el) {
            cy.log(el.text().trim())

            if (el.text().trim() == 'india') {
                el.click()
                return false
            }
        })
    })

        it.only('Tc-04 verify the dropdown select format', () => {
            cy.visit('https://codenboxautomationlab.com/practice/')
            cy.get('#dropdown-class-example').select('Selenium').should('have.value','option1')
            
        })
    



})
