///<reference types="cypress"/>

describe('verify the fixture functinality',()=>{
    let data

before(()=>{

    cy.fixture('contactus').then(function(obj){
       data=obj
    })
})



  let obj={
    name:"supriya",
    lname:'Tajane',
    mail:'supriya@gmail.com',
    message:'hiii'
  }

    it('Tc-01 verify the using object',()=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(obj.name)
        cy.get('[name="last_name"]').type(obj.lname)
        cy.get('[name="email"]').type(obj.mail)
        cy.get('[name="message"]').type(obj.message)
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')

    })

    it('Tc-02 verify the data using single testcase using fixture',()=>{
      cy.fixture('contactus').then(function(el){

        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(el.first_name)
        cy.get('[name="last_name"]').type(el.last_name)
        cy.get('[name="email"]').type(el.email)
        cy.get('[name="message"]').type(el.message)
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')



      })


    })


    it.only('Tc-03 verify the data using before block using fixture',()=>{
        cy.log(data)
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(data.first_name)
        cy.get('[name="last_name"]').type(data.last_name)
        cy.get('[name="email"]').type(data.email)
        cy.get('[name="message"]').type(data.message)
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')

    })
})