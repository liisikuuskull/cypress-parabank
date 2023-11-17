describe('Send Email', () => {
  it('should send successfully email', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    
    cy.contains('contact').click();
   
    cy.contains('Customer Care');

    cy.get('input#name').type('Mari');
    cy.get('input#email').type('mari@example.com');
    cy.get('input#phone').type('123456789');
    cy.get('textarea#message').type('Test test test!');

    cy.get('input.button[value="Send to Customer Care"]').click();

    cy.contains('Thank you');
    
  });
});
