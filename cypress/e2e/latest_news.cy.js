describe('Latest News', () => {
  it('should load latest news page', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    
    
    cy.contains('a', 'ParaBank Is Now Re-Opened').click();


  cy.contains('ParaBank News');
    
    
  });
});