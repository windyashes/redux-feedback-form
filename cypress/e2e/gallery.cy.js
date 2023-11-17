describe('Feedback Loop', () => {
  beforeEach(async () => {
    // Silence console.log statements for cleaner test output:
    console.log = () => { }

    // We need Cypress to finish loading locahost:${PORT}/ before
    // we execute each test:
    await cy.visit('/')
  })


  it('UI: Correct order of views', () => {
  
  })

  it('UI: Data Collection Persists across views', () => {
  
  })

  //This test is to ensure they didnt break anything...?
  it('GET: Able to retrieve Data', () => {
  
  })


  it('POST: Adds feedback to Database', () => {
    
  })
})
