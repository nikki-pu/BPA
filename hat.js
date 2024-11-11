let cart = JSON.parse(localStorage.getItem("cart")) || []; // Load cart from localStorage or initialize as empty
let totalPrice = 0;

function addToCart() {
  const size = document.getElementById("size").value;
  const item = { item: "Stage Fright Hat", price: 9.99, size };
  cart.push(item);
  updateCart();
  openCart(); // Automatically open the cart when an item is added
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    // Check if size is present; if not, don't display it
    const sizeText = item.size ? ` - ${item.size}` : '';
    cartItems.innerHTML += `
      <div class="cart-item">
        <p>${item.item}${sizeText} - $${item.price.toFixed(2)}</p>
        <button onclick="removeFromCart(${index})" class="remove-btn">🗑️</button>
      </div>
    `;
  });

  // Calculate and display total price
  totalPrice = cart.reduce((total, item) => total + item.price, 0);
  document.getElementById("totalPrice").textContent = totalPrice.toFixed(2);

  // Save updated cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
}

function removeFromCart(index) {
  cart.splice(index, 1); // Remove the item at the specified index
  updateCart(); // Refresh the cart display
}

function toggleCart() {
  document.getElementById("cartPopup").classList.toggle("active");
}

function openCart() {
  document.getElementById("cartPopup").classList.add("active"); // Ensure cart opens
}

function checkout() {
  if (cart.length > 0) {
    document.getElementById("thankYouPopup").style.display = "block";
    cart = [];
    totalPrice = 0;
    updateCart();
    toggleCart();

    // Clear the cart in localStorage after checkout
    localStorage.removeItem("cart");
  } else {
    alert("Your cart is empty.");
  }
}

function closeThankYouPopup() {
  document.getElementById("thankYouPopup").style.display = "none";
}

function toggleMenu() {
    var menu = document.getElementById("overlay-menu");
    if (menu.style.width === "100%") {
        menu.style.width = "0%";
    } else {
        menu.style.width = "100%";
    }
}
