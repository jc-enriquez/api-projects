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
