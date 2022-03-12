class LoginActions {
   
    typeInEmailInputField(email) {
        cy.get('#email').type(email)
        return this;
    }

    typeInPasswordInputField(password) {
        cy.get('#password').type(password)
        return this;
    }

    clickOnLoginButton() {
        cy.contains("[type=submit]",'Login').click({force:true})
        cy.wait(1000)
        return this;
    }

    clickOnForgetPassword(){
        cy.contains('Forgot your password?').click()
        cy.wait(1000)
        return this;
    }

    clickOnSignUp(){
        cy.contains('a','Sign up').click({force:true})
        cy.wait(1000)
        return this;
    }

    clickOnContinueWithFacebookButton(){
        cy.get('#social-btn-facebook-wrapper').find("button").click()
        cy.wait(1000)
        return this;
    }
    typeInFacebookEmailInputField(email) {
        cy.get('#email').type(email)
        return this;
    }

    typeInFacebookPasswordInputField(password) {
        cy.get('#pass').type(password)
        return this;
    }

}

export default LoginActions
