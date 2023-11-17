describe('Gallery of My Life', () => {
  beforeEach(async () => {
    // Silence console.log statements for cleaner test output:
    console.log = () => { }

    // We need Cypress to finish loading locahost:${PORT}/ before
    // we execute each test:
    await cy.visit('/')
  })

  // Verify that the app renders the two initial to-do items
  // that were provided in database.sql:
  it('READ: Displays initial Gallery items upon load', () => {
    // Test that three elements with a data-testid value of "toDoItem" exist:
    cy.get('[data-testid="app"]')
      .should('have.length', 1)

    cy.get('[data-testid="galleryList"]')
      .should('have.length', 1)

    cy.get('[data-testid="galleryItem"]')
      .should('have.length', 3)

  })

  it('UI: Item Toggles between image and description', () => {
    // Test that the 'Photo of a goat taken at Glacier National Park.' Picture is visible
    cy.contains('[data-testid="galleryItem"]', 'Goat!')
      .find('img')
      .should('be.visible');

    //click image to show description


  
    cy.contains('[data-testid="galleryItem"]', 'Goat!')
      .find('[data-testid="toggle"]')
      .click();


    cy.contains('[data-testid="galleryItem"]', 'Photo of a goat taken at Glacier National Park.').should('be.visible')
    //making sure not all of the images get toggled
    cy.contains('[data-testid="galleryItem"]', 'Different...').find('img').should('be.visible');

    //Trying to account for if they chose display=none instead of swapping elements
    //Def gross, but I don't know how to do it better
    cy.contains('[data-testid="galleryItem"]', 'Goat!').then(item => {
      if (item.find("img").length > 0) {
        cy.contains('[data-testid="galleryItem"]', 'Goat!').find("img").should("not.be.visible");
      } else {
        cy.contains('[data-testid="galleryItem"]', 'Goat!').find("img").should("not.exist");
      }
    });


    //click description to show image
    cy.contains('[data-testid="galleryItem"]', 'Photo of a goat taken at Glacier National Park.').find('[data-testid="toggle"]').click()

    cy.contains('[data-testid="galleryItem"]', 'Goat!').find('img').should('be.visible');
  })

  // Verify that the app behaves correctly when two to-do
  // items have their "complete" buttons clicked:
  it('UPDATE: It can add likes to the database', () => {
    // Test that the 'Photo of a goat taken at Glacier National Park.' Picture has 2 likes
    cy.contains('[data-testid="galleryItem"]', 'Goat!').contains(2).should('exist');

    cy.contains('[data-testid="galleryItem"]', 'Different...').contains(1).should('exist');

    cy.contains('[data-testid="galleryItem"]', 'Goat!').find('[data-testid="like"]').click();


    cy.contains('[data-testid="galleryItem"]', 'Goat!').contains(3).should('exist');

    cy.contains('[data-testid="galleryItem"]', 'Different...').contains(1).should('exist');
    
    //reload the page
    cy.reload();
    cy.contains('[data-testid="galleryItem"]', 'Goat!').contains(3).should('exist');

    cy.contains('[data-testid="galleryItem"]', 'Different...').contains(1).should('exist');

  })
})
