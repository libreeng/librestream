



  describe('Test Terms Of Use Pages', () => {
  
  
      it("Testing Terms of Use Pages ", () => {
          
        cy.visit('/support-archives/termsofuse/');

        cy.get('#pageContent').contains('Onsight Software EULA').should('exist')
        cy.get('#pageContent').contains('Onsight Privacy Notice').should('exist')

        cy.visit('/support-archives/termsofuse-mobile/');
  
        cy.get('#pageContent').contains('Onsight Software EULA').should('exist')
        cy.get('#pageContent').contains('Onsight Privacy Notice').should('exist')
          
        
      });
  
  })
  
  
  
  
  
  
      