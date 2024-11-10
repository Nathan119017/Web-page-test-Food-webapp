// JavaScript para manejar la lógica del carrito de compras y agregar nuevos productos
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let products = JSON.parse(localStorage.getItem('products')) || [
  {
    name: 'Macarrones',
    price: 150,
    originalPrice: 170,
    image: 'images/macarrones.png'
  },
  {
    name: 'Ensalada César',
    price: 100,
    originalPrice: 120,
    image: 'images/ensalada_cesar.jpg'
  },
  {
    name: 'Hamburguesa',
    price: 90,
    originalPrice: 100,
    image: 'images/hamburguesa.jpg'
  },
  {
    name: 'Pizza',
    price: 120,
    originalPrice: 159,
    image: 'images/pizza.jpg'
  }
];

// JavaScript para mostrar y ocultar el menú en dispositivos móviles
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navbarLinks = document.getElementById('navbar-links');

  menuToggle.addEventListener('click', function () {
    navbarLinks.classList.toggle('show');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  renderProducts();
  updateCartDisplay();
});

function addToCart(productName, productPrice, quantity, productImage) {
  quantity = parseInt(quantity);
  if (quantity < 1) {
    alert('Por favor, seleccione una cantidad válida.');
    return;
  }

  const existingProductIndex = cart.findIndex(item => item.name === productName);
  if (existingProductIndex !== -1) {
    cart[existingProductIndex].quantity += quantity;
  } else {
    cart.push({ name: productName, price: productPrice, quantity: quantity, image: productImage });
  }

  updateCartDisplay();
  saveCartToLocalStorage();
}

function updateCartDisplay() {
  const cartContainer = document.getElementById('cart-container');
  cartContainer.innerHTML = '';

  if (cart.length === 0) {
    cartContainer.innerHTML = '<p>El carrito está vacío.</p>';
  } else {
    cart.forEach((item, index) => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <div class="cart-item-details">
          <h4>${item.name}</h4>
          <p>${item.quantity} x ${item.price} Lps = ${item.quantity * item.price} Lps</p>
          <button onclick="removeFromCart(${index})">Eliminar Producto</button>
        </div>
      `;
      cartContainer.appendChild(cartItem);
    });
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDisplay();
  saveCartToLocalStorage();
}

function clearCart() {
  cart = [];
  updateCartDisplay();
  saveCartToLocalStorage();
}

function saveCartToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function renderProducts() {
  const productsContainer = document.getElementById('products');
  productsContainer.innerHTML = '<h2>Productos Disponibles</h2>';
  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <h3>${product.name}</h3>
      <p class="price"><span class="original-price">${product.originalPrice} Lps</span> <span class="discounted-price">${product.price} Lps</span></p>
      <label for="quantity-${product.name}">Cantidad:</label>
      <input type="number" id="quantity-${product.name}" name="quantity-${product.name}" min="1" value="1">
      <button onclick="addToCart('${product.name}', ${product.price}, document.getElementById('quantity-${product.name}').value, '${product.image}')">Agregar al Carrito</button>
    `;
    productsContainer.appendChild(productElement);
  });
}

function addNewProduct(name, price, originalPrice, image) {
  products.push({ name, price, originalPrice, image });
  saveProductsToLocalStorage();
  renderProducts();
}

function saveProductsToLocalStorage() {
  localStorage.setItem('products', JSON.stringify(products));
}

// Ejemplo de cómo agregar un nuevo producto
document.getElementById('add-product-btn').addEventListener('click', function() {
  const name = document.getElementById('new-product-name').value;
  const price = parseFloat(document.getElementById('new-product-price').value);
  const originalPrice = parseFloat(document.getElementById('new-product-original-price').value);
  const image = document.getElementById('new-product-image').value;

  if (name && !isNaN(price) && !isNaN(originalPrice) && image) {
    addNewProduct(name, price, originalPrice, image);
  } else {
    alert('Por favor, complete todos los campos correctamente.');
  }
});


