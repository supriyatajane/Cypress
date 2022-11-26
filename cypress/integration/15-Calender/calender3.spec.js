///<reference types="cypress"/>
describe('verify the Datepicker functinality',()=>{

    it('Tc-01 verify the red bus functinality',()=>{


        let date=new Date()
        date.setDate(date.getDate()+55)
        let year=date.getFullYear()
        let month=date.toLocaleString('default',{month:'long'})
        let dayDate=date.getDate()
        cy.log(year)
        cy.log(month)
        cy.log(dayDate)
        
        

        cy.visit('https://www.abhibus.com/')
        cy.get('#datepicker1').click()
        function selectMonthDate()
        {
            cy.get('.ui-datepicker-title').first().then(function(el){
                //cy.log(el.text())
                if(!el.text().includes(year))
                {
                cy.get('.ui-datepicker-next.ui-corner-all').click({force: true})
                selectMonthDate()
                }
            })
            cy.get('.ui-datepicker-title').first().then(function(el){
                //cy.log(el.text())
                if(!el.text().includes(month))
                {
                cy.get('.ui-datepicker-next.ui-corner-all').click({force: true})
                selectMonthDate()
                }
            })
        }
        selectMonthDate()

        function Datee()
        {
            cy.contains(dayDate).click({force: true})
        }
        Datee()
    })





    // it.only('to select perticular Date using Datepicker', () => {

    //     // here we writing program for select 7 july 2022
    //     cy.visit('https://www.redbus.com/')
    //     cy.get('.sc-jTzLTM').click()

    //     cy.log('*Onward Date*')

    //     cy.get('#onward_cal').click({ force: true })
    //     cy.get('.sc-csuQGl > :nth-child(3)').click({ force: true })
    //     cy.get(':nth-child(3) > :nth-child(4) > .sc-iRbamj').click({ force: true })
    //     cy.get('input[value="07-Dec-2022"]').should('be.visible')


    // })
})
