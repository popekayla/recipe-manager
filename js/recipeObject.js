var recipes = [

    {
        name: "Crockpot Chili",
        servings: 6,
        prepTime: "25",
        prep: "minutes",
        cookTime: "6",
        cook: "hours",
        difficulty: "Easy",
        img: "chili.jpg",
        ingredientAmount: [
            2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 0.5
        ],
        ingredientDescription: [
            "tbsp. cooking Oil", "cup onion", "cup chopped peppers", "tbsp. Chili powder (optional)", "tsp. Hot chili powder (optional)", "lb ground beef or chicken", "cans Red Beans", "cans Kidney Beans", " cans Tomato Puree", "cans Tomato Sauce", "cup shredded cheese (optional)", "cup Sour Cream (optional)"
        ],
        instructions: [
            "Heat cooking oil in 2 quart skillet.", "Saute onions and peppers for 5 minutes.", "Add spices and stir for 30 seconds.", "Add meat and cook until browned. Approximately 15 minutes.", "Pour contents of skillet into 3 quart crock pot.", "Rinse beans and place in crockpot.", "Open and pour Tomato puree and sauce into crock pot.", "Cover crockpot and cook on low for 6 hours.", "Serve into individual bowls and top with sour cream and cheese."
        ]
    },

    {
        name: "Blueberry Banana French Toast",
        servings: 8,
        prepTime: "10",
        prep: "minutes",
        cookTime: "15",
        cook: "minutes",
        difficulty: "Easy",
        img: "frenchToast.jpg",
        ingredientAmount: [
            2, 0.5, 1, 0.75, 3, 8
        ],
        ingredientDescription: [
            "Ripe Bananas", "cup Fresh Blueberries", "tsp. Vanilla", "cup Unsweetened Vanilla Almond Milk", "tbsp. Butter", "Slices of Bread"
        ],
        instructions: [
            "Blend up the bananas, vanilla, and almond milk (add sugar if you choose to), and blend until smooth.", "Add blueberries into the blended mixture and pulse until broken up.", "Pour the mixture into a large bowl for dipping.", "Put a little bit of butter in a skillet and let it heat up on high heat, melting the butter.", "Dip your toast into the batter and place on the hot skillet. Cook 2-4 minutes on each side of the toast until brown.", "Plate and top with topping of your choice."
        ]
    },

    {
        name: "Mango Black Bean Salsa",
        servings: 6,
        prepTime: "15",
        prep: "minutes",
        cookTime: "0",
        cook: "minutes",
        difficulty: "Easy",
        img: "salsa.jpg",
        ingredientAmount: [
            2, 1, 1, 1, 15, 0.5, 2, 2, 1 ,2, 0.5, null
        ],
        ingredientDescription: [
            "Medium Mangos", "Large Tomato, Chopped", "Large bell pepper, chopped", "Cup Corn", "oz Can Black Beans, drained and rinsed", "cups Cilantro, chopped", "tbsp. Red Onion, minced", "tbsp. Olive Oil", "Lime, juiced", "tsp ground cumin", "tsp. Salt", "red pepper flakes, to taste" 
        ],
        instructions: [
            "In a large bowl, add mango, tomato, bell pepper, corn, black beans, cilantro, onion, olive oil, lime juice, cumin, salt, hot pepper flakes.", "Gently stir to combine. If you have time, allow flavors to marry each other in the fridge for a few hours.", "Serve cold with cilantro lime chicken, grilled salmon or add cooked quinoa to make it one complete meal."
        ]
    }

]

var recipesJSON = JSON.stringify(recipes);
	localStorage.setItem("recipesJson", recipesJSON);