function onLoad() {
    
   /*Chili Functions*/
    document.querySelector("#hideChiliIngredients").addEventListener("click", function() {
        if(document.querySelector("#chiliIngredients").classList.contains("invisible")) {
            document.querySelector("#chiliIngredients").classList.remove("invisible");
            document.querySelector("#chiliIngredients").classList.add("visible");
        } else {
            document.querySelector("#chiliIngredients").classList.add("invisible");
            document.querySelector("#chiliIngredients").classList.remove("visible");
        }
    });
    
    document.querySelector("#hideChiliInstructions").addEventListener("click", function() {
        if(document.querySelector("#chiliInstructions").classList.contains("invisible")) {
            document.querySelector("#chiliInstructions").classList.remove("invisible");
            document.querySelector("#chiliInstructions").classList.add("visible");
        } else {
            document.querySelector("#chiliInstructions").classList.add("invisible");
            document.querySelector("#chiliInstructions").classList.remove("visible");
        }
    });
    
    var chiliIngredients = document.chiliServingsForm.chiliServings;
    var prevMult = 1;
    for(i=0; i<chiliIngredients.length; i++) {
       chiliIngredients[i].addEventListener("change", function() {
           let newMult = parseFloat(document.chiliServingsForm.chiliServings.value);
           let multiplier = newMult / prevMult;
           prevMult = newMult;

           let spanAmounts = document.querySelectorAll("#chiliAmounts span");
           

           for(i=0; i<spanAmounts.length; i++) {
               spanAmounts[i].innerHTML = spanAmounts[i].innerHTML * multiplier;
           };
        });
    }
    
    /*French Toast Functions*/
    
    document.querySelector("#hideFrenchToastIngredients").addEventListener("click", function() {
        if(document.querySelector("#frenchToastIngredients").classList.contains("invisible")) {
            document.querySelector("#frenchToastIngredients").classList.remove("invisible");
            document.querySelector("#frenchToastIngredients").classList.add("visible");
        } else {
            document.querySelector("#frenchToastIngredients").classList.add("invisible");
            document.querySelector("#frenchToastIngredients").classList.remove("visible");
        }
    });
    
    document.querySelector("#hideFrenchToastInstructions").addEventListener("click", function() {
         if(document.querySelector("#frenchToastInstructions").classList.contains("invisible")) {
            document.querySelector("#frenchToastInstructions").classList.remove("invisible");
            document.querySelector("#frenchToastInstructions").classList.add("visible");
        } else {
            document.querySelector("#frenchToastInstructions").classList.add("invisible");
            document.querySelector("#frenchToastInstructions").classList.remove("visible");
        }
        
    });
    
    var frenchToastIngredients = document.frenchToastServingsForm.frenchToastServings;
    var prevMult = 1;
    for(i=0; i<frenchToastIngredients.length; i++) {
       frenchToastIngredients[i].addEventListener("change", function() {
           let newMult = parseFloat(document.frenchToastServingsForm.frenchToastServings.value);
           let multiplier = newMult / prevMult;
           prevMult = newMult;

           let spanAmounts = document.querySelectorAll("#frenchToastAmounts span");

           for(i=0; i<spanAmounts.length; i++) {
               spanAmounts[i].innerHTML = spanAmounts[i].innerHTML * multiplier;
           };
        });
    };
    
    /*Salsa Functions*/
        document.querySelector("#hideSalsaIngredients").addEventListener("click", function() {
         if(document.querySelector("#salsaIngredients").classList.contains("invisible")) {
            document.querySelector("#salsaIngredients").classList.remove("invisible");
            document.querySelector("#salsaIngredients").classList.add("visible");
        } else {
            document.querySelector("#salsaIngredients").classList.add("invisible");
            document.querySelector("#salsaIngredients").classList.remove("visible");
        }
    });
    
    document.querySelector("#hideSalsaInstructions").addEventListener("click", function() {
         if(document.querySelector("#salsaInstructions").classList.contains("invisible")) {
            document.querySelector("#salsaInstructions").classList.remove("invisible");
            document.querySelector("#salsaInstructions").classList.add("visible");
        } else {
            document.querySelector("#salsaInstructions").classList.add("invisible");
            document.querySelector("#salsaInstructions").classList.remove("visible");
        }
        
    });
    
    var salsaIngredients = document.salsaServingsForm.salsaServings;
    var prevMult = 1;
    for(i=0; i<salsaIngredients.length; i++) {
       salsaIngredients[i].addEventListener("change", function() {
           let newMult = parseFloat(document.salsaServingsForm.salsaServings.value);
           let multiplier = newMult / prevMult;
           prevMult = newMult;

           let spanAmounts = document.querySelectorAll("#salsaAmounts span");
           

           for(i=0; i<spanAmounts.length; i++) {
               spanAmounts[i].innerHTML = spanAmounts[i].innerHTML * multiplier;
           };
        });
    }
};