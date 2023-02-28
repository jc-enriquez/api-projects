function showRandomMeal(data) {
  data.forEach((meals) => {
    const { strMeal, strCategory, strArea, strMealThumb, strInstructions } =
      meals;
    const mainElement = document.createElement("div");
    mainElement.classList.add("row");
    mainElement.classList.add("align-items-center");
    mainElement.innerHTML = `
    <div class="col-lg-6">
       <img
         src="${strMealThumb}"
         class="w-75 rounded-4"
         alt="${strMeal}"
         />
        <h3 class="fw-bold">${strMeal}</h3>
        <small class="d-block text-muted"><span class="fw-bold">Category: </span>${strCategory}</small>
        <small class="d-block text-muted"><span class="fw-bold">Area: </span>${strArea}</small>
    </div>
    <div class="col-lg-6">
      <h3 class="fw-bold">Instructions</h3>
      <small class="text-muted">${strInstructions}</small>
    </div>
    `;
    randomMealElement.appendChild(mainElement);
  });
}

function getRandomMeal(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showRandomMeal(data.meals);
    });
}

function showChickenCategory(data) {
  mainContent.innerHTML = "";
  mainInfo.innerHTML = "";
  mainSliders.innerHTML = "";
  data.forEach((meals) => {
    const { strMeal, strMealThumb, idMeal } = meals;
    const mainElement = document.createElement("div");
    mainElement.classList.add("col-lg-3");
    mainElement.classList.add("col-md-4");
    mainElement.innerHTML = `
    <div class="card h-100 mb-3">
       <img
         src="${strMealThumb}"
         class="card-img-top"
         alt="${strMeal}"
         />
         <div class="card-body d-flex flex-column justify-content-center">
           <h6 class="card-title fw-bold text-center">${strMeal}</h6>
           <button class="btn btn-view rounded-pill w-50 mx-auto mt-2" id="${idMeal}">View Recipe</button>
         </div>
     </div>
    `;
    mainContent.appendChild(mainElement);
  });
  const mainHeading = document.createElement("h2");
  const mainDescription = document.createElement("small");
  mainHeading.classList.add("fw-bold");
  mainDescription.classList.add("text-muted");
  mainHeading.innerText = "Chicken";
  mainDescription.innerText =
    "Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011. Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets.";
  mainInfo.append(mainHeading);
  mainInfo.append(mainDescription);
}
