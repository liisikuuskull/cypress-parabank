describe('Log In with Valid Credentials', () => {
  it('should log in successfully', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    
    
    cy.get('input[name="username"]').type('testkasutaja');
    cy.get('input[name="password"]').type('test1234');
    cy.get('input.button').click();
    
    cy.contains('Welcome');

  });
});
