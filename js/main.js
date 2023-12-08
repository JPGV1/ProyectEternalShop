const products= [
    {
        "id": "abrigo-00",
        "title": "Cuello Tortuga Clasico",
        "Color": "Negro",
        "image": "./assets/SOURCE/producto1cuello.jpg",
        "category": {
            "name": "Abrigos",
            "id": "abrigos"
        },
        "price": 140000
    },
    {
        "id": "abrigo-01",
        "title": "Chaqueta Impermeable",
        "Color": "Azul",
        "image": "./assets/img/abrigos/01.jpg",
        "category": {
            "name": "Abrigos",
            "id": "abrigos"
        },
        "price": 150000
    },
    {
        "id": "abrigo-02",
        "title": "Abrigo Elegante Clasico",
        "Color":"Azul Oscuro",
        "image": "./assets/img/abrigos/02.jpg",
        "category": {
            "name": "Abrigos",
            "id": "abrigos"
        },
        "price": 160000
    },
    {
        "id": "abrigo-03",
        "title": "Chaqueta de Algodon",
        "Color": "Gris",
        "image": "./assets/img/abrigos/03.jpg",
        "category": {
            "name": "Abrigos",
            "id": "abrigos"
        },
        "price": 140000
    },
    {
        "id": "abrigo-04",
        "title": "Chaqueta Impermeable",
        "Color": "Dos Colores Degradado",
        "image": "./assets/img/abrigos/04.jpg",
        "category": {
            "name": "Abrigos",
            "id": "abrigos"
        },
        "price": 150000
    },
    {
        "id": "abrigo-05",
        "title": "Chaqueta Deportiva",
        "Color":"Dos Colores: Negro y Gris",
        "image": "./assets/img/abrigos/05.jpg",
        "category": {
            "name": "Abrigos",
            "id": "abrigos"
        },
        "price": 130000
    },
    {
        "id":"abrigo-06",
        "title": "Polo Blanco Clasico",
        "Color":"Blanco",
        "image":"./assets/SOURCE/producto3categoria.jpg",
        "category": {
            "name":"Abrigos",
            "id":"abrigos"
        },
        "price":120000
    },

    {
        "id": "camiseta-01",
        "title": "Camiseta Basica.",
        "Color":"Azul",
        "image": "./assets/img/camisetas/01.jpg",
        "category": {
            "name": "Camisetas",
            "id": "camisetas"
        },
        "price": 50000
    },
    {
        "id": "camiseta-02",
        "title": "Camiseta Estampada.",
        "Color":"Blanco",
        "image": "./assets/img/camisetas/02.jpg",
        "category": {
            "name": "Camisetas",
            "id": "camisetas"
        },
        "price": 60000
    },
    {
        "id": "camiseta-03",
        "title": "Camiseta Estampada.",
        "Color":"Blanco",
        "image": "./assets/img/camisetas/03.jpg",
        "category": {
            "name": "Camisetas",
            "id": "camisetas"
        },
        "price": 60000
    },
    {
        "id": "camiseta-04",
        "title": "Camiseta Basica.",
        "Color":"Rojo",
        "image": "./assets/img/camisetas/04.jpg",
        "category": {
            "name": "Camisetas",
            "id": "camisetas"
        },
        "price": 50000
    },
    {
        "id": "camiseta-05",
        "title": "Camiseta Basica.",
        "Color":"Cafe Claro",
        "image": "./assets/img/camisetas/05.jpg",
        "category": {
            "name": "Camisetas",
            "id": "camisetas"
        },
        "price": 50000
    },
    {
        "id": "camiseta-06",
        "title": "Camiseta Basica.",
        "Color":"Rosa",
        "image": "./assets/img/camisetas/06.jpg",
        "category": {
            "name": "Camisetas",
            "id": "camisetas"
        },
        "price": 50000
    },
    {
        "id": "camiseta-07",
        "title": "Camiseta Basica.",
        "Color":"Verde Claro",
        "image": "./assets/img/camisetas/07.jpg",
        "category": {
            "name": "Camisetas",
            "id": "camisetas"
        },
        "price": 50000
    },
    {
        "id": "camiseta-08",
        "title": "Camiseta Basica.",
        "Color":"Azul Claro",
        "image": "./assets/img/camisetas/08.jpg",
        "category": {
            "name": "Camisetas",
            "id": "camisetas"
        },
        "price": 50000
    },
    {
        "id": "pantalon-00",
        "title": "Pantalón Cargo",
        "Color":"Blanco",
        "image": "./assets/SOURCE/producto2cargo.jpg",
        "category": {
            "name": "Pantalones",
            "id": "pantalones"
        },
        "price": 150000
    },
    {
        "id": "pantalon-01",
        "title": "Pantalón Cargo",
        "Color":"Negro",
        "image": "./assets/SOURCE/producto8cargo.jpg",
        "category": {
            "name": "Pantalones",
            "id": "pantalones"
        },
        "price": 150000
    },
    {
        "id": "pantalon-02",
        "title": "Pantalón Sencillo",
        "Color":"Capri",
        "image": "./assets/img/pantalones/01.jpg",
        "category": {
            "name": "Pantalones",
            "id": "pantalones"
        },
        "price": 120000
    },
    {
        "id": "pantalon-03",
        "title": "Pantalón Sencillo",
        "Color":"Blanco",
        "image": "./assets/img/pantalones/02.jpg",
        "category": {
            "name": "Pantalones",
            "id": "pantalones"
        },
        "price": 120000
    },
    {
        "id": "pantalon-04",
        "title": "Pantalón Sencillo",
        "Color":"Negro",
        "image": "./assets/img/pantalones/03.jpg",
        "category": {
            "name": "Pantalones",
            "id": "pantalones"
        },
        "price": 120000
    },
    {
        "id": "pantalon-05",
        "title": "Pantalón Elegante",
        "Color":"Negro",
        "image": "./assets/img/pantalones/04.jpg",
        "category": {
            "name": "Pantalones",
            "id": "pantalones"
        },
        "price": 130000
    },
    {
        "id": "pantalon-06",
        "title": "Pantalón Elegante",
        "Color":"Verde.",
        "image": "./assets/img/pantalones/05.jpg",
        "category": {
            "name": "Pantalones",
            "id": "pantalones"
        },
        "price": 130000
    },
    {
        "id": "accesorio-01",
        "title": "Cadena Cubana",
        "Color":"Dorado.",
        "image": "./assets/SOURCE/producto4.jpg",
        "category": {
            "name": "Accesorios",
            "id": "accesorios"
        },
        "price": 60000
    },
    {
        "id": "accesorio-02",
        "title": "Sets Anillos Conexion Cadenas",
        "Color":"Plateado.",
        "image": "./assets/SOURCE/producto4.jpg",
        "category": {
            "name": "Accesorios",
            "id": "accesorios"
        },
        "price": 50000
    },
    {
        "id": "accesorio-03",
        "title": "Cadena Dos Pliegues Candado",
        "Color":"Plateado.",
        "image": "./assets/SOURCE/producto6.jpg",
        "category": {
            "name": "Accesorios",
            "id": "accesorios"
        },
        "price": 60000
    },
    {
        "id": "accesorio-04",
        "title": "Relog Mecanismo Visible",
        "Color":"Negro con Dorado.",
        "image": "./assets/SOURCE/producto7accesorio.jpg",
        "category": {
            "name": "Accesorios",
            "id": "accesorios"
        },
        "price": 150000
    },
    {
        "id": "zapatos-01",
        "title": "Tenis Louis Vuitton",
        "Color":"Blanco con Negro.",
        "image": "./assets/SOURCE/producto9categoria.jpg",
        "category": {
            "name": "Zapatos",
            "id": "zapatos"
        },
        "price": 220000
    },
    {
        "id": "zapatos-02",
        "title": "Tenis Nike Jordan Retro 4",
        "Color":"Modelo 1: Rojo, Negro, Gris. Modelo 2: Gris Negro, Blanco",
        "image": "./assets/SOURCE/producto10categoria.jpg",
        "category": {
            "name": "Zapatos",
            "id": "zapatos"
        },
        "price": 230000
    },
    {
        "id": "zapatos-03",
        "title": "Tenis Diesel",
        "Color"  :"Blanco, Rojo y Azul.",
        "image": "./assets/SOURCE/producto11categoria.jpg",
        "category": {
            "name": "Zapatos",
            "id": "zapatos"
        },
        "price": 200000
    },
    {
        "id": "zapatos-04",
        "title": "Tenis Gucci Screener",
        "Color":"Mezcla: Capri, Verde, vino tinto, blanco.",
        "image": "./assets/SOURCE/producto12categoria.jpg",
        "category": {
            "name": "Zapatos",
            "id": "zapatos"
        },
        "price": 250000    }
]
                           /*Filtrar Por Categoria*/

const productsContainer= document.querySelector(".wrapper")

function filterProductsByCategory(categoryId) {
    productsContainer.innerHTML = ''; 
    const filteredProducts = products.filter(product => product.category.id === categoryId);


    if (filteredProducts.length === 0) {
        const noResults = document.createElement('p');
        noResults.textContent = 'No hay productos en esta categoría.';
        productsContainer.appendChild(noResults);
    } else {
        filteredProducts.forEach(product => {
            createProducts(product);
        });
        UpdateAddButton()
    }
}

                             /*Crear las cards*/
document.addEventListener('DOMContentLoaded', function() {
    getAllProducts();
});

function getAllProducts() {

    products.forEach(product => {
        createProducts(product)        
    });
    UpdateAddButton();
    
}

        const createProducts = (productData) => {
            const product = document.createElement('div');
            product.classList.add('card');
        
            const imgProduct = document.createElement('img');
            imgProduct.src = productData.image; 
            imgProduct.alt = productData.title;
            imgProduct.classList.add('card-image');
        
            const descriptionContainer = document.createElement('div');
            descriptionContainer.classList.add('Description-and-Price');
        
            const descriptionTxt = document.createElement('p');
            descriptionTxt.classList.add('Description-and-Price-txt');
            descriptionTxt.innerHTML = `${productData.title}<br>Color: ${productData.Color}<br>Precio: $${productData.price}`; // Añadir información del producto
        
            const addToCartButton = document.createElement('button');
            addToCartButton.classList.add('btn-Add-to-car');
            addToCartButton.textContent = 'Añadir al carrito'; // Texto del botón
            addToCartButton.dataset.productId = productData.id; // Asignar el ID del producto como dataset
        
            descriptionContainer.appendChild(descriptionTxt);
            descriptionContainer.appendChild(addToCartButton);
        
            product.appendChild(imgProduct);
            product.appendChild(descriptionContainer);
        
            productsContainer.appendChild(product); // Agregar el producto al contenedor principal

        };
let AddButtons=document.querySelectorAll('.btn-Add-to-car')

                       /*Actualizar los botones en el wrapper */
function UpdateAddButton() {
    AddButtons=document.querySelectorAll('.btn-Add-to-car')

    AddButtons.forEach(button => {
        button.addEventListener("click", AddToCart)
    });
}
                            /*Agregar Producto seleccionado a un Array*/ 
const ProductsCart = [];

function AddToCart(event) {
    const idButton = event.currentTarget.dataset.productId;
    const addedProduct = products.find(product => product.id === idButton);

    const existingProductIndex = ProductsCart.findIndex(product => product.id === idButton);

    if (existingProductIndex !== -1) {
        ProductsCart[existingProductIndex].count++;
    } else {
        const newProduct = { ...addedProduct, count: 1 };
        ProductsCart.push(newProduct);
    }
    
    UpdateCartNumber();
    localStorage.setItem('CartProducts', JSON.stringify(ProductsCart));
    updateCartCounter(); // Agregar esta línea para actualizar el contador en el navbar
}

                     /* Actualizar contador del boton carrito */
const CartNumber = document.querySelector('#count-cart')

function UpdateCartNumber() {
    let number= ProductsCart.reduce((acc, product) => acc + product.count, 0)
    CartNumber.innerText = number;
}

                 /* Mantener el contador*/
                              
function updateCartCounter() {
let cartCounter = 0;
    const cartProducts = JSON.parse(localStorage.getItem('CartProducts'));

    if (cartProducts) {
        cartCounter = cartProducts.reduce((total, product) => total + product.count, 0);
    }

    // Actualiza el contador en el botón del carrito en el navbar
    const cartButton = document.querySelector('#count-cart');
    if (cartButton) {
        cartButton.innerText = cartCounter;
    }
}

// Llama a esta función cada vez que se realice un cambio en el carrito
updateCartCounter();



   
    
