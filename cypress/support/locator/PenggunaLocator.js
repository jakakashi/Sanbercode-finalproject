module.exports = {
    datapenggunaid: {
        menuPengguna: '//*[contains(@href,"/users") and @class="css-ewi1jp]', 
        //cy.get('[href="/users"] > .css-ewi1jp')
        namaPengguna_field: '//*[@id="nama"]',
        emailPengguna_field: '//*[@id="email"]',
        password_field: '//*[@id="password"]',
        btn_addpengguna: '//*[@class="chakra-button css-1piskbq"]',
        btn_simpanpengguna: '//*[contains(@class,"chakra-button css-l5lnz6")]',
        notifgagaladdpengguna: '//*[contains(@class,"chakra-alert css-qwanz3")]',
        notifsuksesaddpengguna: '//*[contains(text(),"item ditambahkan")]',
        btn_optionpengguna: '//*[contains(@class,"chakra-button chakra-menu__menu-button css-pu8osu")]' 
    }
}