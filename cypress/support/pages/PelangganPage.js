const locator = require('../locator/PelangganLocator')

class PelangganPage {
    async menuPelanggan() {
        //cy.xpath(locator.datapelangganid.menuPelanggan).click();
        cy.get(':nth-child(9) > .css-ewi1jp').click();
    }

    async clickAddPelanggan(){
        cy.xpath(locator.datapelangganid.btn_addpelanggan).click();
    }

    async fillNamaPelanggan(pelanggan){
        cy.xpath(locator.datapelangganid.namaPelanggan_field).type(pelanggan);
    }

    async blankNamaPelanggan(){
        cy.xpath(locator.datapelangganid.namaPelanggan_field).invoke('val', '');
    }

    async fillNoHP(npHP){
        cy.xpath(locator.datapelangganid.noHPpelanggan_field).type(npHP);
    }

    async fillAlamat(alamat){
        cy.xpath(locator.datapelangganid.alamat_field).type(alamat);
    }

    async fillKeterangan(keterangan){
        cy.xpath(locator.datapelangganid.keterangan_field).type(keterangan);
    }
    
    async clikSimpanPelanggan(){
        cy.xpath(locator.datapelangganid.btn_simpanpelanggan).click();
    }

    async notifSuksesAddPelanggan(){
        cy.xpath(locator.datapelangganid.notifsuksesaddpenlanggan).should('be.visible');
    }

    async notifGagalAddPelanggan(){
        cy.xpath(locator.datapelangganid.notifgagaladdpelanggan).should('be.visible');
    }
}

module.exports = new PelangganPage();