///<reference types="cypress"/>
describe('verify the add to cart functinality',()=>{

    it('Tc-01 verify ADD To Cart',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('br')
        cy.get('.search-keyword').click()
        cy.get('.product-name').each((el,i)=>{
            let text=el.text()
            //cy.log(text)
            if(text=='Brocolli - 1 Kg')
            {
                cy.get('[class="product-action"] button').eq(i).click()
            }
            cy.get('[class="cart-icon"]').click()
           
            cy.contains('PROCEED TO CHECKOUT').click({force: true})
            //cy.get('[class="brand greenLogo"]').should('be.visible')
        })

    } )
})