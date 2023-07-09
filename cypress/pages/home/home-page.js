const fieldSearch = '#search';
const buttonSearch = '[title="Pesquisar"]'
const iconRemoveProductCart = '[class="action action-delete"]'
const msgCartEmpty = '[class*="cart-empty"]'

export class HomePage {
    searchProduct() {
        cy.get(fieldSearch)
            .should('be.visible')
            .type('Parafuso Allen')
        cy.get(buttonSearch).click();
    }

    removeProductCart() {
        cy.visit('/checkout/cart/')
        cy.get(iconRemoveProductCart)
            .should('be.visible')
            .click();
        cy.get(msgCartEmpty).should('include.text', 'Você não possui nenhum item em seu carrinho de compras.')
    }
}