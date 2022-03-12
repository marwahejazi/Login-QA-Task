class HomePageActions {
    openHomePage() {
        cy.visit('https://quizplus.com/', {
            headers: {
                "Accept-Encoding": "gzip, deflate, br"
            }
        }
        )
        cy.wait(1000)
        return this;
    }
    
    clickOnJoinIcon() {
        cy.get('#header-join').click()
        cy.wait(1000)
        return this;
    }

    clickOnLoginLink(){
        cy.contains('a','Login').click()
        cy.wait(1000)
        return this;
    }

}

export default HomePageActions 
