describe('Feedback Loop', () => {
  beforeEach(async () => {
    // Silence console.log statements for cleaner test output:
    console.log = () => { }

    // We need Cypress to finish loading locahost:${PORT}/ before
    // we execute each test:
    await cy.visit('/')
  })

// TODO this would likely break if they add validation...
  it('UI: Correct order of views', () => {
    //will cycle through the 6 views and check they are what we expect
    cy.get('feeling').should('exist');
    cy.get('[data-testid="next"').click();

    cy.get('understanding').should('exist');
    cy.get('[data-testid="next"').click();

    cy.get('support').should('exist');
    cy.get('[data-testid="next"').click();

    cy.get('comments').should('exist');
    cy.get('[data-testid="next"').click();

    cy.get('review').should('exist');
    cy.get('[data-testid="next"').click();

    cy.get('thank').should('exist');
    cy.get('[data-testid="next"').click();

    cy.get('feeling').should('exist');
  })

  it('UI: Data Collection Persists across views', () => {
  
  })

  //This test is to ensure they didnt break anything...?
  it('GET: Able to retrieve Data', () => {
  
  })


  it('POST: Adds feedback to Database', () => {
    
  })
})
