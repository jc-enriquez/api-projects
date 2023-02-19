const apiKey = "9fd7afaa37fb45628cd77d06178bb991";
const headlineNews =
  "https://newsapi.org/v2/top-headlines?country=ph&apiKey=" + apiKey;
const generalNews =
  "https://newsapi.org/v2/top-headlines?country=ph&category=general&apiKey=" +
  apiKey;
const businessNews =
  "https://newsapi.org/v2/top-headlines?country=ph&category=business&apiKey=" +
  apiKey;
const sportsNews =
  "https://newsapi.org/v2/top-headlines?country=ph&category=sports&apiKey=" +
  apiKey;
const entertainmentNews =
  "https://newsapi.org/v2/top-headlines?country=ph&category=entertainment&apiKey=" +
  apiKey;
const technologyNews =
  "https://newsapi.org/v2/top-headlines?country=ph&category=technology&apiKey=" +
  apiKey;
const searchNews = "https://newsapi.org/v2/everything?q=";

let newsDataArr = [];

const generalBtn = document.getElementById("general");
const businessBtn = document.getElementById("business");
const sportsBtn = document.getElementById("sports");
const technologyBtn = document.getElementById("technology");
const entertainmentBtn = document.getElementById("entertainment");
const searchBtn = document.getElementById("search");
const newsQuery = document.getElementById("news-query");
const newsType = document.getElementById("news-type");
const newsDetails = document.getElementById("news-details");

generalBtn.addEventListener("click", function () {
  fetchGeneralNews();
});

businessBtn.addEventListener("click", function () {
  fetchBusinessNews();
});

sportsBtn.addEventListener("click", function () {
  fetchSportsNews();
});

technologyBtn.addEventListener("click", function () {
  fetchTechnologyNews();
});

entertainmentBtn.addEventListener("click", function () {
  fetchEntertainmentNews();
});

searchBtn.addEventListener("click", function () {
  fetchQueryNews();
});

const fetchGeneralNews = async () => {
  const response = await fetch(generalNews);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const newJson = await response.json();
    newsDataArr = newJson.articles;
  } else {
    console.log(response.status, response.statusText);
  }
  displayNews();
};

const fetchBusinessNews = async () => {
  const response = await fetch(businessNews);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const newJson = await response.json();
    newsDataArr = newJson.articles;
  } else {
    console.log(response.status, response.statusText);
  }
  displayNews();
};

const fetchSportsNews = async () => {
  const response = await fetch(sportsNews);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const newJson = await response.json();
    newsDataArr = newJson.articles;
  } else {
    console.log(response.status, response.statusText);
  }
  displayNews();
};

const fetchTechnologyNews = async () => {
  const response = await fetch(technologyNews);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const newJson = await response.json();
    newsDataArr = newJson.articles;
  } else {
    console.log(response.status, response.statusText);
  }
  displayNews();
};

const fetchEntertainmentNews = async () => {
  const response = await fetch(entertainmentNews);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const newJson = await response.json();
    newsDataArr = newJson.articles;
  } else {
    console.log(response.status, response.statusText);
  }
  displayNews();
};

const fetchQueryNews = async () => {
  if (newsQuery.value == null) {
    return;
  }
  const response = await fetch(
    searchNews + newsQuery.value + "&apiKey=" + apiKey
  );
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const newJson = await response.json();
    newsDataArr = newJson.articles;
  } else {
    console.log(response.status, response.statusText);
  }
  displayNews();
};

function displayNews() {
  newsDetails.innerHTML = "";

  if (newsDataArr.length == 0) {
    newsDetails.innerHTML = "<h5>No data found.</h5>";
    return;
  }

  newsDataArr.forEach((news) => {
    let date = news.publishedAt.split("T");

    let col = document.createElement("div");
    col.className = "col-sm-12 col-md-4 col-lg-3 p-2";

    let card = document.createElement("div");
    card.className = "p-2";

    let image = document.createElement("img");
    image.setAttribute("height", "matchparent");
    image.setAttribute("width", "100%");
    image.src = news.urlToImage;

    let cardBody = document.createElement("div");

    let newsHeading = document.createElement("h5");
    newsHeading.className = "card-title";
    newsHeading.innerHTML = news.title;

    let dateHeading = document.createElement("h6");
    dateHeading.className = "text-muted";
    dateHeading.innerHTML = date[0];

    let description = document.createElement("p");
    description.className = "text-muted";
    description.innerHTML = news.description;

    let link = document.createElement("a");
    link.className = "btn btn-dark";
    link.setAttribute("target", "_blank");
    link.href = news.url;
    link.innerHTML = "Read more";

    cardBody.appendChild(newsHeading);
    cardBody.appendChild(dateHeading);
    cardBody.appendChild(description);
    cardBody.appendChild(link);

    card.appendChild(image);
    card.appendChild(cardBody);

    col.appendChild(card);

    newsDetails.appendChild(col);
  });
}
