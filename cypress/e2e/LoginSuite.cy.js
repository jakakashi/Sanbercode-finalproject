describe('Login', () => {
  it('Login with valid credential', () => {
    cy.visit('http://kasirdemo.belajarqa.com/')
    cy.xpath('//*[@id="email"]').type('jakaardirinaldi@gmail.com');
    cy.xpath('//*[@id="password"]').type('Katasandi12345678');
    cy.xpath('//*[contains(@class,"chakra-button css-1n8i4of")]').click();
    cy.wait(5000)
    cy.xpath('//*[contains(@href,"dashboard")]', {timeout: 5000}).should('be.visible');
  })
})