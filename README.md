# talana-shoppingcart

*Ejecutar el set de pruebas
Se usó el editor de texto Visual Studio Code con cypres y javascript
Se adjunta la carpeta del proyecto comprimida y se proporciona link público del proyecto en GitHub


*Ejecutar el proyecto

Abrir el proyecto con Visual Studio Code y en el terminal ejecutar:

npm install cypress --save-dev (instalar cypress al proyecto)

npx cypress open (abre el navegador de Cypress)


*Criterios de aceptacion

Dado que el cliente quiere añadir un producto a su carro de compra
cuando selecciona un producto y selecciona la opción agregar
y se cuente con acceso a internet
entonces se debe añadir el producto al carro de compra y debe aumentar el número
de productos en el carrito

Dado que el cliente ya tiene en el carrito de compras los articulos deseados
cuando pulsa el botón "Place Order" 
y se cuente con acceso a internet
entonces se debe mostrar un popUp donde debera digitar la información referente a datos personales y forma de pago

Dado que el cliente ya digitó la información referente a datos personales y forma de pago
cuando pulsa el botón "Purchase" 
y se cuente con acceso a internet
entonces se debe procesar la compra y mostrar un popUp de confirmación donde se visualizará un id compra e información del pago que debe coincidir con la registrada
