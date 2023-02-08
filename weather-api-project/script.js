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
    const { temp, humidity, temp_min, temp_max, pressure, feels_like } =
      data.main;
    const { speed, deg } = data.wind;
    const { visibility } = data;
    const { sunrise, sunset, country } = data.sys;
    const { all } = data.clouds;
    const { timezone } = data;

    document.querySelector("#city").innerText = "Weather in " + name;
    document.querySelector("#icon").src =
      "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector("#description").innerText = description;
    document.querySelector("#time").innerText = timezone;
    document.querySelector("#country").innerText = country;
    document.querySelector("#clouds").innerText = all + "%";
    document.querySelector("#temp").innerText = temp;
    document.querySelector("#humidity").innerText = humidity + "%";
    document.querySelector("#feels").innerText = feels_like + "°";
    document.querySelector("#max-temp").innerText = temp_max + "°C";
    document.querySelector("#min-temp").innerText = temp_min + "°C";
    document.querySelector("#visibility").innerText = visibility;
    document.querySelector("#pressure").innerText = pressure;
    document.querySelector("#lon").innerText = lon;
    document.querySelector("#lat").innerText = lat;
    document.querySelector("#wind").innerText = speed;
    document.querySelector("#direction").innerText = deg + "°";
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

const searchInput = document.querySelector("#search-bar").value;

window.myWidgetParam ? window.myWidgetParam : (window.myWidgetParam = []);
window.myWidgetParam.push({
  id: 1,
  city_name: "",
  appid: "8cb4e74484c650ba890c9f16323ff0d5",
  units: "metric",
  containerid: "openweathermap-widget-1",
});

window.myWidgetParam ? window.myWidgetParam : (window.myWidgetParam = []);
window.myWidgetParam.push({
  id: 5,
  cityid: "2643743",
  appid: "8cb4e74484c650ba890c9f16323ff0d5",
  units: "metric",
  containerid: "openweathermap-widget-5",
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

weather.fetchWeather("Manila");
