export class Login{

   element={
    username:'#user-name',
    password:'#password',
    loginButton:'#login-button',
    InvaliLogin:'[data-test="error"]',
    logo:'.login_logo'

    }
    navigate(){
        cy.visit('https://www.saucedemo.com/')   
    }
    login(username,password)
    {
        //cy.visit('https://www.saucedemo.com/')
        cy.get(this.element.username).type(username)
        cy.get(this.element.password).type(password)
        cy.get(this.element.loginButton).click()
    }
    inValid(username,password)
    {
        cy.get(this.element.username).type(username)
        cy.get(this.element.password).type(password)
        cy.get(this.element.loginButton).click()
        cy.get(this.element.InvaliLogin).should('be.visible')
    }
    logoVisible()
    {
        cy.get(this.element.logo).should('be.visible')
    }

}
