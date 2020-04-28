function onLoad() {

    /*Creates a new ingredient input field for both the amount and the description when 'add' button is clicked
      Finds the length of the ul and adds +1 to the end of the name and id to make it unique*/

    document.querySelector("#ingredients").addEventListener("click", function() {
        let ul = document.querySelector("#ingredientList");
        let li = document.createElement("li");
        let ulLength = ul.getElementsByTagName("li").length;
        for (let x=0; x<=ulLength; x++) {
            let newIngredient = `<label for="ingredients">Amt:</label> <input type="number" name="ingredientAmt${1+x}" id="ingredientAmt${1+x}" min="0" class="amt">
                                 <label for="ingredientName">Ingredient:</label> <input type="text" name="ingredientName${1+x}" id="ingredientName${1+x}" class="ingredient">`
            li.innerHTML = newIngredient;
            ul.appendChild(li); 
        };

        /*Re-runs validation when 'add' button is clicked, to ensure all new inputs get validated*/
        var amounts = document.querySelectorAll(".amt");
        for(amount of amounts) {
            amount.addEventListener("blur", validateAmt);
        };
        function validateAmt () {
            for (i=0; i<amounts.length; i++) {
                    let regEx = /^[0-9]{1,}$/
                    
                    let amt = amounts[i].id;
                    let amtID = document.getElementById(amt);
        
                    if (regEx.test(amtID.value) && amtID.value != undefined) {
                        document.getElementById(amt).classList.add("validationSuccess");
                        document.getElementById(amt).classList.remove("validationFailure");
                        document.getElementById("ingredientValidation").innerHTML = " ";
                    } else {
                        document.getElementById(amt).classList.add("validationFailure");
                        document.getElementById(amt).classList.remove("validationSuccess");
                        document.getElementById("ingredientValidation").innerHTML = "Please enter a valid ingredient";
                    };
            };
        };

        var ingredients = document.querySelectorAll(".ingredient")
        for (ingredient of ingredients) {
            ingredient.addEventListener("blur", validateIngredient)
        };

        function validateIngredient() {
            for (i=0; i<ingredients.length; i++) {
                let regEx = /^[\S](.){3,255}$/
                
                let ing = ingredients[i].id;
                let ingID = document.getElementById(ing);
    
                if (regEx.test(ingID.value) && ingID.value != undefined) {
                    document.getElementById(ing).classList.add("validationSuccess");
                    document.getElementById(ing).classList.remove("validationFailure");
                    document.getElementById("ingredientValidation").innerHTML = " ";
                } else {
                    document.getElementById(ing).classList.add("validationFailure");
                    document.getElementById(ing).classList.remove("validationSuccess");
                    document.getElementById("ingredientValidation").innerHTML = "Please enter a valid ingredient";
                };
            };
        };
       
    });

    
    /*Creates a new instruction input field forwhen 'add' button is clicked
      Finds the length of the ul and adds +1 to the end of the name and id to make it unique*/
    document.querySelector("#instructions").addEventListener("click", function() {
        let ol = document.querySelector("#instructionList");
        let li = document.createElement("li");
        let olLength = ol.getElementsByTagName("li").length;
        
        for (let i=1; i<=olLength; i++) {
            var newInstruction = `<input type="text" name="instruction${1+i}" id="instruction${1+i}" class="instruction">`
            li.innerHTML = newInstruction;
            ol.appendChild(li);
        };

        /*Re-runs validation when 'add' button is clicked, to ensure all new inputs get validated*/
        var instructions = document.querySelectorAll(".instruction");
        for(instruction of instructions) {
           instruction.addEventListener("blur", validateInst);
        }
        function validateInst () {
            for (i=0; i<instructions.length; i++) {
                
                    let regEx = /^[\S](.){3,255}$/
                    
                    let inst = instructions[i].id;
                    let instID = document.getElementById(inst);
        
                    if (regEx.test(instID.value) && instID.value != undefined) {
                        document.getElementById(inst).classList.add("validationSuccess");
                        document.getElementById(inst).classList.remove("validationFailure");
                        document.getElementById("instructionValidation").innerHTML = " ";
                    } else {
                        document.getElementById(inst).classList.add("validationFailure");
                        document.getElementById(inst).classList.remove("validationSuccess");
                        document.getElementById("instructionValidation").innerHTML = "Please enter a valid ingredient";
                    }
                };
            }
    });

    /*Submission fucntion*/
    document.querySelector("#addRecipe").addEventListener("submit", function() {
        return isValid();
    })

    function isValid() {
        
        /*Checks validation
          If inputs are empty or any has a class of 'validationFailure', error message is displayed and submission fails*/
        let inputs = document.querySelectorAll("input");
        
        for(i=0; i<inputs.length; i++) {

            if(inputs[i].classList.contains("validationFailure") || inputs[i].value == "") {
                alert("Please enter valid information");
                event.preventDefault();
                return false;
            } else {
                
                /*Blank object with blank arrays for input values to be added to*/
                var recipe = {
                    ingredientAmount: [],
                    ingredientDescription: [],
                    instructions: [],
                };

                    /*Get input values and set them as key value pairs in recipe object
                    Loops through inputs going into array and then pushes them in*/
                    recipe.name = document.getElementById("name").value;
                    recipe.servings = document.getElementById("servings").value;
                    recipe.prepTime = document.getElementById("prep").value;
                    recipe.prep = document.getElementById("prepTimeType").value;
                    recipe.cook =document.getElementById("cookTimeType").value;
                    recipe.cookTime = document.getElementById("cook").value;
                    recipe.difficulty = document.getElementById("difficulty").value;

                    
                    imgFile = document.getElementById("img").files;
                    for(imgFile of imgFile) {
                        recipe.img = imgFile.name;
                    }

                    var ingredientAmt = document.querySelectorAll(".amt");
                    for(y=1; y<=ingredientAmt.length; y++) {
                        let amt = "ingredientAmt" + [y];
                    recipe.ingredientAmount.push(document.getElementById(amt).value);
                    };

                    var ingredientName = document.querySelectorAll(".ingredient");

                    for(y=1; y<=ingredientName.length; y++) {
                        let ingredient = "ingredientName" + [y];
                    recipe.ingredientDescription.push(document.getElementById(ingredient).value);
                    };

                    var instructions = document.querySelectorAll(".instruction");

                    for(y=1; y<=instructions.length; y++) {
                        let inst = "instruction" + [y];
                    recipe.instructions.push(document.getElementById(inst).value);
                    };

                /*Gets current recipe Json object from local storage and pushes new recipe into the array
                Sets it as an object with a new name*/
                recipes = [];
                recipes = JSON.parse(localStorage.getItem('recipesJson')) || [];
                recipes.push(recipe);
                console.log(recipes);
                json = JSON.stringify(recipes);
                localStorage.setItem("newRecipesJson", json);
            };
    }};
}



