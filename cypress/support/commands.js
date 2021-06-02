// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('getIframeBody', () => {
    // get the iframe > document > body
    // and retry until the body element is not empty
    return cy
    .get('iframe')
    .its('0.contentDocument.body').should('not.be.empty')
    // wraps "body" DOM element to allow
    // chaining more Cypress commands, like ".find(...)"
    // https://on.cypress.io/wrap
    .then(cy.wrap)
})





Cypress.Commands.add('testModalWindow', () => {

    // wait for the modal to open, test to make sure modal contains valid content.
    cy.get('.modal').should('exist').should('be.visible').find('.modal-body').should('exist')
            
    // make sure the close link is visible
    return cy.get('.modal').find('.close').should('exist').should('be.visible') 
        
      // click close and wait for the modal to dissapear
      .click().should('not.exist') 
  
  
})



Cypress.Commands.add('testLinkHrefExists', (link) => {
    
    expect(link).to.have.attr("href").not.contain("undefined")

    cy.request({url:link.prop('href'), failOnStatusCode: false})
    .should((response) => {
      expect(response.status).to.eq(200) 
    })  
    
})