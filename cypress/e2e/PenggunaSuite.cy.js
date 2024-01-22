const LoginPage = require('../support/pages/LoginPage');
const DataLogin = require('../support/data/DataLogin');
const PenggunaPage = require('../support/pages/PenggunaPage')
const DataPengguna = require('../support/data/DataPengguna')

describe('Menu Pengguna - Postitive Case', () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.fillEmail(DataLogin.validEmail);
        LoginPage.fillPassword(DataLogin.validPassword);
        LoginPage.clikLoginButton();
        PenggunaPage.menuPengguna();
      })

    it('Add Pengguna baru', () => {
        PenggunaPage.clickAddPengguna();
        PenggunaPage.fillNamaPengguna(DataPengguna.namaPengguna);
        PenggunaPage.fillEmailPengguna(DataPengguna.email);
        PenggunaPage.fillPasswordPengguna(DataPengguna.password);
        PenggunaPage.clikSimpanPengguna();
        PenggunaPage.notifSuksesAddPengguna();
  
    })

    
})

describe('Menu Pengguna - Negative Case', () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.fillEmail(DataLogin.validEmail);
        LoginPage.fillPassword(DataLogin.validPassword);
        LoginPage.clikLoginButton();
        PenggunaPage.menuPengguna();
      })

    it('Add Pengguna baru dengan nama kosong', () => {
        PenggunaPage.clickAddPengguna();
        PenggunaPage.blankNamaPengguna()
        PenggunaPage.fillEmailPengguna(DataPengguna.email);
        PenggunaPage.fillPasswordPengguna(DataPengguna.password);
        PenggunaPage.clikSimpanPengguna();
        PenggunaPage.notifGagalAddPengguna();
  
    })

    it('Add Pengguna baru dengan email kosong', () => {
        PenggunaPage.clickAddPengguna();
        PenggunaPage.fillNamaPengguna(DataPengguna.namaPengguna);
        PenggunaPage.blankEmailPengguna();
        PenggunaPage.fillPasswordPengguna(DataPengguna.password);
        PenggunaPage.clikSimpanPengguna();
        PenggunaPage.notifGagalAddPengguna();
  
    })

    it('Add Pengguna baru dengan wrong format email kosong', () => {
        PenggunaPage.clickAddPengguna();
        PenggunaPage.fillNamaPengguna(DataPengguna.namaPengguna);
        PenggunaPage.fillEmailPengguna(DataPengguna.wrongformatemail);
        PenggunaPage.fillPasswordPengguna(DataPengguna.password);
        PenggunaPage.clikSimpanPengguna();
        PenggunaPage.notifGagalAddPengguna();
  
    })

    it('Add Pengguna baru dengan password kosong', () => {
        PenggunaPage.clickAddPengguna();
        PenggunaPage.fillNamaPengguna(DataPengguna.namaPengguna);
        PenggunaPage.fillEmailPengguna(DataPengguna.email);
        PenggunaPage.blankPasswordPengguna();
        PenggunaPage.clikSimpanPengguna();
        PenggunaPage.notifGagalAddPengguna();
  
    })
    

    
})