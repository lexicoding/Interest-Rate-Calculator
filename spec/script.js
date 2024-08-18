// core calculation logic
// script.js
window.calculateInterest = (principal, rate, time) => {
  let simpleInterest = (principal * rate * time) / 100;
  let amount = principal + simpleInterest; // Principal + Interest
  return {
      principal: principal,
      interest: simpleInterest,
      amount: amount
  };
};
  
  // DOM manipulation
  const calculate = () => {
    let p = parseFloat(document.getElementById("principal").value);
    let r = parseFloat(document.getElementById("rate").value);
    let t = parseFloat(document.getElementById("time").value);
    let result = calculateInterest(p, r, t);
  
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = `<div>Principal Amount: <span>${result.principal.toFixed(2)}</span></div>
    <div>Total Interest: <span>${result.interest.toFixed(2)}</span></div>
    <div>Total Amount: <span>${result.amount.toFixed(2)}</span></div>`;
  };
  
  // Bind event listener (runs only in browser)
  if (typeof window !== 'undefined') {
    document.getElementById("calculate-btn").addEventListener("click", calculate);
  }