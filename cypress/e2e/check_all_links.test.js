
//import { posts } from "../../posts.json";

const urls = [
    '/',
    '/platform',
    '/platform/remote-expert/',
    '/platform/digital-work-instructions/',
    '/platform/knowledge-base/',
    '/platform/specialized-accessories/',
    '/customer-success/',
    '/partners/',
    '/it-security/',
    '/use-cases/',
    '/industry-solutions/',
    '/blog/',
    '/resources/',
    '/videos/',
    '/webinars/',
    '/about',
    '/news',
    '/',
    '/platform',
]

describe('Test for Broken Links', () => {

  urls.forEach((url) => {
    /*
    it('Test title text', () => {
      cy.visit(url);
      cy.title().should('include', 'Librestream')
      expect(true).to.equal(true)
    })
    */
    it("Test links on " + url, () => {
        
      cy.visit(url);

      cy.get("#pageContent a").each($link => {
        //const message = $link.parent().parent().text();
        
        cy.testLinkHrefExists($link)

        //cy.visit($link.prop('href'));
        //cy.go('back');

      });
    });
  })
    
})