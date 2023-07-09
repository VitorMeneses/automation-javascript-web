const radioButtonCreditCard = '#pagarme_creditcard'
const inputNumberCard = '[class*="cc_number"]'
const inputNameCard = '[class*="cc_owner"]'
const titlePageCheckout = '#opc-shipping_method'
const ExpirationCard = '[name="payment[cc_exp_year]"]'
const inputCVV = '[name="payment[cc_cid]"]'
const dropdownQuota = '[name="payment[cc_installments]"]'
const radioButtonPaymentSlip = '#pagarme_billet'
const msgPaymentSlip = '.checkout-text-block'
const radioButtonPix = '#pagarme_pix'
const inputDiscount = '#discount-code'
const optionDiscount = '#block-discount-heading'
const buttonApplyDiscount = '[class="action action-apply"]'
const checkoutButton = '#sidebar_place_order'


export class CheckoutPage {
    paymentCreditCard() {
        cy.get(titlePageCheckout).should('be.visible').then(() => {
            cy.get('.loader > img').should('not.be.visible')
        })
        cy.get(radioButtonCreditCard).click().then(() => {
            cy.get(inputNumberCard).type("5549412043900574");
            cy.get(inputNameCard).type('Maria de antonio carlos');
            cy.get(ExpirationCard).select('2030');
            cy.get(inputCVV).type('171');
            cy.get(dropdownQuota).select(3);
        });
    }

    paymentSlip() {
        cy.get(titlePageCheckout).should('be.visible').then(() => {
            cy.get('.loader > img').should('not.be.visible')
        })
        cy.get(radioButtonPaymentSlip).click();
        cy.get(msgPaymentSlip).should('be.visible')
    }

    paymentPix() {
        cy.get(titlePageCheckout).should('be.visible').then(() => {
            cy.get('.loader > img').should('not.be.visible')
        })
        cy.get(radioButtonPix).click();
    }

    applyDiscount() {
        cy.get(optionDiscount).click().then(() => {
            cy.get(inputDiscount).type('PRIMEIRACOMPRA');
        })
    }

    applyDiscountInvalid() {
        cy.get(optionDiscount).click().then(() => {
            cy.get(inputDiscount).type('QUEROMAIS');
            cy.get(buttonApplyDiscount).click();
            cy.contains('O código do cupom não é válido. Verifique o código e tente novamente.').should('be.visible')
        })
    }

    paymentCreditCardExpiration() {
        cy.get(titlePageCheckout).should('be.visible').then(() => {
            cy.get('.loader > img').should('not.be.visible')
        })
        cy.get(radioButtonCreditCard).click().then(() => {
            cy.get(inputNumberCard).type("5147744499084172");
            cy.get(inputNameCard).type('Maria de antonio carlos');
            cy.get(ExpirationCard).select('2023');
            cy.get(inputCVV).type('460');
            cy.get(dropdownQuota).select(3);
            cy.get(checkoutButton)
                .should('be.enabled')
                .click();
        });
    }

    paymentCreditCardCVVEmpty() {
        cy.get(titlePageCheckout).should('be.visible').then(() => {
            cy.get('.loader > img').should('not.be.visible')
        })
        cy.get(radioButtonCreditCard).click().then(() => {
            cy.get(inputNumberCard).type("5513679812985950");
            cy.get(inputNameCard).type('Maria de lurdes da silva');
            cy.get(ExpirationCard).select('2024');
            cy.get(dropdownQuota).select(3);
            cy.get(checkoutButton)
                .should('be.enabled')
                .click();
        });
    }

    validateExpirationDate() {
        cy.contains('Data de Validade Inválida')
    }

    validateCvvRequired() {
        cy.contains('Campo obrigatório')
    }
}