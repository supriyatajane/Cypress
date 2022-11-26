///<reference types="cypress"/>
describe('verify the chekboxes and radio buttons functinality',()=>{
    beforeEach(function(){
        cy.visit('https://codenboxautomationlab.com/practice/')
    })
    it('Tc_01 verify the radio buttons',()=>{
         
        cy.get('input[value="radio1"]').check().should('be.checked')
        cy.get('input[value="radio2"]').should('not.be.checked')
    })

    it('TC-02 verify the radio button with click',()=>{
       
        cy.get('input[value="radio1"]').click().should('be.checked')
        cy.get('input[value="radio2"]').should('not.be.checked')
    })
    it('Tc-03 verify all the radio button',()=>{
        
        cy.get('#radio-btn-example').find('input').each(function(el){
            cy.log(el)
            cy.wrap(el).as('chk')
            cy.get('@chk').check().should('be.checked')
        })
    })

    it('Tc-04 verify the chekboxes using click',()=>{
        cy.get('#checkBoxOption1').click().should('be.checked')
        cy.get('#checkBoxOption1').click().should('not.be.checked')


    })
    it('Tc-05 verify the chekbox using chcek ',()=>{
        cy.get('#checkBoxOption2').check().should('be.checked')
        cy.get('#checkBoxOption2').uncheck().should('not.be.checked')

    })
    it.only('Tc-06 verify the selcted chk boxes',()=>{
        cy.get('#checkbox-example').find('input').check(['option1','option2']).should('be.checked')
        cy.get('#checkbox-example').find('input').uncheck(['option1','option2']).should('not.be.checked')
    })


    
})