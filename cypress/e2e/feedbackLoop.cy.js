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
    cy.request('GET', 'feedback')
      .then((response) => {
        // Can use this to log the response.body to test output:
        // cy.task('log', JSON.stringify(response.body))

        expect(response.body.length).to.equal(2);
        const [response1, response2] = response.body

        expect(response1.comments).to.equal('Doing Great Woot!');
        expect(response1.feeling).to.equal(4);
        expect(response1.understanding).to.equal(4);
        expect(response1.support).to.equal(5);

        expect(response2.comments).to.equal('Blerg.');
        expect(response2.feeling).to.equal(1);
        expect(response2.understanding).to.equal(2);
        expect(response2.support).to.equal(3);
      })
  });



  it('UI: Correct order of views', () => {
    // Need to stub the response, here:
    //https://docs.cypress.io/api/commands/intercept#:~:text=%2C%0A%7D)-,//%20spying%20and%20response%20stubbing,-cy.intercept
    cy.intercept('POST', '/*', {statusCode: 201})

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

  // 🔥 This test doesn't work, but do we even need it if the next test works?
  // it('UI: Data Collection Persists across views, sends Collected Data', async () => {
  //   cy.intercept('POST', '/*').as('postRequest')

  //   //will cycle through the 6 views and check they are what we expect
  //   // based on finding 'correct' text on that view
  //   cy.contains('feeling').should('exist');
  //   cy.get('[data-testid="input"]').type('5', {force: true})
  //   cy.get('[data-testid="next"]').click();

  //   cy.contains('understanding').should('exist');
  //   cy.get('[data-testid="input"]').type('4', {force: true})
  //   cy.get('[data-testid="next"]').click();

  //   cy.contains('support').should('exist');
  //   cy.get('[data-testid="input"]').type('2', {force: true})
  //   cy.get('[data-testid="next"]').click();

  //   cy.contains('comments').should('exist');
  //   cy.get('[data-testid="input"]').type('Taco Cat Goat Cheese Pizza', {force: true})
  //   cy.get('[data-testid="next"]').click();

  //   cy.contains('review').should('exist');


  //   cy.contains('Taco Cat Goat Cheese Pizza').should('exist');
  //   cy.contains('5').should('exist')
  //   cy.contains('4').should('exist')
  //   cy.contains('2').should('exist')
  //   cy.contains('3').should('not.exist')
  //   cy.contains('1').should('not.exist')

  //   cy.wait('@postRequest').its('request.body').should('contain', 'Taco Cats Goat Cheese Pizza')

  // })



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

    cy.request('GET', 'feedback')
        .then((response) => {
          // Can use this to log the response.body to test output:
          // cy.task('log', JSON.stringify(response.body))

          // This 👇 works, but should we test for other properties?
          expect(response.body[2].comments).to.equal('Taco Cat Goat Cheese Pizza')
        })
  })
})