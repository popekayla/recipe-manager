var validateAmt = function(inAmt) {
    let regEx = /^\d*\.?\d*$/

    if (regEx.test(inAmt) && inAmt >= 0){
        return true;
    } else {
        return false;
    }
};

module.exports = validateAmt;