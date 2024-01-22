const DataPelanggan = require('../support/data/DataPelanggan');
const PelangganPage = require('../support/pages/PelangganPage');
const LoginPage = require('../support/pages/LoginPage');
const DataLogin = require('../support/data/DataLogin');

describe('Menu Pelanggan - Postitive Case', () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.fillEmail(DataLogin.validEmail);
        LoginPage.fillPassword(DataLogin.validPassword);
        LoginPage.clikLoginButton();
        PelangganPage.menuPelanggan();
      })

    it('Add Pelanggan baru', () => {
        PelangganPage.clickAddPelanggan();
        PelangganPage.fillNamaPelanggan(DataPelanggan.namaPelanggan);
        PelangganPage.fillNoHP(DataPelanggan.noHP);
        PelangganPage.fillAlamat(DataPelanggan.alamat);
        PelangganPage.fillKeterangan(DataPelanggan.keterangan);
        PelangganPage.clikSimpanPelanggan();
        PelangganPage.notifSuksesAddPelanggan();
  
    })

    it('Hapus Pelanggan baru', () => {
        PelangganPage.clickOptionPelanggan();
        PelangganPage.clickHapusPelanggan();
  
    })
})

describe('Menu Pelanggan - Negative Case', () => {
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.fillEmail(DataLogin.validEmail);
        LoginPage.fillPassword(DataLogin.validPassword);
        LoginPage.clikLoginButton();
        PelangganPage.menuPelanggan();
      })

    it('Add Pelanggan baru dengan nama kosong', () => {
        PelangganPage.clickAddPelanggan();
        PelangganPage.blankNamaPelanggan();
        PelangganPage.fillNoHP(DataPelanggan.noHP);
        PelangganPage.fillAlamat(DataPelanggan.alamat);
        PelangganPage.fillKeterangan(DataPelanggan.keterangan);
        PelangganPage.clikSimpanPelanggan();
        PelangganPage.notifGagalAddPelanggan();
  
    })
})

