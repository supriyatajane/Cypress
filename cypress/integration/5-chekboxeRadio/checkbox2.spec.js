///<reference types="cypress"/>



describe('verify the chkboxes and radio functinality',()=>{

    beforeEach(function(){
        cy.visit('https://www.ironspider.ca/forms/checkradio.htm')
    })

    it('Tc-01 verify the one chek functinality',()=>{
        cy.get('input[value="red"]').check().should('be.checked')
        cy.get('input[type="checkbox"]').first().check().should('be.checked')
        cy.get('input[value="red"]').uncheck().should('not.be.checked')
    })

    it('Tc-02  verify the click functinality',()=>{
        cy.get('input[value="red"]').click().should('be.checked')
        //cy.get('input[type="checkbox"]').first().click().should('be.checked')
        cy.get('input[value="red"]').click().should('not.be.checked')
    })

    it('Tc-03 verify the chk functinality multiple chkboxes',()=>{
        cy.get('input[type="checkbox"]').each(function(el){
            cy.wrap(el).as('el')
            //cy.wrap(el)
            cy.get('@el').check().should('be.checked')
        })
    })

    it('Tc-04 verify the chkboxes functinality eith array',()=>{
        cy.get('input[type="checkbox"]').check(["red","yellow","blue","orange","green","purple"])
        cy.get('input[type="checkbox"]').uncheck(["red","yellow","blue","orange","green","purple"])
    })
})