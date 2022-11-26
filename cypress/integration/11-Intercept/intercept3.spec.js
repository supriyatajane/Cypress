///<reference types="cypress"/>
describe('verify the  intercept functinality',()=>{

    it('Tc-01 verify the GetComment  ',()=>{
        //xhr req-api-response-vallidate the respone ui
        cy.intercept({
            method:'GET',
            url:'https://jsonplaceholder.cypress.io/comments/1'
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function({request,response}){
            // cy.log(response)

            // expect(response.statusCode).eql(200)
            // expect(response.statusMessage).eql('OK')
            // expect(response.body).have.keys('body','email','id','name','postId')
            // expect(response.headers.connection).eql("keep-alive")

            cy.log(request)
            expect(request.method).eql("GET")
            expect(request.responseTimeout).to.be.lessThan(50000)
            expect(request.headers.host).eql("jsonplaceholder.cypress.io")
        })
        cy.get('.network-comment').should('contain','laudantium ')
    })

    it('Tc-02 verify the POSTcomment',()=>{
        
    })
})