///<reference types="cypress"/>
describe('verify the calender functinality', () => {
    it('Tc-01 calender functinality', () => {

        // let date=new Date()
        // cy.log(date)
        // let year=date.getFullYear()
        // let day=date.getMonth()
        // let dayDate=date.getDate()
        // cy.log(year)
        // cy.log(day)
        // cy.log(dayDate)



        let date2 = new Date()
        
         date2.setDate(date2.getDate() + 200)
        let year2 = date2.getFullYear()
        let dayDate2 = date2.getDate()
        let month2=date2.toLocaleString("default",{month:'long'})
        cy.log(year2)
        cy.log(dayDate2)
        cy.log(month2)

        cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
        cy.get('#datepicker').click()

        function selectMonthDate()
        {
            cy.get('.datepicker-switch').first().then(function($el){
                cy.log($el.text())

                if(!$el.text().includes(year2))
                {
                    cy.get('.next').first().click()
                    selectMonthDate()
                }
            })

            cy.get('.datepicker-switch').first().then(function($el){
                cy.log($el.text())

                if(!$el.text().includes(month2))
                {
                    cy.get('.next').first().click()
                    selectMonthDate()
                }
            })
        }
        selectMonthDate()

        function selectDate()
        {
            cy.contains(dayDate2).click()
        }
        selectDate()
    })
})