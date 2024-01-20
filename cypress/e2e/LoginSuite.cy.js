const LoginPage = require('../support/pages/LoginPage');
const DashboardPage = require('../support/pages/DashboardPage');
const DataLogin = require('../support/data/DataLogin')
// cy.visit('http://kasirdemo.belajarqa.com')
// cy.xpath('//*[@id="email"]').type('jakaardirinaldi@gmail.com');
// cy.xpath('//*[@id="password"]').type('Katasandi12345678');
// cy.xpath('//*[contains(@class,"chakra-button css-1n8i4of")]').click();
// cy.wait(5000)
// cy.xpath('//*[contains(@href,"dashboard")]', {timeout: 5000}).should('be.visible');

describe('Login', () => {
  it('Login dengan valid credential', () => {
    LoginPage.visit();
    LoginPage.fillEmail(DataLogin.validEmail)
    LoginPage.fillPassword(DataLogin.validPassword)
    LoginPage.clikLoginButton();
    DashboardPage.verivyDashboardPage();

  })

  it('Login dengan email kosong', () => {
    LoginPage.visit();
    LoginPage.blankEmail();
    LoginPage.fillPassword(DataLogin.validPassword);
    LoginPage.clikLoginButton();
    LoginPage.notifGagalLogin();

  })
  
  it('Login dengan password kosong', () => {
    LoginPage.visit();
    LoginPage.fillEmail(DataLogin.validEmail);
    LoginPage.blankPassword();
    LoginPage.clikLoginButton();
    LoginPage.notifGagalLogin();

  })

  it('Login dengan email belum terdaftar', () => {
    LoginPage.visit();
    LoginPage.fillPassword(DataLogin.invalidEmail)
    LoginPage.fillPassword(DataLogin.validPassword)
    LoginPage.clikLoginButton();
    LoginPage.notifGagalLogin();

  })

  it('Login dengan password yang salah', () => {
    LoginPage.visit();
    LoginPage.fillEmail(DataLogin.validEmail)
    LoginPage.fillPassword(DataLogin.invalidPassword)
    LoginPage.clikLoginButton();
    LoginPage.notifGagalLogin();

  })

  it('Login dengan wrong format email', () => {
    LoginPage.visit();
    LoginPage.fillEmail(DataLogin.wrongFormatEmail)
    LoginPage.fillPassword(DataLogin.validPassword)
    LoginPage.clikLoginButton();
    LoginPage.notifGagalLogin();
    

  })
})