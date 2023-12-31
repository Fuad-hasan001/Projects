const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = meals =>{
    console.log(meals);
    //step1: container element
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerText = '';
    meals.forEach(meal => {
        console.log(meal);
        //step2: create child fo this element
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');

        //step3: set content of the child
        mealDiv.innerHTML = `
        <div class="card h-100">
            <img src="${meal.strMealThumb
            }" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            </div>
        `

        //appendChild
        mealsContainer.appendChild(mealDiv);
    })
    
}


const searchMeals = () =>{
    // console.log('btn-clicked');
    const searchText = document.getElementById('search-field').value;
    //search meals
    console.log(searchText);
    loadMeals(searchText)

}
loadMeals('rice');