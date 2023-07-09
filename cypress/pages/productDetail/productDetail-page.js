const buttonAddProductCart = '#product-addtocart-button'
const msgProductAdded = '[class="page messages"]'
const buttonMiniCart = '[class*="minicart-icon"]'
const buttonAccessCart = '#top-cart-btn-checkout'

export class productDetailPage {
    addProductCart() {
        cy.get(buttonAddProductCart)
            .should('be.visible')
            .click().then(() => {
                cy.get(msgProductAdded)
                    .should('contain.text', 'Você adicionou')
            })
    }

    viewCart() {
        cy.get(buttonMiniCart).click().then(() => {
            cy.get(buttonAccessCart).click();
        });
    }
}