///<reference types="cypress"/>

describe('verify the intercept functinality', () => {
    it('Tc-01 verify the getComment functinality', () => {
        cy.intercept({
            method: "GET",
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment')
        cy.get('.network-comment').should('contain', 'laudantium enim quasi est quidem ')
    })


    it('Tc-02 verify the PostComment functinality', () => {
        cy.intercept({
            method: "POST",
            url: 'https://jsonplaceholder.cypress.io/comments'
        }).as('postComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
        cy.wait('@postComment')
        cy.get('.network-post-comment').should('have.text', 'POST successful!')
    })


    it('Tc-03 verify the UpateComment functinality',()=>{
        cy.intercept({
            method:"PUT",
            url:'https://jsonplaceholder.cypress.io/comments/1'
        }).as('updateComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Update Comment').click()
        cy.wait('@updateComment')
        

    })
})