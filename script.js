let balance = 1000;

function updateDisplay() {
  document.getElementById("balance").textContent = balance;
}

function deposit() {
  let amount = Number(document.getElementById("amount").value);

  if (amount > 0) {
    balance += amount;
    document.getElementById("message").textContent = "Deposit successful!";
  } else {
    document.getElementById("message").textContent = "Enter a valid amount.";
  }

  updateDisplay();
}

function withdraw() {
  let amount = Number(document.getElementById("amount").value);

  if (amount > balance) {
    document.getElementById("message").textContent = "Insufficient funds.";
  } else if (amount > 0) {
    balance -= amount;
    document.getElementById("message").textContent = "Withdrawal successful!";
  } else {
    document.getElementById("message").textContent = "Enter a valid amount.";
  }

  updateDisplay();
}

function checkBalance() {
  document.getElementById("message").textContent = "Your balance is R" + balance;
}
