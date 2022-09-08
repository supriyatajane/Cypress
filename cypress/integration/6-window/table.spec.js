///<reference types="cypress"/>

describe('verify the table functinality', () => {

    beforeEach(function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    })

    it('Tc-01 verify the sum of table element', () => {
        let sum = 0
        cy.get('#t01').find('tr').each(function (el, index) {
            if (index != 0) {
                //cy.log(el.children('td').last().text())
                sum = sum + Number(el.children('td').last().text())
                return sum
            }
        }).then(function () {
           // cy.log(sum)
           expect(sum).eql(159)
        })
    })
    it('tc-02 verify the table no 2',()=>{
        let sum=0
        cy.get('#t02').find('tr').each(function(el,index){
            if(index!=0)
            {
                sum=sum+Number(el.children('td').last().text())
            }
        }).then(function(){
            //cy.log(sum)
            expect(sum).eql(163)
        })
    })

    it('Tc-03 verify the table using utilty command',()=>{
        cy.validTable('1',159)
       cy.validTable('2',163)
    })


})