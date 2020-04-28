var validateIngredient = function(inIngredient) {
    let regEx = /^[\S](.){3,255}$/

    if (regEx.test(inIngredient)) {
        return true;
    } else {
        return false;
    }
};

module.exports = validateIngredient;