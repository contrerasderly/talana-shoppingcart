describe('Carrito de compras', function(){
    //login usuario
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#login2').click()
        cy.loginUsuario()     
    })

    afterEach(() => {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#cartur').click()     
        expect(totalp>790).to.be.true
    })
})