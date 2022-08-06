let date = new Date();

let todaysDate = document.querySelector("#tDay");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[date.getDay()];
let hour = date.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minute = date.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
todaysDate.innerHTML = `${day}, ${hour}:${minute}`;

function displayTemp(response) {
  console.log(response);
  let cityElement = document.querySelector("#city");
  let countryIDElement = document.querySelector("#countryID");
  let tempElement = document.querySelector("#tempNum");
  let fLikeElement = document.querySelector("#fLike");
  let wSpeed = document.querySelector("#wSpeed");
  let hum = document.querySelector("#hum");
  let tMax = document.querySelector("#tMax");
  let tMin = document.querySelector("#tMin");
  let description = document.querySelector("#description");
  let iconElement = document.querySelector("#icon");

  cityElement.innerHTML = response.data.name;
  countryIDElement.innerHTML = response.data.sys.country;
  tempElement.innerHTML = Math.round(response.data.main.temp);
  fLikeElement.innerHTML = Math.round(response.data.main.feels_like);
  wSpeed.innerHTML = Math.round(response.data.wind.speed);
  hum.innerHTML = response.data.main.humidity;
  tMax.innerHTML = Math.round(response.data.main.temp_max);
  tMin.innerHTML = Math.round(response.data.main.temp_min);
  description.innerHTML = response.data.weather[0].description;
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
  changeVideo(response.data.weather[0].main);
}
//search city
function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#enterCity").value;
  let apiKey = "7387c1649b2acfa22815e197a7100ba0";
  let unit = "metric";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiURL).then(displayTemp);
}

//London
function firstButton(event) {
  event.preventDefault();
  let city = "London";
  let apiKey = "7387c1649b2acfa22815e197a7100ba0";
  let unit = "metric";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiURL).then(displayTemp);
}

//Paris
function secondButton(event) {
  event.preventDefault();
  let city = "Paris";
  let apiKey = "7387c1649b2acfa22815e197a7100ba0";
  let unit = "metric";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiURL).then(displayTemp);
}

//New York
function thirdButton(event) {
  event.preventDefault();
  let city = "New York";
  let apiKey = "7387c1649b2acfa22815e197a7100ba0";
  let unit = "metric";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiURL).then(displayTemp);
}

//Sydney
function fourthButton(event) {
  event.preventDefault();
  let city = "Sydney";
  let apiKey = "7387c1649b2acfa22815e197a7100ba0";
  let unit = "metric";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiURL).then(displayTemp);
}

//Current Location
function handlePosition(position) {
  let lon = position.coords.longitude;
  let lat = position.coords.latitude;
  let apiKey = "7387c1649b2acfa22815e197a7100ba0";
  let unit = "metric";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
  axios.get(apiURL).then(displayTemp);
}
function findLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(handlePosition);
}
let button = document.querySelector("#cLocat");
let cLocation = button.addEventListener("click", findLocation);

let submit = document.querySelector("#userInfo");
submit.addEventListener("click", searchCity);

let londonButton = document.querySelector("#lonBut");
londonButton.addEventListener("click", firstButton);

let parisButton = document.querySelector("#parBut");
parisButton.addEventListener("click", secondButton);

let nyButton = document.querySelector("#nyBut");
nyButton.addEventListener("click", thirdButton);

let sydneyButton = document.querySelector("#sydBut");
sydneyButton.addEventListener("click", fourthButton);

function changeVideo(backgroundWeather) {
  let vid = document.querySelector("#my-video");
  if (backgroundWeather == "Clear") {
    vid.src = "Media/sunny.mp4";
  }
  if (backgroundWeather == "Clouds") {
    vid.src = "Media/cloudy.mp4";
  }
  if (backgroundWeather == "Rain") {
    vid.src = "Media/raining.mp4";
  }
  if (backgroundWeather == "Snow") {
    vid.src = "Media/snow.mp4";
  }
}
searchCity("London");
