import { searchPage } from "../../pages/search/search-page";
import { cartPage } from "../../pages/cart/cart-page";
import { CheckoutPage } from "../../pages/checkout/checkout-page";
import { HomePage } from "../../pages/home/home-page";
import { LoginPage } from "../../pages/login/login-page"
import { productDetailPage } from "../../pages/productDetail/productDetail-page";
const login = new LoginPage();
const home = new HomePage();
const search = new searchPage();
const productDetail = new productDetailPage();
const cart = new cartPage();
const checkout = new CheckoutPage();


describe('Cenários para validação do fluxo de "Pagamentos"', { tags: ['regression', 'checkout'] }, () => {
    beforeEach('Acessar o site', () => {
        cy.visit("/");
    })
    afterEach(() => {
        home.removeProductCart();
    })
    it('Validar fluxo de pagamento via cartão de crédito', () => {
        login.loginSuccess();
        home.searchProduct();
        search.clickFirstItemSearch();
        productDetail.addProductCart();
        productDetail.viewCart();
        cart.clickCheckout();
        checkout.paymentCreditCard();
    });

    it('Validar fluxo de pagamento via boleto', () => {
        login.loginSuccess();
        home.searchProduct();
        search.clickFirstItemSearch();
        productDetail.addProductCart();
        productDetail.viewCart();
        cart.clickCheckout();
        checkout.paymentSlip();
    });

    it('Validar fluxo de pagamento via pix', () => {
        login.loginSuccess();
        home.searchProduct();
        search.clickFirstItemSearch();
        productDetail.addProductCart();
        productDetail.viewCart();
        cart.clickCheckout();
        checkout.paymentPix();
    });

    it('Validar inclusão de cupom de desconto no fluxo de pagamento', () => {
        login.loginSuccess();
        home.searchProduct();
        search.clickFirstItemSearch();
        productDetail.addProductCart();
        productDetail.viewCart();
        cart.clickCheckout();
        checkout.paymentSlip();
        checkout.applyDiscount();
    });

    it('Validar mensagem de erro ao informar cupom invalido', () => {
        login.loginSuccess();
        home.searchProduct();
        search.clickFirstItemSearch();
        productDetail.addProductCart();
        productDetail.viewCart();
        cart.clickCheckout();
        checkout.paymentSlip();
        checkout.applyDiscountInvalid();
    });

    it('Validar mensagem de erro para cartões vencidos', () => {
        login.loginSuccess();
        home.searchProduct();
        search.clickFirstItemSearch();
        productDetail.addProductCart();
        productDetail.viewCart();
        cart.clickCheckout();
        checkout.paymentCreditCardExpiration();
        checkout.validateExpirationDate();
    });

    it('Pagamento com cartão de crédito (CVV vazio)', () => {
        login.loginSuccess();
        home.searchProduct();
        search.clickFirstItemSearch();
        productDetail.addProductCart();
        productDetail.viewCart();
        cart.clickCheckout();
        checkout.paymentCreditCardCVVEmpty();
        checkout.validateCvvRequired();
    });
})