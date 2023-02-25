const swiper = new Swiper(".swiper-categories", {
  slidesPerView: 15,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperFood = new Swiper(".swiper-food", {
  slidesPerView: 4,
  spaceBetween: 30,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const mainContent = document.getElementById("main-content");
const mainInfo = document.getElementById("main-info");
const mainSliders = document.getElementById("main-sliders");
const randomMealElement = document.getElementById("random-meal");
const americanFoodContent = document.getElementById("american-food");
const japaneseFoodContent = document.getElementById("japanese-food");
const frenchFoodContent = document.getElementById("french-food");
const homeButton = document.getElementById("home-button");
const beefButton = document.getElementById("beef");
const chickenButton = document.getElementById("chicken");
const dessertButton = document.getElementById("dessert");
const lambButton = document.getElementById("lamb");
const miscellaneousButton = document.getElementById("miscellaneous");
const pastaButton = document.getElementById("pasta");
const porkButton = document.getElementById("pork");
const seafoodButton = document.getElementById("seafood");
const sideButton = document.getElementById("side");
const starterButton = document.getElementById("starter");
const veganButton = document.getElementById("vegan");
const vegetarianButton = document.getElementById("vegetarian");
const breakfastButton = document.getElementById("breakfast");
const goatButton = document.getElementById("goat");

const buttons = Array.from(document.querySelectorAll(".btn-green"));

buttons.forEach(function (highlight) {
  highlight.addEventListener("click", highlightButton);
});

function highlightButton(e) {
  buttons.forEach((button) => button.classList.remove("btn-active"));
  e.target.classList.add("btn-active");
}

const beefCategory =
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";

const chickenCategory =
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken";

const dessertCategory =
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert";

const lambCategory =
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb";

const miscellaneousCategory =
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Miscellaneous";

const pastaCategory =
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta";

const porkCategory =
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork";

const seafoodCategory =
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

const sideCategory =
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Side";

const starterCategory =
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Starter";

const veganCategory =
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan";

const vegetarianCategory =
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian";

const breakfastCategory =
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast";

const goatCategory =
  "https://www.themealdb.com/api/json/v1/1/filter.php?c=Goat";

const americanFood =
  "https://www.themealdb.com/api/json/v1/1/filter.php?a=American";

const japaneseFood =
  "https://www.themealdb.com/api/json/v1/1/filter.php?a=Japanese";

const frenchFood =
  "https://www.themealdb.com/api/json/v1/1/filter.php?a=French";

const chineseFood =
  "https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese";

const randomMeal = "https://www.themealdb.com/api/json/v1/1/random.php";

getBeefCategory(beefCategory);
getChickenCategory(chickenCategory);
getDessertCategory(dessertCategory);
getLambCategory(lambCategory);
getMiscellaneousCategory(miscellaneousCategory);
getPastaCategory(pastaCategory);
getPorkCategory(porkCategory);
getSeafoodCategory(seafoodCategory);
getSideCategory(sideCategory);
getStarterCategory(starterCategory);
getVeganCategory(veganCategory);
getVegetarianCategory(vegetarianCategory);
getBreakfastCategory(breakfastCategory);
getGoatCategory(goatCategory);
//getRandomMeal(randomMeal);
getAmericanFood(americanFood);
getJapaneseFood(japaneseFood);
getFrenchFood(frenchFood);

function getAmericanFood(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showAmericanFood(data.meals);
    });
}

function getJapaneseFood(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showJapaneseFood(data.meals);
    });
}

function getFrenchFood(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showFrenchFood(data.meals);
    });
}

function getBeefCategory(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      beefButton.addEventListener("click", () => {
        showBeefCategory(data.meals);
      });
    });
}

function getChickenCategory(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      chickenButton.addEventListener("click", () => {
        showChickenCategory(data.meals);
      });
    });
}

function getDessertCategory(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      dessertButton.addEventListener("click", () => {
        showDessertCategory(data.meals);
      });
    });
}

function getLambCategory(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      lambButton.addEventListener("click", () => {
        showLambCategory(data.meals);
      });
    });
}

function getMiscellaneousCategory(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      miscellaneousButton.addEventListener("click", () => {
        showMiscellaneousCategory(data.meals);
      });
    });
}

function getPastaCategory(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      pastaButton.addEventListener("click", () => {
        showPastaCategory(data.meals);
      });
    });
}

function getPorkCategory(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      porkButton.addEventListener("click", () => {
        showPorkCategory(data.meals);
      });
    });
}

function getSeafoodCategory(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      seafoodButton.addEventListener("click", () => {
        showSeafoodCategory(data.meals);
      });
    });
}

function getSideCategory(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      sideButton.addEventListener("click", () => {
        showSideCategory(data.meals);
      });
    });
}

function getStarterCategory(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      starterButton.addEventListener("click", () => {
        showStarterCategory(data.meals);
      });
    });
}

function getVeganCategory(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      veganButton.addEventListener("click", () => {
        showVeganCategory(data.meals);
      });
    });
}

function getVegetarianCategory(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      vegetarianButton.addEventListener("click", () => {
        showVegetarianCategory(data.meals);
      });
    });
}

function getBreakfastCategory(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      breakfastButton.addEventListener("click", () => {
        showBreakfastCategory(data.meals);
      });
    });
}

function getGoatCategory(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      goatButton.addEventListener("click", () => {
        showGoatCategory(data.meals);
      });
    });
}

function showAmericanFood(data) {
  data.forEach((meals) => {
    const { strMeal, strMealThumb, idMeal } = meals;
    const mainElement = document.createElement("div");
    mainElement.classList.add("swiper-slide");
    mainElement.innerHTML = `
    <div class="card card-height">
       <img
         src="${strMealThumb}"
         class="card-img-top"
         alt="${strMeal}"
         />
         <div class="card-body d-flex flex-column justify-content-center">
           <h6 class="card-title fw-bold text-center">${strMeal}</h6>
           <button class="btn btn-green" id="${idMeal}">Read More</button>
         </div>
     </div>
    `;
    americanFoodContent.appendChild(mainElement);
  });
}

function showJapaneseFood(data) {
  data.forEach((meals) => {
    const { strMeal, strMealThumb, idMeal } = meals;
    const mainElement = document.createElement("div");
    mainElement.classList.add("swiper-slide");
    mainElement.innerHTML = `
    <div class="card card-height">
       <img
         src="${strMealThumb}"
         class="card-img-top"
         alt="${strMeal}"
         />
         <div class="card-body d-flex flex-column justify-content-center">
           <h6 class="card-title fw-bold text-center">${strMeal}</h6>
           <button class="btn btn-green" id="${idMeal}">Read More</button>
         </div>
     </div>
    `;
    japaneseFoodContent.appendChild(mainElement);
  });
}

function showFrenchFood(data) {
  data.forEach((meals) => {
    const { strMeal, strMealThumb, idMeal } = meals;
    const mainElement = document.createElement("div");
    mainElement.classList.add("swiper-slide");
    mainElement.innerHTML = `
    <div class="card card-height">
       <img
         src="${strMealThumb}"
         class="card-img-top"
         alt="${strMeal}"
         />
         <div class="card-body d-flex flex-column justify-content-center">
           <h6 class="card-title fw-bold text-center">${strMeal}</h6>
           <button class="btn btn-green" id="${idMeal}">Read More</button>
         </div>
     </div>
    `;
    frenchFoodContent.appendChild(mainElement);
  });
}

function showBeefCategory(data) {
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
           <button class="btn btn-green" id="${idMeal}">Read More</button>
         </div>
     </div>
    `;
    mainContent.appendChild(mainElement);
  });

  const mainHeading = document.createElement("h2");
  const mainDescription = document.createElement("small");
  mainHeading.classList.add("fw-bold");
  mainDescription.classList.add("text-muted");
  mainHeading.innerText = "Beef";
  mainDescription.innerText =
    "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times. Beef is a source of high-quality protein and essential nutrients.";
  mainInfo.append(mainHeading);
  mainInfo.append(mainDescription);
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
           <button class="btn btn-green" id="${idMeal}">Read More</button>
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

function showDessertCategory(data) {
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
           <button class="btn btn-green" id="${idMeal}">Read More</button>
         </div>
     </div>
    `;
    mainContent.appendChild(mainElement);
  });
  const mainHeading = document.createElement("h2");
  const mainDescription = document.createElement("small");
  mainHeading.classList.add("fw-bold");
  mainDescription.classList.add("text-muted");
  mainHeading.innerText = "Dessert";
  mainDescription.innerText =
    "Dessert is a course that concludes a meal. The course usually consists of sweet foods, such as confections dishes or fruit, and possibly a beverage such as dessert wine or liqueur, however in the United States it may include coffee, cheeses, nuts, or other savory items regarded as a separate course elsewhere. In some parts of the world, such as much of central and western Africa, and most parts of China, there is no tradition of a dessert course to conclude a meal.";
  mainInfo.append(mainHeading);
  mainInfo.append(mainDescription);
}

function showLambCategory(data) {
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
           <button class="btn btn-green" id="${idMeal}">Read More</button>
         </div>
     </div>
    `;
    mainContent.appendChild(mainElement);
  });
  const mainHeading = document.createElement("h2");
  const mainDescription = document.createElement("small");
  mainHeading.classList.add("fw-bold");
  mainDescription.classList.add("text-muted");
  mainHeading.innerText = "Lamb";
  mainDescription.innerText =
    "Lamb, hogget, and mutton are the meat of domestic sheep (species Ovis aries) at different ages. A sheep in its first year is called a lamb, and its meat is also called lamb. The meat of a juvenile sheep older than one year is hogget; outside the USA this is also a term for the living animal. The meat of an adult sheep is mutton, a term only used for the meat, not the living animals. The term mutton is almost always used to refer to goat meat in the Indian subcontinent.";
  mainInfo.append(mainHeading);
  mainInfo.append(mainDescription);
}

function showMiscellaneousCategory(data) {
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
           <button class="btn btn-green" id="${idMeal}">Read More</button>
         </div>
     </div>
    `;
    mainContent.appendChild(mainElement);
  });
  const mainHeading = document.createElement("h2");
  const mainDescription = document.createElement("small");
  mainHeading.classList.add("fw-bold");
  mainDescription.classList.add("text-muted");
  mainHeading.innerText = "Miscellaneous";
  mainDescription.innerText =
    "General foods that don't fit into another category.";
  mainInfo.append(mainHeading);
  mainInfo.append(mainDescription);
}

function showPastaCategory(data) {
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
           <button class="btn btn-green" id="${idMeal}">Read More</button>
         </div>
     </div>
    `;
    mainContent.appendChild(mainElement);
  });
  const mainHeading = document.createElement("h2");
  const mainDescription = document.createElement("small");
  mainHeading.classList.add("fw-bold");
  mainDescription.classList.add("text-muted");
  mainHeading.innerText = "Pasta";
  mainDescription.innerText =
    "Pasta is a staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily. Also commonly used to refer to the variety of pasta dishes, pasta is typically a noodle made from an unleavened dough of a durum wheat flour mixed with water or eggs and formed into sheets or various shapes, then cooked by boiling or baking.";
  mainInfo.append(mainHeading);
  mainInfo.append(mainDescription);
}

function showPorkCategory(data) {
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
           <button class="btn btn-green" id="${idMeal}">Read More</button>
         </div>
     </div>
    `;
    mainContent.appendChild(mainElement);
  });
  const mainHeading = document.createElement("h2");
  const mainDescription = document.createElement("small");
  mainHeading.classList.add("fw-bold");
  mainDescription.classList.add("text-muted");
  mainHeading.innerText = "Pork";
  mainDescription.innerText =
    "Pork is the culinary name for meat from a domestic pig (Sus scrofa domesticus). It is the most commonly consumed meat worldwide, with evidence of pig husbandry dating back to 5000 BC. Pork is eaten both freshly cooked and preserved. Curing extends the shelf life of the pork products. Ham, smoked pork, gammon, bacon and sausage are examples of preserved pork.";
  mainInfo.append(mainHeading);
  mainInfo.append(mainDescription);
}

function showSeafoodCategory(data) {
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
           <button class="btn btn-green" id="${idMeal}">Read More</button>
         </div>
     </div>
    `;
    mainContent.appendChild(mainElement);
  });
  const mainHeading = document.createElement("h2");
  const mainDescription = document.createElement("small");
  mainHeading.classList.add("fw-bold");
  mainDescription.classList.add("text-muted");
  mainHeading.innerText = "Seafood";
  mainDescription.innerText =
    "Seafood is any form of sea life regarded as food by humans. Seafood prominently includes fish and shellfish. Shellfish include various species of molluscs, crustaceans, and echinoderms. Historically, sea mammals such as whales and dolphins have been consumed as food, though that happens to a lesser extent in modern times. Edible sea plants, such as some seaweeds and microalgae, are widely eaten as seafood around the world, especially in Asia (see the category of sea vegetables).";
  mainInfo.append(mainHeading);
  mainInfo.append(mainDescription);
}

function showSideCategory(data) {
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
           <button class="btn btn-green" id="${idMeal}">Read More</button>
         </div>
     </div>
    `;
    mainContent.appendChild(mainElement);
  });
  const mainHeading = document.createElement("h2");
  const mainDescription = document.createElement("small");
  mainHeading.classList.add("fw-bold");
  mainDescription.classList.add("text-muted");
  mainHeading.innerText = "Side";
  mainDescription.innerText =
    "A side dish, sometimes referred to as a side order, side item, or simply a side, is a food item that accompanies the entrée or main course at a meal. Side dishes such as salad, potatoes and bread are commonly used with main courses throughout many countries of the western world. New side orders introduced within the past decade, such as rice and couscous, have grown to be quite popular throughout Europe, especially at formal occasions (with couscous appearing more commonly at dinner parties with Middle Eastern dishes).";
  mainInfo.append(mainHeading);
  mainInfo.append(mainDescription);
}

function showStarterCategory(data) {
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
           <button class="btn btn-green" id="${idMeal}">Read More</button>
         </div>
     </div>
    `;
    mainContent.appendChild(mainElement);
  });
  const mainHeading = document.createElement("h2");
  const mainDescription = document.createElement("small");
  mainHeading.classList.add("fw-bold");
  mainDescription.classList.add("text-muted");
  mainHeading.innerText = "Starter";
  mainDescription.innerText =
    "An entrée in modern French table service and that of much of the English-speaking world (apart from the United States and parts of Canada) is a dish served before the main course of a meal; it may be the first dish served, or it may follow a soup or other small dish or dishes. In the United States and parts of Canada, an entrée is the main dish or the only dish of a meal. Historically, the entrée was one of the stages of the “Classical Order” of formal French table service of the 18th and 19th centuries.";
  mainInfo.append(mainHeading);
  mainInfo.append(mainDescription);
}

function showVeganCategory(data) {
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
           <button class="btn btn-green" id="${idMeal}">Read More</button>
         </div>
     </div>
    `;
    mainContent.appendChild(mainElement);
  });
  const mainHeading = document.createElement("h2");
  const mainDescription = document.createElement("small");
  mainHeading.classList.add("fw-bold");
  mainDescription.classList.add("text-muted");
  mainHeading.innerText = "Vegan";
  mainDescription.innerText =
    "Veganism is both the practice of abstaining from the use of animal products, particularly in diet, and an associated philosophy that rejects the commodity status of animals.[b] A follower of either the diet or the philosophy is known as a vegan (pronounced /ˈviːɡən/ VEE-gən). Distinctions are sometimes made between several categories of veganism. Dietary vegans (or strict vegetarians) refrain from consuming animal products, not only meat but also eggs, dairy products and other animal-derived substances.";
  mainInfo.append(mainHeading);
  mainInfo.append(mainDescription);
}

function showVegetarianCategory(data) {
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
           <button class="btn btn-green" id="${idMeal}">Read More</button>
         </div>
     </div>
    `;
    mainContent.appendChild(mainElement);
  });
  const mainHeading = document.createElement("h2");
  const mainDescription = document.createElement("small");
  mainHeading.classList.add("fw-bold");
  mainDescription.classList.add("text-muted");
  mainHeading.innerText = "Vegetarian";
  mainDescription.innerText =
    "Vegetarianism is the practice of abstaining from the consumption of meat (red meat, poultry, seafood, and the flesh of any other animal), and may also include abstention from by-products of animal slaughter.Vegetarianism may be adopted for various reasons. Many people object to eating meat out of respect for sentient life. Such ethical motivations have been codified under various religious beliefs, as well as animal rights advocacy.";
  mainInfo.append(mainHeading);
  mainInfo.append(mainDescription);
}

function showBreakfastCategory(data) {
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
           <button class="btn btn-green" id="${idMeal}">Read More</button>
         </div>
     </div>
    `;
    mainContent.appendChild(mainElement);
  });
  const mainHeading = document.createElement("h2");
  const mainDescription = document.createElement("small");
  mainHeading.classList.add("fw-bold");
  mainDescription.classList.add("text-muted");
  mainHeading.innerText = "Breakfast";
  mainDescription.innerText =
    'Breakfast is the first meal of a day. The word in English refers to breaking the fasting period of the previous night. There is a strong likelihood for one or more "typical", or "traditional", breakfast menus to exist in most places, but their composition varies widely from place to place, and has varied over time, so that globally a very wide range of preparations and ingredients are now associated with breakfast.';
  mainInfo.append(mainHeading);
  mainInfo.append(mainDescription);
}

function showGoatCategory(data) {
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
           <button class="btn btn-green" id="${idMeal}">Read More</button>
         </div>
     </div>
    `;
    mainContent.appendChild(mainElement);
  });
  const mainHeading = document.createElement("h2");
  const mainDescription = document.createElement("small");
  mainHeading.classList.add("fw-bold");
  mainDescription.classList.add("text-muted");
  mainHeading.innerText = "Goat";
  mainDescription.innerText =
    "The domestic goat or simply goat (Capra aegagrus hircus) is a subspecies of C. aegagrus domesticated from the wild goat of Southwest Asia and Eastern Europe. The goat is a member of the animal family Bovidae and the subfamily Caprinae, meaning it is closely related to the sheep. There are over 300 distinct breeds of goat. Goats are one of the oldest domesticated species of animal, and have been used for milk, meat, fur and skins across much of the world. Milk from goats is often turned into goat cheese.";
  mainInfo.append(mainHeading);
  mainInfo.append(mainDescription);
}
