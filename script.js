let balance = 1000;
let historyList = [];

function deposit(){
let amount = parseFloat(document.getElementById("amount").value);

if(!isNaN(amount) && amount > 0){
balance += amount;

historyList.push("+ R" + amount + " | Balance: R" + balance);
updateHistory();
  
document.getElementById("balance").innerText = balance;
document.getElementById("message").innerText = "Deposit successful";

updateHistory();  
}
else{
document.getElementById("message").innerText = "Enter valid amount";
}

document.getElementById("amount").value = "";
}

function withdraw(){
let amount = parseFloat(document.getElementById("amount").value);

if(!isNaN(amount) && amount > 0 && amount <= balance){
balance -= amount;

historyList.push("- R" + amount + " | Balance: R" + balance);
updateHistory();
  
document.getElementById("balance").innerText = balance;
document.getElementById("message").innerText = "Withdrawal successful";

updateHistory();  
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

document.getElementById("amount").addEventListener("keydown", function(event){
if(event.key === "Enter"){
if(action === "deposit"){
deposit();
}else{
withdraw();
}
}
});

function updateHistory(){
let history = document.getElementById("history");
history.innerHTML = "";

for(let i = historyList.length - 1; i >= 0; i--){
let li = document.createElement("li");
let text = historyList[i];

li.innerText = text;

// 🎨 Add colors
if(text.includes("+")){
li.style.color = "green";
}
else{
li.style.color = "red";
}

history.appendChild(li);
}
}
