// Workflow:
// 1. Initialize a variable to keep track of the subtotal
// 2. Add event listeners to each product
// 3. When a product is clicked, get its price from the data attribute
// 4. Add the price to the subtotal
// 5. Update the subtotal display in the HTML

let subtotal = 0;
let balance = 0;

document.getElementById('addFundsButton').addEventListener('click', () => {
  const addAmount = parseInt(document.getElementById('addFundsInput').value);
  if(!isNaN(addAmount) && addAmount >= 0){
    balance += addAmount;
    document.getElementById('balance').textContent = balance;
    document.getElementById('addFundsInput').value = '';
  }
});

document.querySelectorAll('.product').forEach(product => {
  product.addEventListener('click', () => {
    const price = parseInt(product.dataset.price);
    if (price <= balance) {
      subtotal += price;
      balance -= price;
      document.getElementById('subtotal').textContent = subtotal;
      document.getElementById('balance').textContent = balance;
    } else {
      alert('Insufficient funds'); //show an alert box
    }
  });
});

