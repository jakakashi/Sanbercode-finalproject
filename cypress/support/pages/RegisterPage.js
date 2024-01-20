const locator = require('../locator/LoginLocator')
const locatorRegister = require('../locator/RegisterLocator')

class RegisterPage {
    async visitRegister() {
        cy.visit('http://kasirdemo.belajarqa.com');
        //cy.xpath(locator.datatestid.daftar).click();
        cy.get('.css-4rvv7a > a').click();
    }

    async fillNamaToko(NamaToko){
        cy.xpath(locatorRegister.dataregisterid.namatoko_field).type(NamaToko);
    }

    async blankNamaToko(){
        cy.xpath(locatorRegister.dataregisterid.namatoko_field).invoke('val', '');
    }

    async fillEmail(email){
        cy.xpath(locatorRegister.dataregisterid.email_field).type(email);
    }

    async blankEmail(){
        cy.xpath(locatorRegister.dataregisterid.email_field).invoke('val', '');
    }

    async fillPassword(password){
        cy.xpath(locatorRegister.dataregisterid.password_field).type(password);
    }

    async blankPassword(){
        cy.xpath(locatorRegister.dataregisterid.password_field).invoke('val', '');
    }
    
    async clikRegisterButton(password){
        cy.xpath(locatorRegister.dataregisterid.btn_register).click();
    }

    async notifGagalRegister(){
        cy.xpath(locatorRegister.dataregisterid.notifgagalregister).should('be.visible');
    }
}

module.exports = new RegisterPage();