const inputEmail = '[id="email"]'
const inputPassword= '[id="pass"]'
const buttonEnter = '[id="send2"]'



export class LoginPage {
    loginSuccess() {
        cy.get('.porto-sicon-box-link > .porto-sicon-box > .porto-sicon-header > p').click();
        cy.get('#btn-cookie-allow').click();
        cy.get(inputEmail).eq(0).type('brasil@harakirimail.com');
        cy.get(inputPassword).eq(0).type('AutomationCypress2023');
        cy.get(buttonEnter).eq(0).click();
    }
}