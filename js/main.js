const API_KEY = `92657476e2a8f8c5f08cd846b5eb22f1`;
const searchBtn = document.getElementById("search-btn");
const searchField = document.getElementById("search-field");
const errorDiv = document.getElementById("error");
const resultDiv = document.getElementById("result");

searchBtn.addEventListener("click", function () {
  // set inner html on result div
  resultDiv.innerHTML = `
     <div class="text-center text-white mt-3">
        <img id="icon"">
        <h1 id="city">City Name</h1>
        <h2><span id="tem">00.00</span>&deg;C</h2>
        <h4 id="condition">sky</h4>
      </div>`;
    
  const city = searchField.value;

  // clear previous search and error field
  searchField.value = "";
  errorDiv.innerHTML = "";

  // fetch api url
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showTempDisplay(data));
});

  const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};

  const showTempDisplay = (temperature) => {
  // through error when search field will be empty or undefined value
  if (temperature.message === "city not found") {
    errorDiv.innerHTML = `
    <h4 class=" bg-danger p-2 text-center rounded mt-3 w-25 mx-auto">please enter valid city name</h4>
    `;
  } else if (temperature.message === "Nothing to geocode") {
    errorDiv.innerHTML = `
    <h4 class=" bg-danger p-2 text-center rounded mt-3 w-25 mx-auto">please enter city name</h4>
    `;
  }

  // get result
  else {
    // console.log(temperature);
    setInnerText("city", temperature.name);
    setInnerText("tem", temperature.main.temp);
    setInnerText("condition", temperature.weather[0].main);
    // set weather icons
    const imgurl = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById("icon");
    imgIcon.setAttribute("src", imgurl);
  }
};

const arr =[];
arr.filter(e => console.log(e));
