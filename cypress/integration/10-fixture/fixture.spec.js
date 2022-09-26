import data from  "../../fixtures/contactus.json"
import dataM from "../../fixtures/multiple.json"

///<reference types="cypress"/>

describe('verify the diferent way to store data fixure retrive', () => {


    let objG//scope of arraow function immediate parrent
    before(()=>{
        cy.fixture('contactus').then((data)=>{
            objG=data

        })
    })

    let obj = {
        first_name: 'supriya',
        last_name: 'Tajane',
        email: 'supriyatajane2015@gmail.com',
        message: 'I am learning javascript',


    }
  //using this simple object
    it('Tc-01 verify contactus form by using object', () => {

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(obj.first_name)
        cy.get('[name="last_name"]').type(obj.last_name)
        cy.get('[name="email"]').type(obj.email)
        cy.get('[name="message"]').type(obj.message)
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    //using this one fixture file
    it('Tc-02 verify the contactus form by fixture file', () => {
        cy.fixture("contactus").then(function (objH) {

            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(objH.first_name)
            cy.get('[name="last_name"]').type(objH.last_name)
            cy.get('[name="email"]').type(objH.email)
            cy.get('[name="message"]').type(objH.message)
            cy.get('[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
            //cy.log(objH)
        })
    })

    //using this before block
    it('Tc-03 verify the contctus form by before() function',()=>{
   //  cy.log(objG)

   cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(objG.first_name)
            cy.get('[name="last_name"]').type(objG.last_name)
            cy.get('[name="email"]').type(objG.email)
            cy.get('[name="message"]').type(objG.message)
            cy.get('[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
    })


    it('Tc-04 verify the contactus form import way',()=>{
       //cy.log(data)


       cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(data.first_name)
            cy.get('[name="last_name"]').type(data.last_name)
            cy.get('[name="email"]').type(data.email)
            cy.get('[name="message"]').type(data.message)
            cy.get('[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    it('Tc-05 verify the contactus form multiple data by using fixture',()=>{
        //cy.log(dataM)
        //bad apporach

        dataM.forEach(function(el){
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(el.first_name)
            cy.get('[name="last_name"]').type(el.last_name)
            cy.get('[name="email"]').type(el.email)
            cy.get('[name="message"]').type(el.message)
            cy.get('[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })

    })


    //good way acessing multiple data
    //one testcase run three times
    dataM.forEach(function(el){

        it('Tc-06 verify the acessing multiple data from fixture good way',()=>{
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(el.first_name)
            cy.get('[name="last_name"]').type(el.last_name)
            cy.get('[name="email"]').type(el.email)
            cy.get('[name="message"]').type(el.message)
            cy.get('[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')

        })
    })
})