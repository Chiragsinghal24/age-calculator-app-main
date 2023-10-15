const button = document.getElementById("change_button");
const selectingSmall = document.querySelectorAll("small");
const outputValue = document.querySelectorAll(".output_value");


//system date
const date = new Date();
let currentDate = date.getDate();
let currentMonth = date.getMonth()+1;
let currentyear = date.getFullYear();


function getInputValue() {
  var birthdayValue = Number(document.getElementById("days").value);
  var birthmonthValue = Number(document.getElementById("months").value);
  var birthyearValue = Number(document.getElementById("years").value);
  if (birthdayValue === 0) {
    selectingSmall[0].innerHTML = "the field is required";
  } else if (birthmonthValue === 0) {
    selectingSmall[1].innerHTML = "the field is required";
  } else if (birthyearValue === 0) {
    selectingSmall[2].innerHTML = "the field is required";
  } else if (birthyearValue > currentyear) {
    selectingSmall[2].innerHTML = "must be in past";
  } else if (birthmonthValue < 1 || birthmonthValue > 12) {
    selectingSmall[1].innerHTML = "must be valid month";
  } else if (birthdayValue > 31 || birthdayValue < 1) {
    selectingSmall[0].innerHTML = "must be valid day";
  } else {
    selectingSmall[0].innerHTML = "";
    selectingSmall[1].innerHTML = "";
    selectingSmall[2].innerHTML = "";
    const agedate = `${birthdayValue}-${birthmonthValue}-${birthyearValue}`;
    console.log(typeof agedate)
    displaydate(birthdayValue,birthmonthValue,birthyearValue)
    // return agedate;
  }
}

function displaydate(birthdayValue, birthmonthValue, birthyearValue) {
  var dobYear = birthyearValue;
  var dobMonth = birthmonthValue;
  var dobDate = birthdayValue;
  console.log(dobYear)
  console.log(dobMonth)
  console.log(dobDate)
  var yearAge
  var dateAge
  var monthAge

  console.log("current month "+ currentMonth);

  yearAge = currentyear - dobYear;
  if (currentMonth >= dobMonth)
    monthAge = currentMonth - dobMonth;
  else {
    yearAge--;
    monthAge = 12 + currentMonth - dobMonth;
  }
  console.log(monthAge)

  if (currentDate >= dobDate)
    //get days when the current date is greater
    var dateAge = currentDate - dobDate;
  else {
    monthAge--;
    var dateAge = 31 + currentDate - dobDate;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }

  if(yearAge<0){
    selectingSmall[0].innerHTML = "must be valid day";
  }
  else{
  outputValue[0].innerHTML = yearAge;
  outputValue[1].innerHTML = monthAge;
  outputValue[2].innerHTML = dateAge;}
}

button.addEventListener("click", function () {
  // displaydate();
  getInputValue()
  button.style.backgroundColor = "black";
});
