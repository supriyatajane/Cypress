///<reference types="cypress"/>

describe('verify the storage functinality', () => {

    beforeEach(function () {
        cy.visit('https://webdriveruniversity.com/')
    })

    it('Tc-01 verify the localstorage using window', () => {

        cy.window().should((win) => {
            //console.log(win.localStorage)

            expect(win.localStorage.length).to.eq(0)

            window.localStorage.setItem('id', 1)
            expect(win.localStorage.length).to.eq(1)
            //,{ timeout: 40000}
            expect(window.localStorage.getItem('id')).to.eq('1')
        })
    })

    it('Tc-02 verify the cypress command clearing localstorage', () => {
        cy.clearLocalStorage()
        cy.window().should((win) => {
            expect(win.localStorage.length).to.eq(0)
        })
    })

    it('Tc-03 verify the title usin window',()=>{
        cy.window().should((win)=>{

            //console.log(win.document.title)
            expect(win.document.title).to.eq('WebDriverUniversity.com')
        })

        cy.document().should((doc)=>{
            let text=doc.title
            expect(text).to.eq('WebDriverUniversity.com')
        })
        
    })

    it('Tc-04 verify the title using cypress',()=>{
        cy.title().should('eq','WebDriverUniversity.com')//implicit assertion
    })

    it('Tc-05 verify the title using with cypress',()=>{
        cy.title().then(function(res){
            expect(res).to.eq('WebDriverUniversity.com')//explicit assertion
        })
    })
})