///<reference types="cypress"/>

describe('verify the intercept by using mock the data', () => {

    it('Tc-01 verify the data GetCommnt method', () => {

        cy.intercept({
            method: 'GET',
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        }).as('GetComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@GetComment').then(function ({ response, request }) {
            //cy.log(res.response.body.body)
            cy.log(response, request)

            cy.get('.network-comment').should('have.text', response.body.body)
            expect(request.method).to.be.eql("GET")
            expect(response.statusCode).eq(200)

        })
    })


    it('Tc-02 verify the data GetCommnt method', () => {

        cy.intercept({
            method: 'GET',
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        },
            {
                body: {
                    body: "hello",
                    email: "Eliseo@gardner.biz",
                    id: 1,
                    name: "id labore ex et quam laborum",
                    postId: 1,
                    job: 'TESTER'

                }
            }).as('GetComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@GetComment').then(function ({ response, request }) {
            //cy.log(res.response.body.body)
            cy.log(response, request)
            expect(response.body).have.keys(['body', 'email', 'id', 'name', 'postId', 'job'])

            cy.get('.network-comment').should('have.text', response.body.body)
            expect(request.method).to.be.eql("GET")
            expect(response.statusCode).eq(200)

        })
    })

    it('Tc-03 verify the postComment  xhr request', () => {

        cy.intercept({
            method: 'POST',
            url: 'https://jsonplaceholder.cypress.io/comments'

        }).as('postComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
        cy.wait('@postComment').then(function ({ response, request }) {
            cy.log(response)
            cy.log(request)
            expect(response.statusCode).eql(201)
            expect(request.method).eql('POST')
            cy.get('.network-post-comment').should('have.text', 'POST successful!')
        })
    })

    it.only('Tc04 verify the put xhr request', () => {
        cy.intercept({
            method: 'PUT',
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        }).as('putComment')
        
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Update Comment').click()
        cy.wait('@putComment').then(function ({response,request}) {
            //cy.log(response)
            //cy.log(request)
           expect(request.method).eql("PUT")
           expect(response.statusCode).eql(200)
           expect(response.body).have.keys(['body','email','id','name'])
        })
    })




})