class DashboardPage {
    async verivyDashboardPage() {
        cy.xpath('//*[contains(@href,"dashboard")]', {timeout: 5000}).should('be.visible')
    }

    async dashboardPagenotshowing() {
        cy.xpath('//*[contains(@href,"dashboard")]', {timeout: 5000}).should('not.exist')
    }
}

module.exports = new DashboardPage()