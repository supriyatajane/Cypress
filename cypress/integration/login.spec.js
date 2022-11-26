
import { Login } from "../integration/16-POM/login"

///<reference types="cypress"/>

describe('verify the pom functinality', () => {

    let login = new Login()
    it('Tc-01 verify the valid creaditials', () => {
        login.navigate()
        login.login('standard_user', 'secret_sauce')
    })

    it('Tc-02 verify the invalid login',()=>{
        login.navigate()
        login.inValid('aa','bb')
    })
    it('Tc-03 verify the logo',()=>{
        login.navigate()
        login.logoVisible()
    })

})

