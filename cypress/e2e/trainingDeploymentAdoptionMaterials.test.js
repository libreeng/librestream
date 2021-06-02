describe('Test All Links on Training Deployment Adoption Materials Page', () => {

  beforeEach(() => {
    cy.log('I run before every test in every spec file!!!!!!')
    cy.visit('/training-deployment-adoption-materials/')
    cy.get('#pageContent').should('be.visible')
  })



  it("Test External Links Return Response 200", () => {
    cy.get('body').then((body) => {
      const nbrExternalLinks = body.find('#pageContent .learning-link--external').length
      cy.log('this page has '+nbrExternalLinks+' Modal Links')
      if (nbrExternalLinks > 0) {
        cy.get('#pageContent .learning-link--external').each($link => {  

          const isMp4link = ($link.prop('href').indexOf('mp4') != -1)        
            
          if (!isMp4link) {
            cy.testLinkHrefExists($link)
          } else {
            cy.log('Skipped testing mp4 link ' + $link.prop('href'))
          }
               
        });
      }
    })    
  }) // END Test External Links   
  


  it("Test PDF Links Return Response 200", () => {
    cy.get('body').then((body) => {
        const nbrPdfLinks = body.find('.learning-link--pdf').length
        cy.log('this page has '+nbrPdfLinks+' PDF Links')
        if (nbrPdfLinks > 0) {
          cy.get('#pageContent .learning-link--pdf').each($link => {  
            cy.testLinkHrefExists($link)
          });
        }
    })
  }); // END Test PDF Links   



  it("Test Modal Links Open and Close Modal", () => {
    cy.get('body').then((body) => {
      const nbrModalLinks = body.find('#pageContent .learning-link--modal').length
      cy.log('this page has '+nbrModalLinks+' Modal Links')
      if (nbrModalLinks > 0) {

        cy.get('#pageContent .learning-link--modal').each($link => {  
            cy.wrap($link).click( )    
            cy.testModalWindow()                 
        });
        
      }
    })
   
  }); // END Test Modal Links
  
  
  it("Test Video Links Open and Close Modal", () => {
    cy.get('body').then((body) => {
        const nbrVideoLinks = body.find('.learning-link--video').length
        cy.log('this page has '+nbrVideoLinks+' Video Links')
        if (nbrVideoLinks > 0) {

          cy.get('#pageContent .learning-link--video').each($link => {  
            cy.wrap($link).click( )    
            cy.testModalWindow()    
          });
        }
    }) 
  }); // END Test Video Links   
    


}); // END describe  
