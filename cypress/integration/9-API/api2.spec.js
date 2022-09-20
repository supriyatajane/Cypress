///<reference types="cypress"/>

describe('verify the GOREST api wih GET,POST,DELETE request', () => {

    let access_token = `ab591884d091e9e3e010fbd079d17d37954e935526bf0865e492dfea107041bb`

    it('Tc-01 verify the GET request with gorest api', () => {

        cy.request({
            method: 'GET',
            url: `https://gorest.co.in/public/v2/users`,
            headers: {
                Authorization: `${access_token}`
            }
        }).then(function (res) {
            cy.log(res)
            expect(res.status).eql(200)
            expect(res.duration).to.be.lessThan(100000)
            expect(res.statusText).eql("OK")


            expect(res.body.length).eql(10)
            res.body.forEach(element => {
                expect(element).have.keys(['id', 'gender', 'name', 'status', 'email'])
            });

            res.body.forEach(element => {
                expect(element.id).not.to.be.null
                expect(element.gender).not.to.be.null
                expect(element.name).not.to.be.null
                expect(element.status).not.to.be.null
                expect(element.email).not.to.be.null
            })

        })

    })
        it('Tc-02 verify the POST request with GOREST api', () => {
            cy.request({
                method: "POST",
                url: `https://gorest.co.in/public/v2/users`,
                headers: {
                    Authorization: `Bearer ${access_token}`
                },

                body: {
                    name: "Tenali Ramakrishna", 
                    gender: "male",
                     email:`c.ashdddna${Math.floor(Math.random()*100000)}@gmail.com` ,
                    status: "active"
                }
            }).then(function (res) {
                cy.log(res)
                expect(res.status).eql(201)
                expect(res.body).have.keys(['id','name','email','gender','status'])
                cy.log(res.body.id)
            })
        })
    })




