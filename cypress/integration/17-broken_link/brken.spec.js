///<reference types="cypress"/>

describe('verify the broken link',()=>{

    it('Validate URl using click on each tab', () => {
        let responce = ["/Group-Tours", "/Speciality-Tours", "/Speciality-Tours/Low-Price-Tours",
            "/Tailor-Made", "http: //www.kesarimice.in", "/kesari-forex", "/visa", "/cruises",
            "/Deals", "/About-Us", "javascript:void(0);"]

        cy.visit('https://www.kesari.in/')
        cy.get('nav[id="main-menu"]').find('ul:first').children().each((el, index) => {
            let text = el.find('a').first()
            if (text.attr('href').startsWith('/')) {
                cy.wrap(text).click({ force: true })
                cy.url().should('contain', responce[index])
                cy.go('back')
            }
        })
    })

})