///<reference types="cypress"/>

describe('verify the radio button and chekboxes functinality',()=>{

beforeEach(function(){
    cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
})
    it('Tc-01 verify the one click functinality chekboxes',()=>{
        cy.get('[value="option-3"]').click().should('not.be.checked')
        cy.get('[value="option-3"]').click().should('be.checked')

    })



    it('Tc-02 verify the one chek functinality chekboxes',()=>{
        cy.get('[value="option-3"]').check().should('be.checked')
        cy.get('[value="option-3"]').uncheck().should('not.be.checked')
    })


    it('Tc-03  verify the multiple chekboxes chek unchek functinality ',()=>{

        cy.get('input[type="checkbox"]').each(function(el){
            //cy.log(el)
            cy.wrap(el).as('ele')
            cy.get('@ele').check().should('be.checked')
            cy.get('@ele').uncheck().should('not.be.checked')
        })
    })

    it('Tc-04 verify the click() functinality with one radio button',()=>{
        cy.get('input[value="green"]').click().should('be.checked')
        cy.get('input[value="blue"]').should('not.be.checked')
    })


    it('Tc-05 verify the check() functinality with one radio button',()=>{
        cy.get('input[value="green"]').check().should('be.checked')
        cy.get('input[value="blue"]').should('not.be.checked')

    })


    it('Tc-06 verify the check() functinality to every radio button',()=>{

        cy.get('[name="color"]').each(function(el){
            cy.wrap(el).as('chk')
            cy.get('@chk').check().should('be.checked')
        })
    })


    it('Tc-07 verify the disble functinality to radio button',()=>{

        cy.get('input[value="cabbage"]').should('be.disabled')
    })

    it('Tc-08 verify  enable functinality to nradio button',()=>{
        cy.get('input[value="lettuce"]').should('be.enabled')
    })

    it('Tc-09 verify the chekboxes functinality',()=>{
        cy.get('input[type="checkbox"]').check(['option-1','option-2','option-3','option-4'])
    })

    it('Tc-10 verify the dropdown functinality',()=>{
        cy.get('#dropdowm-menu-1').select('C#').should('have.value','c#')
    })
    it('Tc-11 verify the dropdown functinality',()=>{
        cy.get('#dropdowm-menu-2').select('Maven').should('have.value','maven')
    })
    
})