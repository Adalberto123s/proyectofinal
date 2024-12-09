// script.js
const products = [
    { id: 1, name: 'Reloj Inteligente Deportivo', price: 10.00, quantity: 5, imageUrl: 'images/product1.svg' },
    { id: 2, name: 'Mochila Ejecutiva Antirrobo', price: 20.00, quantity: 3, imageUrl: 'images/product2.svg' },
    { id: 3, name: 'Auriculares Inalámbricos con Cancelación de Ruido', price: 15.00, quantity: 10, imageUrl: 'images/product3.svg' },
    { id: 4, name: 'Cafetera Automática de Espresso', price: 15.00, quantity: 10, imageUrl: 'images/product4.svg' },
];

function contact() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("¡Gracias por contactarnos!");
    });
}


function addToCart(id, name, image, price) {
    console.log(id, name, image, price);
    let cart = JSON.parse(localStorage.getItem('cart')) || {};

    // Si el producto ya está en el carrito, aumentar su cantidad
    if (cart[id]) {
        cart[id].quantity += 1;
    } else {
        // Si el producto no está en el carrito, agregarlo
        cart[id] = { id, name, price, image, quantity: 1 };
    }

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Actualizar el contador en el header
    updateCartCount();
}

// Función para actualizar el contador del carrito en el header
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    let totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems;
}

function loadHeader() {
    // Selecciona el header existente
    const header = document.getElementById('main-header');

    // Define el contenido dinámico
    header.innerHTML = `
        <div class="py-4 flex bg-dark w-full">
            <div class="flex space-around item-center w-full">
                <h1 class="text-white">Mi E-commerce</h1>
                <nav class="flex justify-between gap-4 items-center">
                    <div><a href="index.html" class="text-white">Inicio</a></div>
                    <div><a href="about.html" class="text-white">Acerca de</a></div>
                    <div><a href="contact.html" class="text-white">Contacto</a></div>
                    <div class="border-carrito">
                        <a href="cart.html" class="text-white flex item-center px-2">
                            <img src="images/carrito.svg" class="carrito" alt="Carrito" /> 
                            (<span id="cart-count">0</span> productos)
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    `;
    updateCartCount()
}