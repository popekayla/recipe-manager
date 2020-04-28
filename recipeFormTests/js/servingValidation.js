var validateServing = function(inServing) {
    let regEx = /[\S]([\d]){0,}/

    if (regEx.test(inServing)) {
        return true;
    } else {
        return false;
    }
};

module.exports = validateServing;