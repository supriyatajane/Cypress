//<reference types="cypress"/>
describe('Amazon Search functionality',()=>{
    Cypress.on('uncaught:exception',function(el,runnable){
        return false
    })
    it.skip('Dynamic DropDown',()=>{
        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('electronic')
        cy.get('.s-suggestion-ellipsis-direction').each(function(el){
            cy.log(el.text().trim())
            if(el.text().trim()=="electronic toothbrushes"){
                el.click()
               return false 
            }
        })
    })
    it.skip('Dynamic DropDown',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('electronic')
        cy.wait(2000)
        cy.get('.lrtEPN._17d0yO').each(function(el){
            cy.log(el.text().trim())
            if(el.text().trim()=="electronic stove"){
                el.click()
               return false 
            }
        })
    
    })
    it('checkbox',function(){
        cy.visit('http://jqueryui.com/checkboxradio/')
        cy.get('.demo-frame').then(function($iframe){
            let body =$iframe.contents().find('body')
            cy.wrap(body).as("iframeBody")
            cy.get('@iframeBody').find('[for="checkbox-4"]').find('[class="ui-checkboxradio-icon ui-corner-all ui-icon ui-icon-background ui-icon-blank"]').click()
        })
    })
    it('checkbox',function(){
        cy.visit('http://jqueryui.com/checkboxradio/')
        cy.get('.demo-frame').then(function($iframe){
            let body =$iframe.contents().find('body')
            cy.wrap(body).as("iframeBody")
            cy.get('@iframeBody').find('.ui-checkboxradio-label.ui-corner-all.ui-button.ui-widget').each(function(el){
                cy.log(el.text())
                if(el.text().trim()=="5 Star"){
                    el.click()
                    return false
                }
            })
        })
    })
})