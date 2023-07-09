const searchItems = '[class="item product product-item"]';


export class searchPage {
    clickFirstItemSearch(){
        cy.get(searchItems)
            .eq(0)
            .should('be.visible')
            .click();
    }
}