/*Get JSON object from local storage*/
var newRecipeObject = localStorage.getItem("newRecipesJson");
var recipesJson = localStorage.getItem("recipesJson");
if (newRecipeObject) {
    var recipes = JSON.parse(newRecipeObject);
} else {
    var recipes = JSON.parse(recipesJson);
}

function recipeFunctions() {

    /*Show/Hide Ingredients*/

    var ingredientButtons = document.querySelectorAll(".ingredients")
    
    for(ingredientButton of ingredientButtons) {
        ingredientButton.addEventListener("click", function() {
            let ingredientId = event.target.id;
           let ingredientName =ingredientId + 'list';
        
           if(document.querySelector(ingredientName).classList.contains("invisible")) {
            document.querySelector(ingredientName).classList.remove("invisible");
            document.querySelector(ingredientName).classList.add("visible");
        } else {
            document.querySelector(ingredientName).classList.add("invisible");
            document.querySelector(ingredientName).classList.remove("visible");
        };
        });
    };

    /*Show/Hide Instructions*/

    var instructionButtons = document.querySelectorAll(".instructions")
    
    for(instructionButton of instructionButtons) {
        instructionButton.addEventListener("click", function() {
            let instructionId = event.target.id;
           let instructionName =instructionId + 'list';
        
           if(document.querySelector(instructionName).classList.contains("invisible")) {
            document.querySelector(instructionName).classList.remove("invisible");
            document.querySelector(instructionName).classList.add("visible");
        } else {
            document.querySelector(instructionName).classList.add("invisible");
            document.querySelector(instructionName).classList.remove("visible");
        };
        });
    };

    /*Edit Serving Size*/
    
     var inputs = document.querySelectorAll("input[type=number");
     var servings = document.querySelectorAll(".servings");
    
     for(input of inputs) {
        input.addEventListener("change", editServing);
     };

    function editServing() {
        let servingId = event.target.id;
        let recipeName = servingId.substring(0, servingId.length - 8);
        let servingSpanId = servingId + "Size";
        let currentServing = parseFloat(document.getElementById(servingSpanId).innerHTML);
        let newServing = parseFloat(document.getElementById(servingId).value);
        let multiplier = newServing / currentServing;
        currentServing = newServing;
        let listName = "#" + recipeName + "list span";
        let spanAmounts = document.querySelectorAll(listName);
        
        for (y=0; y<recipes.length; y++) {
            
            if(recipes[y].name.replace(/\s/g, '') == recipeName) {
                for(x=0; x<recipes[y].ingredientAmount.length; x++) {
                    for(i=0; i<spanAmounts.length; i++) {
                        let newAmts = recipes[y].ingredientAmount[i] * multiplier;
                        spanAmounts[i].innerHTML = (newAmts.toFixed(1));
                    };
                };
            };
            };
    };
};