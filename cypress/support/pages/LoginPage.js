const locator = require('../locator/LoginLocator')

class LoginPage {
    async visit() {
        cy.visit('http://kasirdemo.belajarqa.com')
    }
    //cy.xpath('//*[@id="email"]').type('jakaardirinaldi@gmail.com');
   // cy.xpath('//*[@id="password"]').type('Katasandi12345678');
   // cy.xpath('//*[contains(@class,"chakra-button css-1n8i4of")]').click();
   // cy.wait(5000)
    async fillEmail(email){
        cy.xpath(locator.datatestid.email_field).type(email);
    }

    async blankEmail(){
        cy.xpath(locator.datatestid.email_field).invoke('val', '');
    }

    async fillPassword(password){
        cy.xpath(locator.datatestid.password_field).type(password);
    }

    async blankPassword(){
        cy.xpath(locator.datatestid.password_field).invoke('val', '');
    }
    
    async clikLoginButton(password){
        cy.xpath(locator.datatestid.btn_login).click();
    }

    async notifGagalLogin(){
        cy.xpath(locator.datatestid.notifgagal).should('be.visible');
    }
}

module.exports = new LoginPage();