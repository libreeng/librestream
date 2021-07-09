
describe('Test Onsight Support Links', () => {




 it("Page Exists", () => {;

  cy.visit('/onsight-support/')
  cy.get('#pageContent', { timeout: 10000 }).should('be.visible')
 })



  it("Test modal windows", () => {
    cy.get('body').then((body) => {
      const NbrModalLinks = body.find('#pageContent .card-body button:contains(Modal)').length      
      cy.log('this page has '+NbrModalLinks+' Modal links')
      if (NbrModalLinks > 0) {      
        cy.get('#pageContent .card-body button:contains(Modal)').each($link => { 
          cy.wrap($link)

          // click the expand icon for the section this link is in. This makes sure the link is visible when we click it
          .closest('.card').find('.remixicon-icon').click();

          cy.wrap($link)
            // click the link
            .click( )            

          cy.testModalWindow()

          // close this section so it will be ready to be expanded with the next iteration.
          cy.wrap($link).closest('.card').find('.remixicon-icon').click(); 
        });
      }
    })


    
  });


  it("Test PDF link downloads for broken links", () => {
    cy.get('body').then((body) => {
      const NbrPdfLinks = body.find("#pageContent .list-group-item .accordion .card-body a:contains(PDF)").length      
      cy.log('this page has '+NbrPdfLinks+' PDF links')
      if (NbrPdfLinks > 0) {      
        cy.get("#pageContent .list-group-item .accordion .card-body a:contains(PDF)").each($link => {  
          const linkText = "PDF " + $link.text() + " links to " + $link.attr("href") ;
          cy.testLinkHrefExists($link)
        });
      }
    })
  });

  it("Test XLS Link", () => {
    cy.get('body').then((body) => {
      // Let's log our .xls files here. Downloadable files will throw an error in the "Test for broken links" test.
      const NbrXlsLinks = body.find("#pageContent a[href*='.xls']").length
      
      cy.log('this page has '+NbrXlsLinks+' .xls download links')
      if (NbrXlsLinks > 0) {
      
        cy.get("#pageContent a[href*='.xls']").each($link => {  
          expect($link).to.have.attr("href").not.contain("undefined")
          cy.log("COULD NOT TEST FOR DOWNLOAD " + $link.prop('href'))
          // TODO: Tigure out a way to test to make sure these files exist and download.
        });
      }
    })
  })
   
  
  it("Test for broken links", () => {
    cy.get('body').then((body) => {
    // this does not work for downloads, such as .xls or .xlsx
      const nbrLinks = body.find("#pageContent .list-group-item .accordion .card-body a:contains(Link):not([href*='.xls'])").length
      cy.log('this page has '+nbrLinks+' \"LINK\" links')
      if (nbrLinks > 0) {         
        cy.get("#pageContent .list-group-item .accordion .card-body a:contains(Link):not([href*='.xls'])").each($link => {  
          cy.testLinkHrefExists($link)
        });
      }
    })
  })

  
})