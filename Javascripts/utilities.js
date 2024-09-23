function getValueById(id) {
  const value = document.getElementById(id).value;
  const number = parseFloat(value);
  return number;
}

function getTextById(id) {
  const text = document.getElementById(id).innerText;
  return text;
}

// ! Donate
function donations(donationBtn, totalDonateId, amountId, titleId, errorMsgId) {
  donationBtn.addEventListener("click", function () {
    const balance = parseFloat(getTextById("Balance"));
    const totalDonate = parseFloat(getTextById(totalDonateId));
    const donateAmount = getValueById(amountId);
    const donateTitle = getTextById(titleId);
    if (!isNaN(donateAmount) && donateAmount > 0 && donateAmount <= balance) {
      const addDonate = donateAmount + totalDonate;
      const newBalance = balance - donateAmount;
      document.getElementById(totalDonateId).innerText = addDonate;
      document.getElementById("Balance").innerText = newBalance;
      document.getElementById(errorMsgId).classList.add("invisible");
      document.getElementById("my_modal_4").showModal();
      document.getElementById("donate-for").innerText = donateTitle;
      const history = addHistory(donateAmount, donateTitle);
    } else {
      document.getElementById(errorMsgId).classList.remove("invisible");
    }
  });
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
