///<reference types="cypress"/>

describe('verify the login functinality with OrangeHrm',()=>{

it('Tc-01 verify the vallid craditials',()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.get('img[alt="client brand banner"]').should('be.visible')
})


it('Tc-02 verify the invalid craditials',()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Adminn')
    cy.get('[name="password"]').type('admin1237')
    cy.get('button[type="submit"]').click()
    cy.get('[class="oxd-alert-content oxd-alert-content--error"]').should('be.text','Invalid credentials')

})
})