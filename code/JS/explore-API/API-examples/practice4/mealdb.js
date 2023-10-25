const loadData = (inputItem) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputItem}`
    fetch(url)
    .then(response => response.json())
    .then(data => displayData(data.meals))
}

const displayData = mealsData =>{
    console.log(mealsData);
    
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = '';
    mealsData.forEach(meal =>{
        console.log(meal);
        const mealDiv = document.createElement("div");
        mealDiv.classList.add('col');
        mealDiv.innerHTML=`
        <div class="card h-100">
            <img src="${meal.strMealThumb
            }" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `
        mealContainer.appendChild(mealDiv);
    })

}

const searchMeal = () =>{
    console.log('clicked');
    const searchText = document.getElementById('inputField').value;
    console.log(searchText);

    loadData(searchText);


}

loadData('rice');