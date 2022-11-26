///<reference types="cypress"/>
describe('verify the request by request',()=>{

    it('TC-01 verify the GETComment requst',()=>{

        cy.request({
            method:"GET",
            url:'https://jsonplaceholder.cypress.io/comments/1'

        }).then(function({status,statusText}){
            expect(status).eql(200)
            expect(statusText).eql('OK')
        })
    })

    it('TC-02 verify the postComment requst ',()=>{
        cy.request({
            url:'https://jsonplaceholder.cypress.io/comments',
            method:'POST',
            body:{"name": "Using POST in cy.intercept()",
            "email": "hello@cypress.io",
            "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"}
        }).then(function(res){
            cy.log(res)
            expect(res.status).eql(201)
            expect(res.body).have.keys('name','email','id','name')
            expect(res.statusText).eql("Created")
        })
    })

    it('Tc-03 verify the Put comment request',()=>{
        cy.request({
            url:'https://jsonplaceholder.cypress.io/comments/1',
            method:'PUT',
            body:{"name": "Using POST in cy.intercept()",
            "email": "hello@cypress.io",
            "body": "I am learnning js"}
        }).then(function(res){
            cy.log(res)
            expect(res.status).eql(200)
            expect(res.statusText).eql("OK")
        })
    })
})
