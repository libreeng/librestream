
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
      //cy.log('LINK TEXT ' + linkText)

      cy.testLinkHrefExists($link)
    });
  });


  it("Test for broken links", () => {

    cy.get('#pageContent .list-group-item .accordion .card-body a:contains(Link)').each($link => {              
          
      
      cy.testLinkHrefExists($link)
      
    });

  })
    
})