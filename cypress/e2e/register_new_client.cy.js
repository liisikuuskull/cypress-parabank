describe('Register New Client', () => {
  it('should register a new client successfully', () => {
    
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');

    
    cy.contains('Register').click();

    
    cy.get('input[id="customer.firstName"]').type('Mart');
    cy.get('input[id="customer.lastName"]').type('Maasikas');
    cy.get('input[id="customer.address.street"]').type('Nõmme tee 12');
    cy.get('input[id="customer.address.city"]').type('Tallinn');
    cy.get('input[id="customer.address.state"]').type('Harju mk.');
    cy.get('input[id="customer.address.zipCode"]').type('12345');
    cy.get('input[id="customer.phoneNumber"]').type('+37257465967');
    cy.get('input[id="customer.ssn"]').type('123-45-67897');
    cy.get('input[id="customer.username"]').type('mart_maasikas');
    cy.get('input[id="customer.password"]').type('mart123457');
    cy.get('input[id="repeatedPassword"]').type('mart123457');

    
    cy.get('input[type="submit"][value="Register"]').click();

    
    cy.contains('Your account was created successfully. You are now logged in.');
  });
});