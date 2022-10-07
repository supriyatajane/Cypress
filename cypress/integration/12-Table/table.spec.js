///<reference types="cypress"/>



describe('verify the table functinality',()=>{

    beforeEach(function(){
        cy.visit('https://codenboxautomationlab.com/practice/')
    })

    it('Tc-01 verify the table functinality',()=>{
        let sum=0
        cy.get('#product').find('tr').each(function(el,index){
            if(index!=0  && index!=11 )
            {
                sum=sum+Number(el.children('td').last().text())
                return sum
            }
          
        }).then(function(){
            expect(sum).eq(297)
        })
    })
})