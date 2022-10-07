///<reference types="cypress"/>
describe('verify the calender functinality',()=>{
    Cypress.on('uncaught:exception',function(err,runnable){
        return false
    })

    it('Tc-01 verify the calender',()=>{

        let date=new Date()
        date.setDate(date.getDate()+300)
        let year=date.getFullYear()
        let month=date.toLocaleString('default',{month:'long'})
        let dayDate=date.getDate()
        cy.log(year)
        cy.log(month)
        cy.log(dayDate)

        cy.visit('https://demo.automationtesting.in/Datepicker.html')

        cy.get('#datepicker1').click()
        function selectMonthDate()
        {
            cy.get('.ui-datepicker-title').then(function($el){
                cy.log($el.text())
                if(!$el.text().includes(year))
                {
                    cy.get('.ui-datepicker-next.ui-corner-all').click()
                    selectMonthDate()
                }
            })

            cy.get('.ui-datepicker-title').then(function($el){
                cy.log($el.text())
                if(!$el.text().includes(month))
                {
                    cy.get('.ui-datepicker-next.ui-corner-all').click()
                    selectMonthDate()
                }
            })
        }
        selectMonthDate()

        function selectDate()
        {
            cy.contains(dayDate).click()
        }
        selectDate()

        
    })




    it.only('Tc-02 verify the calender2',()=>{
        let date=new Date()
        date.setDate(date.getDate()+400)
        let year=date.getFullYear()
        let month=date.toLocaleString('default',{month:'long'})
        let dayDate=date.getDate()
        cy.log(year)
        cy.log(month)
        cy.log(dayDate)

        cy.visit('https://demo.automationtesting.in/Datepicker.html')
        cy.get('#datepicker2').click()

        function selectMonthDate()
        {
            cy.get('.datepick-cmd.datepick-cmd-today ').then(function($el){
                //cy.log($el.text())

                if($el.text().includes(year))
                {
                    cy.get('.datepick-cmd.datepick-cmd-next ').click()
                    selectMonthDate()
                }
            })

            cy.get('.datepick-cmd.datepick-cmd-today').then(function($el){
                //cy.log($el.text())

                if($el.text().includes(month))
                {
                    cy.get('.datepick-cmd.datepick-cmd-next').click()
                    selectMonthDate()
                }
            })
        }
        selectMonthDate()

        function selectDate()
        {
            cy.contains(dayDate).click()
        }
     selectDate()
     
    })
})