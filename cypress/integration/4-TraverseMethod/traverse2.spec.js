///<reference types="cypress"/>
describe('verify the kesri travels traverse methods', () => {

    it('Tc_01 To get children of DOM elements, use the .children() command.', () => {
        cy.visit('https://www.kesari.in/')
        cy.get('.menu.list-unstyled.mb-0').children().should('have.length', 11)
    })

    it('Tc_02 To get the first DOM element within elements, use the .first() command.', () => {
        cy.visit('https://www.kesari.in/')
        cy.get('.menu.list-unstyled.mb-0').children().first().should('have.class', 'group-tour-menu')
    })

    it('TC-03 To get the last DOM element within elements, use the .last() command.', () => {
        cy.visit('https://www.kesari.in/')
        cy.get('.menu.list-unstyled.mb-0').children().last().should('have.class', 'menu-item-has-children')
    })
    it('TC-04 To get a DOM element at a specific index, use the .eq() command.', () => {
        cy.visit('https://www.kesari.in/')
        cy.get('.menu.list-unstyled.mb-0').children().eq(3).should('have.attr', 'id', 'tailor-made-holidays')
    })

    // Siblings
    it('TC-05 To get the previous sibling DOM element within elements, use the .prev() command.',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('#tailor-made-holidays').prev().should('have.contain','Economy')
    })
    it('Tc-06 To get the next sibling DOM element within elements, use the .next() command.',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('#tailor-made-holidays').next().should('have.contain','Corporate')
    })

    it('Tc-07 To get all sibling DOM elements of elements, use the .siblings() command.',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('#tailor-made-holidays').siblings().should('have.length',10)
    })
    it('Tc-08 To get all of the next sibling DOM elements within elements, use the .nextAll() command.',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('#tailor-made-holidays').nextAll().should('have.length',7)
    })
    it('Tc-09 To get all previous sibling DOM elements within elements, use the .prevAll() command.',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('#tailor-made-holidays').prevAll().should('have.length',3)
    })

    it('Tc-10 To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('#tailor-made-holidays').prevUntil('.group-tour-menu').should('have.length',2)
    })
    it('Tc_11 To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('.group-tour-menu').nextUntil('#tailor-made-holidays').should('have.length',2)
    })
    it('Tc-12 To get DOM elements that match a specific selector, use the .filter() command.',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('.group-tour-menu').siblings().filter('.tailor-made').should('have.id','tailor-made-holidays')
    })
    it('Tc_13 To remove DOM element(s) from the set of elements, use the .not() command.',()=>{
        cy.get('.group-tour-menu')
        .siblings()
        .not('.tailor-made')
        .should('have.length',9)
    })
    it('TC_14 To get descendant DOM elements of the selector, use the .find() command.',()=>{
        cy.get('#main-menu').find('.menu-item-has-children').should('have.length',10)
    })

    it('TC_15 To get parent DOM element of elements, use the .parent() command.',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('.menu.list-unstyled.mb-0').parent().should('have.id','main-menu')
    })
    it('Tc_16 To get parents DOM element of elements, use the .parents() command.',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('.menu.list-unstyled.mb-0').parents().should('have.length',7)
        })
    it.only('Tc-17 To get parents DOM element of elements until other element, use the .parentsUntil() command.',()=>{
        cy.visit('https://www.kesari.in/')
        cy.get('#main-menu').parentsUntil('div[class="topnav__top"]').should('have.length',6)
    })

})