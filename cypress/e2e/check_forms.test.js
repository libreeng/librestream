// FORM PAGES
const embeddedForms = [
  '/reseller-orders/',
  '/register-opportunity/',
  // '/contact-us-support/'
]
const iframeForms = [
  '/free-demo/',
  '/contact-us/'
]


// FORM CONFIRMATION PAGES
const iframeEmbedPages = [
  '/form-confirmations/wbr-report/', // (example of an embedded pdf)
]
const iframeVideoPages = [
  '/form-confirmations/onsight-flow-customer-webinar/', // (example of embedded native video)
]
const iframeYouTubePages = [
  '/watch-onsight-in-action/', // (make sure video is working)'
  '/form-confirmations/webinar-deploying-ar/',   // (example of embedded youtube video)
]




describe('Test Embedded Forms', () => {
 
  embeddedForms.forEach((formPage) => {
    
    it(">>> Visit " + formPage, () => {
      cy.visit(formPage);
    })

    it("H1 tag does not contain the text '404' ", () => {
      cy.get('h1')
        .contains('404')
        .should('not.exist');
    })

    it("<form> tag exists", () => {
      
      cy.get('body').then((body) => {
        if (body.find('.sticky-top').length > 0) {
          cy.log('this page has sticky-top')
          cy.get('.sticky-top').invoke('attr', 'style', 'position: relative;')
        }
      })

      cy.get('form').should('exist').should('be.visible'); 
    })

    it("Submit button exists ", () => {
      cy
        .get('form input[type=submit]')
        .should('exist')
        .should('be.visible');     
      });
    })

  }) // END 'Test Embedded Forms'


describe('Test iFrame Forms', () => {

  iframeForms.forEach((formPage) => {

    it(">>> Visit " + formPage, () => {
      cy.visit(formPage);
    })

    it("iframe Form Exist " + formPage, () => {              
      cy.getIframeBody().find('form').should('exist').should('be.visible')
      cy.getIframeBody().find('input[type=submit]').should('exist').should('be.visible');    
    })
  })
})



describe('Test Confirmation Iframes', () => {
  iframeYouTubePages.forEach((thePage) => {
    it(">>> Visit " + thePage, () => {
      cy.visit(thePage);
    })
    it("youtube element exists in the iframe " + thePage, () => {              
      cy.getIframeBody()
        .find('#player').should('exist').should('be.visible')   
    })
  })
})

describe('Test Embedded YouTube', () => {
  iframeYouTubePages.forEach((thePage) => {
    it(">>> Visit " + thePage, () => {
      cy.visit(thePage);
    })
    it("youtube element exists in the iframe " + thePage, () => {              
      cy.getIframeBody()
        .find('#player').should('exist').should('be.visible')   
    })
  })
})



describe('Test Embedded Video', () => {
  iframeVideoPages.forEach((thePage) => {
    it(">>> Visit " + thePage, () => {
      cy.visit(thePage);
    })
    it("Video element exists in the iframe " + thePage, () => {              
      cy.getIframeBody()
        .find('video').should('exist').should('be.visible')   
    })
  })
})



describe('Test Embedded PDF', () => {

  iframeEmbedPages.forEach((thePage) => {
    it(">>> Visit " + thePage, () => {
      cy.visit(thePage);
    })
    it("PDF Embed exists in the iframe " + thePage, () => {              
      cy.getIframeBody()
        .find('embed').should('exist').should('be.visible')   
    })
  })
})




    