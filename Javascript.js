// Get all the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add click event listeners to each "Add to Cart" button
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        const itemName = item.querySelector('p').textContent.split(' - ')[0];
        const itemPrice = parseFloat(item.querySelector('p').textContent.split(' - ')[1].slice(1));
        
        // Add item to cart (you can implement this functionality)
        addToCart(itemName, itemPrice);
    });
});

// Function to add item to cart
function addToCart(name, price) {
    // Implement adding item to cart functionality here
    console.log(`Added ${name} to cart. Price: $${price}`);
}

// Get all the "Pay Now" buttons
const payNowButtons = document.querySelectorAll('.pay-now');

// Add click event listeners to each "Pay Now" button
payNowButtons.forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        const itemName = item.querySelector('p').textContent.split(' - ')[0];
        const itemPrice = parseFloat(item.querySelector('p').textContent.split(' - ')[1].slice(1));

        // Redirect to payment page (you can implement this functionality)
        initiatePayment(itemName, itemPrice);
    });
});

// Function to initiate payment
function initiatePayment(name, price) {
    // Implement payment initiation functionality here
    console.log(`Initiating payment for ${name} - $${price}`);
}
