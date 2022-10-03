const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");




function checkBirthDateIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  if (sum && dob) {

    compareValues(sum, luckyNumber.value);
  }

  else {
    outputBox.innerHTML = "please enter both the fields";
  }

}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;

}
function compareValues(sum, luckyNumber) {

  if (sum % luckyNumber == 0) {
    outputBox.innerText = "Your Birthday is Lucky🎉";
  }
  else {
    outputBox.innerText = "Your birthday is not lucky. Try again with other lucky number.😢"
  }
}
checkNumberButton.addEventListener('click', checkBirthDateIsLucky);