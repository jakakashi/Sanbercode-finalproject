const DataRegister = require('../support/data/DataRegister');
const RegisterPage = require('../support/pages/RegisterPage');

describe('Register - Postitive Case', () => {
    it('Register user baru', () => {
        RegisterPage.visitRegister();
        RegisterPage.fillNamaToko(DataRegister.RegisterNamatoko);
        RegisterPage.fillEmail(DataRegister.RegisterEmail);
        RegisterPage.fillPassword(DataRegister.RegisterPassword);
        RegisterPage.clikRegisterButton();
        RegisterPage.notifSuksesRegister();
  
    })
})

describe('Register - Negative Case', () => {
    beforeEach(() => {
        RegisterPage.visitRegister();
      })

    it('Register dengan nama toko kosong', () => {
        RegisterPage.blankNamaToko();
        RegisterPage.fillEmail(DataRegister.RegisterEmail);
        RegisterPage.fillPassword(DataRegister.RegisterPassword);
        RegisterPage.clikRegisterButton();
        RegisterPage.notifGagalRegister();
  
    })

    it('Register dengan email kosong', () => {
        RegisterPage.fillNamaToko(DataRegister.RegisterNamatoko);
        RegisterPage.blankEmail();
        RegisterPage.fillPassword(DataRegister.RegisterPassword);
        RegisterPage.clikRegisterButton();
        RegisterPage.notifGagalRegister();
  
    })

    it('Register dengan password kosong', () => {
        RegisterPage.fillNamaToko(DataRegister.RegisterNamatoko);
        RegisterPage.fillEmail(DataRegister.RegisterEmail);
        RegisterPage.blankPassword();
        RegisterPage.clikRegisterButton();
        RegisterPage.notifGagalRegister();
  
    })

    it('Register dengan wrong format email', () => {
        RegisterPage.fillNamaToko(DataRegister.RegisterNamatoko);
        RegisterPage.fillEmail(DataRegister.wrongFormatEmail);
        RegisterPage.fillPassword(DataRegister.RegisterPassword);
        RegisterPage.clikRegisterButton();
        RegisterPage.notifGagalRegister();
  
    })



})