let balance = 2000;

function deposit(){
let amount = parseFloat(document.getElementById("amount").value);

if(amount > 0){
balance += amount;
document.getElementById("balance").innerText = balance;
document.getElementById("message").innerText = "Deposit successful";
}
else{
document.getElementById("message").innerText = "Enter valid amount";
}

document.getElementById("amount").value = "";
}

function withdraw(){
let amount = parseFloat(document.getElementById("amount").value);

if(amount > 0 && amount <= balance){
balance -= amount;
document.getElementById("balance").innerText = balance;
document.getElementById("message").innerText = "Withdrawal successful";
}
else{
document.getElementById("message").innerText = "Insufficient funds or invalid amount";
}

document.getElementById("amount").value = "";
}

let action = "deposit";

function setAction(type){
action = type;
}

document.getElementById("amount").addEventListener("keypress", function(event){
if(event.key === "Enter"){
if(action === "deposit"){
deposit();
}else{
withdraw();
}
}
});
