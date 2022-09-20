//verify the susequent request

///<reference types="cypress"/>

describe('verify the GET,POST,PUT,DELETE request with goreat api', () => {
    let access_token = `ab591884d091e9e3e010fbd079d17d37954e935526bf0865e492dfea107041bb`

    it('verify all request with gorest', () => {

        cy.request({
            method: "POST",
            url: `https://gorest.co.in/public/v2/users`,
            headers: {
                Authorization: `Bearer ${access_token}`
            },

            body: {
                name: "Tenali Ramakrishna",
                gender: "male",
                email: `c.ashdddna${Math.floor(Math.random() * 100000)}@gmail.com`,
                status: "active"
            }
        }).then(function (res) {
            //cy.log(res)
            expect(res.status).eql(201)
            return res.body.id
        }).then(function (id) {
            cy.log(id)
            cy.request({
                method: "PUT",
                url: `https://gorest.co.in/public/v2/users/${id}`,
                headers: {
                    Authorization: `Bearer ${access_token}`
                },
                body: {
                    name: "supriya tajane",
                    gender: "Female",
                    email: `c.ashdddna${Math.floor(Math.random() * 100000)}@gmail.com`,
                    status: "active"
                }

            }).then(function (res) {
                //cy.log(res)
                expect(res.status).eql(200)
                return res.body.id
            }).then(function(id){
                //cy.log(id)
                cy.request({
                    method:'DELETE',
                    url:`https://gorest.co.in/public/v2/users/${id}`,
                    headers: {
                        Authorization: `Bearer ${access_token}`
                    },
                }).then(function(res){
                    expect(res.status).eql(204)
                })


            })
        })
    })

})