//LOGIN CORRECTO

Cypress.Commands.add('loginUsuario', function () {
    let email = "contrerasderly@gmail.com"
    let pass = "Talana2023"

    cy.fixture('login.json').then(function (element) {
        cy.get(element.username).click()
        cy.wait(1000)
        cy.get(element.username).type(email, { log: false })
        cy.get(element.password).click().type(pass, { log: false })
        cy.get(element.buttonLogin).click()
    })
})
