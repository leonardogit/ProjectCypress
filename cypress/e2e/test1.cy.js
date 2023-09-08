import HomePage from "../support/HomePage"
import SignUpPage from "../support/SignUpPage";
import LoginPage from "../support/LoginPage";

describe('Test Suite Part 1', () => {

    //Go to https://www.demoblaze.com/
    //Sign Up as a new user
    it('Register successfully', () => {
      HomePage.acessHomePage();
      HomePage.validateHomePage();
      SignUpPage.clickSignUp();
      SignUpPage.validateSignUpPage();
      SignUpPage.fillUserName();
      SignUpPage.fillPassword();
      SignUpPage.clickRegister();
      SignUpPage.validateAlertSucess();
    }),
    //Validate if you try signup with same user modal will appear 
    it('Register Error SignUp', () => {
        HomePage.acessHomePage();
        HomePage.validateHomePage();
        SignUpPage.clickSignUp();
        SignUpPage.validateSignUpPage();
        SignUpPage.fillUserInvalid();
        SignUpPage.fillPassword();
        SignUpPage.clickRegister();
        SignUpPage.validateAlertError();
      })
      //Log in AND Logout
      it('Log in And Log out', () => {
        HomePage.acessHomePage();
        HomePage.validateHomePage();
        LoginPage.clickLogIn();
        LoginPage.validatePageLogIn();
        LoginPage.fillUserNameLogIn();
        LoginPage.fillPasswordLogIn();
        LoginPage.clickFinishLogIn();
        LoginPage.validatePageWelcomeUser();
        LoginPage.LogOut();
        HomePage.validateHomePage();
      })
      //Try logging in with invalid user 
      it('Login using user invalid', () => {
        HomePage.acessHomePage();
        HomePage.validateHomePage();
        LoginPage.clickLogIn();
        LoginPage.validatePageLogIn();
        LoginPage.fillUserNameLogIn();
        LoginPage.fillPasswordLogInInvalid();
        LoginPage.clickFinishLogIn();
        LoginPage.validaeErrorLoginPasswordInvalid();
      })
  })