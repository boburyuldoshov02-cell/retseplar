let cards = document.querySelector("#cards");

function getMeal(category) {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then(res => res.json())
    .then(data => {

      cards.innerHTML = "";

      data.meals.forEach(meal => {

        cards.innerHTML += `
          <div class="card">
            <img src="${meal.strMealThumb}">
            <h3>${meal.strMeal}</h3>

            <button onclick="showRecipe('${meal.idMeal}')">
              Recipe
            </button>
          </div>
        `;

      });

    });
}

let modal = document.querySelector("#modal");
let mealImg = document.querySelector("#mealImg");
let mealName = document.querySelector("#mealName");
let mealCategory = document.querySelector("#mealCategory");
let mealArea = document.querySelector("#mealArea");
let mealText = document.querySelector("#mealText");
let mealVideo = document.querySelector("#mealVideo");

function showRecipe(id) {

  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .then(data => {

      let meal = data.meals[0];

      mealImg.src = meal.strMealThumb;
      mealName.textContent = meal.strMeal;
      mealCategory.textContent = "Category: " + meal.strCategory;
      mealArea.textContent = "Country: " + meal.strArea;
      mealText.textContent = meal.strInstructions;

      if (meal.strYoutube) {
        mealVideo.href = meal.strYoutube;
        mealVideo.style.display = "inline-block";
      } else {
        mealVideo.style.display = "none";
      }

      modal.style.display = "flex";

    });

}

document.querySelector("#close").onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}


let cards = document.querySelector("#cards");

function getMeal(category) {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then(res => res.json())
    .then(data => {

      cards.innerHTML = "";

      data.meals.forEach(meal => {

        cards.innerHTML += `
          <div class="card">
            <img src="${meal.strMealThumb}">
            <h3>${meal.strMeal}</h3>

            <button onclick="showRecipe('${meal.idMeal}')">
              Recipe
            </button>
          </div>
        `;

      });

    });
}