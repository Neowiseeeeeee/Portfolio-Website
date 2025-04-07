let users = {};
let total = 0;
let orderSummary = "";
let loggedInUser = null;

function showRegister() {
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('registerScreen').classList.remove('hidden');
}

function register() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let repassword = document.getElementById('repassword').value;
    if (password !== repassword) {
        alert("Passwords do not match!");
        return;
    }
    users[email] = { password: password }; // Store password as an object for better structure
    loggedInUser = email;
    alert("Account created successfully! Please log in.");
    document.getElementById('registerScreen').classList.add('hidden');
    document.getElementById('loginScreen').classList.remove('hidden');
}

function login() {
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;

    if (users[email] && users[email].password === password) {
        loggedInUser = email;
        document.getElementById('loginScreen').classList.add('hidden');
        document.getElementById('orderScreen').classList.remove('hidden');
        document.querySelector('.logout-button').style.display = 'block'; // Show logout button
    } else {
        alert("Incorrect email or password!");
    }
}

function addBurger() {
    let price = parseFloat(document.getElementById('burgerType').value);
    let quantity = parseInt(document.getElementById('burgerQty').value);
    total += price * quantity;
    orderSummary += `${quantity} x Burger ($${price} each)<br>`;
    document.getElementById('totalBill').innerText = total.toFixed(2);
}

function addDrink() {
    let price = parseFloat(document.getElementById('drinkType').value);
    let quantity = parseInt(document.getElementById('drinkQty').value);
    total += price * quantity;
    orderSummary += `${quantity} x Drink ($${price} each)<br>`;
    document.getElementById('totalBill').innerText = total;
}

function showReceipt() {
    document.getElementById('orderScreen').classList.add('hidden');
    document.getElementById('receiptScreen').classList.remove('hidden');
    document.getElementById('orderDetails').innerHTML = orderSummary;
    document.getElementById('finalBill').innerText = total;
}

function logout() {
    loggedInUser = null;
    total = 0; // Reset total
    orderSummary = ""; // Clear order summary
    document.getElementById('orderScreen').classList.add('hidden');
    document.getElementById('receiptScreen').classList.add('hidden'); // Hide receipt screen
    document.getElementById('loginScreen').classList.remove('hidden'); // Show login screen
    document.querySelector('.logout-button').style.display = 'none'; // Hide logout button
}

function continueShopping() {
    document.getElementById('receiptScreen').classList.add('hidden');
    document.getElementById('orderScreen').classList.remove('hidden');
    total = 0;
    orderSummary = "";
}
