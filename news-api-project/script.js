const apiKey = "&apiKey=9fd7afaa37fb45628cd77d06178bb991";
const baseUrl = "https://newsapi.org/v2/top-headlines?country=ph";

const generalNewsUrl = baseUrl + "&category=general" + apiKey;
const businessNewsUrl = baseUrl + "&category=business" + apiKey;
const sportsNewsUrl = baseUrl + "&category=sports" + apiKey;
const technologyNewsUrl = baseUrl + "&category=technology" + apiKey;
const entertainmentNewsUrl = baseUrl + "&category=entertainment" + apiKey;
const healthNewsUrl = baseUrl + "&category=health" + apiKey;
const scienceNewsUrl = baseUrl + "&category=science" + apiKey;

const generalContent = document.getElementById("general-content");
const businessContent = document.getElementById("business-content");
const sportsContent = document.getElementById("sports-content");
const technologyContent = document.getElementById("technology-content");
const entertainmentContent = document.getElementById("entertainment-content");
const healthContent = document.getElementById("health-content");
const scienceContent = document.getElementById("science-content");

getGeneralNews(generalNewsUrl);
getBusinessNews(businessNewsUrl);
getSportsNews(sportsNewsUrl);
getEntertainmentNews(entertainmentNewsUrl);
getTechnologyNews(technologyNewsUrl);
getHealthNews(healthNewsUrl);
getScienceNews(scienceNewsUrl);

function getGeneralNews(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "ok") {
        showGeneralNews(data.articles);
      } else {
        generalContent.innerHTML = `
        <div class="d-flex flex-column align-items-center justify-content-center">
          <img src="images/sad.gif" class="w-25">
          <div class="w-50 text-center">
            <h5>Sorry, we cannot diplay news as of the moment</h5>
            <small class="text-muted">Too many requests recently. Developer accounts are limited to 100 requests over a 24 hour period (50 requests available every 12 hours). Please upgrade to a paid plan if you need more requests.</small>
          </div>
        </div>
        `;
      }
      //console.log(data.articles);
    });
}

function getBusinessNews(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "ok") {
        showBusinessNews(data.articles);
      } else {
        businessContent.innerHTML = `
        <div class="d-flex flex-column align-items-center justify-content-center">
          <img src="images/sad.gif" class="w-25">
          <div class="w-50 text-center">
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
        showSportsNews(data.articles);
      } else {
        sportsContent.innerHTML = `
        <div class="d-flex flex-column align-items-center justify-content-center">
          <img src="images/sad.gif" class="w-25">
          <div class="w-50 text-center">
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
        showTechnologyNews(data.articles);
      } else {
        technologyContent.innerHTML = `
        <div class="d-flex flex-column align-items-center justify-content-center">
          <img src="images/sad.gif" class="w-25">
          <div class="w-50 text-center">
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
        showEntertainmentNews(data.articles);
      } else {
        entertainmentContent.innerHTML = `
        <div class="d-flex flex-column align-items-center justify-content-center">
          <img src="images/sad.gif" class="w-25">
          <div class="w-50 text-center">
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
        showHealthNews(data.articles);
      } else {
        healthContent.innerHTML = `
        <div class="d-flex flex-column align-items-center justify-content-center">
          <img src="images/sad.gif" class="w-25">
          <div class="w-50 text-center">
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
        showScienceNews(data.articles);
      } else {
        scienceContent.innerHTML = `
        <div class="d-flex flex-column align-items-center justify-content-center">
          <img src="images/sad.gif" class="w-25">
          <div class="w-50 text-center">
            <h5>Sorry, we cannot diplay news as of the moment</h5>
            <small class="text-muted">Too many requests recently. Developer accounts are limited to 100 requests over a 24 hour period (50 requests available every 12 hours). Please upgrade to a paid plan if you need more requests.</small>
          </div>
        </div>
        `;
      }
    });
}

function showGeneralNews(data) {
  generalContent.innerHTML = "";
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
          : "https://via.placeholder.com/1080x1580.png?text=Image+Coming+Soon"
      }"
      class="content-img"
      alt="${title}"
      />
      <div class="card-body">
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
  businessContent.innerHTML = "";
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
          : "https://via.placeholder.com/1080x1580.png?text=Image+Coming+Soon"
      }"
      class="content-img"
      alt="${title}"
      />
      <div class="card-body">
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
  sportsContent.innerHTML = "";
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
          : "https://via.placeholder.com/1080x1580.png?text=Image+Coming+Soon"
      }"
      class="content-img"
      alt="${title}"
      />
      <div class="card-body">
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
  technologyContent.innerHTML = "";
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
          : "https://via.placeholder.com/1080x1580.png?text=Image+Coming+Soon"
      }"
      class="content-img"
      alt="${title}"
      />
      <div class="card-body">
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
  technologyContent.innerHTML = "";
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
          : "https://via.placeholder.com/1080x1580.png?text=Image+Coming+Soon"
      }"
      class="content-img"
      alt="${title}"
      />
      <div class="card-body">
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
  healthContent.innerHTML = "";
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
          : "https://via.placeholder.com/1080x1580.png?text=Image+Coming+Soon"
      }"
      class="content-img"
      alt="${title}"
      />
      <div class="card-body">
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
  scienceContent.innerHTML = "";
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
          : "https://via.placeholder.com/1080x1580.png?text=Image+Coming+Soon"
      }"
      class="content-img"
      alt="${title}"
      />
      <div class="card-body">
        <h6 class="card-title fw-bold">${title.substring(0, 60) + "..."}</h6>
        <small class="text-muted d-block my-2">${publishedAt.split("T").shift()}
        </small>
        <a href="${url}" target="_blank" class="btn orange-btn">Read from Source <i class="bi bi-eye-fill"></i></a>  
      </div>
  </div>`;

    scienceContent.appendChild(scienceElement);
  });
}

const date = new Date();

let year = date.getFullYear();
document.getElementById("year").innerText = year;
