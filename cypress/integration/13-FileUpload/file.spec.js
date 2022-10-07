///<reference types="cypress"/>
describe('verify the file uploads',()=>{

    it('Tc-01 verify the single upload',()=>{
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
        let myFile='coder.jpg'
        cy.get('#file').attachFile(myFile)
        cy.get('.box__success').should('have.contain','Done!')

    })

    it('Tc-02 verify th multiple file upload',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        let myFile='coder.jpg'
        let myFile1='multiple.json'
        let myFile2='css.pdf'

        cy.get('#filesToUpload').attachFile([myFile,myFile1,myFile2])
        cy.get('#fileList').children().should('have.length',3)
    })


    it.only('Tc-03 verify the change the file name  while uploading',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        let myFile='coder.jpg'

        cy.get('#filesToUpload')
        .attachFile({ filePath:myFile, fileName: 'customFileName.png'})
        cy.get('#fileList').children().first().should('have.contain','customFileName').and('have.length',1)


    })

})
