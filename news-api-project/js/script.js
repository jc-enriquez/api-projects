const apiKey = "&apiKey=9fd7afaa37fb45628cd77d06178bb991";
const apiKeyNewsData = "apikey=pub_177656fbf23b14691aad3e9f92ee9a0420169";
const baseUrl = "https://newsapi.org/v2/top-headlines?country=ph";

const headlineNewsUrl = baseUrl + apiKey;
const generalNewsUrl = baseUrl + "&category=general" + apiKey;
const businessNewsUrl = baseUrl + "&category=business" + apiKey;
const sportsNewsUrl = baseUrl + "&category=sports" + apiKey;
const technologyNewsUrl = baseUrl + "&category=technology" + apiKey;
const entertainmentNewsUrl = baseUrl + "&category=entertainment" + apiKey;
const healthNewsUrl = baseUrl + "&category=health" + apiKey;
const scienceNewsUrl = baseUrl + "&category=science" + apiKey;

const headlineMainContent = document.getElementById("headline-main");
const headlineAsideContent = document.getElementById("headline-aside");
const headlineRowContent = document.getElementById("headline-row");
const generalContent = document.getElementById("general-content");
const businessContent = document.getElementById("business-content");
const sportsContent = document.getElementById("sports-content");
const technologyContent = document.getElementById("technology-content");
const entertainmentContent = document.getElementById("entertainment-content");
const healthContent = document.getElementById("health-content");
const scienceContent = document.getElementById("science-content");

getHeadlineNewsMain(headlineNewsUrl);
getHeadlineNewsAside(headlineNewsUrl);
getHeadlineNewsRow(headlineNewsUrl);
getGeneralNews(generalNewsUrl);
getBusinessNews(businessNewsUrl);
getSportsNews(sportsNewsUrl);
getEntertainmentNews(entertainmentNewsUrl);
getTechnologyNews(technologyNewsUrl);
getHealthNews(healthNewsUrl);
getScienceNews(scienceNewsUrl);

function getHeadlineNewsMain(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "ok") {
        showHeadlineNewsMain(data.articles.slice(0, 1));
      } else {
        generalContent.innerHTML = `
        <div class="d-flex flex-column align-items-center justify-content-center">
          <img src="images/sad.gif" class="w-25 mb-2">
          <div class="text-center error-msg">
            <h5 class="fw-bold">Sorry, we cannot diplay news as of the moment</h5>
            <small class="text-muted">Too many requests recently. Developer accounts are limited to 100 requests over a 24 hour period (50 requests available every 12 hours). Please upgrade to a paid plan if you need more requests.</small>
          </div>
        </div>
        `;
      }
    });
}

function getHeadlineNewsAside(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "ok") {
        showHeadlineNewsAside(data.articles.slice(2, 5));
      } else {
        generalContent.innerHTML = `
        <div class="d-flex flex-column align-items-center justify-content-center">
          <img src="images/sad.gif" class="w-25 mb-2">
          <div class="text-center error-msg">
            <h5 class="fw-bold">Sorry, we cannot diplay news as of the moment</h5>
            <small class="text-muted">Too many requests recently. Developer accounts are limited to 100 requests over a 24 hour period (50 requests available every 12 hours). Please upgrade to a paid plan if you need more requests.</small>
          </div>
        </div>
        `;
      }
    });
}

function getHeadlineNewsRow(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "ok") {
        showHeadlineNewsRow(data.articles.slice(6, 12));
      } else {
        generalContent.innerHTML = `
        <div class="d-flex flex-column align-items-center justify-content-center">
          <img src="images/sad.gif" class="w-25 mb-2">
          <div class="text-center error-msg">
            <h5 class="fw-bold">Sorry, we cannot diplay news as of the moment</h5>
            <small class="text-muted">Too many requests recently. Developer accounts are limited to 100 requests over a 24 hour period (50 requests available every 12 hours). Please upgrade to a paid plan if you need more requests.</small>
          </div>
        </div>
        `;
      }
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
          <img src="images/sad.gif" class="w-25 mb-2">
          <div class="text-center error-msg">
            <h5 class="fw-bold">Sorry, we cannot diplay news as of the moment</h5>
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
          <img src="images/sad.gif" class="w-25 mb-2">
          <div class="text-center error-msg">
            <h5 class="fw-bold">Sorry, we cannot diplay news as of the moment</h5>
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
          <img src="images/sad.gif" class="w-25 mb-2">
          <div class="text-center error-msg">
            <h5 class="fw-bold">Sorry, we cannot diplay news as of the moment</h5>
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
          <img src="images/sad.gif" class="w-25 mb-2">
          <div class="text-center error-msg">
            <h5 class="fw-bold">Sorry, we cannot diplay news as of the moment</h5>
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
          <img src="images/sad.gif" class="w-25 mb-2">
          <div class="text-center error-msg">
            <h5 class="fw-bold">Sorry, we cannot diplay news as of the moment</h5>
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
          <img src="images/sad.gif" class="w-25 mb-2">
          <div class="text-center error-msg">
            <h5 class="fw-bold">Sorry, we cannot diplay news as of the moment</h5>
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
          <img src="images/sad.gif" class="w-25 mb-2">
          <div class="text-center error-msg">
            <h5 class="fw-bold">Sorry, we cannot diplay news as of the moment</h5>
            <small class="text-muted">Too many requests recently. Developer accounts are limited to 100 requests over a 24 hour period (50 requests available every 12 hours). Please upgrade to a paid plan if you need more requests.</small>
          </div>
        </div>
        `;
      }
    });
}

function showHeadlineNewsMain(data) {
  data.forEach((articles) => {
    const { title, url, urlToImage, publishedAt } = articles;
    const headlineElement = document.createElement("div");
    headlineElement.classList.add("card", "border-0");
    headlineElement.innerHTML = `
    <div class="row g-0 align-items-center">
      <div class="col-md-6">
        <a href="${url}" target="_blank">
          <img
            src="${
              urlToImage
                ? urlToImage
                : "https://source.unsplash.com/1000x1000?" + title.split(" ")[0]
            }"
            class="headline-img-main"
            alt="${title}"
          />
        </a>
      </div>
      <div class="col-md-6">
        <div class="card-body">
          <h5 class="card-title fw-bold">${title}</h5>
          <p class="card-text">
            <small class="text-muted">${publishedAt.split("T").shift()}</small>
          </p>
        </div>
      </div>
    </div>
    `;

    headlineMainContent.appendChild(headlineElement);
  });
}

function showHeadlineNewsAside(data) {
  data.forEach((articles) => {
    const { title, url, urlToImage, publishedAt } = articles;
    const headlineElement = document.createElement("div");
    headlineElement.classList.add("card", "mb-2", "border-0");
    headlineElement.innerHTML = `
    <div class="row g-0 align-items-center">
      <div class="col-md-6">
        <a href="${url}" target="_blank">
          <img
            src="${
              urlToImage
                ? urlToImage
                : "https://source.unsplash.com/1000x1000?" + title.split(" ")[0]
            }"
            class="headline-img-aside"
            alt="${title}"
          />
        </a>
      </div>
      <div class="col-md-6">
        <div class="card-body">
          <h5 class="card-title fw-bold">${title.substring(0, 30) + "..."}</h5>
          <p class="card-text">
            <small class="text-muted">${publishedAt.split("T").shift()}</small>
          </p>
        </div>
      </div>
    </div>
    `;

    headlineAsideContent.appendChild(headlineElement);
  });
}

function showHeadlineNewsRow(data) {
  data.forEach((articles) => {
    const { title, url, urlToImage, publishedAt } = articles;
    const headlineElement = document.createElement("div");
    headlineElement.classList.add("col-lg-2", "border-0");
    headlineElement.innerHTML = `
    <div class="card h-100">
      <a href="${url}" target="_blank">
        <img
          src="${
            urlToImage
              ? urlToImage
              : "https://source.unsplash.com/1000x1000?" + title.split(" ")[0]
          }"
          class="card-img-top"
          alt="${title}"
        />
      </a>
      <div class="card-body">
        <h5 class="card-title fw-bold">${title.substring(0, 30) + "..."}</h5>
        <p class="card-text">
          <small class="text-muted">${publishedAt.split("T").shift()}</small>
        </p>
      </div>
    </div>
    `;

    headlineRowContent.appendChild(headlineElement);
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
        <a href="${url}" target="_blank" class="btn orange-btn">Read from Source</a>  
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
        <a href="${url}" target="_blank" class="btn orange-btn">Read from Source </a>  
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
        <a href="${url}" target="_blank" class="btn orange-btn">Read from Source </a>  
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
        <a href="${url}" target="_blank" class="btn orange-btn">Read from Source </a>  
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
        <a href="${url}" target="_blank" class="btn orange-btn">Read from Source </a>  
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
        <a href="${url}" target="_blank" class="btn orange-btn">Read from Source </a>  
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
        <a href="${url}" target="_blank" class="btn orange-btn">Read from Source </a>  
      </div>
  </div>`;

    scienceContent.appendChild(scienceElement);
  });
}

const date = new Date();
const today = new Date().toLocaleDateString();

let year = date.getFullYear();
document.getElementById("year").innerText = year;
