describe('Feedback Loop', () => {
  beforeEach(async () => {
    // Silence console.log statements for cleaner test output:
    console.log = () => { }

    // We need Cypress to finish loading locahost:${PORT}/ before
    // we execute each test:
    await cy.visit('/')
  })

  //This test is to ensure they have a GET route that returns data
  it('GET: Able to retrieve Data', () => {
    cy.request('GET', 'feedback').its('body').should('include', {comments : 'Blerg.'});
  });



  it('UI: Correct order of views', () => {
    //will cycle through the 6 views and check they are what we expect
    // based on finding 'correct' text on that view
    // 🚧 If you add input validation to your project, this test will need updating. 
    cy.contains('feeling').should('exist');
    cy.get('[data-testid="next"]').click();

    cy.contains('understanding').should('exist');
    cy.get('[data-testid="next"]').click();

    cy.contains('support').should('exist');
    cy.get('[data-testid="next"]').click();

    cy.contains('comments').should('exist');
    cy.get('[data-testid="next"]').click();

    cy.contains('review').should('exist');
    cy.get('[data-testid="next"]').click();

    cy.contains('thank').should('exist');
    cy.get('[data-testid="next"]').click();

    cy.contains('feeling').should('exist');
  })

  it('UI: Data Collection Persists across views, sends Collected Data', async () => {
    cy.intercept('POST', '/*').as('postRequest')


    //will cycle through the 6 views and check they are what we expect
    // based on finding 'correct' text on that view
    cy.contains('feeling').should('exist');
    cy.get('[data-testid="input"]').type('5' , {force: true})

    cy.get('[data-testid="next"]').click();

    cy.contains('understanding').should('exist');
    cy.get('[data-testid="input"]').type('4', {force: true})

    cy.get('[data-testid="next"]').click();

    cy.contains('support').should('exist');
    cy.get('[data-testid="input"]').type('2', {force: true})

    cy.get('[data-testid="next"]').click();

    cy.contains('comments').should('exist');
    cy.get('[data-testid="input"]').type('Taco Cat Goat Cheese Pizza', {force: true})

    cy.get('[data-testid="next"]').click();

    cy.contains('review').should('exist');


    cy.contains('Taco Cat Goat Cheese Pizza').should('exist');
    cy.contains('5').should('exist')
    cy.contains('4').should('exist')
    cy.contains('2').should('exist')
    cy.contains('3').should('not.exist')
    cy.contains('1').should('not.exist')

    cy.wait('@postRequest').its('body').should('contain', '')

  })



// THIS IS NOT ACTUALLY WORKING...? There are no assertions or expectations
  it('POST: Adds feedback to Database', () => {
    cy.contains('feeling').should('exist');
    cy.get('[data-testid="input"]').type('5', {force: true})

    cy.get('[data-testid="next"]').click();

    cy.contains('understanding').should('exist');
    cy.get('[data-testid="input"]').type('4', {force: true})

    cy.get('[data-testid="next"]').click();

    cy.contains('support').should('exist');
    cy.get('[data-testid="input"]').type('2', {force: true})

    cy.get('[data-testid="next"]').click();

    cy.contains('comments').should('exist');
    cy.get('[data-testid="input"]').type('Taco Cat Goat Cheese Pizza', {force: true})

    cy.get('[data-testid="next"]').click();

    cy.contains('review').should('exist');


    cy.contains('Taco Cat Goat Cheese Pizza').should('exist');
    cy.get('[data-testid="next"]').click();



  })
})
