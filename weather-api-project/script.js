function timeConverter(UNIX_timestamp) {
  let a = new Date(UNIX_timestamp * 1000);
  let hour = a.getHours();
  let min = a.getMinutes();
  let time = hour + ":" + min;
  return time;
}

function toStandardTime(militaryTime) {
  militaryTime = militaryTime.split(":");
  return militaryTime[0].charAt(0) == 1 && militaryTime[0].charAt(1) > 2
    ? militaryTime[0] - 12 + ":" + militaryTime[1] + " PM"
    : militaryTime.join(":") + " AM";
}

let weather = {
  apiKey: "8cb4e74484c650ba890c9f16323ff0d5",
  locator: navigator.geolocation.getCurrentPosition((pos) => {
    const latitude = pos.coords.latitude;
    const longitue = pos.coords.longitude;
  }),
  fetchWeather: function (city) {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { lon, lat } = data.coord;
    const { icon, description } = data.weather[0];
    const { temp, humidity, temp_min, temp_max, pressure } = data.main;
    const { speed, gust } = data.wind;
    const { visibility } = data.visibility;
    const { sunrise, sunset } = data.sys;

    document.querySelector("#city").innerText = "Weather in " + name;
    document.querySelector("#icon").src =
      "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector("#description").innerText = description;
    document.querySelector("#temp").innerText = temp;
    document.querySelector("#humidity").innerText = humidity + "%";
    document.querySelector("#max-temp").innerText = temp_max + "°C";
    document.querySelector("#min-temp").innerText = temp_min + "°C";
    document.querySelector("#visibility").innerText = visibility;
    document.querySelector("#pressure").innerText = pressure;
    document.querySelector("#lon").innerText = lon;
    document.querySelector("#lat").innerText = lat;
    document.querySelector("#wind").innerText = speed;
    document.querySelector("#gust").innerText = gust + "°";
    document.querySelector("#sunrise").innerText = toStandardTime(
      timeConverter(sunrise)
    );
    document.querySelector("#sunset").innerText = toStandardTime(
      timeConverter(sunset)
    );
    document.querySelector(".weather").classList.remove("loading");
    document.querySelector(".location").style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
    this.fetchWeather(document.querySelector("#search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector("#search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Manila");

window.myWidgetParam ? window.myWidgetParam : (window.myWidgetParam = []);
window.myWidgetParam.push({
  id: 1,
  city_name: "Manila",
  appid: "8cb4e74484c650ba890c9f16323ff0d5",
  units: "metric",
  containerid: "openweathermap-widget-1",
});

(function () {
  var script = document.createElement("script");
  script.async = true;
  script.charset = "utf-8";
  script.src =
    "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(script, s);
})();

// const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// // const currentDate = new Date();
// // let currentDay = days[currentDate.getDay()];
// // let currentHour = currentDate.getHours();

// // document.getElementById("current-day").innerHTML = currentDay;
// // document.getElementById("current-time").innerHTML = timeConverter(
// //   currentDate.getTime()
// // );
