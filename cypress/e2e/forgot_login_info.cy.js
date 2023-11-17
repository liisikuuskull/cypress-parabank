describe('Forgot Login Info', () => {
  it('should click link, fill form and send it', () => {
    
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');

    
    cy.contains('Forgot login info').click();

    
    cy.get('input#firstName').type('Mari');
    cy.get('input#lastName').type('Maasikas');
    cy.get('input#address\\.street').type('Nõmme tee 12');
    cy.get('input#address\\.city').type('Tallinn');
    cy.get('input#address\\.state').type('Harju mk.');
    cy.get('input#address\\.zipCode').type('12345');
    cy.get('input#ssn').type('123-45-6789');
    
    cy.get('input.button[value="Find My Login Info"]').click();

  });
});