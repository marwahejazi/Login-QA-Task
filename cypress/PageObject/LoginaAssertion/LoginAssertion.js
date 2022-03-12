
class LoginAsserions {
  dashboardIsOpenSuccssefully(){
      cy.url().should('include','dashboard')
  }

checkEmailValidationMessage(validationMessage){
  cy.get('#validation-email-message').should('contain', validationMessage)
}

checkPasswordValidationMessage(validationMessage){
    cy.get('#validation-password-message').should('contain', validationMessage)
}

checkIncorrectCredentials(){
    cy.get('#auth-error-message-div').should('contain','Invalid credentials')
}

checkForgetYourPasswordPageIsOpen(){
    cy.contains('h2','Forget Your Password?').should('be.visible')   
}

checkSignupPageIsOpen(){
    cy.contains('h2','Sign up').should('be.exist')
}
}

export default LoginAsserions
