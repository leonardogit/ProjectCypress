import HomePage from "../support/HomePage"
import LoginPage from "../support/LoginPage";
import PagePhones from "../support/PagePhones";
import CartPage from "../support/CartPage";
import PlaceOrderPage from "../support/PlaceOrderPage";

describe('Test Part 3', () => {
    it('Test 3', () => {
        HomePage.acessHomePage();
        HomePage.validateHomePage();
        LoginPage.clickLogIn();
        LoginPage.validatePageLogIn();
        LoginPage.fillUserNameLogIn();
        LoginPage.fillPasswordLogIn();
        LoginPage.clickFinishLogIn();
        LoginPage.validatePageWelcomeUser();
        LoginPage.clickPhones();
        PagePhones.clickIphone6();
        PagePhones.validatePageIphone6();
        PagePhones.clickAddToCart();
        PagePhones.validateAlertProductAdd();
        HomePage.clickHome();
        HomePage.validateHomePage();
        LoginPage.clickPhones();
        PagePhones.clickSonyXperia();
        PagePhones.validatePageSonyXperia();
        PagePhones.clickAddToCart();
        PagePhones.validateAlertProductAdd();
        PagePhones.clickCart();
        CartPage.clickRemoveItem();
        CartPage.exctractTotal();
        CartPage.clickPlaceOrder();
        PlaceOrderPage.validatePagePlaceOrder()
        PlaceOrderPage.populateModal();
        PlaceOrderPage.validatePopUpPurchase();
    })
  })