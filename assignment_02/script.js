// Workflow:
// 1. Initialize a variable to keep track of the subtotal
// 2. Add event listeners to each product
// 3. When a product is clicked, get its price from the data attribute
// 4. Add the price to the subtotal
// 5. Update the subtotal display in the HTML

let subtotal = 0;

document.querySelectorAll('.product').forEach(product => {
  product.addEventListener('click', () => {
    // Get the price of the clicked product
    const price = parseInt(product.dataset.price);

    // Update the subtotal
    subtotal += price;

    // Update the subtotal display in the HTML
    document.getElementById('subtotal').textContent = subtotal;
  });
});