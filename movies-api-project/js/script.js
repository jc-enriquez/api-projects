const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const trendingMovieSwiper = new Swiper(".trending-movie-swiper", {
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["200%", 0, 0],
    },
  },
});

const apiKey = "api_key=e63a90bff45eac4026bd03f0b3dee4fd";
const baseUrl = "https://api.themoviedb.org/3";
const movieUrl = baseUrl + "/movie/top_rated?" + apiKey;
const seriesUrl = baseUrl + "/tv/top_rated?" + apiKey;
const artistUrl = baseUrl + "/person/popular?" + apiKey;
const upcomingMoviesUrl = baseUrl + "/movie/popular?" + apiKey;
const imgUrl = "https://image.tmdb.org/t/p/w500";
const moviesHome = document.getElementById("movies-home");
const seriesHome = document.getElementById("series-home");
const artistHome = document.getElementById("artist-home");
const trendingMovies = document.getElementById("trending-movies");

getMovies(movieUrl);
getSeries(seriesUrl);
getArtist(artistUrl);
getUpcomingMovies(upcomingMoviesUrl);

function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showMoviesHome(data.results);
    });
}

function getSeries(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showSeriesHome(data.results);
    });
}

function getArtist(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showArtistHome(data.results);
    });
}

function getUpcomingMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showUpcomingMovies(data.results);
    });
}

function showMoviesHome(data) {
  moviesHome.innerHTML = "";
  data.forEach((movie) => {
    const { title, poster_path, vote_average, overview, release_date } = movie;
    const movieElementHome = document.createElement("div");
    movieElementHome.classList.add("swiper-slide");
    movieElementHome.innerHTML = `
    <div class="card card-height">
      <img
        src="${imgUrl + poster_path}"
        class="card-img-top"
        alt="${title}"
        />
        <div class="card-body">
          <h6 class="card-title fw-bold text-center">${title}</h6>
          <div class="d-flex justify-content-between">
            <p>
              <i class="bi bi-star-fill"></i>
              <span class="fw-bold ms-2">${vote_average}</span>
              </p>
              <small class="d-block text-muted">${release_date}</small>
          </div>
        </div>
    </div>
    `;

    moviesHome.appendChild(movieElementHome);
  });
}

function showSeriesHome(data) {
  seriesHome.innerHTML = "";
  data.forEach((movie) => {
    const { name, poster_path, vote_average, overview, first_air_date } = movie;
    const seriesElementHome = document.createElement("div");
    seriesElementHome.classList.add("swiper-slide");
    seriesElementHome.innerHTML = `
    <div class="card card-height">
      <img
        src="${imgUrl + poster_path}"
        class="card-img-top"
        alt="${name}"
        />
        <div class="card-body">
          <h6 class="card-title fw-bold text-center">${name}</h6>
          <div class="d-flex justify-content-between">
            <p>
              <i class="bi bi-star-fill"></i>
              <span class="fw-bold ms-2">${vote_average}</span>
              </p>
              <small class="d-block text-muted">${first_air_date}</small>
          </div>
        </div>
    </div>`;

    seriesHome.appendChild(seriesElementHome);
  });
}

function showArtistHome(data) {
  artistHome.innerHTML = "";
  data.forEach((artist) => {
    const { name, profile_path, known_for_department } = artist;
    const artistElementHome = document.createElement("div");
    artistElementHome.classList.add("swiper-slide");
    artistElementHome.innerHTML = `
    <div class="card card-height">
      <img
        src="${imgUrl + profile_path}"
        class="card-img-top"
        alt="${name}"
        />
        <div class="card-body text-center">
          <h6 class="card-title fw-bold">${name}</h6> 
          <small class="text-muted">${known_for_department}</small>   
        </div>
    </div>`;

    artistHome.appendChild(artistElementHome);
  });
}

function showUpcomingMovies(data) {
  trendingMovies.innerHTML = "";
  data.forEach((movie) => {
    const { title, poster_path, release_date } = movie;
    const trendingMoviesElement = document.createElement("div");
    trendingMoviesElement.classList.add("swiper-slide");
    trendingMoviesElement.innerHTML = `
     <div class="card">
       <div class="row g-0 align-items-center">
         <div class="col-md-4">
           <img src="${
             imgUrl + poster_path
           }" class="img-fluid rounded-start" alt="..." />
         </div>
         <div class="col-md-8">
           <div class="card-body">
             <h5 class="card-title">${title}</h5>
             <small class="text-muted">${release_date}</small>
           </div>
         </div>
       </div>
     </div>
     `;

    trendingMovies.appendChild(trendingMoviesElement);
  });
}
