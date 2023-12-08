// Obtener la información del carrito del localStorage
let cartProducts = JSON.parse(localStorage.getItem("CartProducts"));

// Función para crear las tarjetas de producto en el carrito
function createCartProductCard(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('card');

    const imgProduct = document.createElement('img');
    imgProduct.src = product.image;
    imgProduct.alt = product.title;
    imgProduct.classList.add('card-image');

    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('Description-and-Price');

    const descriptionTxt = document.createElement('p');
    descriptionTxt.classList.add('Description-and-Price-txt');
    descriptionTxt.innerHTML = `${product.title}<br>Color: ${product.Color}<br>Precio: $${product.price}<br>Cantidad: ${product.count}`;

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('cart-product-buttons');

    const increaseButton = document.createElement('button');
    increaseButton.classList.add('btn-increase');
    increaseButton.textContent = 'Añadir';

    const decreaseButton = document.createElement('button');
    decreaseButton.classList.add('btn-decrease');
    decreaseButton.textContent = 'Disminuir';

    const removeButton = document.createElement('button');
    removeButton.classList.add('btn-remove');
    removeButton.textContent = 'Eliminar Todos';

    // Agregar eventos a los botones
    increaseButton.addEventListener('click', () => increaseProductCount(product.id));
    decreaseButton.addEventListener('click', () => decreaseProductCount(product.id));
    removeButton.addEventListener('click', () => removeProductFromCart(product.id));


    // Agregar elementos al contenedor
    buttonsContainer.appendChild(increaseButton);
    buttonsContainer.appendChild(decreaseButton);
    buttonsContainer.appendChild(removeButton);

    descriptionContainer.appendChild(descriptionTxt);
    descriptionContainer.appendChild(buttonsContainer);

    productCard.appendChild(imgProduct);
    productCard.appendChild(descriptionContainer);

    // Agregar la tarjeta al contenedor del carrito
    document.getElementById('wrapper-cart').appendChild(productCard);
}

// Crear tarjetas para cada producto en el carrito
if (cartProducts && cartProducts.length > 0) {
    cartProducts.forEach(product => {
        createCartProductCard(product);
    });
}
// Función para aumentar la cantidad de un producto en el carrito
function increaseProductCount(productId) {
    const productIndex = cartProducts.findIndex(product => product.id === productId);
    if (productIndex !== -1) {
        cartProducts[productIndex].count++;
        updateCart();
    }
}

// Función para disminuir la cantidad de un producto en el carrito
function decreaseProductCount(productId) {
    const productIndex = cartProducts.findIndex(product => product.id === productId);
    if (productIndex !== -1 && cartProducts[productIndex].count > 1) {
        cartProducts[productIndex].count--;
    } else if (productIndex !== -1 && cartProducts[productIndex].count === 1) {
        cartProducts.splice(productIndex, 1);
    }
    updateCart();
}

// Función para eliminar un producto del carrito
function removeProductFromCart(productId) {
    const productIndex = cartProducts.findIndex(product => product.id === productId);
    if (productIndex !== -1) {
        cartProducts.splice(productIndex, 1);
        updateCart();
    }
}

// Función para actualizar el carrito después de realizar cambios
function updateCart() {
    localStorage.setItem('CartProducts', JSON.stringify(cartProducts));
    const cartContainer = document.getElementById('wrapper-cart');
    cartContainer.innerHTML = ''; // Limpiar el contenedor antes de volver a crear las tarjetas

    // Volver a crear las tarjetas del carrito con los productos actualizados
    cartProducts.forEach(product => {
        createCartProductCard(product);
    });
}

