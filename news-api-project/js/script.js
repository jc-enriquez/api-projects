const apiKey = "&apiKey=9fd7afaa37fb45628cd77d06178bb991";
const apiKeyNewsData = "apikey=pub_177656fbf23b14691aad3e9f92ee9a0420169";
const baseUrl = "https://newsapi.org/v2/top-headlines?country=ph";

const generalNewsUrl = baseUrl + "&category=general" + apiKey;
const businessNewsUrl = baseUrl + "&category=business" + apiKey;
const sportsNewsUrl = baseUrl + "&category=sports" + apiKey;
const technologyNewsUrl = baseUrl + "&category=technology" + apiKey;
const entertainmentNewsUrl = baseUrl + "&category=entertainment" + apiKey;
const healthNewsUrl = baseUrl + "&category=health" + apiKey;
const scienceNewsUrl = baseUrl + "&category=science" + apiKey;

const worldNewsUrl =
  "https://newsdata.io/api/1/news?" +
  apiKeyNewsData +
  "&category=world&language=en";

const trendingNewsUrl =
  "https://newsdata.io/api/1/news?" +
  apiKeyNewsData +
  "&category=top&language=en";

const peopleUrl =
  "https://dummyjson.com/users?limit=3&select=firstName,lastName,image,email";

const commentUrl = "https://dummyjson.com/comments?limit=5&skip=5&select=body";

const popularUrl =
  "https://newsdata.io/api/1/news?" +
  apiKeyNewsData +
  "&category=entertainment&language=en";

const latestUrl =
  "https://newsdata.io/api/1/news?" +
  apiKeyNewsData +
  "&category=politics&language=en";

const worldContent = document.getElementById("world-content");
const featuredContent = document.getElementById("featured-content");
const trendingContent = document.getElementById("trending-content");
const peopleContent = document.getElementById("people-content");
const commentContent = document.getElementById("comment-content");
const popularContent = document.getElementById("popular-content");
const latestContent = document.getElementById("latest-content");
const generalContent = document.getElementById("general-content");
const businessContent = document.getElementById("business-content");
const sportsContent = document.getElementById("sports-content");
const technologyContent = document.getElementById("technology-content");
const entertainmentContent = document.getElementById("entertainment-content");
const healthContent = document.getElementById("health-content");
const scienceContent = document.getElementById("science-content");

getWorldNews(worldNewsUrl);
getFeaturedNews(worldNewsUrl);
getTrendingNews(trendingNewsUrl);
getPeople(peopleUrl);
getComments(commentUrl);
getPopularNews(popularUrl);
getLatestNews(latestUrl);
getGeneralNews(generalNewsUrl);
getBusinessNews(businessNewsUrl);
getSportsNews(sportsNewsUrl);
getEntertainmentNews(entertainmentNewsUrl);
getTechnologyNews(technologyNewsUrl);
getHealthNews(healthNewsUrl);
getScienceNews(scienceNewsUrl);

function getWorldNews(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showWorldNews(data.results.slice(1, 5));
    });
}

function getFeaturedNews(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "success") {
        showFeaturedNews(data.results.slice(0, 1));
      } else if (data.status === "error") {
        featuredContent.innerHTML = `<p class="text-dark">Unable to retrieve news as of the moment.</p>`;
      }
    });
}

function getTrendingNews(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showTrendingNews(data.results.slice(0, 4));
    });
}

function getPeople(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showPeople(data.users);
    });
}

function getComments(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showComment(data.comments);
    });
}

function getPopularNews(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showPopularNews(data.results.slice(0, 2));
    });
}

function getLatestNews(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showLatestNews(data.results.slice(0, 3));
    });
}

function getGeneralNews(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "ok") {
        showGeneralNews(data.articles.slice(0, 10));
      } else {
        generalContent.innerHTML = `
        <div class="d-flex flex-column align-items-center justify-content-center">
          <img src="images/sad.gif" class="w-25">
          <div class="text-center error-msg">
            <h5>Sorry, we cannot diplay news as of the moment</h5>
            <small class="text-muted">Too many requests recently. Developer accounts are limited to 100 requests over a 24 hour period (50 requests available every 12 hours). Please upgrade to a paid plan if you need more requests.</small>
          </div>
        </div>
        `;
      }
    });
}

function getBusinessNews(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "ok") {
        showBusinessNews(data.articles.slice(0, 10));
      } else {
        businessContent.innerHTML = `
        <div class="d-flex flex-column align-items-center justify-content-center">
          <img src="images/sad.gif" class="w-25">
          <div class="text-center error-msg">
            <h5>Sorry, we cannot diplay news as of the moment</h5>
            <small class="text-muted">Too many requests recently. Developer accounts are limited to 100 requests over a 24 hour period (50 requests available every 12 hours). Please upgrade to a paid plan if you need more requests.</small>
          </div>
        </div>
        `;
      }
    });
}

function getSportsNews(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "ok") {
        showSportsNews(data.articles.slice(0, 10));
      } else {
        sportsContent.innerHTML = `
        <div class="d-flex flex-column align-items-center justify-content-center">
          <img src="images/sad.gif" class="w-25">
          <div class="text-center error-msg">
            <h5>Sorry, we cannot diplay news as of the moment</h5>
            <small class="text-muted">Too many requests recently. Developer accounts are limited to 100 requests over a 24 hour period (50 requests available every 12 hours). Please upgrade to a paid plan if you need more requests.</small>
          </div>
        </div>
        `;
      }
    });
}

function getTechnologyNews(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "ok") {
        showTechnologyNews(data.articles.slice(0, 10));
      } else {
        technologyContent.innerHTML = `
        <div class="d-flex flex-column align-items-center justify-content-center">
          <img src="images/sad.gif" class="w-25">
          <div class="text-center error-msg">
            <h5>Sorry, we cannot diplay news as of the moment</h5>
            <small class="text-muted">Too many requests recently. Developer accounts are limited to 100 requests over a 24 hour period (50 requests available every 12 hours). Please upgrade to a paid plan if you need more requests.</small>
          </div>
        </div>
        `;
      }
    });
}

function getEntertainmentNews(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "ok") {
        showEntertainmentNews(data.articles.slice(0, 10));
      } else {
        entertainmentContent.innerHTML = `
        <div class="d-flex flex-column align-items-center justify-content-center">
          <img src="images/sad.gif" class="w-25">
          <div class="text-center error-msg">
            <h5>Sorry, we cannot diplay news as of the moment</h5>
            <small class="text-muted">Too many requests recently. Developer accounts are limited to 100 requests over a 24 hour period (50 requests available every 12 hours). Please upgrade to a paid plan if you need more requests.</small>
          </div>
        </div>
        `;
      }
    });
}

function getHealthNews(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "ok") {
        showHealthNews(data.articles.slice(0, 10));
      } else {
        healthContent.innerHTML = `
        <div class="d-flex flex-column align-items-center justify-content-center">
          <img src="images/sad.gif" class="w-25">
          <div class="text-center error-msg">
            <h5>Sorry, we cannot diplay news as of the moment</h5>
            <small class="text-muted">Too many requests recently. Developer accounts are limited to 100 requests over a 24 hour period (50 requests available every 12 hours). Please upgrade to a paid plan if you need more requests.</small>
          </div>
        </div>
        `;
      }
    });
}

function getScienceNews(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "ok") {
        showScienceNews(data.articles.slice(0, 10));
      } else {
        scienceContent.innerHTML = `
        <div class="d-flex flex-column align-items-center justify-content-center">
          <img src="images/sad.gif" class="w-25">
          <div class="text-center error-msg">
            <h5>Sorry, we cannot diplay news as of the moment</h5>
            <small class="text-muted">Too many requests recently. Developer accounts are limited to 100 requests over a 24 hour period (50 requests available every 12 hours). Please upgrade to a paid plan if you need more requests.</small>
          </div>
        </div>
        `;
      }
    });
}

function showWorldNews(data) {
  data.forEach((results) => {
    const { title, pubDate, image_url, link } = results;
    const worldElement = document.createElement("div");
    worldElement.classList.add("card");
    worldElement.classList.add("mb-3");
    worldElement.classList.add("border-0");
    worldElement.classList.add("border-bottom");
    worldElement.classList.add("pb-2");
    worldElement.innerHTML = `
    <div class="row g-0 align-items-center">
      <div class="col-md-4">
        <img
          src="${
            image_url
              ? image_url
              : "https://source.unsplash.com/250x250/?" + title.split(" ")[0]
          }"
          class="square-img"
          alt="${title}"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h6 class="card-title fw-bold">
            ${title.slice(0, 30) + "..."}
          </h6>
          <p class="card-text">
            <a href="${link}" target="_blank" class="orange-text me-2"><i class="bi bi-box-arrow-up-right"></i></a><small class="text-muted">${pubDate}</small>
          </p>
      </div>
    </div>
    `;
    worldContent.appendChild(worldElement);
  });
}

function showFeaturedNews(data) {
  data.forEach((results) => {
    const { title, description, image_url, link, pubDate } = results;
    const featuredElement = document.createElement("div");
    featuredElement.classList.add("card");
    featuredElement.innerHTML = `
    <img
      src="${image_url}"
      class="img-fluid featured-img"
      alt=""
    />
    <div class="card-img-overlay d-flex flex-column justify-content-end text-white">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">
        ${description}
      </p>
      <p class="card-text">
        <small>${pubDate}</small>
      </p>
    </div>
    `;
    featuredContent.appendChild(featuredElement);
  });
}

function showTrendingNews(data) {
  data.forEach((results) => {
    const { title, pubDate, image_url, link } = results;
    const trendingElement = document.createElement("div");
    trendingElement.classList.add("card");
    trendingElement.classList.add("mb-3");
    trendingElement.classList.add("border-0");
    trendingElement.classList.add("border-bottom");
    trendingElement.classList.add("pb-2");
    trendingElement.innerHTML = `
    <div class="row g-0 align-items-center">
      <div class="col-md-4">
        <img
          src="${
            image_url
              ? image_url
              : "https://source.unsplash.com/250x250/?" + title.split(" ")[0]
          }"
          class="square-img"
          alt="${title}"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h6 class="card-title fw-bold">
            ${title.slice(0, 30) + "..."}
          </h6>
          <p class="card-text">
            <a href="${link}" target="_blank" class="orange-text me-2"><i class="bi bi-box-arrow-up-right"></i></a><small class="text-muted">${pubDate}</small>
          </p>
      </div>
    </div>
    `;
    trendingContent.appendChild(trendingElement);
  });
}

function showPeople(data) {
  data.forEach((users) => {
    const { firstName, lastName, image, email } = users;
    const peopleElement = document.createElement("div");
    peopleElement.classList.add("card");
    peopleElement.classList.add("mb-3");
    peopleElement.classList.add("border-0");
    peopleElement.classList.add("border-bottom");
    peopleElement.classList.add("pb-2");
    peopleElement.innerHTML = `
    <div class="row g-0 align-items-center">
      <div class="col-md-4">
        <img
          src="${
            image
              ? image
              : "https://source.unsplash.com/250x250/?" +
                firstName.split(" ")[0]
          }"
          class="square-img"
          alt="${firstName}"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h6 class="card-title fw-bold">
            ${firstName} ${lastName}
          </h6>
          <p class="card-text">
            <small class="text-muted">${email}</small>
          </p>
      </div>
    </div>
    `;
    peopleContent.appendChild(peopleElement);
  });
}

function showPopularNews(data) {
  data.forEach((results) => {
    const { title, pubDate, image_url, link, description } = results;
    const popularElement = document.createElement("div");
    popularElement.classList.add("col-lg-6");
    popularElement.innerHTML = `
    <img
      class="img-fluid mb-2"
      src="${
        image_url
          ? image_url
          : "https://source.unsplash.com/300x150/?" + title.split(" ")[0]
      }"
    />
    <h5 class="text-capitalize fw-bold">
      ${title.slice(0, 20) + "..."}
    </h5>
    <p class="card-text">
      <a href="${link}" target="_blank" class="orange-text me-2"><i class="bi bi-box-arrow-up-right"></i></a><small class="text-muted">${pubDate}</small>
    </p>
    <p class="text-muted">
      ${description.slice(0, 60) + "..."}
    </p>`;
    popularContent.appendChild(popularElement);
  });
}

function showLatestNews(data) {
  data.forEach((results) => {
    const { title, pubDate, image_url, link } = results;
    const latestElement = document.createElement("div");
    latestElement.classList.add("col-lg-4");
    latestElement.innerHTML = `
    <div class="card h-100">
      <img
        src="${
          image_url
            ? image_url
            : "https://source.unsplash.com/250x250/?" + title.split(" ")[0]
        }"
        alt=""
      />
      <div class="card-body">
        <h5 class="fw-bold">
          ${title.slice(0, 20) + "..."}
        </h5>
        <p class="card-text">
            <a href="${link}" target="_blank" class="orange-text me-2"><i class="bi bi-box-arrow-up-right"></i></a><small class="text-muted">${pubDate}</small>
        </p>
      </div>
    </div>`;
    latestContent.appendChild(latestElement);
  });
}

function showComment(data) {
  data.forEach((comments) => {
    const { body } = comments;
    const { username } = comments.user;
    const commentElement = document.createElement("li");
    commentElement.classList.add("list-group-item");
    commentElement.classList.add("mb-3");
    commentElement.classList.add("border-0");
    commentElement.classList.add("border-bottom");
    commentElement.classList.add("pb-2");
    commentElement.innerHTML = `
    <div class="d-flex flex-column">
      <div class="d-flex">
        <i class="bi bi-dot orange-text"></i>
        <span class="text-muted text-start">${body}</span>
      </div>
      <div class="ms-3">
        <small class="text-muted">
         by<span class="orange-text fw-bold ms-2">${username}</span>
        </small>
      </div>
    </div>
    `;
    commentContent.appendChild(commentElement);
  });
}

function showGeneralNews(data) {
  data.forEach((articles) => {
    const { title, url, urlToImage, publishedAt } = articles;
    const generalElement = document.createElement("div");
    generalElement.classList.add("col-lg-3");
    generalElement.classList.add("col-md-4");
    generalElement.innerHTML = `<div class="card h-100 mb-3">
    <img
      src="${
        urlToImage
          ? urlToImage
          : "https://source.unsplash.com/250x250/?" + title.split(" ")[0]
      }"
      class="content-img"
      alt="${title}"
      />
      <div class="card-body d-flex flex-column justify-content-center">
        <h6 class="card-title fw-bold">${title.substring(0, 60) + "..."}</h6>
        <small class="text-muted d-block my-2">${publishedAt.split("T").shift()}
        </small>
        <a href="${url}" target="_blank" class="btn orange-btn">Read from Source <i class="bi bi-eye-fill"></i></a>  
      </div>
  </div>`;

    generalContent.appendChild(generalElement);
  });
}

function showBusinessNews(data) {
  data.forEach((articles) => {
    const { title, url, urlToImage, publishedAt } = articles;
    const businessElement = document.createElement("div");
    businessElement.classList.add("col-lg-3");
    businessElement.classList.add("col-md-4");
    businessElement.innerHTML = `<div class="card h-100 mb-3">
    <img
      src="${
        urlToImage
          ? urlToImage
          : "https://source.unsplash.com/250x250/?" + title.split(" ")[0]
      }"
      class="content-img"
      alt="${title}"
      />
      <div class="card-body d-flex flex-column justify-content-center">
        <h6 class="card-title fw-bold">${title.substring(0, 60) + "..."}</h6>
        <small class="text-muted d-block my-2">${publishedAt.split("T").shift()}
        </small>
        <a href="${url}" target="_blank" class="btn orange-btn">Read from Source <i class="bi bi-eye-fill"></i></a>  
      </div>
  </div>`;

    businessContent.appendChild(businessElement);
  });
}

function showSportsNews(data) {
  data.forEach((articles) => {
    const { title, url, urlToImage, publishedAt } = articles;
    const sportsElement = document.createElement("div");
    sportsElement.classList.add("col-lg-3");
    sportsElement.classList.add("col-md-4");
    sportsElement.innerHTML = `<div class="card h-100 mb-3">
    <img
      src="${
        urlToImage
          ? urlToImage
          : "https://source.unsplash.com/250x250/?" + title.split(" ")[0]
      }"
      class="content-img"
      alt="${title}"
      />
      <div class="card-body d-flex flex-column justify-content-center">
        <h6 class="card-title fw-bold">${title.substring(0, 60) + "..."}</h6>
        <small class="text-muted d-block my-2">${publishedAt.split("T").shift()}
        </small>
        <a href="${url}" target="_blank" class="btn orange-btn">Read from Source <i class="bi bi-eye-fill"></i></a>  
      </div>
  </div>`;

    sportsContent.appendChild(sportsElement);
  });
}

function showTechnologyNews(data) {
  data.forEach((articles) => {
    const { title, url, urlToImage, publishedAt } = articles;
    const technologyElement = document.createElement("div");
    technologyElement.classList.add("col-lg-3");
    technologyElement.classList.add("col-md-4");
    technologyElement.innerHTML = `<div class="card h-100 mb-3">
    <img
      src="${
        urlToImage
          ? urlToImage
          : "https://source.unsplash.com/250x250/?" + title.split(" ")[0]
      }"
      class="content-img"
      alt="${title}"
      />
      <div class="card-body d-flex flex-column justify-content-center">
        <h6 class="card-title fw-bold">${title.substring(0, 60) + "..."}</h6>
        <small class="text-muted d-block my-2">${publishedAt.split("T").shift()}
        </small>
        <a href="${url}" target="_blank" class="btn orange-btn">Read from Source <i class="bi bi-eye-fill"></i></a>  
      </div>
  </div>`;

    technologyContent.appendChild(technologyElement);
  });
}

function showEntertainmentNews(data) {
  data.forEach((articles) => {
    const { title, url, urlToImage, publishedAt } = articles;
    const entertainmentElement = document.createElement("div");
    entertainmentElement.classList.add("col-lg-3");
    entertainmentElement.classList.add("col-md-4");
    entertainmentElement.innerHTML = `<div class="card h-100 mb-3">
    <img
      src="${
        urlToImage
          ? urlToImage
          : "https://source.unsplash.com/250x250/?" + title.split(" ")[0]
      }"
      class="content-img"
      alt="${title}"
      />
      <div class="card-body d-flex flex-column justify-content-center">
        <h6 class="card-title fw-bold">${title.substring(0, 60) + "..."}</h6>
        <small class="text-muted d-block my-2">${publishedAt.split("T").shift()}
        </small>
        <a href="${url}" target="_blank" class="btn orange-btn">Read from Source <i class="bi bi-eye-fill"></i></a>  
      </div>
  </div>`;

    entertainmentContent.appendChild(entertainmentElement);
  });
}

function showHealthNews(data) {
  data.forEach((articles) => {
    const { title, url, urlToImage, publishedAt } = articles;
    const healthElement = document.createElement("div");
    healthElement.classList.add("col-lg-3");
    healthElement.classList.add("col-md-4");
    healthElement.innerHTML = `<div class="card h-100 mb-3">
    <img
      src="${
        urlToImage
          ? urlToImage
          : "https://source.unsplash.com/250x250/?" + title.split(" ")[0]
      }"
      class="content-img"
      alt="${title}"
      />
      <div class="card-body d-flex flex-column justify-content-center">
        <h6 class="card-title fw-bold">${title.substring(0, 60) + "..."}</h6>
        <small class="text-muted d-block my-2">${publishedAt.split("T").shift()}
        </small>
        <a href="${url}" target="_blank" class="btn orange-btn">Read from Source <i class="bi bi-eye-fill"></i></a>  
      </div>
  </div>`;

    healthContent.appendChild(healthElement);
  });
}

function showScienceNews(data) {
  data.forEach((articles) => {
    const { title, url, urlToImage, publishedAt } = articles;
    const scienceElement = document.createElement("div");
    scienceElement.classList.add("col-lg-3");
    scienceElement.classList.add("col-md-4");
    scienceElement.innerHTML = `<div class="card h-100 mb-3">
    <img
      src="${
        urlToImage
          ? urlToImage
          : "https://source.unsplash.com/250x250/?" + title.split(" ")[0]
      }"
      class="content-img"
      alt="${title}"
      />
      <div class="card-body d-flex flex-column justify-content-center">
        <h6 class="card-title fw-bold">${title.substring(0, 60) + "..."}</h6>
        <small class="text-muted d-block my-2">${publishedAt.split("T").shift()}
        </small>
        <a href="${url}" target="_blank" class="btn orange-btn">Read from Source <i class="bi bi-eye-fill"></i></a>  
      </div>
  </div>`;

    scienceContent.appendChild(scienceElement);
  });
}

const calendar = new VanillaCalendar("#vanilla-calendar", {});
calendar.init();

const date = new Date();
const today = new Date().toLocaleDateString();

let year = date.getFullYear();
document.getElementById("year").innerText = year;
document.getElementById("date").innerText = today;

const imgContainer = document.getElementById("img-container");
const unsplashUrl = "https://source.unsplash.com/random/";
const row = 5;

for (let img = 0; img < 6; img++) {
  const column = document.createElement("div");
  const img = document.createElement("img");
  column.classList.add("col-4");
  img.src = `${unsplashUrl}${getRandomSize()}`;
  column.appendChild(img);
  imgContainer.appendChild(column);
}

function getRandomSize() {
  return `${getRandomNumber()}x${getRandomNumber()}`;
}

function getRandomNumber() {
  return Math.floor(10 * Math.random()) + 300;
}
