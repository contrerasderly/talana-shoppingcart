describe('Carrito de compras', function(){
  //login usuario

  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#login2').click()
    cy.loginUsuario()     
  })

  it('Agregar articulos phones', function(){
    cy.wait(1000)
    cy.get('.list-group-item').eq(1)
    cy.wait(1000)
    cy.get('.list-group-item').eq(1).click({ force: true })
    cy.wait(1000)
    cy.contains('Iphone 6 32gb').click()
    cy.get('.btn.btn-success.btn-lg').click()
    cy.wait(1000)
  })

  it('Agregar articulos laptops', function(){
    cy.wait(1000)
    cy.get('.list-group-item').eq(2)
    cy.wait(1000)
    cy.get('.list-group-item').eq(2).click({ force: true })
    cy.wait(1000)
    cy.get('#tbodyid > :nth-child(6)').click()
    cy.get('.btn.btn-success.btn-lg').click()
    cy.wait(1000)

  })

  it('Agregar articulos monitors', function(){
    cy.wait(1000)
    cy.get('.list-group-item').eq(3)
    cy.wait(1000)
    cy.get('.list-group-item').eq(3).click({ force: true })
    cy.wait(1000)
    cy.get('#tbodyid > :nth-child(1)').click()
    cy.wait(1000)
    cy.get('.btn.btn-success.btn-lg').click()
  })

  it('Confirmar datos de envio', function(){
    cy.wait(1500)
    cy.get('#cartur').click()  
    cy.wait(1000)
    cy.get('.btn.btn-success').click()
    cy.wait(2000)
    cy.get('#name').type('Derly Contreras')
    cy.get('#country').type('Colombia')
    cy.get('#city').type('Cucuta')
    cy.get('#card').type('1234567890')
    cy.get('#month').type('05')
    cy.get('#year').type('2023')
    cy.wait(2000)
    cy.get('[onclick="purchaseOrder()"]').click()
    cy.wait(3000)
    cy.log('El numero de tarjeta de credito registrada es correcto')
    cy.get('.lead.text-muted').should('include.text', 'Card Number: 1234567890')
  })

    /*it('Cantidad de elementos agregados al carrito', function(){
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#cartur').click()  
    cy.log('Valida si existe la clase donde se listan los productos agregados')   
    cy.get('#tbodyid').should('have.length', 3)
    cy.wait(2000)
  })*/
})