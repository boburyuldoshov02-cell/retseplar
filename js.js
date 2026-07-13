let cards = document.querySelector("#cards");

function getMeal(category) {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then(res => res.json())
    .then(data => {

      cards.innerHTML = "";

      data.meals.forEach(meal => {

        cards.innerHTML += `
                            
      ${meal.strMeal}                       
   Recipe                           

   `;      });    });}