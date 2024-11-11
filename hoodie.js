let cart = JSON.parse(localStorage.getItem("cart")) || []; // Load cart from localStorage or initialize as empty
let totalPrice = 0;

// Function to add an item to the cart
function addToCart() {
  const size = document.getElementById("size").value;
  const item = { item: "Stage Fright Hoodie", price: 25.99, size };
  cart.push(item);
  updateCart();
  openCart(); // Automatically open the cart when an item is added
}

// Function to update the cart display and save the cart in localStorage
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

// Function to remove an item from the cart
function removeFromCart(index) {
  cart.splice(index, 1); // Remove the item at the specified index
  updateCart(); // Refresh the cart display
}

// Function to toggle the cart popup visibility
function toggleCart() {
  document.getElementById("cartPopup").classList.toggle("active");
}

// Function to open the cart popup
function openCart() {
  document.getElementById("cartPopup").classList.add("active"); // Ensure cart opens
}

// Initialize cart on page load
document.addEventListener("DOMContentLoaded", updateCart);

function toggleMenu() {
    var menu = document.getElementById("overlay-menu");
    if (menu.style.width === "100%") {
        menu.style.width = "0%";
    } else {
        menu.style.width = "100%";
    }
}
