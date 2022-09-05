///<reference types="cypress"/>

describe('verify the traverse method',()=>{


    beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    })


    it(' Tc-01 To get children of DOM elements, use the .children() command.',()=>{
        cy.get('.traversal-button-states').children().should('have.length',4)
    })


    it('Tc-02 To get the first DOM element within elements, use the .first() command.',()=>{
        cy.get('.traversal-button-states').children().first().should('have.text','Danger')
    })

    it('Tc-03 To get the last DOM element within elements, use the .last() command.',()=>{
        cy.get('.traversal-button-states').children().last().should('have.text','Alert')
    })


    it('Tc-04 To get a DOM element at a specific index, use the .eq() command.',()=>{
        cy.get('.traversal-button-states').children().eq(1).should('have.class','btn btn-outline-warning disabled')
    })


    //sibling methods
    it('Tc-05 To get the next sibling DOM element within elements, use the .next() command.',()=>{
        cy.get('#coffee').next().should('have.text','Tea')
    })

    it('Tc-06 To get the previous sibling DOM element within elements, use the .prev() command.',()=>{
        cy.get('#milk').prev().should('have.attr','id','tea')
    })

    it('Tc-07 To get all sibling DOM elements of elements, use the .siblings() command.',()=>{
        cy.get('#coffee').siblings().should('have.length',4)
    })

    it('Tc-08 To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.',()=>{
        cy.get('#coffee').nextUntil('#sugar').should('have.length',3)
    })

    it('Tc-09 To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.',()=>{
        cy.get('#espresso').prevUntil('#coffee').should('have.length',2)
    })


    it('Tc-10 To get all of the next sibling DOM elements within elements, use the .nextAll() command.',()=>{
        cy.get('#tea').nextAll().should('have.length',3)
    })

    it('Tc-11 To get all previous sibling DOM elements within elements, use the .prevAll() command.',()=>{
        cy.get('#milk').prevAll().should('have.length',2)
    })

    it('Tc-12 To get descendant DOM elements of the selector, use the .find() command.',()=>{
        cy.get('.traversal-buttons').find('a').should('have.text','Link')
        cy.get('.traversal-buttons').find('button').should('have.text','Button')
    })
    it('Tc-13 To get DOM elements that match a specific selector, use the .filter() command.',()=>{
        cy.get('.traversal-button-states').children().filter('.disabled').should('have.text','Warning')
    })

    it('Tc-14 To remove DOM element(s) from the set of elements, use the .not() command.',()=>{
        cy.get('.traversal-button-states').children().not('.disabled').should('have.length',3)
    })
    it('Tc-15 To get parent DOM element of elements, use the .parent() command. ',()=>{
        cy.get('.btn-outline-danger').parent().should('have.class','traversal-button-states')
    })

    it('Tc-16 To get parents DOM element of elements, use the .parents() command.',()=>{
        cy.get('.btn-outline-danger').parents().should('have.length',6)
    })

    it('Tc-17 To get parents DOM element of elements until other element, use the .parentsUntil() command.',()=>{
        cy.get('.traversal-button-states').parentsUntil('.col-sm-12').should('have.length',1)
    })

    it('Tc-17 To get the closest ancestor DOM element, use the .closest() command.',()=>{
        cy.get('#veggie').closest('div').should('have.class','thumbnail')
    })
})