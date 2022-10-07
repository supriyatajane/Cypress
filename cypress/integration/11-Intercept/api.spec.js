///<reference types="cypress"/>

describe('verify the intercept api ', () => {
    beforeEach(function(){
        cy.visit('https://example.cypress.io/commands/network-requests')
    })

    it('Tc-01 verify the getComment api ', () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        }).then(function (res) {
            expect(res.status).eq(200)
        })
    })

    it('Tc-02verify the PostComment api', () => {
        cy.request({
            method: "POST",
            url: 'https://jsonplaceholder.cypress.io/comments',
            body: {
                "name": "Using POST in cy.intercept()",
                "email": "hello@cypress.io",
                "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"
            }
        }).then(function (res) {
            expect(res.status).eq(201)
        })
    })

    it('Tc-03 verify the UpadteComment api',()=>{
        cy.request({
            method:'PUT',
            url:'https://jsonplaceholder.cypress.io/comments/1',
            body: {
                "name": "Using POST in cy.intercept()",
                "email": "hello@cypress.io",
                "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"
            }
        }).then(function(res){
            expect(res.status).eq(200)
        })
    })
})
