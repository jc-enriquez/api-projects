const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const apiKey = "api_key=e63a90bff45eac4026bd03f0b3dee4fd";
const baseUrl = "https://api.themoviedb.org/3";
const apiUrl = baseUrl + "/discover/movie?sort_by=popularity.desc&" + apiKey;
const imgUrl = "https://image.tmdb.org/t/p/w500";
const mainMovies = document.getElementsByClassName("swiper-slide");

getMovies(apiUrl);

function getMovies(url) {
  fetch(url)
    .then((res) => res.json)
    .then((data) => {
      showMovies(data.results);
    });
}

function showMovies(data) {
  mainMovies.innerHTML = "";
  data.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieElement = document.createElement("div");
    movieElement.classList.add("card");
    movieElement.innerHTML = `
    <img src="${imgUrl + poster_path}" class="card-img-top" alt="${title}" />
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">
        ${overview}
      </p>
      <p>
        <i class="bi bi-star-fill"></i>
        <span class="fw-bold ms-2">${vote_average}</span>
      </p>
    </div>`;

    mainMovies.appendChild(movieElement);
  });
}
