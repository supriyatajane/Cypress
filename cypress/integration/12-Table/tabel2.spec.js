///<reference types="cypress"/>
describe('verify the table functinality',()=>{
    beforeEach(function(){
        cy.visit('https://testautomationpractice.blogspot.com/')
    })
    it('Tc_01 verify the Table sum',()=>{
       let sum=0
        cy.get('[name="BookTable"]').find('tbody').children().each(function(el,index){
           //cy.log(el.children().last().text())
        //    if(index!=0)
        //    {
        //     sum=sum+Number(el.children('td').last().text())
           
        //    }
        sum=sum+Number(el.children('td').last().text())
           
           cy.log(sum)
        }).then(function(){
            expect(sum).eql(7100)
        })

    })

    it.only('TC_02 verify the name Author ',()=>{
        let names = ['', 'Amit', 'Mukesh', 'Animesh', 'Mukesh', 'Amod', 'Amit']
        cy.get('[name="BookTable"]').find('tbody').children().each(function(el,index){
            //cy.log(el.children('td').eq(1).text())
            if(index!=0)
            {
                cy.get(el).children().eq(1).should('have.text',names[index])
            }
            console.log(names)
            

        })

    })
})