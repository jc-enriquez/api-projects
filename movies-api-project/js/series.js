const apiKey = "api_key=e63a90bff45eac4026bd03f0b3dee4fd";
const baseUrl = "https://api.themoviedb.org/3";
const seriesUrl = baseUrl + "/discover/tv?" + apiKey;
const searchUrl = baseUrl + "/search/tv?" + apiKey;
const imgUrl = "https://image.tmdb.org/t/p/w500";
const mainSeries = document.getElementById("series");
const form = document.getElementById("form");
const search = document.getElementById("search");

getSeries(seriesUrl);

function getSeries(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showSeries(data.results);
    });
}

function showSeries(data) {
  mainSeries.innerHTML = "";
  data.forEach((movie) => {
    const { name, poster_path, vote_average, overview, first_air_date } = movie;
    const movieElement = document.createElement("div");
    movieElement.classList.add("col-lg-3");
    movieElement.innerHTML = `
     <div class="card mb-3">
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

    mainSeries.appendChild(movieElement);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm) {
    getSeries(searchUrl + "&query=" + searchTerm);
  } else {
    getSeries(seriesUrl);
  }
});
