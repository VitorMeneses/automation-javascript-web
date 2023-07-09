const titlePage = '.page-title'
const checkoutButton = '[data-role="proceed-to-checkout"]'


export class cartPage {
    clickCheckout() {
        cy.get(titlePage)
            .should('be.visible').then(() => {
                cy.get(checkoutButton)
                .should('be.enabled')
                .click();
            })
    }
}