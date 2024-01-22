const locator = require('../locator/PenggunaLocator');

class PenggunaPage {
    async menuPengguna() {
        //cy.xpath(locator.datapenggunaid.menuPengguna).click();
        cy.get('[href="/users"] > .css-ewi1jp').click();
    }

    async clickAddPengguna(){
        cy.xpath(locator.datapenggunaid.btn_addpengguna).click();
    }

    async fillNamaPengguna(pengguna){
        cy.xpath(locator.datapenggunaid.namaPengguna_field).type(pengguna);
    }

    async blankNamaPengguna(){
        cy.xpath(locator.datapenggunaid.namaPengguna_field).invoke('val', '');
    }

    async fillEmailPengguna(email){
        cy.xpath(locator.datapenggunaid.emailPengguna_field).type(email);
    }

    async blankEmailPengguna(){
        cy.xpath(locator.datapenggunaid.emailPengguna_field).invoke('val', '');
    }

    async fillPasswordPengguna(password){
        cy.xpath(locator.datapenggunaid.password_field).type(password);
    }

    async blankPasswordPengguna(){
        cy.xpath(locator.datapenggunaid.password_field).invoke('val', '');
    }

    
    async clikSimpanPengguna(){
        cy.xpath(locator.datapenggunaid.btn_simpanpengguna).click();
    }

    async notifSuksesAddPengguna(){
        cy.xpath(locator.datapenggunaid.notifsuksesaddpengguna).should('be.visible');
    }

    async notifGagalAddPengguna(){
        cy.xpath(locator.datapenggunaid.notifgagaladdpengguna).should('be.visible');
    }
}

module.exports = new PenggunaPage();