const apiKey = "api_key=e63a90bff45eac4026bd03f0b3dee4fd";
const baseUrl = "https://api.themoviedb.org/3";
const movieUrl = baseUrl + "/discover/movie?" + apiKey;
const imgUrl = "https://image.tmdb.org/t/p/w500";
const mainMovies = document.getElementById("movies");

getMovies(movieUrl);

function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);
      showMovies(data.results);
    });
}

function showMovies(data) {
  mainMovies.innerHTML = "";
  data.forEach((movie) => {
    const { title, poster_path, vote_average, overview, release_date } = movie;
    const movieElement = document.createElement("div");
    movieElement.classList.add("col-lg-3");
    movieElement.innerHTML = `
     <div class="card mb-3">
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
     </div>`;

    mainMovies.appendChild(movieElement);
  });
}
