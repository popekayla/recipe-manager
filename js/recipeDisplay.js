/*Get JSON object from local storage*/
var newRecipeObject = localStorage.getItem("newRecipesJson");
var recipesJson = localStorage.getItem("recipesJson");
if (newRecipeObject) {
    var recipes = JSON.parse(newRecipeObject);
} else {
    var recipes = JSON.parse(recipesJson);
}

/*Functions to make creating and appending elements faster*/
function createElement(element) {
    return document.createElement(element);
}

function appendElement(parent, element) {
    return parent.appendChild(element);
}

/*onLoad of recipe page, run this function to display recipes*/
function onLoad() {
    var container = document.getElementById("container");
    
    function display(){ recipes.map(function(recipes) {

        /*Creating element ids using the recipe name as a unique identifier*/
        let ingredientId = `${recipes.name}`
        ingredientId = ingredientId.replace(/\s/g, '');
        
        let instructionId = `${recipes.name}instruction`
        instructionId = instructionId.replace(/\s/g, '');
        
        let servingId = `${recipes.name}servings`;
        servingId = servingId.replace(/\s/g, '');

        let spanId = `${recipes.name}servingsSize`;
        spanId = spanId.replace(/\s/g, '');
        
        /*Creating necessary elements and adding necessary classes and ids to them*/
        let section = createElement("section");
        let div = createElement("div");
        let ul = createElement("ul");
        let ol = createElement("ol");
        let p = createElement("p");
        let instructions = createElement("div");
        div.className = 'recipeCard';
        ul.className = 'invisible';
        ul.id = ingredientId + 'list';
        ol.className = 'invisible';
        ol.id = instructionId + 'list';

        /*Displays basic recipe information and input to chanage servings*/
        div.innerHTML = `<h2>${recipes.name}</h2>
                        <div class="flex">
                                        
                        <img src="images/${recipes.img}">
                        <div class="recipeInfo">
                            <h3>Recipe Info</h3>
                                <p><strong>Servings: </strong><span id="${spanId}">${recipes.servings}</span></p>
                                <p><strong>Prep Time: </strong>${recipes.prepTime} ${recipes.prep}</p>
                                <p><strong>Cook Time: </strong>${recipes.cookTime} ${recipes.cook}</p>
                                <p><strong>Difficulty: </strong>${recipes.difficulty}</p>
                        </div>
                        </div>
                        <div>
                        
                            <h3>Ingredients</h3>
                            
                                <p>
                                   Servings: <input type="number" min="1" value=${recipes.servings} class="servings" id="${servingId}">
                                </p>
                                `;
           
        /*Takes each ingredientAmount and ingredientDescription array for each recipe and runs it through a loop and inserts into a list item
          Inserts each list item as the last child on the ul element*/
        for (i=0; i<recipes.ingredientAmount.length; i++) {
            var ingredient = (`<li><span class="amt">${recipes.ingredientAmount[i]}</span> ${recipes.ingredientDescription[i]}</li>`);
            ul.insertAdjacentHTML("beforeend", ingredient);
        };

        /*Takes each instructionarray for each recipe and runs it through a loop and inserts into a list item
          Inserts each list item as the last child on the ul element*/
        for (x=0; x<recipes.instructions.length; x++) {
            var instruction = (`<li>${recipes.instructions[x]}</li>`);
            ol.insertAdjacentHTML("beforeend", instruction);
        };

        /*Adds the show/hide button and instruction ingredient*/
        instructions.innerHTML = `<p><button class="ingredients" id='#${ingredientId}'>Show/Hide Ingredients</button></p>
                                  <h3>Instructions</h3>`

        /*Adds the instruction show/hide button*/
        p.innerHTML = `<p><button class="instructions" id='#${instructionId}'>Show/Hide Instructions</button></p>`

        /*Appends the elements in the correct order*/
        appendElement(div, ul);
        appendElement(div, instructions)
        appendElement(div, ol);
        appendElement(div, p)
        appendElement(section, div);
        appendElement(container, section);
    });
};

display();
    
};