const donationBtn1 = document.getElementById("Donation-btn-1");
const donationBtn2 = document.getElementById("Donation-btn-2");
const donationBtn3 = document.getElementById("Donation-btn-3");

// ! Donate 1
donationBtn1.addEventListener("click", function () {
  const balance = parseFloat(getTextById("Balance"));
  const totalDonate = parseFloat(getTextById("Total-donate-1"));
  const donateAmount = getValueById("Donate-amount-1");
  const donateTitle = getTextById("donate-title-1");
  if (!isNaN(donateAmount) && donateAmount > 0 && donateAmount <= balance) {
    const addDonate = donateAmount + totalDonate;
    const newBalance = balance - donateAmount;
    document.getElementById("Total-donate-1").innerText = addDonate;
    document.getElementById("Balance").innerText = newBalance;
    document.getElementById("error-msg-1").classList.add("invisible");
    document.getElementById("my_modal_4").showModal();
    document.getElementById("donate-for").innerText = donateTitle;
    const history = addHistory(donateAmount, donateTitle);
  } else {
    document.getElementById("error-msg-1").classList.remove("invisible");
  }
});

// ! Donate 2
donationBtn2.addEventListener("click", function () {
  const balance = parseFloat(getTextById("Balance"));
  const totalDonate = parseFloat(getTextById("Total-donate-2"));
  const donateAmount = getValueById("Donate-amount-2");
  const donateTitle = getTextById("donate-title-2");
  if (!isNaN(donateAmount) && donateAmount > 0 && donateAmount <= balance) {
    const addDonate = donateAmount + totalDonate;
    const newBalance = balance - donateAmount;
    document.getElementById("Total-donate-2").innerText = addDonate;
    document.getElementById("Balance").innerText = newBalance;
    document.getElementById("error-msg-2").classList.add("invisible");
    document.getElementById("my_modal_4").showModal();
    document.getElementById("donate-for").innerText = donateTitle;
    const history = addHistory(donateAmount, donateTitle);
  } else {
    document.getElementById("error-msg-2").classList.remove("invisible");
  }
});

// ! Donate 3
donationBtn3.addEventListener("click", function () {
  const balance = parseFloat(getTextById("Balance"));
  const totalDonate = parseFloat(getTextById("Total-donate-3"));
  const donateAmount = getValueById("Donate-amount-3");
  const donateTitle = getTextById("donate-title-3");
  if (!isNaN(donateAmount) && donateAmount > 0 && donateAmount <= balance) {
    const addDonate = donateAmount + totalDonate;
    const newBalance = balance - donateAmount;
    document.getElementById("Total-donate-3").innerText = addDonate;
    document.getElementById("Balance").innerText = newBalance;
    document.getElementById("error-msg-3").classList.add("invisible");
    document.getElementById("my_modal_4").showModal();
    document.getElementById("donate-for").innerText = donateTitle;
    const history = addHistory(donateAmount, donateTitle);
  } else {
    document.getElementById("error-msg-3").classList.remove("invisible");
  }
});
