import HomePage from "../support/HomePage"
import LoginPage from "../support/LoginPage";
import PagePhones from "../support/PagePhones";
import CartPage from "../support/CartPage";
import PlaceOrderPage from "../support/PlaceOrderPage";

describe('Test Part 4', () => {
    it('Test 4', () => {
        HomePage.acessHomePage();
        HomePage.validateHomePage();
        LoginPage.clickLogIn();
        LoginPage.validatePageLogIn();
        LoginPage.fillUserNameLogIn();
        LoginPage.fillPasswordLogIn();
        LoginPage.clickFinishLogIn();
        LoginPage.validatePageWelcomeUser();
        LoginPage.validateSubCategories();
    })
  })
