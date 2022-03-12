import HomePageActions from "../../PageObject/HomePageActions/HomePageActions";
import LoginActions from "../../PageObject/LoginActions/LoginAction";
import LoginAsserions from "../../PageObject/LoginaAssertion/LoginAssertion";

const homePageActions = new HomePageActions;
const loginActions = new LoginActions;
const loginAsserion = new LoginAsserions;

context('Login', () => {
    beforeEach(() => {
      homePageActions.openHomePage().clickOnJoinIcon().clickOnLoginLink()
    });

    it('should fill Correct email and correct password', () => {
     loginActions.typeInEmailInputField('marwa.mhejazi@hotmail.com').typeInPasswordInputField('test@123').clickOnLoginButton()
     loginAsserion.dashboardIsOpenSuccssefully() 
    });

    it('no email and  password', () => {
     loginActions.clickOnLoginButton()
     loginAsserion.checkEmailValidationMessage('The email is required.')
     loginAsserion.checkPasswordValidationMessageRequired()
    });

    it('should fill Correct email and no password', () => {
      loginActions.typeInEmailInputField('marwa.mhejazi@hotmail.com').clickOnLoginButton()
      loginAsserion.checkPasswordValidationMessage('The password is required.')
    });

    it('should fill no email and correct password', () => {
      loginActions.typeInPasswordInputField('test@123').clickOnLoginButton()
      loginAsserion.checkEmailValidationMessage('The email is required.')
    });

    it('should fill Correct email and incorrect password', () => {
      loginActions.typeInEmailInputField('marwa.mhejazi@hotmail.com').typeInPasswordInputField('test@1234').clickOnLoginButton()
      loginAsserion.checkIncorrectCredentials()
    });

    it('should fill InCorrect email and correct password', () => {
      loginActions.typeInEmailInputField('marwaa.mhejazi@hotmail.com').typeInPasswordInputField('test@123').clickOnLoginButton()
      loginAsserion.checkIncorrectCredentials()
    });

    it('should fill InCorrect email and Incorrect password', () => {
      loginActions.typeInEmailInputField('marwaa.mhejazi@hotmail.com').typeInPasswordInputField('test@12').clickOnLoginButton()
      loginAsserion.checkIncorrectCredentials()
    });

    it('check the password is less than 6 digits', () => {
      loginActions.typeInEmailInputField('marwa.mhejazi@hotmail.com').typeInPasswordInputField('test').clickOnLoginButton()
      loginAsserion.checkPasswordValidationMessage('The password must be at least 6 characters.')
    });

    it('check incorrect email format', () => {
      loginActions.typeInEmailInputField('marwa.mhejazihotmail.com').typeInPasswordInputField('test@123')
      loginAsserion.checkEmailValidationMessage('The email must be a valid email address.') 
    });

    it('click on forget your password', () => {
      loginActions.clickOnForgetPassword()
      loginAsserion.checkForgetYourPasswordPageIsOpen()
    });

    it('click on signup ', () => {
      loginActions.clickOnSignUp()
      loginAsserion.checkSignupPageIsOpen()  
    });

    it('Login with Facebook', () => {
     loginActions.clickOnContinueWithFacebookButton().typeInFacebookEmailInputField('marwa.mhejazi@hotmail.com').typeInFacebookPasswordInputField('test123')
     loginAsserion.dashboardIsOpenSuccssefully() 
    });
    
  });