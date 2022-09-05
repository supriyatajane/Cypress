
///<reference types="cypress"/>
describe('verify the window object', () => {

    it('Tc-01 check the windows property', () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')

        cy.window().should((win) => {
            expect(win.location.host).eq('www.webdriveruniversity.com')
            expect(win.location.pathname).eq('/Contact-Us/contactus.html')
            expect(win.location.hash).eq('')
        })

        cy.location('host').should('eq','www.webdriveruniversity.com')
           cy.location('hash').should('eq','')
        cy.location('pathname').should('eq','/Contact-Us/contactus.html')
    })

    it('Tc-02 window reload with cypress',()=>{
        //window method
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        // cy.window().should((win)=>{
        //     win.location.reload()
        // })

        //cypress
        cy.reload()
    })
    it.only('Tc-03 window forward backward with cypress',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('p[class]', { timeout: 10000 }).eq(2).click()
        //cy.contains('Forgot your password? ').click()
        cy.window().should((win)=>{
            win.history.back()
            win.history.forward()
            win.history(-1)
            win.history(1)
        })

        //cypress method
        // cy.go(-1)
        // cy.go(1)
        // cy.go('back')
        // cy.go('forward')
    })
})
