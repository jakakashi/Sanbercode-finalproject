const DataPelanggan = require('../support/data/DataPelanggan');
const RegisterPage = require('../support/pages/RegisterPage');
const PelangganPage = require('../support/pages/PelangganPage');
const LoginPage = require('../support/pages/LoginPage');
const DataLogin = require('../support/data/DataLogin');
const { datapelangganid } = require('../support/locator/PelangganLocator');

describe('Menu Pelanggan - Postitive Case', () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.fillEmail(DataLogin.validEmail);
        LoginPage.fillPassword(DataLogin.validPassword);
        LoginPage.clikLoginButton();
      })

    it('Add Pelanggan baru', () => {
        PelangganPage.menuPelanggan();
        PelangganPage.clickAddPelanggan();
        PelangganPage.fillNamaPelanggan(DataPelanggan.namaPelanggan);
        PelangganPage.fillNoHP(DataPelanggan.noHP);
        PelangganPage.fillAlamat(DataPelanggan.alamat);
        PelangganPage.fillKeterangan(DataPelanggan.keterangan);
        PelangganPage.clikSimpanPelanggan();
        PelangganPage.notifSuksesAddPelanggan();
  
    })

    
})

describe('Menu Pelanggan - Negative Case', () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.fillEmail(DataLogin.validEmail);
        LoginPage.fillPassword(DataLogin.validPassword);
        LoginPage.clikLoginButton();
      })

    it('Add Pelanggan baru dengan nama kosong', () => {
        PelangganPage.menuPelanggan();
        PelangganPage.clickAddPelanggan();
        PelangganPage.blankNamaPelanggan();
        PelangganPage.fillNoHP(DataPelanggan.noHP);
        PelangganPage.fillAlamat(DataPelanggan.alamat);
        PelangganPage.fillKeterangan(DataPelanggan.keterangan);
        PelangganPage.clikSimpanPelanggan();
        PelangganPage.notifGagalAddPelanggan();
  
    })

    
})