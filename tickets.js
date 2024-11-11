let ticketPrice = 0;

function openPopup(section, price) {
  document.getElementById('sectionTitle').textContent = section + " Ticket";
  ticketPrice = price;
  updatePrice();
  document.getElementById('popup').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('checkoutPopup').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('successMessage').style.display = 'none';
}

function updatePrice() {
  const quantity = document.getElementById('quantity').value;
  const total = ticketPrice * quantity;
  document.getElementById('ticketPrice').textContent = "Price: $" + total.toFixed(2);
}

function openCheckoutPopup() {
  const quantity = document.getElementById('quantity').value;
  const total = ticketPrice * quantity;
  document.getElementById('popup').style.display = 'none'; // Close ticket selection popup
  document.getElementById('checkoutPopup').style.display = 'block'; // Open checkout popup
  document.getElementById('totalPrice').textContent = "Total Price: $" + total.toFixed(2);
}

function processPayment() {
  const fullName = document.getElementById('fullName').value;
  const cardNumber = document.getElementById('cardNumber').value;
  const ccv = document.getElementById('ccv').value;

  // Basic validation (you can add more complex checks as needed)
  if (!fullName || !cardNumber || !ccv) {
    alert("Please fill in all fields.");
    return;
  }

  document.getElementById('successMessage').style.display = 'block'; // Show success message
  setTimeout(() => {
    window.location.href = 'index.html'; // Redirect to the home page after a delay
  }, 2000);
}