describe('Clicking Locations link', () => {
  it('should load new page', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    
    
    cy.contains('a', 'Locations').click();


    cy.url().should('include', 'https://www.parasoft.com/solutions/');
    
    
  });
});