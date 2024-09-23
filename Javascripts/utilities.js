function getValueById(id) {
  const value = document.getElementById(id).value;
  const number = parseFloat(value);
  return number;
}

function getTextById(id) {
  const text = document.getElementById(id).innerText;
  return text;
}

function addHistory(donateAmount, donateTitle) {
  const div = document.createElement("div");
  div.className = "border border-1 border-gray-200 rounded-xl p-8 mb-8";
  div.innerHTML = `
     <h1 class="text-black font-bold text-xl mb-5">
            <span>${donateAmount} Taka is </span>
            <span>${donateTitle}</span>
            
          </h1>
          <h1 class="font-light text-grey">Date : ${new Date()}</h1>
  `;
  const historyList = document.getElementById("History-section");
  historyList.prepend(div);
}
