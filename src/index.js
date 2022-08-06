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
let minute = date.getMinutes();
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

  cityElement.innerHTML = response.data.name;
  countryIDElement.innerHTML = response.data.sys.country;
  tempElement.innerHTML = Math.round(response.data.main.temp);
  fLikeElement.innerHTML = Math.round(response.data.main.feels_like);
  wSpeed.innerHTML = Math.round(response.data.wind.speed);
  hum.innerHTML = response.data.main.humidity;
  tMax.innerHTML = Math.round(response.data.main.temp_max);
  tMin.innerHTML = Math.round(response.data.main.temp_min);
  description.innerHTML = response.data.weather[0].description;
}

function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#enterCity").value;
  let apiKey = "7387c1649b2acfa22815e197a7100ba0";
  let unit = "metric";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiURL).then(displayTemp);
}
let submit = document.querySelector("#userInfo");
submit.addEventListener("click", searchCity);
