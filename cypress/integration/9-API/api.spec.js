///<reference types="cypress"/>

describe('verify the api functinality',()=>{

    it('Tc-01 verify the GET method with regres api',()=>{
        cy.request({
            method:"GET",
            url:`https://reqres.in/api/users?page=2`
        }).then(function(res){
            expect(res.status).eql(200)
        })
    })


    it('Tc-02 verify the POST method with regres api',()=>{
        cy.request({
            method:"POST",
            url:`https://reqres.in/api/users`,
            body:{
                "name": "morpheus",
                "job": "leader"
            }
        }).then(function(res){
            expect(res.status).eq(201)
        })
    })

    it('Tc-03 verify the PUT method with regres api',()=>{
        cy.request({
            method:"PUT",
            url:`https://reqres.in/api/users/2`,
            body:{
                "name": "morpheus",
                "job": "zion resident"
            }
        }).then(function(res){
            expect(res.status).eq(200)
        })
    })


    it('Tc-04 verify the DELETE method with regres api',()=>{
        cy.request({
            method:"DELETE",
            url:`https://reqres.in/api/users/2`
        }).then(function(res){
            expect(res.status).eql(204)
        })
    })
})