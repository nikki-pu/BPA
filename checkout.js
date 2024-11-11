// Function to load and display cart items on the checkout page
function loadCheckoutCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsContainer = document.getElementById("cartItems");
  const subtotalElem = document.getElementById("subtotal");
  const itemCountElem = document.getElementById("itemCount");

  let subtotal = 0;
  cartItemsContainer.innerHTML = "";

  cart.forEach(item => {
    subtotal += item.price;
    // Display size only if it's defined
    const sizeText = item.size ? ` - ${item.size}` : '';
    cartItemsContainer.innerHTML += `
      <div class="cart-item">
        <p>${item.item}${sizeText} - $${item.price.toFixed(2)}</p>
      </div>
    `;
  });

  subtotalElem.textContent = subtotal.toFixed(2);
  itemCountElem.textContent = cart.length;
}

// Function to clear the cart after checkout
function clearCart() {
  localStorage.removeItem("cart"); // Clear the cart from localStorage
  loadCheckoutCart(); // Refresh the checkout page display
}

// Function to handle payment processing
function processPayment() {
  const fullName = document.getElementById("fullName").value;
  const cardNumber = document.getElementById("cardNumber").value;
  const ccvNumber = document.getElementById("ccvNumber").value;

  if (!fullName || !cardNumber || !ccvNumber) {
    alert("Please fill out all fields.");
    return;
  }

  // If payment is successful, clear the cart and show a success popup
  clearCart();
  showSuccessPopup();
}

// Function to display the success popup
function showSuccessPopup() {
  const successPopup = document.getElementById("successPopup");
  successPopup.style.display = "block";

  setTimeout(() => {
    window.location.href = "index.html"; // Redirect to home page after success
  }, 2000);
}

// Load cart on the checkout page when the page loads
document.addEventListener("DOMContentLoaded", loadCheckoutCart);

function goToMerch() {
  window.location.href = "merch.html";
}