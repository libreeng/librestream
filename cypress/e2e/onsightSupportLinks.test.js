
describe('Test Onsight Support Links', () => {

 beforeEach(() => {




  cy.log('I run before every test in every spec file!!!!!!')
    cy.visit('/onsight-support/')
  })




  it("Test modal windows", () => {
    
        // get ALL links with "(Modal)" in the name
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
   
    
  });



  it("Test PDF link downloads for broken links", () => {
    cy.get('#pageContent .list-group-item .accordion .card-body a:contains(PDF)').each($link => {              
      const linkText = "PDF " + $link.text() + " links to " + $link.attr("href") ;
      cy.testLinkHrefExists($link)
    });
  });
  

  it("Test XLS Link", () => {
   // Let's log our .xls files here, TODO: Tigure out a way to test for these.
    cy.get("a[href*='.xls']").each($link => { 
       expect(link).to.have.attr("href").not.contain("undefined")
       cy.log("COULD NOT TEST FOR DOWNLOAD " + $link.prop('href'))
    });

  })
  
  
  it("Test for broken links", () => {
    // this does not work for downloads, such as .xls or .xlsx
    cy.get("#pageContent .list-group-item .accordion .card-body a:contains(Link):not([href*='.xls'])").each($link => {           
      cy.testLinkHrefExists($link)
    });
  })
 
    
})